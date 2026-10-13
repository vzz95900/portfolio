import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Process from './components/Process';
import Projects from './components/Projects';
import Education from './components/Education';
import Competitive from './components/Competitive';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Process />
      <Projects />
      <Education />
      <Competitive />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
