import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>REgular Expressions GENerator</h1>
      </header>
      <div className="sidebar">
        <ul>
          <li>Home</li>
          <li>My regexes</li>
          <li>About</li>
        </ul>
      </div>
      <div className="main-content">
        <textarea className="text-edit" rows="10"></textarea>
        <textarea className="text-edit" rows="10"></textarea>
        <button className="button">Generate</button>
      </div>
    </div>
  );
}

export default App;
