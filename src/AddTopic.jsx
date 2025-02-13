import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Styles/AddTopic.css'

function AddTopic() {
  const [newTopic, setNewTopic] = useState({ name: '', image: '' });
  const navigate = useNavigate();

  const handleAddTopic = (e) => {
    e.preventDefault();

    if (newTopic.name && newTopic.image) {
      // Get the existing topics from localStorage or start with an empty array
      const existingTopics = JSON.parse(localStorage.getItem("topics")) || [];

      // Add the new topic to the topics list
      existingTopics.push(newTopic);

      // Save the updated topics list to localStorage
      localStorage.setItem("topics", JSON.stringify(existingTopics));

      // Navigate back to the main topic page
      navigate("/");
    } else {
      alert("Please provide both a topic name and an image URL.");
    }
  };

  return (
    <div className="topic-container2">
     <h1 className="New-topic">Add A New Topic</h1>
      <form onSubmit={handleAddTopic}>
      <input 
      className="Topic"
      type="text"
      placeholder="Topic Name"
      value={newTopic.name}
      onChange={(e) => setNewTopic({ ...newTopic, name: e.target.value })}
      required
     /><br/><br/>
     <input 
      className="Topic"
      type="text"
      placeholder="Image URL"
      value={newTopic.image}
      onChange={(e) => setNewTopic({ ...newTopic, image: e.target.value })}
     />
    <button className="btn" type="submit">Add Topic</button>
    </form>
  </div>

  );
}

export default AddTopic;
