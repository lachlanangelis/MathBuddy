// src/Components/studentpages/StudentQuiz.js
import React from 'react';
import StudentHeader from '../objects/StudentHeader';
import StudentSNav from '../objects/StudentSNav';
import '../studentstyle/StudentFeedback.css';
import FeedbackBox from '../objects/Feedbackbox';

const StudentFeedback = () => {
  return (
    <div className="studentfeedback-container">
      <StudentHeader /> {/* Top navbar */}
      <div className="SFcontent-wrapper">
        <StudentSNav /> {/* Side navbar */}
        <div className="SFmain-content">
          <h1 className="Feedback-message">Feedback</h1>
          {/* Your classes content goes here */}

          <div className="SFMain-Container">
            <div className="Feedback-box">
                <div className="FeedBox1">
                  <FeedbackBox
                    status="complete"
                    title="Quiz - Fun wordy math"
                    dueDate="11/12/24"
                    timeLimit="30 Minutes"
                    marks="20"
                  />
                </div>
              
              <div className="FeedBox2">
                <FeedbackBox
                  status="complete"
                  title="Quiz - Fun wordy math"
                  dueDate="11/12/24"
                  timeLimit="30 Minutes"
                  marks="20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentFeedback;