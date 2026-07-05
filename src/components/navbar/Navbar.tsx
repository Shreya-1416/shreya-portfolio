"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-5 left-1/2 z-50 w-[90%] max-w-7xl -translate-x-1/2">
      <nav className="rounded-2xl border border-neutral-200 bg-white/90 px-5 py-2.5 shadow-lg backdrop-blur-xl">
        <div className="flex items-center justify-between">

          {/* Logo */}

          <Link
            href="#home"
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
              SG
            </div>

            <div className="hidden sm:block">
              <p className="text-base font-bold">
                Shreya
              </p>
            </div>
          </Link>

          {/* Desktop */}

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative group text-sm font-medium text-neutral-700 transition"
              >
                {item.label}

                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right */}

          <div className="space-y-2 rounded-2xl border border-neutral-200 bg-white p-4 lg:hidden">

            <a
              href="/Shreya_Gupta_Resume_.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg md:flex"
            >
              Resume ↗
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden"
            >
              {open ? (
                <XMarkIcon className="h-7 w-7" />
              ) : (
                <Bars3Icon className="h-7 w-7" />
              )}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}

        <div
  className={`transition-all duration-300 ${
    open ? "mt-6 block" : "hidden"
  }`}
>
          <div className="flex flex-col gap-5 lg:hidden">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-neutral-700 transition hover:bg-neutral-100"
              >
                {item.label}
              </Link>
            ))}

            <a
              href="/Shreya_Gupta_Resume_.pdf"
              target="_blank"
              className="mt-2 block rounded-xl bg-black px-5 py-3 text-center font-medium text-white"
            >
              Resume ↗
            </a>
          </div>
        </div>

      </nav>
    </header>
  );
}