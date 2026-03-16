import React from "react";
import { skills } from "../data/skills";
const Skills = () => {
  return (
    <>
      <section
        id="skills"
        // className="min-h-screen py-24 flex flex-col x-8 bg-gray-50 dark:bg-gray-900"
        className="pt-32 pb-20 min-h-screen px-4 md:px-8 relative bg-gray-50 dark:bg-gray-900 section-offset"
      >
        <div className="max-w-6xl mx-auto h-screen">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            My <span className="text-indigo-500">Skills</span>
          </h2>
          {console.log(skills)}
          {skills?.map((skillGroup, index) => (
            <div key={index} className="mb-12">
              {console.log(skillGroup)}
              {/* Category Title */}
              <h3 className="text-xl font-semibold mb-6 text-indigo-500">
                {skillGroup.category}
              </h3>
              {/* Skilld Grid */}
              <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {skillGroup.items.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow hover:-translate-y-2 transition hover:shadow-xl"
                    >
                      <Icon className="text-indigo-500 mb-3" />
                      <p className="font-medium">{skill.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <>
            {/* <div className="max-w-6xl mx-auto flex flex-col md:flex-col items-center justify-between gap-10"> */}
            {/* Skill Card */}
            {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6  transition duration-300">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow hover:-translate-y-2 transition hover:shadow-xl"
                  >
                    <Icon className="text-indigo-500 mb-3" />
                    <p className="font-medium">{skill.name}</p>
                  </div>
                );
              })}
            </div> */}
            {/* </div> */}
          </>
        </div>
      </section>
    </>
  );
};

export default Skills;
