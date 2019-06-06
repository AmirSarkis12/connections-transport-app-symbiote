import React from 'react';
import { ButtonRoute } from './Buttons';
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

export default NewConnection;