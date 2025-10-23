import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe.Jsx";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="grid items-center gap-6 p-4 md:pt-24">
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
