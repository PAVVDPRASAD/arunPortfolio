import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route exact path="/" element={<Home theme={theme} />} />
          <Route exact path="/about" element={<About theme={theme} />} />
          <Route exact path="/projects" element={<Projects theme={theme} />} />
          <Route exact path="/skills" element={<Skills theme={theme} />} />
          <Route exact path="/contact" element={<Contact theme={theme} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
