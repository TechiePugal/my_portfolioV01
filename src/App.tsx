import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div id="home">
        <Header />
      </div>
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;