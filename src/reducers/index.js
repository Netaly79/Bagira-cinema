import {combineReducers } from 'redux';

import {Load} from "./load";
import {DataReducer} from "./data";


export const BaseReducer = combineReducers({
    loading:Load,
    data:DataReducer,
   
});