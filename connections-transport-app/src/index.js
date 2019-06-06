import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import { App } from './App';

import * as serviceWorker from './serviceWorker';

const State = {
  connections: []
};

// const State = {
//   connections: [
//     {connections
//       title: null,
//       stops: []
//     }
//   ]
// };


function reducer(state = State, action) {
  switch (action.type) {
    case 'ADDCONNECTION':
      const newState = state.connections.slice();
      newState.push(action.value);
      return {
        connections: newState
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
