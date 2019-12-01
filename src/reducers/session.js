import {SET_SESSION} from '../constants'

const InitialValues = {
    sessions: [],
};

export const SessionReducer = (state=InitialValues,action) =>{
    switch (action.type){
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
            console.log (dataOrdered);
            return {
                ...state,
                sessions:dataOrdered      
            };
        default:
            return state;
    }
};