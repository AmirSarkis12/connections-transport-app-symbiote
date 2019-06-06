import React from 'react';
import './App.css';
import DataSet from './example-data'
import Button from './components/Button';

const placeholder = {
  connections: 0
}

function App() {
  return (
    <div className="App">
      <h2 className="title">My Connections</h2>
      {placeholder.connections > 0 ? null : <p className="message">You do not have any connections.</p>}
      <Button classes="button" label="Add New"></Button>
      {/* To Do: Route to connections page */}
    </div>
  );
}

export default App;
