import React, { useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    const revealOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;
      document.querySelectorAll("section").forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top < triggerBottom) {
          section.classList.add("opacity-100", "translate-y-0");
          section.classList.remove("opacity-0", "translate-y-10");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("load", revealOnScroll);

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
      window.removeEventListener("load", revealOnScroll);
    };
  }, []);

  return (
    <div className="font-sans bg-white text-gray-900 scroll-smooth">
      <Header />
      <main>
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
