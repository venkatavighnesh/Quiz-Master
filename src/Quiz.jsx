import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Qdata from './Qdata.json'; // Ensure the correct relative path to Qdata.json
import './Styles/Quiz.css';

const Quiz = () => {
  const { topic } = useParams(); // Get the topic from the URL parameter

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(7 * 60); // 7 minutes in seconds
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Timer countdown
  useEffect(() => {
    if (timeRemaining === 0) {
      setQuizCompleted(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeRemaining((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup the timer
  }, [timeRemaining]);

  const handleAnswerChange = (questionIndex, answer) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionIndex]: answer }));
  };

  const handleSubmit = () => {
    setQuizCompleted(true);
  };

  // Check if the topic exists in the quiz data
  if (!Qdata[topic]) {
    return <div>Topic not found.</div>;
  }

  // Calculate score
  const score = Qdata[topic]?.reduce((total, question, index) => {
    if (selectedAnswers[index] === question.answer) {
      return total + 1;
    }
    return total;
  }, 0);

  return (
    <div className="background-wrapper3">
      <div className="quiz-container">
        <h1>{topic} Quiz</h1>

        {!quizCompleted ? (
          <>
            <div className="timer">
              Time Remaining: {Math.floor(timeRemaining / 60)}:{timeRemaining % 60 < 10 ? '0' + timeRemaining % 60 : timeRemaining % 60}
            </div>

            <form>
              {Qdata[topic].map((question, index) => (
                <div key={index} className="question">
                  <p>{question.question}</p>
                  {question.options.map((option, i) => (
                    <label key={i}>
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={option}
                        checked={selectedAnswers[index] === option}
                        onChange={() => handleAnswerChange(index, option)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              ))}
            </form>

            <button onClick={handleSubmit}>Submit Quiz</button>
          </>
        ) : (
          <div className="result1">
            <h2>Your Score: {score} / {Qdata[topic]?.length}</h2>

            {/* Displaying answers with colors */}
            {Qdata[topic].map((question, index) => {
              const selected = selectedAnswers[index];
              const isCorrect = selected === question.answer;
              return (
                <div key={index} className="answer-result">
                  <p className={isCorrect ? 'correct' : 'incorrect'}>
                    <strong>{question.question}</strong><br />
                    <span>{isCorrect ? 'Correct' : `Incorrect. Correct Answer: ${question.answer}`}</span>
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
