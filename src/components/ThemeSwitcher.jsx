// src/components/ThemeSwitcher.jsx
import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeSwitcher.css';

function ThemeSwitcher({ theme, toggleTheme }) {
  return (
    <button className="theme-switcher" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default ThemeSwitcher;