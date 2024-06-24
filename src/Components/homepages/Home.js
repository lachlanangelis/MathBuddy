// src/components/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../homepagestyle/Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className="home-page">
      <header className="header">
      </header>
      <div className="container">
        <main className="main-content">
          <div className="welcome-section">
            <h1>Welcome to</h1>
            <h1>your new</h1>
            <h1><em>favorite</em> math</h1>
            <h1>tool</h1>
            <img src={`${process.env.PUBLIC_URL}/images/home/Mathbuddylogo.png`} alt="Math Buddy Logo" className="welcome-logo" />
            <div className="buttons">
              <button className="action-button" onClick={handleLoginClick}>Login</button>
              <button className="action-button" onClick={handleSignUpClick}>Sign Up</button>
            </div>
            <p className="description">
              What is MathBuddy? MathBuddy is a collaborative mathematics tutoring service that utilizes modern day AI technologies alongside your own teachers' knowledge and experience to bring you a simple and productive math tutoring tool.
            </p>
          </div>
          <div className="images-section">
            <img src={`${process.env.PUBLIC_URL}/images/home/screenshot1.png`} alt="Screenshot 1" className="screenshot" />
            <img src={`${process.env.PUBLIC_URL}/images/home/screenshot2.png`} alt="Screenshot 2" className="screenshot" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
