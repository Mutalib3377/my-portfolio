"use client";

import { Cpu, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
            <Cpu className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-black text-xl tracking-tight text-gray-900">
            MUTALIB<span className="text-accent">.</span>
          </span>
        </div>

        <p className="text-sm text-gray-400 font-bold tracking-tight">
          &copy; {new Date().getFullYear()} Abdul Mutalib. <span className="hidden sm:inline">Built with Next.js & Tailwind.</span>
        </p>

        <div className="flex items-center gap-6">
          <a href="https://github.com/Mutalib3377" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/mutalib-ajao-458200220" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-black transition-colors"><Twitter size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
