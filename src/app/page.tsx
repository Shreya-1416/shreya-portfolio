import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/experience/Experience";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/Footer";
import TechMarquee from "@/components/TechMarquee";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TechMarquee />

<div className="bg-white">
  <About />
</div>

<div className="bg-neutral-50">
  <Skills />
</div>

<div className="bg-white">
  <Projects />
</div>

<div className="bg-neutral-50">
  <Experience />
</div>

<div className="bg-white">
  <Contact />
</div>

<Footer />
    </main>
  );
}