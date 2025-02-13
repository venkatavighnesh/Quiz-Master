import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Styles/Topic.css';

function Topic() {
  const [searchQuery, setSearchQuery] = useState('');
  const [topics, setTopics] = useState([
    { name: "Biology", image: "" },
    { name: "Sports", image: "" },
    { name: "Politics", image: "https://img.freepik.com/premium-vector/political-talk-show-two-politico-speaking-debate-audience-tv-broadcast-professional-speakers-leader-politics-party-public-discussion-host-studio-vector-illustration-talking-speak-voting_81894-12809.jpg?semt=ais_hybrid" },
    { name: "International Relations", image: "https://via.placeholder.com/300?text=International+Relations" },
    { name: "Environment & Biodiversity", image: "data:image/jpeg;base64,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" },
    { name: "Indian Art and Culture", image: "https://via.placeholder.com/300?text=Indian+Art+and+Culture" },
    { name: "Food", image: "https://via.placeholder.com/300?text=Food" },
    { name: "Science & Technology", image: "https://via.placeholder.com/300?text=Science+and+Technology" },
    { name: "General Science", image: "https://via.placeholder.com/300?text=General+Science" },
    { name: "Geography", image: "https://via.placeholder.com/300?text=Geography" },
    { name: "History", image: "" },
    { name: "C Language", image: "" },
    { name: "Python Language", image: " " },
    { name: "Data Structures and Algorithms (DSA)", image: " " },
    { name: "C++ Language", image: " " },
    { name: "International Related", image: " " },



  ]);

  // Load topics from localStorage when the component mounts
  useEffect(() => {
    const storedTopics = JSON.parse(localStorage.getItem("topics")) || [];
    setTopics(storedTopics); // Simply set the state to the stored topics
  }, []);  // This only runs once when the component mounts

  // Delete a topic
  const handleDelete = (name) => {
    // Filter out the deleted topic from the state
    const updatedTopics = topics.filter(topic => topic.name !== name);
    setTopics(updatedTopics);

    // Save the updated topics to localStorage
    localStorage.setItem("topics", JSON.stringify(updatedTopics));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Filter topics based on search query
  const filteredTopics = topics.filter(topic =>
    topic.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="background-wrapper1">
      <div className="topic-container">
        <h1 className="quiz"> Select a Topic for Your Quiz</h1>
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for a topic..."
            onChange={handleSearchChange}
            value={searchQuery}
          />
        </div>
        
        {/* Topics List */}
        <div className="topics-list">
          {filteredTopics.length > 0 ? (
            filteredTopics.map((topic, index) => (
              <div key={index} className="topic-card">
                <img src={topic.image} alt={topic.name} className="topic-image" />
                <Link to={`/quiz/${topic.name}`} className="topic-link">
                  {topic.name}
                </Link>

                {/* Delete Button */}
                <button 
                  className="delete-button"
                  onClick={() => handleDelete(topic.name)}
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p>No topics found. Please add a topic!</p>
          )}

          {/* Add Plus Button next to the last topic card */}
          <div className="add-topic-button">
            <Link to="/add-topic">
              <button className="plus-button">+</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topic;
