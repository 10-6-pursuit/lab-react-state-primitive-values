import React, { useState } from "react";
import "./App.css";

//reset counter

function App() {
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
    } else if (counter < 10) {
      alert("You can't afford that!");
    }
  }

  function displayMessage() {
    if (counter >= 100) {
      return (
        <div className="winningMessage">
          <h2>You Win!</h2>
          <button onClick={resetCounter}>Play again</button>
        </div>
      );
    } else return show();
  }

  function show() {
    return (
      <>
        <button
          onClick={useCounter}
          className="mb-4 mt-2 cursor-pointer rounded-lg border-[1px] border-solid border-transparent bg-[#1a1a1a] px-4 py-1 font-[inherit] text-base font-medium transition duration-200;"
        >
          +{x}
        </button>
        <button
          onClick={changeCounter}
          className="mb-4 mt-2 cursor-pointer rounded-lg border-[1px] border-solid border-transparent bg-[#1a1a1a] px-4 py-1 font-[inherit] text-base font-medium transition duration-200;"
        >
          Pay 10 points to change from +{x} to +{x + 1}
        </button>
      </>
    );
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-5xl leading-10">Current Score: {counter}</h1>
      {displayMessage()}
    </div>
  );
}

export default App;
