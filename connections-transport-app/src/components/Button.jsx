import React from 'react';

// Basic button
class Button extends React.Component {
    render() {
        return (
            <button className={this.props.classes}>{this.props.label}</button>
        );
    }
}

export default Button;

