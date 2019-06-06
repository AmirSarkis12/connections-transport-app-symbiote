import React from 'react';
import PageRouter from './components/PageRouter'
import { createBrowserHistory } from "history";
import './styles/styles.scss';

const history = createBrowserHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userConnections: 1,
      connections: [
        {
          connection: {
            stops: [
            ]
          }
        }
      ]
    };
  }

  render() {
    return (
      <PageRouter history={history} />
    );

  }

}

export {
  App,
  history
}