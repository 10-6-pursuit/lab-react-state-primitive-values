import React, { useState } from "react";
import "./App.css";

function App () {
  const [ scoreCounter, setScoreCounter ] = useState(0); 
  const [ incrementScore, setIncrementScore ] = useState(1);
  const [ show, setShow ] = useState("none")

    return (
      <main>
        <p>React State Lab</p>
        <h1>Current Score: {scoreCounter}</h1>
        <button onClick = {() => { 
          setScoreCounter(scoreCounter + incrementScore);

          if (scoreCounter > 99) {
            setShow("block");
            alert("YOU WIN!!");
          }
        }} >+{ incrementScore }</button><br/><br/>
        <button onClick={() => {
          if(scoreCounter >= 10) {
            setIncrementScore(incrementScore + 1);
            setScoreCounter(scoreCounter - 10);
          } else {
            alert("You can't afford that!");
          }
        }}>{`Pay 10 points to change from +${incrementScore} to +${incrementScore + 1}`}</button>
        <div style={{display: show }}>
          <h2>YOU WIN!!</h2>
        </div>
      </main>
    );
}

export default App;
