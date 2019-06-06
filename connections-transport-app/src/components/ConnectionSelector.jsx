import React from 'react';
import DataSet from '../example-data.js'
import { history } from '../App'
import { Button, ButtonRoute } from './Buttons'

class ConnectionSelector extends React.Component {
    onFormSubmit = (e) => {
        e.preventDefault();
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
                    <select name="stop-1" />
                    <select name="stop-2" />
                    <select name="stop-3" />
                    <Button classes="button positive" link="" label="Save" />
                </form>
            </div>
        );
    }
}

export default ConnectionSelector;
