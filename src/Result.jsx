import React from 'react';

const Result = ({ score, total }) => {
  return (
    <div className="result-container">
      <h1>Quiz Completed</h1>
      <p>Your score: {score} out of {total}</p>
      <button>Take another quiz</button>
    </div>
  );
};

export default Result;
