import React from 'react';
import { useState } from 'react';
import { BlinkingCursorTextBuilder } from 'react-animated-text-builders';
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
    <>
    <div className="container">
      <div className="app">
        <BlinkingCursorTextBuilder
        class="title"
        textStyle={{fontWeight :"bold", fontSize : "42px", color: "white"}}
        timeout={30}
        cursorComponent={<div class="titleCursor" 
        style={{color : "#FF99FF",
                transform: "rotate(-10deg)",
                marginLeft: "240px",
                fontSize: "24px"}}>Converter!</div>}
        blinkTimeAfterFinish={-1}>Binary to Decimal</BlinkingCursorTextBuilder>
          <h2>Binary Form</h2>
            <input type="text" value={input} onChange={e => updateNumber(e)} maxLength="8" pattern="[0-1]+"/>
          <h2>Decimal form</h2>
            <input value={decimal} onInput={e => setDecimal(e.target.value)} disabled/>
          <div id="button">
            <button type="button" onClick={() => binToDec()} type="submit">Convert!</button>
          </div>
      </div>
    </div>
    <div id="nyancat">
      <img src="nyancat.gif" alt="nyancat"/>
    </div>
    </>
    
  );
}

export default App;
