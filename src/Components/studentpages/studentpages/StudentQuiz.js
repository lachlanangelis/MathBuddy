// src/Components/studentpages/StudentQuiz.js
import React from 'react';
import StudentHeader from '../objects/StudentHeader';
import StudentSNav from '../objects/StudentSNav';
import '../studentstyle/StudentQuiz.css';

const StudentQuiz = () => {
  return (
    <div className="studentquiz-container">
      <StudentHeader /> {/* Top navbar */}
      <div className="Qcontent-wrapper">
        <StudentSNav /> {/* Side navbar */}
        <div className="Qmain-content">
          <h1 className="Quiz-message">Quizzes</h1>
          <div className="quiz-header">
            <div className="quiz-header-item">Status</div>
            <div className="quiz-header-item">Title</div>
            <div className="quiz-header-item">Due Date</div>
            <div className="quiz-header-item">Time Limit</div>
            <div className="quiz-header-item">Marks</div>
          </div>
          <div className="quiz-box">
            <div className="status-icon">&#10060;</div> {/* Cross icon */}
            <div className="quiz-item title">Quiz - Fun wordy math</div>
            <div className="quiz-item due-date">11/12/24</div>
            <div className="quiz-item time-limit">30 Minutes</div>
            <div className="quiz-item marks">/20</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentQuiz;
