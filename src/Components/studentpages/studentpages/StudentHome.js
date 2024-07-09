// src/Components/studentpages/StudentHome.js
import React from 'react';
import StudentHeader from '../objects/StudentHeader';
import StudentSNav from '../objects/StudentSNav';
import TaskBox from '../objects/TaskBox';
import RecentlyAccessedBox from '../objects/RecentlyAccessedBox';
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
          <div className="horizontal-line"></div>
          <h2 className="recently-accessed">Recently accessed</h2>
          <div className="recently-accessed-container">
            <RecentlyAccessedBox iconColor="#FFA07A" text="Quiz: Fun Wordy Math" />
          </div>
          <div className="task-box-container">
            <TaskBox title="Class 4b" task="Task: Assignment - Addition & Subtraction" dueDate="Dec 16th, 2024" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentHome;
