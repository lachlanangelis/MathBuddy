// src/Components/studentpages/StudentHome.js
import React from 'react';
import StudentHeader from '../objects/StudentHeader';
import StudentSNav from '../objects/StudentSNav';
import '../studentstyle/StudentHome.css';

const StudentHome = () => {
  return (
    <div className="studenthome-container">
      <StudentHeader /> {/* Top navbar */}
      <div className="content-wrapper">
        <StudentSNav /> {/* Side navbar */}
        <div className="main-content">
          <div className="header-container">
            <h1 className="welcome-message">Welcome Ms. Valerie Frizzle</h1>
            <h1 className="active-tasks">Active Tasks</h1>
          </div>
          <div className="button-line-container">
            <div className="button-container">
              <button className="class-button">Classes</button>
              <button className="lesson-button">Lessons</button>
              <button className="feedback-button">Feedback</button>
            </div>
            <div className="vertical-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentHome;
