import {combineReducers } from 'redux';

import {Load} from "./load";
import {MovieReducer} from "./movie";

export const BaseReducer = combineReducers({
    loading:Load,
    data:MovieReducer
});