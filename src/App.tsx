import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export function FrogPic(){
  return (
    <div className="flex justify-center items-center min-w-full min-h-screen">
      <img className="w-80 h-50" src={require('./FrogPic.jpeg')}></img>
    </div>
  )
}

export default App;
