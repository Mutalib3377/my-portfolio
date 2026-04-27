"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden bg-white">
      {/* Subtle Background elements */}
      <div className="absolute inset-0 bg-dots opacity-[0.4] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] text-accent bg-accent-light border border-accent-muted uppercase mb-8">
            Based in Nigeria • Available Worldwide
          </span>
          
          <h1 className="text-6xl md:text-8xl font-display font-black tracking-tight mb-8 leading-[1.1] text-black">
            Building the next <br /> 
            <span className="text-gray-400">digital standard.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 mb-12 leading-relaxed">
            I&apos;m <span className="text-black font-semibold">Abdul Mutalib</span>, a Web Developer crafting high-performance, 
            premium interfaces with a focus on speed, precision, and modern aesthetics.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="#projects"
              className="w-full sm:w-auto px-10 py-5 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all flex items-center justify-center gap-3 group shadow-lg shadow-black/5"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contact"
              className="w-full sm:w-auto px-10 py-5 bg-white text-black border border-gray-200 font-bold rounded-full hover:bg-gray-50 transition-all flex items-center justify-center"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-300"
        >
          <ChevronDown size={24} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
