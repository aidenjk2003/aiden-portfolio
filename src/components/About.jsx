import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-28 md:py-32 opacity-0 translate-y-10 transition-all duration-700"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">About Me</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            I am a dedicated computer science student with a passion for
            technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="/images/user.jpeg"
              alt="Aiden Kim profile"
              className="rounded-xl shadow-xl w-full"
            />
          </div>
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I am a rising senior at Haverford College, pursuing a degree in
              Computer Science. I was also a former student-athlete on the
              varsity tennis team, competing at the second singles position.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I am very passionate about leveraging technology to solve
              real-world problems and create meaningful digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
