import React from "react";

function ProjectCard({ project }) {
  return (
    <>
      <div className="group relative rounded-xl overflow-hidden shadow-lg" >
        <img
          src={project.image}
          alt={`${project.title} website screenshot`}
          className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Card Content */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-center p-4">
          <h3 className="text-white text-xl font-semibold mb-2">
            {project.title}
          </h3>

          <p className="text-indigo-300 text-sm mb-4">{project.tech}</p>
          <p className="text-gray-200 text-sm mb-4">{project.description}</p>
          <div className="flex gap-4">
            <a
              href={project.live}
              className="px-4 py-2 bg-indigo-500 text-white rounded-lg text-sm hover:bg-indigo-600 transition"
            >
              Live
            </a>

            <a
              href={project.githublink}
              className="px-4 py-2 border border-white text-white rounded-lg text-sm hover:bg-white hover:text-black transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
