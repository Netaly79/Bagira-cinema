import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';


import { BaseReducer } from '../reducers'

const composeEnchancers =(window && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'])||compose;

export const store = createStore (BaseReducer,composeEnchancers(applyMiddleware (thunk)));
export const history =createBrowserHistory();