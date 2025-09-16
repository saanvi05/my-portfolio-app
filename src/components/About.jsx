// src/components/About.jsx
import React from 'react';
import './About.css';
// import aboutImage from '../assets/about-me.jpg'; // If you have an image for this section

function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        {/* If you have an image, uncomment and use it here */}
        {/* <div className="about-image">
          <img src={aboutImage} alt="About Me" />
        </div> */}
        <div className="about-text">
          <p>
            Hello! I'm Saanvi Smakshi Sahoo, a passionate and aspiring web developer with a keen
            interest in creating engaging user interface and user experiences. My journey into web development
            began when I realized the power of code to bring ideas to life on the internet.
          </p>
          <p>
            I enjoy learning new technologies and solving complex problems. I'm proficient in
            HTML, CSS, JavaScript, React, also I have expertise in UI UX Designing.
            I'm always eager to take on new challenges and collaborate on exciting projects.
          </p>
          <p>
            Outside of coding and designing Interface, I enjoy Sketching the most.
            I believe in continuous learning and always striving to improve my craft.
            Feel free to connect with me!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;