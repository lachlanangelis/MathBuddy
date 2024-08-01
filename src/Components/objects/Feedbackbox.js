import React from 'react';
import { Link } from 'react-router-dom';
import './Feedbackbox.css';

const Quizbox = ({ status, title, dueDate, timeLimit, marks }) => {
  return (
    <div className="feedbackbox">
      <div className={`status ${status === 'incomplete' ? 'incomplete' : 'complete'}`}>
        {status === 'incomplete' ? '✕' : '✓'}
      </div>
      <div className="feedbackbox-info">
        <h3 className="title">{title}</h3>
        <div className="details">
          <span className="due-date">Due Date: {dueDate}</span>
          <span className="time-limit">Time Limit: {timeLimit}</span>
          <span className="marks">Marks: {marks}</span>
        </div>
      </div>
      <Link to="/studentquizcomplete" className="feedback-button">
        Feedback
      </Link>
    </div>
  );
};

export default Quizbox;
