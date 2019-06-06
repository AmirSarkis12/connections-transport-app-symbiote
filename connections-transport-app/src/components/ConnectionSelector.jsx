import React from 'react';
import DataSet from '../example-data.js'
import { history } from '../App'
import { Button, ButtonRoute } from './Buttons'
import { connect } from 'react-redux';

const sanitiseRoutes = () => {
  console.log(DataSet.routes.map(route => route.title + " towards " + route.directions[0]));
}

// Home page which shows transport connections if they exist
class ConnectionSelector extends React.Component {
  componentDidMount() {
    sanitiseRoutes();
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch({ type: 'INCREMENTCOUNT' });
    history.goBack();
    console.log("form submitted");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            {/* To Do: Populate forms with staton information */}
            <select name="stop-1" />
            <select name="stop-2" />
            <select name="stop-3" />
            <Button classes="button positive" link="" label="Save" />
            <h2>{this.props.count}</h2>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(ConnectionSelector)
