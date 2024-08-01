import React from 'react';
import './QuizBox.css';

const Quizbox = ({ status, title, dueDate, timeLimit, marks }) => {
  return (
    <div className="quizbox">
      <div className={`status ${status === 'incomplete' ? 'incomplete' : 'complete'}`}>
        {status === 'incomplete' ? '✕' : '✓'}
      </div>
      <div className="quiz-info">
        <h3 className="title">{title}</h3>
        <div className="details">
          <span className="due-date">Due Date: {dueDate}</span>
          <span className="time-limit">Time Limit: {timeLimit}</span>
          <span className="marks">Marks: {marks}</span>
        </div>
      </div>
    </div>
  );
};

export default Quizbox;