import { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    if (timeRemaining === 0) {
      onAnswered(false);
      return;
    }

    const timer = setTimeout(() => {
      setTimeRemaining((prev) => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <h2>{question.prompt}</h2>
      <p>{timeRemaining} seconds remaining</p>

      {question.answers.map((answer) => (
        <button key={answer}>{answer}</button>
      ))}
    </div>
  );
}

export default Question;