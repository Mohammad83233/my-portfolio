/// src/App.js (Verify this structure)
import React from 'react';
import './index.css'; 
import Header from './components/Header'; // <-- Check this
import Hero from './components/Hero';
import About from './components/About'; // <-- Check this
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact'; // <-- Check this

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
    </div>
  );
}

export default App;