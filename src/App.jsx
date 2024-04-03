import { useState } from "react";
import React from "react";
import "./App.css";

function App () {

  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(1);

    function add (){
      setCounter(counter+counter2)
    }

    function sustractTen () {
      if(counter >= 10){
        setCounter(counter - 10)
        setCounter2(counter2 + 1)
       } else {
         alert("YOU CANT AFFORD THAT BRO");
       }
    }

    if(counter > 99){
      return (
        <main className="winner">
        <h1>Current Score: {counter} </h1>
        <h2>YOU WIN!</h2>
        <button className="restart" onClick={restart}> Play again? </button>
      </main>
      )
    }
    

    function restart (){
      setCounter(0);
      setCounter2(1)
    }

    return (
      <main>
        <h1>Current Score: {counter} </h1>
        <button className="add" onClick={add}>{counter2}+</button>
        <button className="pay10" onClick={sustractTen}>Pay 10 pts to change from +{counter2} to {counter2 + 1}+</button>
      </main>
    );
}

export default App;
