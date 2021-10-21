import React from 'react';
import { useState } from 'react';
import './App.scss';

function App() {
  const [input, setInput] = useState(''); 
  const[decimal, setDecimal] = useState(0);

  function binToDec() {
    if (input != '') {
      setDecimal(parseInt(input, 2));
    }
  }

  function updateNumber (e) {
    if (e.target.checkValidity() === true) {
      setInput(e.target.value);
    }
  }

  return (
    <div className="container">
      <div className="app">
        <h1>Binary to Decimal Converter!</h1>
          <h2>Binary Form</h2>
            <input type="text" value={input} onChange={e => updateNumber(e)} maxLength="8" pattern="[0-1]+"/>
          <h2>Decimal form</h2>
            <input value={decimal} onInput={e => setDecimal(e.target.value)}/>
          <div id="button">
            <button type="button" onClick={() => binToDec()} type="submit">Convert!</button>
          </div>
      </div>
    </div>
  );
}

export default App;
