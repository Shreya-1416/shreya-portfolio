"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-[40px] border border-neutral-200 bg-white p-10 shadow-sm"
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-500">
          Contact
        </p>

        <h2 className="text-4xl font-bold md:text-6xl">
          Have an Idea? Don&apos;t  Talk.
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-neutral-600">
          I&apos;m  always open to discussing software engineering,
          full-stack development, AI projects, internships,
          and exciting opportunities.
        </p>
        <p className="mt-6 max-w-2xl text-lg text-neutral-600">
          🟢 Available for Full-Time Opportunities
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:guptashreya1628@gmail.com"
            className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-white transition hover:scale-105"
          >
            <FaEnvelope size={18} />
            Email Me
          </a>

          <a
            href="https://github.com/Shreya-1416"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border px-6 py-3 transition hover:bg-neutral-100"
          >
            <FaGithub size={18} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/shreya-gupta-profile/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border px-6 py-3 transition hover:bg-neutral-100"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </a>

          <a
            href="/shreya-gupta-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border px-6 py-3 transition hover:bg-neutral-100"
          >
            <FaDownload size={18} />
            Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}