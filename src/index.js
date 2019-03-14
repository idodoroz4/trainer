import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './MainApp';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers'

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <MainApp />
    </Provider>, document.getElementById('root')
);
