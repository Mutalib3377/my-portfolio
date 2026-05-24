"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const nextProjects = [
  {
    title: "Qasberry Tech",
    description:
      "An all-in-one AI Academy platform where learners can purchase AI courses, join a community, and access premium learning resources.",
    tech: ["Next.js", "TypeScript", "Clerk", "Prisma", "PostgreSQL"],
    github: "https://github.com/Mutalib3377",
    demo: "https://qasberry-tech-fnbu.vercel.app/",
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-100",
    icon: "🎓",
  },
  {
    title: "Qasberry Consultancy",
    description:
      "A professional consultancy web presence for Qasberry, featuring a polished marketing site that showcases services and drives conversions.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/Mutalib3377",
    demo: "https://www.qasberry.com/",
    bg: "bg-purple-50",
    text: "text-purple-600",
    border: "border-purple-100",
    icon: "💼",
  },
];

const wordpressProjects = [
  {
    title: "Springville MFB",
    description:
      "A clean, trustworthy microfinance bank website for Springville MFB, designed to communicate reliability and guide customers through financial services.",
    tech: ["WordPress", "PHP", "CSS", "Elementor"],
    github: "https://github.com/Mutalib3377",
    demo: "https://springvillemfb.com/",
    bg: "bg-sky-50",
    text: "text-sky-600",
    border: "border-sky-100",
    icon: "🏦",
  },
  {
    title: "D-Arsh Capital",
    description:
      "A financial consultancy website for D-Arsh Capital, crafted with a professional design that instills credibility and trust.",
    tech: ["WordPress", "PHP", "CSS", "Elementor"],
    github: "https://github.com/Mutalib3377",
    demo: "https://d-arshcapital.com/",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-100",
    icon: "📈",
  },
  {
    title: "Farifa Iz",
    description:
      "A stylish personal brand and business website for Farifa Iz, blending elegance with functionality to highlight services and portfolio.",
    tech: ["WordPress", "PHP", "CSS", "Elementor"],
    github: "https://github.com/Mutalib3377",
    demo: "https://farifaiz.com/",
    bg: "bg-rose-50",
    text: "text-rose-600",
    border: "border-rose-100",
    icon: "✨",
  },
  {
    title: "Green Legacy Resort",
    description:
      "A premium hospitality website for Green Legacy Resort, evoking nature and luxury to attract guests and drive bookings.",
    tech: ["WordPress", "PHP", "CSS", "Elementor"],
    github: "https://github.com/Mutalib3377",
    demo: "https://greenlegacyresort.com/",
    bg: "bg-green-50",
    text: "text-green-600",
    border: "border-green-100",
    icon: "🌿",
  },
];

// Reusable project card renderer
function ProjectCard({ project, idx }: { project: typeof nextProjects[0]; idx: number }) {
  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      className="card group overflow-hidden"
    >
      <div className={`h-52 ${project.bg} flex items-center justify-center border-b ${project.border} relative overflow-hidden`}>
        <span className="text-6xl group-hover:scale-110 transition-transform duration-500">{project.icon}</span>

        <div className="absolute top-4 right-4 flex gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white border border-gray-100 rounded-full hover:bg-black hover:text-white hover:border-black transition-all shadow-sm"
          >
            <Github size={16} />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white border border-gray-100 rounded-full hover:bg-black hover:text-white hover:border-black transition-all shadow-sm"
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="tag text-[9px] px-2 py-0.5">
              {t}
            </span>
          ))}
        </div>
        <h4 className="text-xl font-black mb-3 tracking-tight group-hover:text-accent transition-colors flex items-center justify-between">
          {project.title}
          <ArrowUpRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
        </h4>
        <p className="text-sm text-gray-500 leading-relaxed font-medium">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="section-label">Portfolio</span>
          <h3 className="text-4xl md:text-5xl font-display font-black tracking-tight mb-6">Selected Projects.</h3>
          <p className="max-w-xl mx-auto text-gray-500 font-medium">
            A collection of high-impact digital products I&apos;ve built — from full-stack web apps to polished WordPress sites.
          </p>
        </div>

        {/* ── Next.js & React Projects ── */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 border border-gray-200 rounded-full px-3 py-1">
              Next.js &amp; React
            </span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nextProjects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} idx={idx} />
            ))}
          </div>
        </div>

        {/* ── WordPress Projects ── */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 border border-gray-200 rounded-full px-3 py-1">
              WordPress
            </span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wordpressProjects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} idx={idx} />
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-4">
          <Link
            href="https://github.com/Mutalib3377"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-black transition-colors"
          >
            Explore all on GitHub <ExternalLink size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

