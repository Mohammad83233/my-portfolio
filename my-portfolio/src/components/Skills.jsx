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
      <h2>Technical Skills</h2>
      
      <div className="technical-skills-grid">
        {/* Iterate through skill categories and their skills */}
        {Object.entries(skillsByCategory).map(([category, skills]) => (
          <div key={category} className="skill-category">
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

      <h2>Soft Skills</h2>
      <ul className="soft-skill-list">
        {SKILLS_DATA.soft.map((skill, index) => (
          <li key={index} className="soft-skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;