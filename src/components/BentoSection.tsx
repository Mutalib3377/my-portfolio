"use client";

import { motion } from "framer-motion";
import { Code, Layout, Zap, Github, Linkedin, Twitter, ExternalLink, Globe, Cpu } from "lucide-react";

const skills = [
  { name: "React / Next.js", level: "Expert" },
  { name: "TypeScript", level: "Advanced" },
  { name: "Tailwind CSS", level: "Expert" },
  { name: "Node.js", level: "Advanced" },
  { name: "WordPress", level: "Advanced" },
  { name: "UI/UX Design", level: "Intermediate" },
  { name: "Performance Opt.", level: "Advanced" },
  { name: "Prisma / PostgreSQL", level: "Advanced" },
];

export default function BentoSection() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
        <div>
          <span className="section-label">Background</span>
          <h3 className="text-4xl md:text-5xl font-display font-black tracking-tight">Engineering Excellence.</h3>
        </div>
        <p className="max-w-md text-gray-500 font-medium">
          I combine technical precision with creative vision to deliver products that are as performant as they are beautiful.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-6">
        {/* Profile Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 md:row-span-2 card p-10 flex flex-col justify-between"
        >
          <div>
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl shadow-black/10">
              <span className="text-2xl font-black">AM</span>
            </div>
            <h4 className="text-3xl font-black mb-6 tracking-tight">I&apos;m Abdul.</h4>
            <p className="text-gray-500 leading-relaxed text-lg font-medium">
              A developer obsessed with detail and performance. I specialize in building 
              high-fidelity web applications that provide a premium feel to every user.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-12">
            <a href="https://github.com/Mutalib3377" target="_blank" rel="noopener noreferrer" className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl hover:bg-black hover:text-white hover:border-black transition-all"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/mutalib-ajao-458200220" target="_blank" rel="noopener noreferrer" className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl hover:bg-black hover:text-white hover:border-black transition-all"><Linkedin size={20} /></a>
            <a href="#" className="p-3.5 bg-gray-50 border border-gray-200 rounded-xl hover:bg-black hover:text-white hover:border-black transition-all"><Twitter size={20} /></a>
          </div>
        </motion.div>

        {/* Skills Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          id="skills"
          className="md:col-span-2 card p-10"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 bg-accent-light rounded-xl text-accent border border-accent-muted">
              <Code size={22} />
            </div>
            <h4 className="text-xl font-black tracking-tight">Core Stack</h4>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="p-5 bg-gray-50/50 border border-gray-100 rounded-2xl flex flex-col hover:border-accent/30 hover:bg-white hover:shadow-sm transition-all group">
                <span className="text-sm font-bold text-gray-900">{skill.name}</span>
                <span className="text-[10px] text-accent font-black uppercase tracking-wider mt-1">{skill.level}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Feature 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="card p-8 flex flex-col justify-between"
        >
          <div className="p-3.5 bg-accent-light rounded-xl text-accent border border-accent-muted w-fit mb-6">
            <Layout size={24} />
          </div>
          <div>
            <h5 className="font-black text-lg mb-2 tracking-tight">Premium UI</h5>
            <p className="text-sm text-gray-500 leading-relaxed font-medium">
              Beautifully designed, accessible interfaces built with a focus on usability.
            </p>
          </div>
        </motion.div>

        {/* Feature 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="card p-8 flex flex-col justify-between"
        >
          <div className="p-3.5 bg-accent-light rounded-xl text-accent border border-accent-muted w-fit mb-6">
            <Zap size={24} />
          </div>
          <div>
            <h5 className="font-black text-lg mb-2 tracking-tight">High Perf.</h5>
            <p className="text-sm text-gray-500 leading-relaxed font-medium">
              Optimized code that ensures your application stays snappy and smooth.
            </p>
          </div>
        </motion.div>

        {/* CTA Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="md:col-span-2 card p-10 flex items-center justify-between border-accent/20 bg-accent-light/30"
        >
          <div>
            <h4 className="text-2xl font-black mb-2 tracking-tight">Need my full profile?</h4>
            <p className="text-gray-500 font-medium">Download my CV or explore GitHub.</p>
          </div>
          <button className="px-8 py-4 bg-black text-white font-bold rounded-full flex items-center gap-2 hover:bg-gray-800 transition-all shadow-lg shadow-black/10">
            Resume <ExternalLink size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
