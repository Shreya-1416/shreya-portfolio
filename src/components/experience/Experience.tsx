"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-500">
          Experience
        </p>

        <h2 className="text-4xl font-bold md:text-6xl">
          My Professional Journey.
        </h2>

        <div className="mt-16">
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm hover:shadow-lg"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
                Internship
              </span>

              <span className="text-sm font-medium text-neutral-500">
                Jan 2026 - July 2026
              </span>
            </div>

            <h3 className="mt-6 text-3xl font-bold">
              Associate Technical Lead Intern
            </h3>

            <p className="mt-2 text-lg font-medium text-neutral-600">
              PaintBharat Co.
            </p>

            <div className="mt-8 space-y-4 text-neutral-600">
              <p>
                • Contributing to software development initiatives and product
                feature enhancements.
              </p>

              <p>
                • Collaborating with cross-functional teams to build scalable
                and user-friendly solutions.
              </p>

              <p>
                • Working with modern web technologies including React,
                Next.js, Node.js, and TypeScript.
              </p>

              <p>
                • Participating in technical discussions, code reviews, and
                product development workflows.
              </p>

              <p>
                • Gaining hands-on experience in software engineering,
                product development, and technical leadership.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Team Collaboration",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}