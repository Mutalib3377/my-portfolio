"use client";

import { motion } from "framer-motion";
import { Code, Layout, Sparkles, Zap, Github, Linkedin, Twitter, ExternalLink } from "lucide-react";
import Image from "next/image";

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
      <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-sm font-bold tracking-widest text-accent-blue uppercase mb-2">Background</h2>
          <h3 className="text-4xl md:text-5xl font-display font-black">Crafting the Future.</h3>
        </div>
        <p className="max-w-md text-slate-400">
          Blending technical precision with creative vision to deliver digital products that stand out.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-4 md:gap-6">
        {/* Profile Card */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-2 md:row-span-2 glass rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden relative group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/10 rounded-full blur-3xl group-hover:bg-accent-blue/20 transition-all" />
          <div>
            <div className="w-20 h-20 rounded-2xl overflow-hidden mb-6 border-2 border-accent-blue/20 group-hover:border-accent-blue transition-colors">
              <Image 
                src="/profile.png" 
                alt="Abdul Mutalib" 
                width={80} 
                height={80} 
                className="object-cover w-full h-full"
              />
            </div>
            <h4 className="text-2xl font-bold mb-4">I&apos;m Abdul.</h4>
            <p className="text-slate-400 leading-relaxed max-w-md">
              A developer who believes that less is more, but detail is everything. I specialize in building 
              high-performance web applications that provide a premium feel to every user.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-8">
            <a href="https://github.com/Mutalib3377" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:text-accent-blue transition-colors"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/mutalib-ajao-458200220" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-xl hover:text-accent-blue transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="p-3 glass rounded-xl hover:text-accent-blue transition-colors"><Twitter size={20} /></a>
          </div>
        </motion.div>

        {/* Skills Card */}
        <motion.div 
          whileHover={{ y: -5 }}
          id="skills"
          className="md:col-span-2 glass rounded-[2rem] p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-accent-blue/10 rounded-lg text-accent-blue">
              <Code size={20} />
            </div>
            <h4 className="text-xl font-bold">Tech Stack</h4>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {skills.map((skill) => (
              <div key={skill.name} className="p-4 glass rounded-2xl flex flex-col hover:border-accent-blue/30 transition-all">
                <span className="text-sm font-bold">{skill.name}</span>
                <span className="text-[10px] text-accent-blue font-bold uppercase tracking-wider">{skill.level}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Services / Feature 1 */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="glass rounded-[2rem] p-8 flex flex-col justify-between"
        >
          <div className="p-3 bg-accent-purple/10 rounded-xl text-accent-purple mb-6 w-fit">
            <Layout size={24} />
          </div>
          <h5 className="font-bold text-lg mb-2">Modern UI/UX</h5>
          <p className="text-xs text-slate-400 leading-relaxed">
            Beautifully designed, accessible interfaces built with a focus on usability.
          </p>
        </motion.div>

        {/* Services / Feature 2 */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="glass rounded-[2rem] p-8 flex flex-col justify-between"
        >
          <div className="p-3 bg-accent-blue/10 rounded-xl text-accent-blue mb-6 w-fit">
            <Zap size={24} />
          </div>
          <h5 className="font-bold text-lg mb-2">Fast Load</h5>
          <p className="text-xs text-slate-400 leading-relaxed">
            Optimized code that ensures your application stays snappy and smooth.
          </p>
        </motion.div>

        {/* CTA Card */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-2 glass rounded-[2rem] p-8 flex items-center justify-between bg-gradient-to-br from-accent-blue/10 to-transparent border-accent-blue/20"
        >
          <div>
            <h4 className="text-xl font-bold mb-2">Want to see more?</h4>
            <p className="text-sm text-slate-400">Download my Resume or view GitHub.</p>
          </div>
          <button className="px-6 py-3 bg-white text-black font-bold rounded-xl flex items-center gap-2 hover:bg-slate-200 transition-colors">
            Resume <ExternalLink size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
