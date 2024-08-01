// src/components/teacherPages/TNewClass.js
import React from 'react';
import StudentHeader from '../objects/StudentHeader';
import TeacherSNav from '../objects/TeacherSNav';
import '../teacherstyle/TNewClass.css';

const TNewClass = () => {
  return (
    <div className="TCInewclass-container">
      <StudentHeader /> {/* Top navbar */}
      <div className="TCIcontent-wrapper">
        <TeacherSNav /> {/* Side navbar */}
        <div className="TCImain-content">
          <div className="TCIform-container">
            <div className = "createclass"><h1>Create Class</h1></div>
            
            <form className="TCInew-class-form">
              <select className="TCItopic-dropdown" required>
                <option value="" disabled selected>Select Topic</option>
                <option value="math">Addition</option>
                <option value="science">Multiplication</option>
                <option value="history">Division</option>
                <option value="art">Substraction</option>
               
              </select>
              <select className="TCIstudent-dropdown" required>
                <option value="" disabled selected>Select Students</option>
                <option value="john">John Doe</option>
                <option value="jane">Jane Smith</option>
                <option value="michael">Michael Johnson</option>
                <option value="emily">Emily Davis</option>
                <option value="chris">Chris Brown</option>
                <option value="sarah">Sarah Wilson</option>
              </select>
              <button type="submit" className="TCInew-class-button">Submit new Class</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default TNewClass;
