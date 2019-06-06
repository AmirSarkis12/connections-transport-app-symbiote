import React from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";

// Basic button
class Button extends React.Component {
  render() {
    return (
      <button className={this.props.classes}>{this.props.label}</button>
    );
  }
}

// Button which implements route link
class ButtonRoute extends React.Component {
  render() {
    return (
      <Link className={this.props.classes} to={"/" + this.props.link} onClick={this.props.onClick}>{this.props.label}</Link>
    );
  }
}

export {
  Button,
  ButtonRoute
}



