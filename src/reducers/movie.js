import {SET_MOVIES } from '../constants'

const InitialValues = {
    movies: [],
};

export const MovieReducer = (state=InitialValues,action) =>{
    switch (action.type){
        case "SET_MOVIES":
            return {
                ...state, 
                movies: action.payload
        };
        default:
            return state;
    }
};