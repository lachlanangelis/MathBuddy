// src/Components/studentpages/StudentClasses.js
import React from 'react';
import StudentHeader from '../objects/StudentHeader';
import StudentSNav from '../objects/StudentSNav';
import ClassesBox from '../objects/ClassBox'; // Import the ClassesBox component
import '../studentstyle/StudentClasses.css';

const StudentClasses = () => {
  return (
    <div className="studentclasses-container">
      <StudentHeader /> {/* Top navbar */}
      <div className="SCcontent-wrapper">
        <StudentSNav /> {/* Side navbar */}
        <div className="SCmain-content">
          <h1 className="classes-message">Classes</h1>
          <div className="SCMain-Container">
            {/* Add ClassesBox components here */}
            <ClassesBox
              icon="%"
              title="Fractions and Decimals"
              time="Monday 9am"
              topics={10}
              tasks={5}
            />
            {/* You can add more ClassesBox components as needed */}
            <ClassesBox
              icon="∑"
              title="Algebra Basics"
              time="Tuesday 2pm"
              topics={8}
              tasks={4}
            />
            <ClassesBox
              icon="△"
              title="Geometry Fundamentals"
              time="Wednesday 10am"
              topics={12}
              tasks={6}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentClasses;