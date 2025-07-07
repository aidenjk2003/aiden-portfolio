import React from "react";

const projects = [
  {
    title: "Bible App",
    image: "/images/bible-app.png",
    description:
      "A beautifully styled interactive Bible app built with Vue.js and TypeScript, featuring verse highlighting, bookmarks, and a dark mode toggle.",
    tech: ["Vue", "TypeScript", "CSS"],
    github: "https://github.com/aidenjk2003/bible-app",
  },
  {
    title: "AI Flashcard Generator",
    image: "/images/flashcard-generator.png",
    description:
      "Web tool that extracts content from documents and generates intelligent flashcards using OpenAI API. Designed to optimize learning efficiency.",
    tech: ["React", "OpenAI API", "Node.js"],
    github: "https://github.com/aidenjk2003/flashcard-generator",
  },
  {
    title: "AI-Powered Task Manager",
    image: "/images/taskmaster.png",
    description:
      "A modern task management web app featuring real-time task creation, completion tracking, and an AI assistant that generates tasks automatically using natural language processing.",
    tech: ["Vue", "Firebase", "OpenAI API", "JavaScript"],
    github: "https://github.com/aidenjk2003/TaskMaster",
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="py-28 md:py-32 opacity-0 translate-y-10 transition-all duration-700"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Portfolio</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Some of the projects I've worked on
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-xl overflow-hidden shadow hover:-translate-y-1 transition"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {proj.title}
                </h3>
                <p className="text-gray-600 mb-4">{proj.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800"
                >
                  <i className="fa-brands fa-github mr-2"></i> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
