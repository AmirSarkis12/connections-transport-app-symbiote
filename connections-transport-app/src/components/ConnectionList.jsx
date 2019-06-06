import React from 'react';
import { connect } from 'react-redux';

class ConnectionList extends React.Component {
  render() {
    return (
        <div>
        <h2 className="title">TO DO: Use props.connections and props.currentConnection to render routes from the user's chosen stops</h2>
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

export default connect(mapStateToProps)(ConnectionList)