// src/components/Footer.jsx
import React from "react";
import "./Footer.css";
import { FaBehance, FaGithub, FaLinkedin, FaFigma } from "react-icons/fa"; // Example social icons

function Footer() {
  const currentYear = new Date().getFullYear(); // Automatically gets the current year

  return (
    <footer className="footer">
      <div className="social-links">
        <a
          href="https://github.com/saanvi05"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/saanvisahoo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://behance.net/saanvisahoo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBehance />
        </a>

        <a
          href="https://docs.google.com/document/d/1Vf8_4Aqypcy5WglHJ7Vg83fKyMzi_OcNz3ohHsT6Jw8/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFigma />
        </a>
      </div>
      <p className="copyright-text">
        &copy; {currentYear} Saanvi S. Sahoo. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
