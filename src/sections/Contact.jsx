import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      // className="min-h-screen py-24 flex flex-col x-8 bg-gray-50 dark:bg-gray-900 section-offset"

      className="pt-32 pb-20 min-h-screen px-4 md:px-8 relative bg-gray-50 dark:bg-gray-900 section-offset"
    >
      <div className="h-screen">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Contact <span className="text-indigo-500">Me</span>
        </h2>
        <div className="max-w-2xl mx-auto flex flex-col md:flex-col items-center justify-between gap-10">
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Feel free to reach out if you would like to collaborate or just say
            hello.
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <a
              href="mailto:danipallavi55@gmail.com"
              className="flex items-center gap-3 px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:scale-105 transition"
            >
              <FaEnvelope className="text-indigo-500" />
              Email
            </a>
            <a
              href=""
              target="_blank"
              className="flex items-center gap-3 px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:scale-105 transition"
            >
              <FaGithub className="text-indigo-500" />
              GitHub
            </a>
            <a
              href=""
              target="_blank"
              className="flex items-center gap-3 px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:scale-105 transition"
            >
              <FaLinkedin className="text-indigo-500" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
