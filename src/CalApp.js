import React from 'react';
import './App.css';
import { useState } from 'react';

function CalApp() {
  const [input,setInput]  = useState("");
  function handleClick(value){
    setInput(input+value)
  }
  function handelClear(){
    setInput("");
  }
  function caluclate (value) {
      let output = eval(input);
      setInput(output);
  }
  return (
   <div className="container">
      <div className='calculator'>
        <input type='text' className='output' value={input}/>
      </div>
      <div className='keypad' >
        <div className="buttons"> 
          <button className="digits" onClick={()=>{handleClick("9")}}>9</button>
          <button className="digits" onClick={()=>{handleClick("8")}}>8</button>
          <button className="digits" onClick={()=>{handleClick("7")}}>7</button>
          <button className="operators" onClick={()=>{handleClick("/")}}>/</button>
        </div>
        <div className="buttons">
          <button className="digits" onClick={()=>{handleClick("6")}}>6</button>
          <button className="digits" onClick={()=>{handleClick("5")}}>5</button>
          <button className="digits" onClick={()=>{handleClick("4")}}>4</button>
          <button className="operators" onClick={()=>{handleClick("*")}}>*</button>
        </div>
        <div className="buttons">
          <button className="digits" onClick={()=>{handleClick("3")}}>3</button>
          <button className="digits" onClick={()=>{handleClick("2")}}>2</button>
          <button className="digits" onClick={()=>{handleClick("1")}}>1</button>
          <button className="operators" onClick={()=>{handleClick("+")}}>+</button>
        </div>
        <div className="buttons"> 
          <button className="digits" onClick={()=>{handleClick("0")}}>0</button>
          <button className="digits" onClick={()=>{handleClick(".")}}>.</button>
          <button className="operators" onClick={()=>caluclate()}>=</button>
          <button className="digits" onClick={()=>{handelClear("c")}}>C</button>
        </div>
    </div>
   </div>
  )
}

export default CalApp;