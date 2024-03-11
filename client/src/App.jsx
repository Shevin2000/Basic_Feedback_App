// App.jsx
import React from 'react';
import FeedbackForm from './feedbackform';
import FeedbackList from './feedbacklist';

const App = () => {
  return (
    <div>
      <FeedbackForm />
      <FeedbackList />
    </div>
  );
};

export default App;
