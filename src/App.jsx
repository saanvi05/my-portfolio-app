// src/App.jsx
import React, { useState, useEffect } from 'react';

// Import all your components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light'); // Default to light

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  // This useEffect hook is responsible for applying the class to the body
  useEffect(() => {
    localStorage.setItem('theme', theme);
    // Remove any existing theme classes
    document.body.classList.remove('theme-light', 'theme-dark');
    // Add the current theme class
    document.body.classList.add(`theme-${theme}`);
  }, [theme]); // This effect runs every time the 'theme' state changes

  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <AnimatedSection>
          <About />
        </AnimatedSection>
        <AnimatedSection>
          <Skills />
        </AnimatedSection>
        <AnimatedSection>
          <Projects />
        </AnimatedSection>
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
      <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;