import { useState } from 'react';

export default function Main() {
  let [score, setScore] = useState(0);
  let [counter, setCounter] = useState(1);
  let [buttonText, setButtonText] = useState(
    'Pay 10 points to change from +1 to +2'
  );
  let [status, setStatus] = useState('');
  let [playAgainButton, setPlayAgainButton] = useState(false);

  const handleClick = () => {
    setScore((score += counter));

    if (score >= 100) {
      setStatus('You Win!');
      setPlayAgainButton(true);
    } else if (score >= 10) {
      setButtonText(
        `Pay 10 points to change from +${counter} to +${++counter}`
      );
    }
  }

  const restartGame = () => {
    setScore(0);
  }

  return (
    <main>
      <h1>Current Score: {score}</h1>
      <button onClick={handleClick}>+{counter}</button>
      <button
        onClick={() => {
          if (score >= 100) {
            setStatus('You Win!');
            setPlayAgainButton(true);
          } else if (score >= 10) {
            setScore(score - 10);
            setCounter((counter + 1));
            setButtonText(
              `Pay 10 points to change from +${counter} to +${++counter}`
            );
          } else {
            alert("You can't afford that!");
          }
        }}
      >
        {buttonText}
      </button>
      <h3 setStatus={setStatus}>{status}</h3>
      {playAgainButton ? <button onClick={restartGame}>Play Again?</button> : null}
    </main>
  );
}