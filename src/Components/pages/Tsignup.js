// src/components/pages/Tsign.js
import React from 'react';
import '../pagestyle/Tsignup.css'; // Reuse the same styles if applicable

const Tsign = () => {
  return (
    <div className="signup-page">
      <h1>Teacher Sign up!</h1>
      <form className="signup-form">
        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="Academy/Institution Name" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Phone" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button type="submit" className="signup-button">Sign up</button>
      </form>
    </div>
  );
};

export default Tsign;
