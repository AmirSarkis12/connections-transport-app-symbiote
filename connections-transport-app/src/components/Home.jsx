import React from 'react';
import { ButtonRoute } from './Buttons'
import ConnectionLink from './ConnectionLink'
import { connect } from 'react-redux';

// Home page which shows transport connections if they exist
class Home extends React.Component {
    renderConnections() {
        return this.props.connections.map((connections, index) => {
            return (
                <ConnectionLink classes="centre text-button" link="connectionlist" index={index} key={connections.connection.title} label={connections.connection.title}/>
            );
        });
    }

    render() {
        return (
            <div>
                <h2 className="title">My Connections</h2>

                {/* If connections exist then show them, otherwise show that none exist. */}
                {this.props.connections.length > 0 ? this.renderConnections() : <p className="message">You do not have any connections.</p>}
                
                <ButtonRoute classes="button positive centre" link="newconnection" label="Add New" />
            </div>
        );
    }
}

// Simplify component state as a subset of application state
function mapStateToProps(state) {
    return {
        connections: state.connections,
        currentConnection: state.currentConnection
    };
}

export default connect(mapStateToProps)(Home)