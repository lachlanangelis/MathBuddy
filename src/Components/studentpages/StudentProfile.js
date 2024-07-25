// src/Components/studentpages/StudentProfile.js
import React from 'react';
import StudentHeader from '../objects/StudentHeader';
import StudentSNav from '../objects/StudentSNav';
import '../studentstyle/StudentProfile.css';

const StudentProfile = () => {
  return (
    <div className="studentprofile-container">
      <StudentHeader /> {/* Top navbar */}
      <div className="Pcontent-wrapper">
        <StudentSNav /> {/* Side navbar */}
        <div className="Pmain-content">
          <h1 className="Profile-message">Profile</h1>
          <div className="profile-content">
            <div className="profile-header">
              <img src="/path-to-profile-icon.png" alt="Profile" className="profile-icon" />
              <div className="profile-name">
                <h2>Olivia Bennet</h2>
                <p>Student</p>
              </div>
            </div>
            <div className="profile-section">
              <h3>Profile Information <button className="edit-button">Edit</button></h3>
              <div className="profile-details">
                <div className="personal-info">
                  <h4>Personal Information</h4>
                  <p><strong>Date of Birth:</strong> June 23, 2003</p>
                  <p><strong>Gender:</strong> Female</p>
                  <p><strong>1st Nationality:</strong> <span className="nationality">Australian</span></p>
                </div>
                <div className="contact-details">
                  <h4>Contact Details</h4>
                  <p><strong>Email:</strong> profile@example.com</p>
                  <p>
                    <strong>City:</strong> Wollongong
                    <strong>State/Province:</strong> NSW
                    <strong>Postal Code:</strong> 2500
                  </p>
                  <p><strong>Address:</strong> UOW</p>
                  <p><strong>Mobile Phone:</strong> +61 000 000 000</p>
                  <p><strong>Home Phone:</strong> 000 000 000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;