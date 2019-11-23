import {SET_MOVIES,LOADING_ERROR,IS_LOADING } from '../constants'

const InitialValues = {
    loading:false
};

export const Load= (state=InitialValues,action) =>{
    switch (action.type){
        case "IS_LOADING":
            return {
                ...state,
                loading:true
        };
        case "SET_MOVIES":
        case "LOADING_ERROR":
                return {
                    ...state,
                    loading:false,
            };
        default:
            return state;
    }
};