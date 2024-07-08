// src/Components/objects/StudentSNav.js
import React from 'react';
import './StudentSNav.css';

const StudentSNav = () => {
  return (
    <div className="sidebar">
      <div className="menu-icon">&#9776;</div> {/* Menu icon */}
      <div className="nav-item">
        <span className="nav-text">Dashboard</span>
      </div>
      <div className="nav-item">
        <span className="nav-icon">&#128203;</span> {/* Classes icon */}
        <span className="nav-text">Classes</span>
      </div>
      <div className="nav-item">
        <span className="nav-icon">&#128467;</span> {/* Quizzes icon */}
        <span className="nav-text">Quizzes</span>
      </div>
      <div className="nav-item">
        <span className="nav-icon">&#128214;</span> {/* Lessons icon */}
        <span className="nav-text">Lessons</span>
      </div>
      <div className="nav-item">
        <span className="nav-icon">&#128172;</span> {/* Feedback icon */}
        <span className="nav-text">Feedback</span>
      </div>
      <div className="nav-item">
        <span className="nav-icon">&#128100;</span> {/* Profile icon */}
        <span className="nav-text">Profile</span>
      </div>
    </div>
  );
};

export default StudentSNav;
