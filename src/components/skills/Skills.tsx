"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiTensorflow,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },

  {
    title: "AI / ML",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "OpenCV", icon: "👁" },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: "💻" },
      { name: "Postman", icon: "📮" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-500">
          Skills
        </p>

        <h2 className="text-4xl font-bold md:text-6xl">
          Technologies I Work With.
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="mb-6 text-2xl font-bold">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 rounded-2xl bg-neutral-50 p-4"
                  >
                    <span className="text-xl">
                      {skill.icon}
                    </span>

                    <span className="font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}