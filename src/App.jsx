// src/App.jsx
import React, { useState, useEffect } from "react";

// Import all your components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimatedSection from "./components/AnimatedSection";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = `theme-${theme}`;
  }, [theme]);

  return (
    <div className="app-container">
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
