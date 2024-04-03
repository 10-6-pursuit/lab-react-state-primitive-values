import React from "react";
import { useState } from "react";
import "./App.css";

//reset counter


function App () {
  const [counter, setCounter] = useState(0);
  const [x, setX] = useState(1);

  function useCounter() {
    setCounter(counter + x);
  }
  
  function resetCounter() {
    setCounter(0);
    setX(1);
  }

  function changeCounter() {
    if (counter >= 10) {
      setCounter(counter - 10);
      setX(x + 1);
    } else if(counter < 10) {
      alert("You can't afford that!");
    }
  }

  function displayMessage() {
    if(counter >= 100) {
      return (
        <div className="winningMessage">
          <h2>You Win!</h2>
          <button onClick={resetCounter}>Play again?</button>
        </div>
      )
    } else return show();
  }

  function show() {
    return (
      <>
      <button onClick={useCounter}>+{x}</button>
      <button onClick={changeCounter}>Pay 10 points to change from +{x} to +{x + 1}</button>
      </>
    )
  }

  return (
    <div className="container">
    <h1>Current Score: {counter}</h1>
    {displayMessage()}
    </div>
  )   
}

export default App;
