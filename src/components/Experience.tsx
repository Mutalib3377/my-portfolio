"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Senior Frontend Engineer",
    company: "TechVanguard",
    period: "2023 - Present",
    desc: "Leading the development of a next-gen SaaS platform, optimizing performance and implementing a custom design system for scalability.",
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
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <span className="section-label">Journey</span>
          <h3 className="text-4xl font-display font-black tracking-tight mb-8">Work Exp.</h3>
          <p className="text-gray-500 font-medium mb-10 leading-relaxed">
            Building digital solutions for over 5 years. I specialize in turning complex problems into elegant, user-friendly interfaces.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <Award size={18} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-900">Top Rated Dev</span>
            </div>
            <div className="flex items-center gap-3 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm">
              <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                <GraduationCap size={18} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-900">CS Graduate</span>
            </div>
          </div>
        </div>

        <div className="md:w-2/3 space-y-10 relative">
          {/* Vertical Line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gray-100" />
          
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-10 group"
            >
              {/* Dot */}
              <div className="absolute left-[-4.5px] top-2 w-2.5 h-2.5 rounded-full bg-gray-200 border-2 border-white group-hover:bg-black group-hover:scale-125 transition-all duration-300" />
              
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-black text-accent uppercase tracking-widest bg-accent-light px-2.5 py-1 rounded-full border border-accent-muted">{exp.period}</span>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-tight">{exp.company}</span>
              </div>
              <h4 className="text-xl font-black mb-3 tracking-tight text-gray-900 group-hover:text-black transition-colors">{exp.role}</h4>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
