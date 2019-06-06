import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import { App } from './App';

import * as serviceWorker from './serviceWorker';

const initialState = {
    count: 0,
    connections: []
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENTCOUNT':
            return {
                count: state.count + 1
            };
        default:
            return state;
    }
}

const store = createStore(reducer);
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

serviceWorker.register();
