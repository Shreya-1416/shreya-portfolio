"use client";

export default function TechMarquee() {
  const technologies = [
  "⚛ React",
  "▲ Next.js",
  "🔷 TypeScript",
  "🟨 JavaScript",
  "🟢 Node.js",
  "🚂 Express",
  "🍃 MongoDB",
  "🐍 Python",
  "👁 OpenCV",
  "🧠 TensorFlow",
  "🎨 Tailwind CSS",
  "🤖 AI/ML",
];

  return (
    <section className="overflow-hidden border-y border-neutral-200 bg-white py-6">
      <div className="marquee whitespace-nowrap">
        {[...technologies, ...technologies].map((tech, index) => (
          <span
  key={index}
  className="mx-4 rounded-full border border-neutral-200 bg-white px-5 py-2 text-sm font-medium shadow-sm"
>
  {tech}
</span>
        ))}
      </div>
    </section>
  );
}