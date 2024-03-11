import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './feedbacklist.css';

const FeedbackList = () => {
  const [feedbackList, setFeedbackList] = useState([]);
  const [editFeedbackId, setEditFeedbackId] = useState(null);
  const [editedMessage, setEditedMessage] = useState('');

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/feedback');
      setFeedbackList(response.data.reverse()); // Reverse the order here
    } catch (error) {
      console.error('Error fetching feedback:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/feedback/${id}`);
      alert('Feedback deleted successfully');
      fetchFeedback(); // Refresh feedback list after deletion
    } catch (error) {
      console.error('Error deleting feedback:', error);
      alert('Error deleting feedback');
    }
  };

  const handleEdit = (id, currentMessage) => {
    setEditFeedbackId(id);
    setEditedMessage(currentMessage);
  };

  const handleSaveEdit = async (id) => {
    try {
      await axios.put(`http://localhost:3001/api/feedback/${id}`, {
        message: editedMessage,
      });
      alert('Feedback updated successfully');
      setEditFeedbackId(null);
      setEditedMessage('');
      fetchFeedback(); // Refresh feedback list after editing
    } catch (error) {
      console.error('Error updating feedback:', error);
      alert('Error updating feedback');
    }
  };

  const handleCancelEdit = () => {
    setEditFeedbackId(null);
    setEditedMessage('');
  };

  return (
    <div className="feedback-list-container">
      <h2>Feedback List</h2>
      <ul className="feedback-list">
        {feedbackList.map((feedback) => (
          <li key={feedback.id} className="feedback-item">
            {editFeedbackId === feedback.id ? (
              <div className="edit-mode">
                <input
                  type="text"
                  value={editedMessage}
                  onChange={(e) => setEditedMessage(e.target.value)}
                />
                <button onClick={() => handleSaveEdit(feedback.id)}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </div>
            ) : (
              <div className="view-mode">
                <span>{feedback.message}</span>
                <button onClick={() => handleEdit(feedback.id, feedback.message)}>Edit</button>
                <button onClick={() => handleDelete(feedback.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;
