// src/components/Projects.jsx
import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const projectData = [
  {
    image: "/images/project1.jpg",
    title: "E-Commerce Website",
    description:
      "A fully Designed e-commerce platform designed with Figma, featuring product search, a shopping cart, and a checkout process.",
    liveLink: "https://www.behance.net/gallery/205156849/Car-Dashboard",
  },
  {
    image: "/images/project2.jpg",
    title: "Front-end Adventure",
    description:
      "A responsive code editor game application that helps users to learn html css and js by simply playing games and also it has an built in AI in the hints section to help the user to learn.",
    githubLink: "https://github.com/saanvi05/frontend-adventure",
    liveLink: "https://saanvi-frontend-adventure.pages.dev/",
  },
  {
    image: "/images/project3.jpg",
    title: "Portfolio Website",
    description:
      "A personal portfolio website (like this one!) to showcase my skills and projects, built with modern web technologies like Vite and React.",
    githubLink: "https://github.com/saanvi05/my-portfolio-app",
    liveLink: "https://my-portfolio-app-2zz.pages.dev/",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
