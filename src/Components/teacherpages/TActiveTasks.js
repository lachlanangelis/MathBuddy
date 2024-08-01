// src/components/pages/TActiveTasks.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import StudentHeader from '../objects/StudentHeader';
import TeacherSNav from '../objects/TeacherSNav'; // Replace with appropriate component if available
import '../teacherstyle/TActiveTasks.css';

const TActiveTasks = () => {
  const navigate = useNavigate();

  const handleCreateClassClick = () => {
    navigate('/tnewquiz'); // Navigate to the TNewClass component
  };
  return (
    <div className="teacherquiz-container"> {/* Updated container class */}
      <StudentHeader />{/* Top navbar */}
      <div className="TQcontent-wrapper"> {/* Updated content wrapper class */}
        <TeacherSNav /> {/* Side navbar */}
        <div className="TQtable-container">
          <div className = "TQhome-message">
          <h1>Active Quizzes</h1>
          </div>
          <table className='line'></table>
          <hr></hr>
          <table className='TQtasks-table'>
            <thead>
              <tr>
                <th></th>
                <th>Class Name</th>
                <th>Completion %</th>
                <th>Current Topic</th>
                <th>Average Mark</th>
              </tr>
            </thead>
            <tbody>
              <tr className="TQtable-row">
                <td><div className='color'></div></td>
                <td>4A</td>
                <td>85%</td>
                <td>*division*</td>
                <td>68%</td>
              </tr>
            </tbody>
          </table>
          <h5>no other quizzes</h5>
          <button className='TQcreate-quiz-button' onClick={handleCreateClassClick}>Create Quiz</button>
        </div>
      </div>
    </div>
  );
};

export default TActiveTasks;
