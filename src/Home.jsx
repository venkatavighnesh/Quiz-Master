import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css'; // Import the new CSS file

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <h1 className="app-title">QuizMaster</h1>
        <p className="app-description">
          Ready to test your knowledge? Choose a quiz, challenge yourself, and learn something new today!
        </p>
        <Link to="/topics">
          <button className="start-quiz-btn">Start Quiz</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
