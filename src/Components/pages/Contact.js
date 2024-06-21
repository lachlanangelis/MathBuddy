// src/components/pages/Contact.js
import React from 'react';
import '../pagestyle/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="form-container">
        <div className="form-section">
          <h2>School Setup</h2>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Schools, please leave school information and contact details, we will be in touch to register your school" required></textarea>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
        <div className="form-section">
          <h2>Contact Inquiries</h2>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
        <div className="form-section">
          <h2>Feedback</h2>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Feedback" required></textarea>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
