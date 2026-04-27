"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Qasberry Tech",
    description:
      "An all-in-one AI Academy platform where learners can purchase AI courses, join a community, and access premium learning resources — built with Next.js and modern full-stack technologies.",
    tech: ["Next.js", "TypeScript", "Clerk", "Prisma", "PostgreSQL"],
    github: "https://github.com/Mutalib3377",
    demo: "https://qasberry-tech-fnbu.vercel.app/",
    gradient: "from-blue-600/40 via-violet-600/20 to-transparent",
    accent: "rgba(59,130,246,0.15)",
    icon: "🎓",
  },
  {
    title: "Qasberry Consultancy",
    description:
      "A professional consultancy web presence for Qasberry, featuring a polished marketing site that showcases services, builds trust, and drives client conversions.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/Mutalib3377",
    demo: "https://www.qasberry.com/",
    gradient: "from-purple-600/40 via-pink-600/20 to-transparent",
    accent: "rgba(168,85,247,0.15)",
    icon: "💼",
  },
  {
    title: "D-Arsh Capital",
    description:
      "A financial consultancy website for D-Arsh Capital, crafted on WordPress with a professional design that instills credibility and guides prospective clients through the firm's offerings.",
    tech: ["WordPress", "PHP", "CSS", "Elementor"],
    github: "https://github.com/Mutalib3377",
    demo: "https://d-arshcapital.com/",
    gradient: "from-emerald-600/40 via-teal-600/20 to-transparent",
    accent: "rgba(16,185,129,0.15)",
    icon: "📈",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent-blue uppercase mb-2">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black mb-6">Featured Work.</h3>
          <p className="max-w-xl mx-auto text-slate-400">
            Real-world products I&apos;ve built — from AI-powered platforms to financial consultancy sites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              whileHover={{ y: -6 }}
              className="glass rounded-3xl overflow-hidden group border border-white/5 hover:border-white/10 transition-all duration-500"
              style={{ boxShadow: `0 0 0 0 ${project.accent}` }}
            >
              {/* Gradient hero panel */}
              <div className={`relative h-48 w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-slate-900/40" />
                <span className="relative text-6xl select-none">{project.icon}</span>

                {/* Action buttons */}
                <div className="absolute top-4 right-4 flex gap-2 z-10 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass rounded-full hover:text-white transition-colors bg-slate-900/70 backdrop-blur"
                    aria-label="View GitHub"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 glass rounded-full hover:text-white transition-colors bg-slate-900/70 backdrop-blur"
                    aria-label="View Live Demo"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                {/* Live badge */}
                <div className="absolute bottom-4 left-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider bg-slate-900/70 backdrop-blur px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </a>
                </div>
              </div>

              <div className="p-7">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase font-bold tracking-wider text-accent-blue/80 bg-accent-blue/5 px-2 py-1 rounded-md border border-accent-blue/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-accent-blue transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="https://github.com/Mutalib3377"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors"
          >
            View More on GitHub <ExternalLink size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
