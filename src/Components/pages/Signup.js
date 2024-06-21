// src/components/pages/Signup.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pagestyle/Signup.css';

const Signup = () => {
  const navigate = useNavigate();

  const handleTeacherClick = () => {
    navigate('/teacher-signup');
  };

  return (
    <div className="signup-page">
      <h1>Sign up!</h1>
      <form className="signup-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Phone" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button type="submit" className="signup-button">Sign up</button>
        <button type="button" className="teacher-button" onClick={handleTeacherClick}>Teacher? Click here!</button>
      </form>
    </div>
  );
};

export default Signup;
