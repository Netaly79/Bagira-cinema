import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router} from 'react-router-dom';


import "antd/dist/antd.css";
import './assets/style/index.css';
import './assets/style/admin/index.css';
import App from './containers/App';
import { store, history} from './store';



ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
     document.getElementById('root'));

