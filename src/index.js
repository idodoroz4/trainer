import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';

import MainApp from './MainApp';
import reducers from './reducers'

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Router>
            <MainApp />
        </Router>
    </Provider>, document.getElementById('root')
);
