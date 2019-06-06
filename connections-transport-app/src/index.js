import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import { App } from './App';

import * as serviceWorker from './serviceWorker';

const State = {
  currentConnection: null,
  connections: []
};

function reducer(state = State, action) {
  switch (action.type) {
    case 'ADDCONNECTION': {
      const newConnections = state.connections.slice();
      newConnections.push(action.value);
      return {
        connections: newConnections
      }
    }
    case 'SELECTCONNECTION': {
      const newCurrentConnection = action.value;
      return {
        currentConnection: newCurrentConnection
      }
    }
    default: {
      return state;
    }
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
