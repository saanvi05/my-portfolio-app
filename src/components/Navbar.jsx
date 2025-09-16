// src/components/Navbar.jsx
import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        {" "}
        {/* ADD THIS WRAPPER */}
        <div className="navbar-logo">
          <a href="#home">Saanvi S. Sahoo</a>
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>{" "}
      {/* END OF WRAPPER */}
    </nav>
  );
}

export default Navbar;
