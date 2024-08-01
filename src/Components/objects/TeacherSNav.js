// src/Components/objects/StudentSNav.js
import React from 'react';
import { Link } from 'react-router-dom';
import './TeacherSNav.css';

const StudentSNav = () => {
  return (
    <div className="sidebar">
      <Link to="/teacherhomepage" className="menu-link">
        <div className="menu-icon">&#9776;</div> {/* Menu icon */}
      </Link>
      <Link to="/teacherhomepage" className="nav-link">
        <div className="nav-item">
          <span className="nav-text">Dashboard</span>
        </div>
      </Link>
      <Link to="/teacherhomepage" className="nav-link"></Link>

      <Link to="/Tclasses" className="nav-link">
        <div className="nav-item classes">
          <span className="nav-icon">&#128203;</span> {/* Classes icon */}
          <span className="nav-text">Classes</span>
        </div>
      </Link>
      
      <Link to="/TActiveTasks" className="nav-link">
        <div className="nav-item">
          <span className="nav-icon">&#128467;</span> {/* Quizzes icon */}
          <span className="nav-text">Quizzes</span>
        </div>
      </Link>
      <Link to="/studentlessons" className="nav-link">
      <div className="nav-item">
        <span className="nav-icon">&#128214;</span> {/* Lessons icon */}
        <span className="nav-text">Lessons</span>
      </div>
      </Link>
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
