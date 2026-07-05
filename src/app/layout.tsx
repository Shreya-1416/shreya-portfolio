import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shreya Gupta | Software Engineer | Full Stack Developer & AI Builder",

  description:
    "Portfolio of Shreya Gupta showcasing AI Agents, MERN Stack applications, and modern software engineering projects.",

  keywords: [
    "Shreya Gupta",
    "Full Stack Developer",
    "AI Engineer",
    "MERN Stack",
    "Next.js",
    "React",
    "Node.js",
    "OpenRouter",
    "LLM",
    "AI Agents",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
  <body className={jakarta.className}>
    {children}
  </body>
</html>
  );
}