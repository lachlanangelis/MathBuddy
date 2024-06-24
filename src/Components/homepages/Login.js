// src/components/pages/Login.js
import React from 'react';
import '../homepagestyle/Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <h1>Welcome Back</h1>
      <h2>Sign In!</h2>
      <form className="login-form">
        <div className="input-container">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="input-container">
          <input type="password" placeholder="Password" required />
        </div>
        <div className="options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#forgot-password">Forgot Password?</a>
        </div>
        <button type="submit" className="login-button">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
