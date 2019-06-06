import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ButtonRoute } from './Buttons';
import Home from './Home';
import ConnectionOption from './ConnectionSelector'

function NewConnection() {
    return (
        <div>
            <h2 className="title">New Connection</h2>
            <ConnectionOption />
            <ButtonRoute classes="button negative" link="" label="Cancel" />
        </div>
    );
}

// Basic button
class PageRouter extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" exact component={Home} />
                    <Route path="/newconnection/" component={NewConnection} />
                    <Router history={this.props.history} />
                </div>
            </Router>
        );
    }
}

export default PageRouter;


