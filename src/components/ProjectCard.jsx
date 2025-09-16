// src/components/ProjectCard.jsx
import React from "react";
import "./ProjectCard.css";
import { FaGithub, FaExternalLinkAlt, FaBehance } from "react-icons/fa";

// This component receives 'props' (properties) from the Projects component.
// We are "destructuring" them into individual variables like { image, title, ... }
function ProjectCard({
  image,
  title,
  description,
  githubLink,
  liveLink,
  liveLinkType,
}) {
  return (
    <div className="project-card">
      <div className="card-image-container">
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="card-links">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              <FaGithub /> Code
            </a>
          )}
          {liveLink &&
            // This is the IF/ELSE check:
            // IF liveLinkType is 'behance'...
            (liveLinkType === "behance" ? (
              // ...render the Behance link.
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                <FaBehance /> Go to Behance
              </a>
            ) : (
              // ELSE, render the default Live Demo link.
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
