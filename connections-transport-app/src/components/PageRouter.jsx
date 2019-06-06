import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, ButtonRoute } from '../components/Buttons';

const placeholder = {
    connections: 0
}

function Home() {
    return (
        <div>
            <h2 className="title">My Connections</h2>
            {placeholder.connections > 0 ? null : <p className="message">You do not have any connections.</p>}
            <ButtonRoute classes="button positive centre" link="newconnection" label="Add New" />
            {/* To Do: Route to connections page */}
        </div>
    );
}

function NewConnection() {
    return (
        <div>
            <h2 className="title">New Connection</h2>
            <p>Form elemnts to go here...</p>
            <ButtonRoute classes="button negative" link="" label="Cancel" />
        </div>
    );
}

class PageRouter extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" exact component={Home} />
                    <Route path="/newconnection/" component={NewConnection} />
                </div>
            </Router>
        );
    }
}

export default PageRouter;