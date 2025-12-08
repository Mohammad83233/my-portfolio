// src/components/Projects.jsx
import React from 'react';
import { PROJECTS_DATA } from '../data';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      
      <div className="projects-grid">
        {PROJECTS_DATA.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            
            <div className="technologies">
              <h4>Technologies:</h4>
              <ul>
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            
            <div className="contributions">
              <h4>Contributions:</h4>
              <ul>
                {project.contributions.map((contribution, index) => (
                  <li key={index}>{contribution}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
