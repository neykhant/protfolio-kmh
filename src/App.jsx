import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import WorkingExperience from "./components/WorkingExperience/WorkingExperience";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <WorkingExperience />
        <ContactMe />
      </div>
      <Footer />
    </>
  );
}

export default App;
