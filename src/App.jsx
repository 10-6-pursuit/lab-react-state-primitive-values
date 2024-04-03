import { useState } from 'react'
import React from "react";
import "./App.css";

function App () {
  const [ score, setScore ] = useState(0)
  const [ incrementor, setIncrementor] = useState("+1")
  const [ x, setX ] = useState(1)
  const [ y, setY ] = useState(2)
  const [ msg, setMsg ] = useState("none")
  const [ game, setGame ] = useState("block")

  
  
  function checkWinner(score) {
    if (score >= 100) {
      setGame("none")
      setMsg("block")
    }
  }
  
  function changeScore() {
    if (incrementor === `+${y}`) {
      setScore(score + y)
      checkWinner(score + y)
    } else {
      setScore(score + x)
      checkWinner(score + x)
    }
  }

  function changeIncrementor () {
    if (score >= 10 ) {
      setIncrementor(`+${y}`)
      setScore(score - 10)
      setX(y)
      setY(y + 1)
    } else {
      alert("You can't afford that!")
    }
  }

  function restartGame() {
    setMsg("none")
    setGame("block")
    setScore(0)
    setIncrementor("+1")
    setX(1)
    setY(2)
  }

    return (
      <main className="App">
        <h1>Current Score: {score}</h1>
        <div className="clicker" style={{display: game}}>
        <button onClick={changeScore}>{incrementor}</button>
        <br />
        <br />
        <button onClick={changeIncrementor}>Pay 10 points to change from +{x} to +{y}</button>
        </div>
        <div className="winMsg" style={{display: msg}}>
          <h2>You Win!</h2>
          <button onClick={restartGame}>Play again?</button>
        </div>
      </main>
    );
}

export default App;
