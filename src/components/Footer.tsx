import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6">
        <p className="text-neutral-500">
          Built with Next.js, TypeScript & Tailwind CSS.
        </p>

        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/Shreya-1416"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/shreya-gupta-profile/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:guptashreya1628@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <p className="text-sm text-neutral-400">
          © {new Date().getFullYear()} Shreya Gupta
        </p>
      </div>
    </footer>
  );
}