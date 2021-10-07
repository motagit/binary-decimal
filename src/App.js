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
    <div className="App">
      <h1>Binary Form</h1>
        <input value={input} onInput={e => setInput(e.target.value)}/>
        <button type="button" onClick={() => binToDec()}>Button</button>
      <h1>Decimal form</h1>
      <p>{decimal}</p>
    </div>
  );
}

export default App;
