// src/Components/studentpages/StudentQuizComplete.js
import React from 'react';
import StudentHeader from '../objects/StudentHeader';
import StudentSNav from '../objects/StudentSNav';
import '../studentstyle/StudentQuizComplete.css';

const StudentQuizComplete = () => {
  return (
    <div className="studentquizcomplete-container">
      <StudentHeader /> {/* Top navbar */}
      <div className="sqc-content-wrapper">
        <StudentSNav /> {/* Side navbar */}
        <div className="sqc-main-content">
          <h1 className='sqc-h1'>Quiz Complete!</h1>
          <hr className='sqc-line'></hr>
          <h2 className='sqc-h2'>Feedback:</h2>
          <h3 className='sqc-h3'>Quiz completed: Friday 1/08/2024 9:34</h3>
          <table className='sqc-feedback-table'>
            <thead>
              <tr>
                <th>Your mark</th>
                <th>AI Feedback</th>
                <th>Teacher feedback</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2/3 66.66%</td>
                <td>Nice work! Keep practicing your addition</td>
                <td>In progress...</td>
              </tr>
            </tbody>
          </table>
          <h2 className='sqc-h2'>Learning Resources:</h2>
          <table className='sqc-learning-table'>
            <thead>
              <tr>
                <th>Learning resources for addition!</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Follow along youtube video for word addition problems</td>
                <td>https://www.youtube.com/watch?v=39duozt-wQk&pp=ygUkbWF0aCB3b3JkIHF1ZXN0aW9uIGFkZGl0aW9uIHByYWN0aWNl</td>
              </tr>
              <tr>
                <td></td>
                <td>https://www.youtube.com/watch?v=HGDUt7vwBbg</td>
              </tr>
              <tr>
                <td>Web article for addition tips and tricks</td>
                <td>https://www.mathsisfun.com/numbers/addition-tips-tricks.html</td>
              </tr>
              <tr>
                <td>Interactive addition game</td>
                <td>https://www.coolmathgames.com/0-plus-10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentQuizComplete;
