import React from 'react';
import { ButtonRoute } from './Buttons';
import { App } from '../App'
import Connections from './Connections';
import { connect } from 'react-redux';

// Home page which shows transport connections if they exist
class Home extends React.Component {
    render() {
        return (
            <div>
                <h2 className="title">My Connections</h2>
                <h2>{this.props.count}</h2>
                {App > 0 ? null : <p className="message">You do not have any connections.</p>}

                <ButtonRoute classes="button positive centre" link="newconnection" label="Add New" />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state.count

    };
}

export default connect(mapStateToProps)(Home)