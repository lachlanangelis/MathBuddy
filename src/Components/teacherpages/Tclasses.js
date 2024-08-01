// src/components/pages/TActiveTasks.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import StudentHeader from '../objects/StudentHeader';
import TeacherSNav from '../objects/TeacherSNav'; // Replace with appropriate component if available
import '../teacherstyle/Tclasses.css';

const Tclasses = () => {
  const navigate = useNavigate();

  const handleCreateClassClick = () => {
    navigate('/tnewclass'); // Navigate to the TNewClass component
  };

  return (
    <div className="teacherclasses-container"> {/* Updated container class */}
      <StudentHeader />{/* Top navbar */}
      <div className="TCcontent-wrapper"> {/* Updated content wrapper class */}
        <TeacherSNav /> {/* Side navbar */}
        <div className="TCtable-container">
          <div className="TChome-message">
            <h1>Active Classes</h1>
          </div>
          <table className='line'></table>
          <hr></hr>
          <table className='TCtasks-table'>
            <thead>
              <tr>
                <th></th>
                <th>Class Name</th>
                <th>#Students</th>
                <th>Current Topic</th>
                <th>Active Tasks</th>
              </tr>
            </thead>
            <tbody>
              <tr className="TCtable-row">
                <td><div className='color'></div></td>
                <td>Class 4b</td>
                <td>10</td>
                <td>Division</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
          <h5>no other quizzes</h5>
          <button className='TCcreate-quiz-button' onClick={handleCreateClassClick}>Create Class</button>
        </div>
      </div>
    </div>
  );
};

export default Tclasses;
