import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';

function App() {
  const sentence = 'Hello, World!'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {sentence}
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
      <Footer message={sentence}/>
    </div>
  );
}

export default App;
