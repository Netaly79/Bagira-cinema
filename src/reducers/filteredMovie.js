//import {SET_FILTERED_MOVIES } from '../constants'

const InitialValues = {
    filteredMovies: [],
    filtered:false
};

export const FilteredMovieReducer = (state=InitialValues,action) =>{
    switch (action.type){
        case "SET_FILTERED_MOVIES":
        console.log ("data", action.payload);
            return {
                ...state, 
                filteredMovies: action.payload,
                filtered:action.filtered
        };
        default:
            return state;
    }
};