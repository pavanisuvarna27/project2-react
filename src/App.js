import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import About from "./components/About";
import Footer from "./components/Footer";
import Project from "./components/Project";
import SkillsSection from "./components/SkillsSection";
import Recommondation from "./components/Recommondation";

function App() {
  return (
    <div>
      <Navbar />
      <Title name="Pavani" />
      <Recommondation />
      <SkillsSection />
      <About />
      <Project />
      <Footer />
      
    </div>
  );
  

}

export default App;
