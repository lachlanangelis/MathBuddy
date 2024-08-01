// src/Components/studentpages/StudentQuizI.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import StudentHeader from '../objects/StudentHeader';
import StudentSNav from '../objects/StudentSNav';
import '../studentstyle/StudentQuizI.css';

const StudentQuizI = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNextButtonClick = () => {
    navigate('/studentquizcomplete'); // Navigate to StudentQuizComplete on click
  };

  return (
    <div className="studentquiz-container">
      <StudentHeader /> {/* Top navbar */}
      <div className="SQIcontent-wrapper">
        <StudentSNav /> {/* Side navbar */}
        <div className="SQImain-content">
          <h1 className="quiz-message">Quiz - Addition</h1>
          <div className="question-container">
            <div className="question q-1">
              <p>Q1. Sally has 12 apples. She gives 4 apples to her friend. How many apples does she have left?</p>
              <form className="answer-form">
                <input type="text" name="answer1" placeholder="Enter your answer" />
                <div className="SQIButton">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
            <div className="question q-2">
              <p>Q2. Tom has 3 boxes of crayons. Each box contains 8 crayons. How many crayons does he have in total?</p>
              <form className="answer-form">
                <input type="text" name="answer2" placeholder="Enter your answer" />
                <div className="SQIButton">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
            <div className="question q-3">
              <p>Q3. Ben has 15 marbles. He buys 9 more marbles from the store and then gives 5 marbles to his friend. How many marbles does Ben have now?</p>
              <form className="answer-form">
                <input type="text" name="answer3" placeholder="Enter your answer" />
                <div className="SQIButton">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="Question-box">
          <div className="header-box">Questions</div>
          <div className="SQI-questionsbox">
            <div className="SQI1">1</div>
            <div className="SQI2">2</div>
            <div className="SQI3">3</div>
            <div className="SQI4">4</div>
            <div className="SQI5">5</div>
          </div>
          <div className="SQI-questionsbox">
            <div className="SQI6">6</div>
            <div className="SQI7">7</div>
            <div className="SQI8">8</div>
            <div className="SQI9">9</div>
            <div className="SQI10">10</div>
          </div>
        </div>
        <div className="next-button">
          <button type="button" className="next-btn" onClick={handleNextButtonClick}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default StudentQuizI;
