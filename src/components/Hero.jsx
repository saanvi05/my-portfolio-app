// src/components/Hero.jsx
import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="section-content-container hero-inner">
        <div className="hero-content">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name">Saanvi Smakshi Sahoo</h1>
          <h2 className="hero-title">A Creative UI UX Designer & Developer.</h2>
          <p className="hero-description">
            Passionate about building beautiful and functional web applications.
            Let's create something amazing together!
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn primary-btn">
              Let's Talk
            </a>
            <a href="/Saanvi_resume.pdf" download className="btn secondary-btn">
              Download CV
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src="images/Photo.jpg" alt="Your Name" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
