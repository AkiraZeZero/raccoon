import React, { useState } from "react";
import quiz from "./Question";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, choices, correctAnswer } = questions[activeQuestion];

  const onClickNext = () => {
    setActiveQuestion((prev) => prev + 1);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log("Right Answer");
    } else {
      setSelectedAnswer(false);
      console.log("Wrong Answer");
    }
  };

  return (
    <div className="quizBox">
      <h1>Quiz Box</h1>
      <h2>{question}</h2>
      <ul>
        {choices.map((answer, index) => (
          <li onClick={() => onAnswerSelected(answer, index)} key={answer}  className={selectedAnswerIndex === index ? 'selectedAnswer' : null}>
            {answer}
          </li>
        ))}
      </ul>
      <button onClick={onClickNext}>Next!</button>
    </div>
  );
};

export default Quiz;
