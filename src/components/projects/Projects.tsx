"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
          Projects
        </p>

        <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
          Featured Projects.
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
          A collection of projects focused on AI, full-stack development,
          and building scalable software solutions.
        </p>

        <div className="mt-24 space-y-32">
          {projects.map((project, index) => {
            const imageSection = (
              <div className="flex justify-center">
                <div className="group w-full max-w-[640px] rounded-3xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-100 p-3 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={1400}
                      height={900}
                      priority={index === 0}
                      className="h-auto w-full rounded-2xl transition duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            );

            const contentSection = (
              <div className="max-w-xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                  Featured Project
                </p>

                <span className="text-6xl font-extrabold text-neutral-200">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-4 text-4xl font-bold tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-6 text-lg leading-8 text-neutral-600">
                  {project.description}
                </p>

                <div className="mt-8 space-y-4">
                  {project.highlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-2 h-2 w-2 rounded-full bg-green-500" />

                      <p className="text-neutral-700">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium transition hover:bg-black hover:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-black px-6 py-3 font-medium text-white transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 font-medium transition hover:-translate-y-1 hover:bg-neutral-100 hover:shadow-lg"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            );

            return (
              <div key={project.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="grid items-center gap-16 lg:grid-cols-2"
                >
                  {index % 2 === 0 ? (
                    <>
                      {imageSection}
                      {contentSection}
                    </>
                  ) : (
                    <>
                      {contentSection}
                      {imageSection}
                    </>
                  )}
                </motion.div>

                {index !== projects.length - 1 && (
                  <div className="mt-20 border-b border-neutral-200" />
                )}
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}