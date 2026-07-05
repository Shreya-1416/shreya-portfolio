"use client";

import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";
import FloatingBadge from "./FloatingBadge";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
    >
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:70px_70px] opacity-60" />

      {/* Glow */}
      <div className="absolute left-1/2 top-44 md:top-60 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-blue-100 opacity-40 blur-[120px] md:h-[500px] md:w-[500px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5">

        {/* Photo Section */}

        <div className="relative mx-auto mb-10 h-[300px] sm:h-[340px] md:mb-16 md:h-[520px] max-w-5xl">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute left-1/2 top-0 -translate-x-1/2"
          >
            <ProfileCard />
          </motion.div>

          {/* Floating Badges */}

          <FloatingBadge
            text="🚀 MERN Stack"
            className="
              left-2 top-20
              text-xs
              md:left-[15%]
              md:top-[90px]
              md:text-base
              bg-blue-100
              text-blue-700
            "
          />

          <FloatingBadge
            text="🤖 AI / ML"
            className="
              right-2 top-20
              text-xs
              md:right-[15%]
              md:top-[90px]
              md:text-base
              bg-purple-100
              text-purple-700
            "
          />

          <FloatingBadge
            text="⚡ React.js"
            className="
              left-0
              bottom-8
              text-xs
              md:left-[12%]
              md:bottom-[140px]
              md:text-base
              bg-green-100
              text-green-700
            "
          />

          <FloatingBadge
            text="📚 DSA"
            className="
              right-0
              bottom-8
              text-xs
              md:right-[12%]
              md:bottom-[140px]
              md:text-base
              bg-yellow-100
              text-yellow-700
            "
          />

        </div>

        {/* Hero Content */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mx-auto max-w-4xl text-center"
        >

          <p className="mb-3 text-base font-medium text-neutral-500 md:mb-5 md:text-lg">
            👋 Hello, I&apos;m
          </p>

          <h1 className="text-5xl font-extrabold leading-none tracking-tight sm:text-6xl md:text-8xl">
            Shreya Gupta
          </h1>

          <h2 className="mt-4 text-lg font-semibold text-neutral-700 sm:text-xl md:mt-5 md:text-3xl">
            MERN Stack Developer & AI Enthusiast
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-neutral-600 sm:text-lg md:mt-8 md:leading-8">
            Building scalable web applications, AI-powered tools,
            and intelligent digital experiences through modern
            software engineering.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:mt-12">

            <a
              href="#projects"
              className="w-full rounded-full bg-black px-8 py-4 text-center text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:w-auto"
            >
              View Projects
            </a>

            <a
              href="/Shreya_Gupta_Resume_.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border border-neutral-300 bg-white px-8 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-lg sm:w-auto"
            >
              Download Resume
            </a>

          </div>

          {/* Availability */}

          <div className="mt-8 flex justify-center md:mt-10">

            <div className="flex items-center gap-3 rounded-full border border-green-200 bg-green-50 px-4 py-3 text-center md:px-5">

              <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />

              <span className="text-sm font-medium text-green-700 md:text-base">
                Available for Full-Time Opportunities
              </span>

            </div>

          </div>

          {/* Social */}

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-medium text-neutral-500 md:mt-10 md:gap-8">

            <a
              href="https://github.com/Shreya-1416"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-black"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/shreya-gupta-profile/"
              target="_blank"
              rel="noopener noreferrer"
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

          <div className="mx-auto mt-10 max-w-md rounded-3xl border border-neutral-200 bg-white/90 p-5 shadow-lg backdrop-blur md:mt-12 md:p-6">

            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Internship
            </p>

            <h3 className="mt-2 text-lg font-bold md:text-xl">
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