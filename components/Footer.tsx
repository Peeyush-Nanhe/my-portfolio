"use client";

import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-16 px-6 sm:px-12 lg:px-24 border-t border-white/10 bg-black relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[100px] bg-primary/20 blur-[100px] rounded-[100%]" />

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10 relative z-10">
        
        {/* Left Side: Copyright & Role */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
          <Link href="/" className="text-3xl font-black tracking-tighter mb-1 flex items-center gap-1 group">
            PN<span className="text-primary group-hover:text-accent transition-colors">.</span>
          </Link>
          <p className="text-white font-medium text-lg">
            Peeyush Nanhe
          </p>
          <p className="text-gray-400 text-sm font-medium">
            Senior Mobile Engineer | Mobile Architect | Tech Lead
          </p>
          <p className="text-xs text-gray-500 mt-2 max-w-sm">
            © 2026 Peeyush Nanhe. All rights reserved. <br/>
            Designed & Developed with ❤️ using Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.
          </p>
        </div>

        {/* Right Side: Socials & Top */}
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/peeyush-nanhe-6333531a/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/50 hover:scale-110 transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://github.com/PeeyushNanhe" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/50 hover:scale-110 transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a href="mailto:peeyushnanhe@gmail.com" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/50 hover:scale-110 transition-all">
              <Mail size={18} />
            </a>
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors font-medium mt-2"
          >
            Back to Top
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
              <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
