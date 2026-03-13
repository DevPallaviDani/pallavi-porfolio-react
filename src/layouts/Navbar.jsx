import React, { useState, useEffect } from "react";

import ThemeToggle from "../components/ThemeToggle";
import ProfileLogo from "../assets/images/ProfileLogo.png";

function Navbar() {
  const navLink =
    "relative text-sm md:text-base font-medium pb-1 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-indigo-500 after:transition-all";
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];
      setScrolled(window.scrollY > 20);

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      // className="fixed top-0 left-0 w-full bg-white/80 shadow z-50 dark:bg-gray-900/80 backdrop-blur"
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur transition
    ${
      scrolled
        ? "bg-white/90 dark:bg-gray-900/90 shadow"
        : "bg-white/80 dark:bg-gray-900/80"
    }
    `}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center justify-between gap-2">
          <img
            src={ProfileLogo}
            alt="Pallavi Bhalerao"
            className="w-10 h-10 rounded-full shadow-lg shadow-indigo-300 dark:shadow-gray-700"
          />
          <h1 className="text-xl md:text-2xl font-semibold tracking-wide">
            <span className="text-indigo-600 dark:text-indigo-400">
              Pallavi
            </span>{" "}
            <span className="text-gray-900 dark:text-white">Bhalerao</span>
          </h1>
        </div>

        <button
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          className="md:hidden text-2xl"
        >
          {" "}
          ☰
        </button>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            className={`${navLink}
              ${
                activeSection === "home"
                  ? "text-indigo-600 dark:text-indigo-400 after:w-full"
                  : "text-gray-700 dark:text-gray-300"
              }`}
          >
            Home
          </a>

          <a
            href="#about"
            className={`${navLink}
              ${
                activeSection === "about"
                  ? "text-indigo-600 dark:text-indigo-400 after:w-full "
                  : "text-gray-700 dark:text-gray-300"
              }`}
          >
            About
          </a>

          <a
            href="#projects"
            className={`${navLink}
              ${
                activeSection === "projects"
                  ? "text-indigo-600 dark:text-indigo-400 after:w-full "
                  : "text-gray-700 dark:text-gray-300"
              }`}
          >
            Projects
          </a>
          <a
            href="#skills"
            className={`${navLink}
              ${
                activeSection === "skills"
                  ? "text-indigo-600 dark:text-indigo-400 after:w-full "
                  : "text-gray-700 dark:text-gray-300"
              }`}
          >
            Skills
          </a>
          <a
            href="#contact"
            className={`${navLink}
              ${
                activeSection === "contact"
                  ? "text-indigo-600 dark:text-indigo-400 after:w-full "
                  : "text-gray-700 dark:text-gray-300"
              }`}
          >
            Contact
          </a>

          <div className="ml-2 flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute top-full right-0 w-fit justify-items-start ">
          <div className="max-w-xs mx-auto place-items-end pt-2 pb-4 pr-6 space-y-4 ml-8 bg-white dark:bg-gray-900 rounded-lg shadow">
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="block"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="block"
            >
              About
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="block"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className="block"
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block"
            >
              Contact
            </a>
            {/* <hr className="my-4 border-gray-300 dark:border-gray-600" /> */}
            <div className="ml-2 flex items-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
