import React from "react";
import "./Footer.css";
import { FaBehance, FaGithub, FaLinkedin, FaFigma } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* ADD THIS WRAPPER DIV */}
      <div className="footer-content">
        <div className="social-links">
          <a
            href="https://github.com/saanvi05"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://in.linkedin.com/in/saanvisahoo"
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
      </div>{" "}
      {/* END OF THE WRAPPER DIV */}
    </footer>
  );
}

export default Footer;
