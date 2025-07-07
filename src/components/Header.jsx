import React, { useRef } from "react";

const Header = () => {
  const navLinksRef = useRef(null);

  const toggleMenu = () => {
    if (navLinksRef.current) {
      navLinksRef.current.classList.toggle("hidden");
    }
  };

  return (
    <header
      id="header"
      className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-[url('/bg-pattern.svg')] bg-center bg-no-repeat bg-cover" />
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex justify-end gap-4 text-xl mb-6">
          <a href="mailto:aidenjk2003@gmail.com" aria-label="Email">
            <i className="fa-solid fa-paper-plane"></i>
          </a>
          <a href="tel:+7035418879" aria-label="Phone">
            <i className="fa-solid fa-phone"></i>
          </a>
          <a
            href="https://github.com/aidenjk2003"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/aiden-kim-55916814b/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>

        <nav className="flex justify-between items-center mb-12">
          <a href="#header" className="text-2xl font-bold text-white">
            Aiden Kim
          </a>
          <ul ref={navLinksRef} className="hidden md:flex gap-8 font-medium">
            <li>
              <a href="#header" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-400">
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-blue-400">
                Experience
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-blue-400">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
          <button
            className="md:hidden text-white text-2xl"
            onClick={toggleMenu}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </nav>

        <div className="flex flex-col lg:flex-row items-center gap-96 min-h-[70vh]">
          <div className="flex-1 max-w-xl">
            <p className="text-blue-400 font-medium mb-2">
              Computer Science Student
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text">
                Aiden Kim
              </span>
            </h1>
            <p className="text-slate-300 mb-6">
              I am a rising senior and student-athlete at Haverford College
              pursuing Computer Science. I am passionate about creating
              innovative solutions and building meaningful digital experiences.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#portfolio"
                className="px-6 py-3 bg-blue-600 rounded-lg font-semibold shadow hover:-translate-y-1 transition"
              >
                <i className="fa-solid fa-folder-open mr-2"></i> View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition"
              >
                <i className="fa-solid fa-message mr-2"></i> Get In Touch
              </a>
            </div>
          </div>
          <div className="flex-1 max-w-lg w-full">
            <img
              src="/images/background.jpg"
              alt="Aiden Kim profile"
              className="w-full rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
