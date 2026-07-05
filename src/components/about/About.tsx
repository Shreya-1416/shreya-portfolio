"use client";

import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaRocket,
  FaMapMarkerAlt,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaGraduationCap className="text-2xl text-blue-600" />,
    title: "Education",
    content: [
      "B.Tech - Computer Science & Engineering (AI)",
      "Pranveer Singh Institute of Technology",
      "Final Year Student",
    ],
  },
  {
    icon: <FaLaptopCode className="text-2xl text-green-600" />,
    title: "Experience",
    content: [
      "Associate Technical Lead Intern",
      "PaintBharat Co.",
      "Building modern web applications",
    ],
  },
  {
    icon: <FaRocket className="text-2xl text-purple-600" />,
    title: "Career Focus",
    content: [
      "MERN Stack Development",
      "AI-Powered Applications",
      "Software Engineering",
    ],
  },
  {
    icon: <FaMapMarkerAlt className="text-2xl text-red-600" />,
    title: "Availability",
    content: [
      "Immediate Joining",
      "Open to Relocation",
      "Full-Time Opportunities",
    ],
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Section Heading */}

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
          About Me
        </p>

        <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Building software that solves
          <br />
          real-world problems.
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
          I&apos;m a Computer Science undergraduate specializing in Artificial
          Intelligence with hands-on experience in full-stack web
          development. I enjoy building scalable software, AI-powered
          applications, and clean user experiences using modern
          technologies.
        </p>

        {/* Cards */}

        <div className="mt-20 grid gap-6 md:grid-cols-2">

          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-100">
                  {card.icon}
                </div>

                <h3 className="text-2xl font-bold">
                  {card.title}
                </h3>

              </div>

              <div className="mt-8 space-y-3">

                {card.content.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-black"></span>

                    <p className="text-neutral-600">
                      {item}
                    </p>
                  </div>
                ))}

              </div>
            </motion.div>
          ))}

        </div>

        {/* Bottom Summary */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-neutral-200 bg-gradient-to-r from-neutral-50 to-white p-10"
        >
          <div className="grid gap-10 md:grid-cols-2">

            <div>
              <h3 className="text-2xl font-bold">
                What I&apos;m  Working On
              </h3>

              <p className="mt-5 leading-8 text-neutral-600">
  Currently building AI agents and full-stack applications while exploring
  LLM orchestration, AI automation, and scalable software architecture.
  Alongside development, I continuously improve my problem-solving skills
  through Data Structures & Algorithms and modern software engineering
  practices.
</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                Beyond Development
              </h3>

              <p className="mt-5 leading-8 text-neutral-600">
                I enjoy exploring emerging technologies, improving problem
                solving through LeetCode, learning modern development
                practices, and building projects that combine artificial
                intelligence with real-world applications.
              </p>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}