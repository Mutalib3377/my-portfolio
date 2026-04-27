"use client";

import { Cpu, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center space-x-2 group">
          <div className="w-8 h-8 glass rounded-lg flex items-center justify-center border-accent-blue/20">
            <Cpu className="w-4 h-4 text-accent-blue" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
            MUTALIB<span className="text-accent-blue">.</span>
          </span>
        </div>

        <p className="text-xs text-slate-500 font-medium">
          &copy; {new Date().getFullYear()} Abdul Mutalib. Built with Next.js & Tailwind CSS. Always push boundaries.
        </p>

        <div className="flex items-center gap-6 text-slate-400">
          <a href="https://github.com/Mutalib3377" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/mutalib-ajao-458200220" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors"><Linkedin size={18} /></a>
          <a href="#" className="hover:text-accent-blue transition-colors"><Twitter size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
