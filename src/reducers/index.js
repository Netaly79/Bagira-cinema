import {combineReducers } from 'redux';

import {Load} from "./load";
import {MovieReducer} from "./movie";
import {FilteredMovieReducer} from "./filteredMovie";
import {SessionReducer} from "./session";

export const BaseReducer = combineReducers({
    loading:Load,
    data:MovieReducer,
    filter:FilteredMovieReducer,
    session:SessionReducer
});