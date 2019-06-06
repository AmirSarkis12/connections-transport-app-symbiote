import React from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import { connect } from 'react-redux';

// Button which implements route link + also dispatches select current connection
class ConnectionLink extends React.Component {
  setConnection = (index) => {
    this.props.dispatch({ type: 'SELECTCONNECTION', value: this.props.index});
  }

  render() {
    return (
      <Link className={this.props.classes} to={"/" + this.props.link} onClick={this.setConnection}>{this.props.label}</Link>
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

connect(mapStateToProps)(ConnectionLink);

export default connect(mapStateToProps)(ConnectionLink)