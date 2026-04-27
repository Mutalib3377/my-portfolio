"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    role: "Senior Frontend Engineer",
    company: "TechVanguard",
    period: "2023 - Present",
    desc: "Leading the development of a next-gen SaaS platform, optimizing performance by 40% and implementing a custom design system.",
  },
  {
    role: "Full Stack Developer",
    company: "PixelFlow Studios",
    period: "2021 - 2023",
    desc: "Developed high-traffic e-commerce solutions and integrated complex payment gateways and real-time inventory systems.",
  },
  {
    role: "Web Interface Designer",
    company: "CreativeCloud",
    period: "2019 - 2021",
    desc: "Focused on user-centric design and building interactive landing pages for startups and global brands.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3">
          <h2 className="text-sm font-bold tracking-widest text-accent-blue uppercase mb-2">Journey</h2>
          <h3 className="text-4xl font-display font-black mb-6">Experience.</h3>
          <p className="text-slate-400 mb-8">
            Building digital solutions for over 5 years. I specialize in turning complex problems into elegant interfaces.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 glass rounded-2xl border-accent-blue/20">
              <Award className="text-accent-blue" />
              <span className="text-xs font-bold uppercase tracking-wider">Top Rated Developer</span>
            </div>
            <div className="flex items-center gap-3 p-4 glass rounded-2xl border-accent-blue/20">
              <GraduationCap className="text-accent-blue" />
              <span className="text-xs font-bold uppercase tracking-wider">CS Graduate</span>
            </div>
          </div>
        </div>

        <div className="md:w-2/3 space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 border-l border-slate-800 hover:border-accent-blue transition-colors group"
            >
              <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-slate-800 group-hover:bg-accent-blue transition-colors" />
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-accent-blue uppercase tracking-widest">{exp.period}</span>
                <span className="text-xs text-slate-500 font-mono">{exp.company}</span>
              </div>
              <h4 className="text-xl font-bold mb-4">{exp.role}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
