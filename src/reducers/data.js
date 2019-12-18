
const InitialValues = {
    movies: [],
    genres:[],
    filteredMovies: [],
    filtered:false,
    sessions: [],
    rooms:[],
};

export const DataReducer = (state=InitialValues,action) =>{
    switch (action.type){
        case "SET_MOVIES":
          
            const genres=action.payload.reduce((acc,item) =>{
                if (item.genre&&item.genre.length>0){
                    item.genre.forEach((element) => {
                        if (!acc.includes(element.trim())){
                            acc.push(element.trim());
                        }
                    });
                } 
                return acc;
            },[]);
            genres.sort();
            
            return {
                ...state, 
                movies: action.payload,
                genres
        };

        case "SET_FILTERED_MOVIES":
            return {
                ...state, 
                filteredMovies: action.payload,
                filtered:action.filtered
        };
        case "SET_ADMINED_MOVIES":
            console.log("admin");
            return {
                ...state, 
                movies: action.payload
        };

        case "SET_SESSION":
            const sortedData=action.payload.sort((a,b)=>{
                if (new Date(a.date)>new Date(b.date))
                return 1;
                if (new Date(a.date)<new Date(b.date))
                return -1;
                return 0; 
            });
            const dataOrdered=sortedData.reduce((acc, item) => {
                if(!acc.length)
                    acc.push([]);

                const lastEl=acc[acc.length-1];
                const lastElDate=lastEl.length?lastEl[0].date.split("T")[0]:null;
                const itemDate=item.date.split("T")[0];
                const diffents= +new Date(lastElDate) !== +new Date(itemDate);

                if(lastEl.length&&diffents)
                    return [...acc, [item]];

                acc[acc.length-1].push(item);
                return acc;
            },[]);
            return {
                ...state,
                sessions:dataOrdered      
            };
        case "SET_ROOMS":
           
            return {
                ...state,
               rooms:action.payload
            };

        default:
            return state;
    }
};