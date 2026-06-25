// src/components/Skills.jsx
import React from 'react';
import { SKILLS_DATA } from '../data'; 

const Skills = () => {
  // Group the technical skills by their category
  const skillsByCategory = SKILLS_DATA.technical.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill.name);
    return acc;
  }, {});

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Technical <span>Skills</span></h2>
      <p className="section-subtitle">Technologies & tools I work with</p>
      
      <div className="technical-skills-grid">
        {Object.entries(skillsByCategory).map(([category, skills]) => (
          <div key={category} className="skill-category glass-card">
            <h3>{category}</h3>
            <ul className="skill-list">
              {skills.map((skill, index) => (
                <li key={index} className="skill-item">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="soft-skills-container">
        <h3 className="soft-skills-title">Soft Skills</h3>
        <ul className="soft-skill-list">
          {SKILLS_DATA.soft.map((skill, index) => (
            <li key={index} className="soft-skill-item">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;