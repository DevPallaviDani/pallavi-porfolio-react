import { FaReact, FaHtml5, FaGitAlt, FaCss3, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiVscodium,
  SiGithub,
  SiExpress,
  SiSqlite,
} from "react-icons/si";

export const skills = [
  {
    category: "Frontend",
    items: [
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "HTML5",
        icon: FaHtml5,
      },
      {
        name: "CSS3",
        icon: FaCss3,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
    ],
  },
  // {
  //   category: "Backend",
  //   items: [
  //     {
  //       name: "Node.js",
  //       icon: FaNodeJs,
  //     },
  //     {
  //       name: "Express.js",
  //       icon: SiExpress,
  //     },
  //     {
  //       name: "MongoDB",
  //       icon: SiSqlite,
  //     },
  //   ],
  // },
  {
    category: "Tools",
    items: [
      {
        name: "Git",
        icon: FaGitAlt,
      },
      {
        name: "GitHub",
        icon: SiGithub,
      },
      {
        name: "VS Code",
        icon: SiVscodium,
      },
    ],
  },
];
