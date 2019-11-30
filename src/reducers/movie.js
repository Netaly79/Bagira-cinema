//import {SET_MOVIES } from '../constants'

const InitialValues = {
    movies: [],
    genres:[],
};

export const MovieReducer = (state=InitialValues,action) =>{
    switch (action.type){
        case "SET_MOVIES":
            const genres=action.payload.reduce((acc,item) =>{
                if (item.genre&&item.genre.length>3){
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
        default:
            return state;
    }
};