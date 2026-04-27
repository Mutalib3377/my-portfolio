"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent-blue/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent-purple/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      
      {/* Scanning Line Effect */}
      <div className="absolute inset-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-blue/10 to-transparent animate-scanline pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block glass px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-accent-blue uppercase mb-6 border-accent-blue/20">
            Available for New Projects
          </span>
          
          <h1 className="text-5xl md:text-8xl font-display font-black tracking-tighter mb-8 leading-tight">
            Elevating the <br /> 
            <span className="text-gradient">Digital Frontier.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
            I&apos;m <span className="text-white font-bold">Abdul Mutalib</span>, a world-class Web Developer building 
            high-performance, futuristic interfaces that push the boundaries of modern web architecture.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 bg-accent-blue text-white font-bold rounded-2xl hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2 group"
            >
              Explore My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 glass text-white font-bold rounded-2xl hover:border-accent-blue transition-all flex items-center justify-center"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll Down</span>
          <ChevronDown size={20} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
