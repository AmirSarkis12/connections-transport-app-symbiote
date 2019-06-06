import React from 'react';
import PageRouter from './components/PageRouter'
import { createBrowserHistory } from "history";
import './styles/styles.scss';

const history = createBrowserHistory();

class App extends React.Component {
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