import React from "react";
import projects from "../data/projects";
import ProjectCard from "../layouts/ProjectCard";
function Projects() {
  return (
    <section
      id="projects"
      // className="min-h-screen py-24 flex flex-col x-8 bg-gray-50 dark:bg-gray-900"
      className="pt-32 pb-20 min-h-screen px-4 md:px-8 relative bg-gray-50 dark:bg-gray-900 section-offset"
    >
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          My <span className="text-indigo-500">Projects</span>
        </h2>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-col items-center justify-between gap-10 justify-items-center">
          <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center "
          >
            {/* className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8"> */}
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-full max-w-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm 
                  hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
