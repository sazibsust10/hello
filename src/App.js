import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputBox from './component/inputBox';

function App() {
  return (
    <div className="App">
      <header>
        <h1>ToDo List</h1>
      </header>
      
      <InputBox/>
    </div>
  );
}

export default App;
