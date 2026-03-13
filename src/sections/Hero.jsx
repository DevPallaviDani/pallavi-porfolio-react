import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import developerImg from "../assets/images/developer.png";

function Hero() {
  return (
    <section
      id="home"
      // className="pt-32 pb-20 min-h-screen flex flex-col md:flex-row items-center justify-between px-8 gap-10 relative transition duration-700 ease-out" >

      className="pt-32 pb-20 min-h-screen px-4 md:px-8 relative bg-gray-50 dark:bg-gray-900 section-offset"
    >
   
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left side */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Pallavi
              </span>
            </h1>

            <h2 className="text-2xl mt-4 text-gray-500">
              <Typewriter
                words={[
                  "React Developer",
                  "Web Developer",
                  "Javascript Developer",
                  "UI Enthusiast",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              I build responsive web applications using React, Tailwind and
              modern JavaScript.
            </p>

            <div className="mt-6 flex gap-4">
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition"
              >
                View Projects
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 border border-gray-400 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Contact Me
              </button>
            </div>
            <div className="mt-6 flex gap-6 text-2xl text-gray-600 dark:text-gray-300">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl transform hover:-translate-y-1 hover:scale-125 hover:text-indigo-500 hover:drop-shadow-lg transition"
              >
                <FaGithub />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl transform hover:-translate-y-1 hover:scale-125 hover:text-indigo-500 hover:drop-shadow-lg transition"
              >
                <FaLinkedin />
              </a>{" "}
              <a
                href="mailto:danipallavi55@gmail.com"
                className="text-xl md:text-2xl transform hover:-translate-y-1 hover:scale-125 hover:text-indigo-500 hover:drop-shadow-lg transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Right side */}
          <div className="relative flex justify-center">
            {/* <div className="absolute w-72 h-72 bg-indigo-500 blur-3xl opacity-30 dark:opacity-40 dark:bg-indigo-400 rounded-full"></div> */}
            <div className="absolute w-72 h-72 bg-gradient-to-r from-indigo-500 to-purple-500 blur-3xl opacity-30 rounded-full"></div>
            <img
              src={developerImg}
              alt="developer illustration"
              className="relative w-80 animate-float mix-blend-multiply dark:brightness-125  drop-shadow-xl [mask-image:linear-gradient(to_bottom,black,transparent)]"
            />
          </div>
        </div>
        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <a
            href="#contact"
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center animate-bounce">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            </div>
          </a>
        </div>
    
    </section>
  );
}

export default Hero;
