import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  
  const [input, setInput] = useState(''); 
  const[decimal, setDecimal] = useState(0);

  function binToDec() {
    setDecimal(parseInt(input, 2));
  }

  return (
    <div className="container">
      <div className="app">
        <h1>Bin2Dec - from github.com/app-ideas</h1>
        <h2>Binary Form</h2>
          <input value={input} onInput={e => setInput(e.target.value)}/>
        <h2>Decimal form</h2>
          <input value={decimal} onInput={e => setDecimal(e.target.value)}/>
        <div id="button">
          <button type="button" onClick={() => binToDec()}>Convert!</button>
        </div>
      </div>
    </div>
  );
}

export default App;
