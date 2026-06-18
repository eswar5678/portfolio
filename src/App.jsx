import React from 'react';
import './App.css';
import CustomCursor from './components/CustomCursor';
import ParticlesBackground from './components/ParticlesBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-wrapper">
      <CustomCursor />
      <ParticlesBackground />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
