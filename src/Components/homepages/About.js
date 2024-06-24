// src/components/pages/About.js
import React from 'react';
import '../homepagestyle/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="content">
        <div className="text-section">
          <h2>About</h2>
          <p>
            MathBuddy is an innovative educational platform designed to revolutionize the way students learn and master mathematics.
            Combining the power of artificial intelligence with cutting-edge pedagogical techniques, our app provides a personalized and engaging
            learning experience for students of all ages and skill levels.
          </p>
          <h2>Our Mission</h2>
          <p>
            Our mission is to make math accessible, enjoyable, and understandable for everyone. We believe that with the right tools and guidance,
            every student can excel in math. MathBuddy is here to support and inspire learners to achieve their full potential in mathematics.
          </p>
        </div>
        <div className="image-section">
          <img src={`${process.env.PUBLIC_URL}/images/home/about-image.png`} alt="Math Buddy About" className="about-image" />
        </div>
      </div>
    </div>
  );
};

export default About;
