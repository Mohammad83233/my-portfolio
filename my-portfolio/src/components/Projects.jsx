// src/components/Projects.jsx
import React from 'react';
import { PROJECTS_DATA } from '../data';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My <span>Projects</span></h2>
      <p className="section-subtitle">Things I've built & contributed to</p>
      
      <div className="projects-grid">
        {PROJECTS_DATA.map((project) => (
          <div key={project.id} className="project-card glass-card">
            <div className="project-number">0{project.id}</div>
            <h3>{project.title}</h3>
            
            <div className="tech-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>

            <p className="project-description">{project.description}</p>
            
            <div className="contributions">
              <h4>Key Contributions</h4>
              <ul>
                {project.contributions.map((contribution, index) => (
                  <li key={index}>{contribution}</li>
                ))}
              </ul>
            </div>

            {project.github && (
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  💻 View on GitHub
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
