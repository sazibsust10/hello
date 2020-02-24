import React from 'react';
import logo from './logo.svg';
import './App.css';
import inputBox from './component/inputBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo List</h1>
      </header>
      
      <inputBox className="App-header"/>
    </div>
  );
}

export default App;
