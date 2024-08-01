// src/Components/studentpages/StudentClasses.js
import React from 'react';
import StudentHeader from '../objects/StudentHeader';
import TeacherSNav from '../objects/TeacherSNav';
import RecentlyAccessedBox from '../objects/RecentlyAccessedBox';
import TaskBox from '../objects/TaskBox';
import '../teacherstyle/TeacherHomepage.css';

const TeacherHome = () => {
  return (
    <div className="teacherhome-container">
      <StudentHeader /> {/* Top navbar */}
      <div className="THcontent-wrapper">
      <TeacherSNav />  {/* Side navbar */}
        <div className="THmain-content">
          <div className="THhome-message">
            <div className="THwelcome-message"> Welcome Ms. Valerie Frizzle </div> 
            <div className="THactive-message"> Active Tasks </div> 
          </div>
          <div className="THMain-Container">
            <div className="THbutton-container">
              <button type="button" className="THB THQuizButton">
                <span>&#128467;</span> {/* Quiz icon */}
                Classes
              </button>
              <button type="button" className="THB THLessonsButton">
                <span>&#128214;</span> {/* Learning Resource icon */}
                Lessons
              </button>
              <button type="button" className="THB THFeedbackButton">
                <span className="nav-icon">&#128172;</span> {/* Feedback icon */}
                Feedback
              </button>
            </div>
            <div className="THrecently-accessed-container">
              <div className="THmessage-recently">Recently Accessed</div>
              <div className="THRAB recently-accessed-box1">
                <RecentlyAccessedBox iconColor="#FFA07A" text="Class 4B" />
                
              </div>
              
            </div>
            
          </div>
          <div className="THTaskbox-Container">
            <TaskBox title="Class 4b" task="Task: Assignment - Addition & Subtraction" dueDate="Dec 16th, 2024" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherHome;
