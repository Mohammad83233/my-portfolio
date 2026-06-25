// src/App.js
import React from 'react';
import './index.css'; 
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} <span>Mohammad Nisham VM</span>. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;