// src/components/teacherPages/TNewQuiz.js
import React from 'react';
import StudentHeader from '../objects/StudentHeader';
import TeacherSNav from '../objects/TeacherSNav';
import '../teacherstyle/TNewQuiz.css';

const TNewQuiz = () => {
  return (
    <div className="TCQnewclass-container">
      <StudentHeader /> {/* Top navbar */}
      <div className="TCQcontent-wrapper">
        <TeacherSNav /> {/* Side navbar */}
        <div className="TCQmain-content">
          <div className="TCQform-container">
            <div className="createclass"><h1>Create Quiz</h1></div>
            <form className="TCQnew-class-form">
              <select className="TCQtopic-dropdown" required>
                <option value="" disabled selected>Select Topic</option>
                <option value="addition">Addition</option>
                <option value="subtraction">Subtraction</option>
                <option value="multiplication">Multiplication</option>
                <option value="division">Division</option>
              </select>
              <select className="TCQstudent-dropdown" required>
                <option value="" disabled selected>Select Class</option>
                <option value="class4a">Class 4A</option>
                <option value="class4b">Class 4B</option>
                <option value="class4c">Class 4C</option>
                <option value="class4d">Class 4D</option>
              </select>
              <select className="TCQquestions-dropdown" required>
                <option value="" disabled selected>How many questions? (max 10)</option>
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
              <input
                type="number"
                className="TCQweighting-input"
                placeholder="Enter weighting in percentage (max 100%)"
                min="0"
                max="100"
                required
              />
              <button type="submit" className="TCQnew-class-button">Submit new Quiz</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TNewQuiz;
