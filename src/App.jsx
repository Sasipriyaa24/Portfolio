import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Profiles from "./components/Profiles.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { personal } from "./data/portfolioData.js";

export default function App() {
  // Browser tab title comes from your name in portfolioData.js
  useEffect(() => {
    document.title = `${personal.name} | Portfolio`;
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Profiles />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
