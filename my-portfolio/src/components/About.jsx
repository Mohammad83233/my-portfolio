// src/components/About.jsx
import React from 'react';
import { PROFILE_DATA, EDUCATION_DATA, LANGUAGES_DATA } from '../data';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title"><span>About</span> Me</h2>
      <p className="section-subtitle">Education, Certifications & Languages</p>
      
      {/* Profile Summary */}
      <div className="profile-summary">
        <p>{PROFILE_DATA.summary}</p>
      </div>

      <div className="about-details">
        {/* Education Section */}
        <div className="education-container glass-card">
          <h3><span className="icon">🎓</span> Education</h3>
          {EDUCATION_DATA.map((edu, index) => (
            <div key={index} className="education-item">
              <h4>
                {edu.degree}
                <span className="education-year">{edu.year}</span>
              </h4>
              <p>
                {edu.institution}
                {edu.university && `, ${edu.university}`}
              </p>
              {edu.gpa && <p className="education-gpa">CGPA: {edu.gpa}</p>}
              {edu.grade && <p className="education-gpa">Grade: {edu.grade}</p>}
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="certifications-container glass-card">
          <h3><span className="icon">📜</span> Certifications</h3>
          <ul>
            {PROFILE_DATA.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>

        {/* Languages Section */}
        <div className="languages-container glass-card">
          <h3><span className="icon">🌐</span> Languages Known</h3>
          <div className="languages-list">
            {LANGUAGES_DATA.map((lang, index) => (
              <span key={index} className="language-tag">{lang}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;