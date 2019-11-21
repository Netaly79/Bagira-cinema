import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

import { BaseReducer } from '../reducers'

export const store = createStore (BaseReducer,applyMiddleware (thunk));
export const history =createBrowserHistory();