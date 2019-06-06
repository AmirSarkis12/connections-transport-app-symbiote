import React from 'react';
import './App.css';
import DataSet from './example-data'

function App() {
  return (
    <div className="App">
     {DataSet.routes.map(route => route.title)}
    </div>
  );
}

export default App;
