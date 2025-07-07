import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-28 md:py-32 opacity-0 translate-y-10 transition-all duration-700"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Contact</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to
            say hello
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg hover:bg-white hover:shadow">
                <i className="fa-solid fa-envelope text-blue-600 text-xl w-6 text-center"></i>
                <a
                  href="mailto:aidenjk2003@gmail.com"
                  className="text-gray-800 font-medium"
                >
                  aidenjk2003@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg hover:bg-white hover:shadow">
                <i className="fa-solid fa-phone text-blue-600 text-xl w-6 text-center"></i>
                <a href="tel:+7035418879" className="text-gray-800 font-medium">
                  +1 (703) 541-8879
                </a>
              </div>
              <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg hover:bg-white hover:shadow">
                <i className="fa-brands fa-linkedin text-blue-600 text-xl w-6 text-center"></i>
                <a
                  href="https://www.linkedin.com/in/aiden-kim-55916814b/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-800 font-medium"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formspree.io/f/moqggowy"
            method="POST"
            className="bg-gray-50 p-8 rounded-xl shadow border border-gray-200"
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block font-medium text-gray-800 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block font-medium text-gray-800 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block font-medium text-gray-800 mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                required
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-md resize-y focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-blue-700 transition"
            >
              <i className="fa-solid fa-paper-plane mr-2"></i>Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
