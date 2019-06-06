import React from 'react';
import DataSet from '../example-data.js'
import { history } from '../App'
import { Button } from './Buttons'
import { connect } from 'react-redux';

// Home page which shows transport connections if they exist
class ConnectionSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: null
    };
  
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  // Create a new connection object for adding to app state
  collateInput = (event) => {
    return {
      connection: {
        title: event.target.name.value,
        stops: [event.target.stopOne.value, event.target.stopTwo.value, event.target.stopThree.value]
      }
    }

  }

  handleSubmit(event) {
    event.preventDefault();
    // Dispatch Add connection with collated form values
    this.props.dispatch({ type: 'ADDCONNECTION', value: this.collateInput(event)});

    // Go back to home page
    history.goBack();
  }

  render() {
    return (
      <div>
        <form className="connection-selector-form" onSubmit={this.handleSubmit}>
          <input className="name-input" type="text" name="name" placeholder="Name" required />

          <select name="stopOne" required>
              <option value="">Select stop</option>
              {DataSet.stops.map(stop => <option key={stop.title}>{stop.title}</option>)}
            </select>

          <select name="stopTwo">
              <option value="">Select stop</option>
              {DataSet.stops.map(stop => <option key={stop.title}>{stop.title}</option>)}
            </select>

          <select name="stopThree">
              <option value="">Select stop</option>
              {DataSet.stops.map(stop => <option key={stop.title}>{stop.title}</option>)}
            </select>
            <Button classes="button positive" link="" label="Save" />
        </form>
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

export default connect(mapStateToProps)(ConnectionSelector)
