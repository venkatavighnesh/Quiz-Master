import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home.jsx';
import Quiz from './Quiz.jsx';
import Result from './Result.jsx';
import Topic from './Topic.jsx';
import AddTopic from './AddTopic.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page route */}
        <Route path='/' element={<Home />} />

        {/* Topic selection page */}
        <Route path="/topics" element={<Topic />} />

        {/* Quiz page route, with dynamic topic */}
        <Route path="/quiz/:topic" element={<Quiz />} />

        <Route path="/add-topic" element={<AddTopic />} />

        {/* Optionally, you can add a Result page route */}
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
