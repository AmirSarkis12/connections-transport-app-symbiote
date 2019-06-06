import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import ConnectionList from './ConnectionList'
import NewConnection from './NewConnection'

// Basic button
class PageRouter extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" exact component={Home} />
                    <Route path="/newconnection/" component={NewConnection} />
                    <Route path="/connectionlist/" component={ConnectionList} />
                    <Router history={this.props.history} />
                </div>
            </Router>
        );
    }
}

export default PageRouter;


