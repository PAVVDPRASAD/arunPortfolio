import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Home theme={theme} />
      <About theme={theme} />
      <Projects theme={theme} />
      <Skills theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;