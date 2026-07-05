"use client";

import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";
import FloatingBadge from "./FloatingBadge";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-36 pb-28"
    >
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:70px_70px] opacity-60" />

      {/* Glow */}
      <div className="absolute left-1/2 top-60 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-blue-100 blur-[130px] opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Photo */}
        <div className="relative mx-auto mb-14 h-[520px] max-w-5xl">

          <motion.div
            initial={{ opacity: 0, scale: .9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .8 }}
            className="absolute left-1/2 top-0 -translate-x-1/2"
          >
            <ProfileCard />
          </motion.div>

          <FloatingBadge
            text="🚀 MERN Stack"
            className="left-[15%] top-[90px] bg-blue-100 text-blue-700"
          />

          <FloatingBadge
            text="🤖 AI / ML"
            className="right-[15%] top-[90px] bg-purple-100 text-purple-700"
          />

          <FloatingBadge
            text="⚡ React.js"
            className="left-[12%] bottom-[140px] bg-green-100 text-green-700"
          />

          <FloatingBadge
            text="📚 DSA"
            className="right-[12%] bottom-[140px] bg-yellow-100 text-yellow-700"
          />
        </div>

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .25 }}
          className="mx-auto max-w-4xl text-center"
        >

          <p className="mb-5 text-lg font-medium text-neutral-500">
            👋 Hello, I&apos;m
          </p>

          <h1 className="text-6xl font-extrabold tracking-tight md:text-8xl">
            Shreya Gupta
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-neutral-700 md:text-3xl">
            MERN Stack Developer & AI Enthusiast
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
            Building scalable web applications, AI-powered tools,
            and intelligent digital experiences through modern
            software engineering.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <a
              href="#projects"
              className="rounded-full bg-black px-8 py-4 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-neutral-300 bg-white px-8 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-lg"
            >
              Download Resume
            </a>

          </div>

          {/* Availability */}

          <div className="mt-10 flex justify-center">

            <div className="flex items-center gap-3 rounded-full border border-green-200 bg-green-50 px-5 py-3">

              <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>

              <span className="font-medium text-green-700">
                Available for Full-Time Opportunities
              </span>

            </div>

          </div>

          {/* Social */}

          <div className="mt-10 flex justify-center gap-8 text-sm font-medium text-neutral-500">

            <a
              href="https://github.com/Shreya-1416"
              target="_blank"
              className="transition hover:text-black"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/shreya-gupta-profile/"
              target="_blank"
              className="transition hover:text-black"
            >
              LinkedIn
            </a>

            <a
              href="mailto:guptashreya1628@gmail.com"
              className="transition hover:text-black"
            >
              Email
            </a>

          </div>

          {/* Current Role */}

          <div className="mx-auto mt-12 max-w-md rounded-3xl border border-neutral-200 bg-white/90 p-6 shadow-lg backdrop-blur">

            <p className="text-sm uppercase tracking-wider text-neutral-500">
              Internship
            </p>

            <h3 className="mt-2 text-xl font-bold">
              Associate Technical Lead Intern
            </h3>

            <p className="mt-1 text-neutral-600">
              PaintBharat Co.
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}