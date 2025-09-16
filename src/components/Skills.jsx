// src/components/Skills.jsx
import React from "react";
import "./Skills.css";
import {
  SiAdobexd,
  SiAdobeillustrator,
  SiAdobephotoshop,
} from "react-icons/si";

// Import icons from the react-icons library
// We are using 'fa' for Font Awesome icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
// You can find more icons at: https://react-icons.github.io/react-icons/

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        <div className="skill-item">
          <FaHtml5 className="skill-icon" />
          <p>HTML5</p>
        </div>

        <div className="skill-item">
          <FaCss3Alt className="skill-icon" />
          <p>CSS3</p>
        </div>

        <div className="skill-item">
          <FaJsSquare className="skill-icon" />
          <p>JavaScript</p>
        </div>

        <div className="skill-item">
          <FaReact className="skill-icon" />
          <p>React</p>
        </div>

        <div className="skill-item">
          <FaNodeJs className="skill-icon" />
          <p>Node.js</p>
        </div>

        <div className="skill-item">
          <FaGitAlt className="skill-icon" />
          <p>Git</p>
        </div>
        <div className="skill-item">
          <FaFigma className="skill-icon" />
          <p>Figma</p>
        </div>

        <div className="skill-item">
          <SiAdobexd className="skill-icon" />
          <p>Adobe XD</p>
        </div>

        <div className="skill-item">
          <SiAdobeillustrator className="skill-icon" />
          <p>Adobe Illustrator</p>
        </div>

        <div className="skill-item">
          <SiAdobephotoshop className="skill-icon" />
          <p>Adobe XD</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
