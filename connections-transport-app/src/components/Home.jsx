import React from 'react';
import { ButtonRoute } from './Buttons';

import { connect } from 'react-redux';

// Home page which shows transport connections if they exist
class Home extends React.Component {
    render() {
        return (
            <div>
                <h2 className="title">My Connections</h2>
                {this.props.connections.length > 0 ? null : <p className="message">You do not have any connections.</p>}
                {console.log(this.props.connections)}
                <ButtonRoute classes="button positive centre" link="newconnection" label="Add New" />
            </div>
        );
    }
}

// Simplify component state as a subset of application state
function mapStateToProps(state) {
    return {
        connections: state.connections
    };
}

export default connect(mapStateToProps)(Home)