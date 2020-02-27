import React from 'react';
import NavbarMenu from './Components/Navbar'
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <title>Resume of:
          Umar Nasir
        </title>
        <h1>Resume of:
          Umar Nasir</h1>
        <p>
           <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <div><NavbarMenu /></div>
        </a>
      </header>
    </div>
   
  );
}

export default App;
