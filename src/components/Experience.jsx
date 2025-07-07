import React from "react";

const experiences = [
  {
    date: "Jan 2025 - Present",
    title: "Software Developer Intern",
    company: "Blue Ridge Dynamics • Chantilly, VA",
    description:
      "Currently working on software development projects, contributing to full-stack applications and gaining hands-on experience with modern development practices.",
  },
  {
    date: "July 2024 - August 2024",
    title: "Data Analytics Extern",
    company: "Webacy • Remote",
    description:
      "Analyzed user data and behavior patterns to provide insights for product improvement. Worked with large datasets and created visualizations to communicate findings to stakeholders.",
  },
  {
    date: "Sept 2024 - Dec 2024",
    title: "Study Abroad Program",
    company: "Yonsei University • Seoul, South Korea",
    description:
      "Participated in a semester-long academic exchange focused on computer science and cultural immersion. Completed upper-level coursework in algorithms and Korean language while engaging in global collaboration projects.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-28 md:py-32 opacity-0 translate-y-10 transition-all duration-700"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Experience</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            My professional journey and key experiences
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-[2px] before:bg-gray-300">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 flex items-start ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="w-1/2 px-6">
                <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
                  <div className="text-blue-600 font-semibold mb-1">
                    {exp.date}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {exp.title}
                  </h3>
                  <div className="text-gray-600 mb-3">{exp.company}</div>
                  <p className="text-gray-700 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
