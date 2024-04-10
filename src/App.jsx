import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import WorkingExperience from "./components/WorkingExperience/WorkingExperience";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <BrowserRouter>
      <>
        <Navbar />
        <div id="home" className="container">
          <Hero />
        </div>
        <div id="skill" className="container">
          <Skills />
        </div>
        <div id="work-experience" className="container">
          <WorkingExperience />
        </div>
        <div id="contact" className="container">
          <ContactMe />
        </div>
        <Footer />
      </>
    // </BrowserRouter>
  );
}

export default App;
