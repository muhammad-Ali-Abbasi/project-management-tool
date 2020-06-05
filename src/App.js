import React from 'react';
import logo from './logo.svg';
import './App.css';
//comps
import Dashboard from './components/Dashboard';
import Auth from './components/Auth';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
         Welcome to Proje - your new project management tool.
        </p>
        <a
          className="App-link"
          href="."
          target="_blank"
          rel="noopener noreferrer"
        >
          Home
        </a>
        <Nav />
      </header>
     
    </div>
  );
}

export default App;
