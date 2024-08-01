// src/Components/studentpages/StudentClasses.js
import React from 'react';
import StudentHeader from '../objects/StudentHeader';
import StudentSNav from '../objects/StudentSNav';
import RecentlyAccessedBox from '../objects/RecentlyAccessedBox';
import TaskBox from '../objects/TaskBox';
import '../studentstyle/StudentHome.css';

const StudentHome = () => {
  return (
    <div className="studenthome-container">
      <StudentHeader /> {/* Top navbar */}
      <div className="SHcontent-wrapper">
        <StudentSNav /> {/* Side navbar */}
        <div className="SHmain-content">
          <div className="home-message">
            <div className="SHwelcome-message"> Welcome Olivia Bennet </div> 
            <div className="SHactive-message"> Active Homework </div> 
          </div>
          <div className="SHMain-Container">
            <div className="SHbutton-container">
              <button type="button" className="SHB SHQuizButton">
                <span>&#128467;</span> {/* Quiz icon */}
                Quizzes
              </button>
              <button type="button" className="SHB SHLessonsButton">
                <span>&#128214;</span> {/* Learning Resource icon */}
                Lessons
              </button>
              <button type="button" className="SHB SHFeedbackButton">
                <span className="nav-icon">&#128172;</span> {/* Feedback icon */}
                Feedback
              </button>
            </div>
            <div className="recently-accessed-container">
              <div className="message-recently">Recently Accessed</div>
              <div className="RAB recently-accessed-box1">
                <RecentlyAccessedBox iconColor="#FFA07A" text="Quiz: Fun Wordy Math" />
                
              </div>
              
            </div>
            
          </div>
          <div className="SHTaskbox-Container">
            <TaskBox title="Class 4b" task="Task: Assignment - Addition & Subtraction" dueDate="Dec 16th, 2024" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentHome;
