import React, { useState } from "react";
import "./App.css";

function App () {
  const[count,setCount]=useState(1)
  const[score,setScore]=useState(0)
     function changeScore(){
      setScore(score+count)
     }
     function changeCount(){
      if(score>=10){setCount(count+1)
        setScore(score-10)}
      else{
        window.alert("You can't afford this");
      }
      
     }
     function reset(){
      setCount(1)
      setScore(0)
     }
    return (
      score===0&&count===1?<main>
      <h1>CurrentScore:{score}</h1>
      <button onClick={changeScore}>+{count}</button>
      <br />
      <br />
      <button onClick={changeCount}>Pay 10 points to change from +{count} to +{count+1}</button>

      
    </main>:null,
      score>=100?<section>
          <h1>CurrentScore:{score}</h1>
      <h2>You win</h2>
      <button onClick={reset}>Play again?</button>
      
      </section>

      :<main>
        <h1>CurrentScore:{score}</h1>
        <button onClick={changeScore}>+{count}</button>
        <br />
        <br />
        <button onClick={changeCount}>Pay 10 points to change from +{count} to +{count+1}</button>

        
      </main>
    );
}

export default App;
