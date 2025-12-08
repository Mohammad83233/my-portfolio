// src/components/About.jsx
import React from 'react';
import { PROFILE_DATA, EDUCATION_DATA } from '../data'; // Import relevant data

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      
      {/* Profile Summary */}
      <div className="profile-summary">
        <p>{PROFILE_DATA.summary}</p>
      </div>

      <div className="about-details">
        {/* Education Section */}
        <div className="education-container">
          <h3>Education</h3>
          {EDUCATION_DATA.map((edu, index) => (
            <div key={index} className="education-item">
              <h4>{edu.degree} ({edu.year})</h4>
              <p>
                {edu.institution}, {edu.university}
              </p>
              {edu.gpa && <p>GPA: {edu.gpa}</p>}
              {/* Added a check for 'Grade' to cover the Diploma entry */}
              {edu.grade && <p>Grade: {edu.grade}</p>} 
            </div>
          ))}
        </div>

        {/* Certifications Section (Based on CV data) */}
        <div className="certifications-container">
          <h3>Certifications</h3>
          <ul>
            <li>DataBase Management System - NPTEL </li>
            <li>Data Analytics Essentials - CISCO </li>
            <li>Big Data 101 - IBM </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;