import {combineReducers } from 'redux';

import {Load} from "./load";
import {MovieReducer} from "./movie";
import {FilteredMovieReducer} from "./filteredMovie";

export const BaseReducer = combineReducers({
    loading:Load,
    data:MovieReducer,
    filter:FilteredMovieReducer
});