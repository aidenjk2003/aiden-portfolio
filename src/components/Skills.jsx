import React from "react";

const skillSections = [
  {
    title: "Programming Languages",
    icon: "fa-code",
    skills: ["Python", "JavaScript", "Java", "C++", "SQL"],
  },
  {
    title: "Web Development",
    icon: "fa-laptop-code",
    skills: ["HTML/CSS", "React", "Node.js", "Vue.js"],
  },
  {
    title: "Data Analytics",
    icon: "fa-chart-line",
    skills: ["Pandas", "NumPy", "Matplotlib", "Tableau", "Excel"],
  },
  {
    title: "Design & UX",
    icon: "fa-palette",
    skills: ["UI/UX Design", "Figma"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-28 md:py-32 opacity-0 translate-y-10 transition-all duration-700"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Technical skills and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillSections.map(({ title, icon, skills }) => (
            <div
              key={title}
              className="bg-white p-6 rounded-xl shadow hover:-translate-y-1 transition"
            >
              <h3 className="text-xl font-semibold flex items-center gap-2 mb-4 text-gray-900">
                <i className={`fa-solid ${icon} text-blue-600 text-2xl`}></i>
                {title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
