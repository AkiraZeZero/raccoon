import React, { useState } from "react";
import quiz from "./Question";
import bad from "../Images/raccoonShot.jpg";
import okay from "../Images/raccoonStab.jpg";
import perfect from "../Images/raccoon.jpg";

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
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 1,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
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

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);


  return (
    <div className="quizBox">
      {!showResult ? (
        <div>
          <div className="qNumb">
            <span className="activeQuestionNumb">
              {addLeadingZero(activeQuestion + 1)}
            </span>
            <span className="totalQuestion">
              /{addLeadingZero(questions.length)}
            </span>
          </div>
          <h2>{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={
                  selectedAnswerIndex === index ? "selectedAnswer" : null
                }
              >
                {answer}
              </li>
            ))}
          </ul>
          <div>
            <button
              onClick={onClickNext}
              disabled={selectedAnswerIndex === null}
            >
              {activeQuestion === questions.length - 1 ? "Finish!" : "Next!"}
            </button>
          </div>
        </div>
      ) : (
        <div className="result">
            <div>
                {}
            </div>
            {/* add Raccoon Results w picture
            Perfect Score: Happy raccoon 20 - 19
            Great Score: Great Raccoon 18-16
            Good Score: Fair Raccon 15-11
            Okay Score: Meh Raccoon 10-5
            Bad Score: Mad Raccoon 5 or below*/}
          <h3>Results</h3>
          <p>
            Total Questions: <span>{questions.length}</span>
          </p>
          <p>
            Total Score: <span>{result.score}</span>
          </p>
          <p>
            Correct Answers: <span>{result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers: <span>{result.wrongAnswers}</span>
          </p>
          {/* add a play again button */}
        </div>
      )}
    </div>
  );
};

export default Quiz;
