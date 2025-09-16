// src/components/ProjectCard.jsx
import React from 'react';
import './ProjectCard.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Icons for links

// This component receives 'props' (properties) from the Projects component.
// We are "destructuring" them into individual variables like { image, title, ... }
function ProjectCard({ image, title, description, githubLink, liveLink }) {
  return (
    <div className="project-card">
      <div className="card-image-container">
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-links">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="card-link">
            <FaGithub /> Code
          </a>
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="card-link">
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;