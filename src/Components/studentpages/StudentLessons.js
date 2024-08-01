// src/Components/studentpages/StudentClasses.js
import React from 'react';
import StudentHeader from '../objects/StudentHeader';
import StudentSNav from '../objects/StudentSNav';
import '../studentstyle/StudentLessons.css';

const StudentLessons = () => {
  return (
    <div className="studentlessons-container">
      <StudentHeader /> {/* Top navbar */}
      <div className="content-wrapper">
        <StudentSNav /> {/* Side navbar */}     
          <h1 className="lessons-message">Lessons</h1>

          <div className ="SLMain-Container">
            <div className ="item item-1">
            <div class ="text-1"><h3>Addition </h3></div>
            <div class ="q-1">
                <span>&#128467;</span> {/* Quiz icon */}
                <p>11 Quizzes</p>
                </div>
            <div class ="l-1">
                <span>&#128214;</span> {/* Learning Resource icon */}
                <p>6 Learning Resource</p>
                </div>
            </div>

            <div class ="item item-2">
              <div class ="text-2"><h3>Substraction</h3></div>
              <div class ="q-2">
              <span>&#128467;</span> {/* Quiz icon */}
                <p>11 Quizzes</p>
              </div>
              <div class ="l-2">
              <span>&#128214;</span> {/* Learning Resource icon */}
                6 Learning Resource
              </div>
               </div>

            <div class ="item item-3">
            <div class ="text-3"><h3>Multiplication</h3></div>
              <div class ="q-3">
                <span>&#128467;</span> {/* Quiz icon */}
                <p>11 Quizzes</p>
              </div>
              <div class ="l-3">
              <span>&#128214;</span> {/* Learning Resource icon */}
                6 Learning Resource
              </div>

            </div>
          </div>

      </div>
    </div>
  );
};

export default StudentLessons;
