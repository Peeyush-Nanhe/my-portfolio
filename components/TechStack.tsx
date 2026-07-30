"use client";

import { motion } from "framer-motion";
import { Network, ArrowRightLeft, Sparkles, BrainCircuit, Database, Cpu, Code2 } from "lucide-react";
import React from "react";

// For SimpleIcons CDN
const getIconUrl = (slug: string, colorHex: string) => 
  `https://cdn.simpleicons.org/${slug}/${colorHex.replace("#", "")}`;

const allTechs = [
  // Mobile Development
  { name: "Flutter", iconUrl: getIconUrl("flutter", "#02569B"), color: "#02569B" },
  { name: "Ionic", iconUrl: getIconUrl("ionic", "#3880FF"), color: "#3880FF" },
  { name: "Capacitor", iconUrl: getIconUrl("capacitor", "#119EFF"), color: "#119EFF" },
  { name: "Android", iconUrl: getIconUrl("android", "#3DDC84"), color: "#3DDC84" },
  { name: "iOS", iconUrl: getIconUrl("ios", "#ffffff"), color: "#ffffff" },
  { name: "Dart", iconUrl: getIconUrl("dart", "#0175C2"), color: "#0175C2" },
  // Frontend
  { name: "Angular", iconUrl: getIconUrl("angular", "#DD0031"), color: "#DD0031" },
  { name: "TypeScript", iconUrl: getIconUrl("typescript", "#3178C6"), color: "#3178C6" },
  { name: "JavaScript", iconUrl: getIconUrl("javascript", "#F7DF1E"), color: "#F7DF1E" },
  // Backend
  { name: "Node.js", iconUrl: getIconUrl("nodedotjs", "#339933"), color: "#339933" },
  { name: "GraphQL", iconUrl: getIconUrl("graphql", "#E10098"), color: "#E10098" },
  { name: "PostgreSQL", iconUrl: getIconUrl("postgresql", "#4169E1"), color: "#4169E1" },
  { name: "MongoDB", iconUrl: getIconUrl("mongodb", "#47A248"), color: "#47A248" },
  { name: "REST APIs", icon: ArrowRightLeft, color: "#FE7F2D" },
  { name: "WebSocket", icon: Network, color: "#9ca3af" },
  // Cloud & DevOps
  { name: "Firebase", iconUrl: getIconUrl("firebase", "#FFCA28"), color: "#FFCA28" },
  { name: "AWS", iconUrl: getIconUrl("amazonaws", "#FF9900"), color: "#FF9900" },
  { name: "GitHub Actions", iconUrl: getIconUrl("githubactions", "#2088FF"), color: "#2088FF" },
  { name: "Fastlane", iconUrl: getIconUrl("fastlane", "#00F200"), color: "#00F200" },
  { name: "Codemagic", icon: Code2, color: "#F05559" },
  { name: "Git", iconUrl: getIconUrl("git", "#F1502F"), color: "#F1502F" },
  { name: "Bitbucket", iconUrl: getIconUrl("bitbucket", "#0052CC"), color: "#0052CC" },
  // AI & GenAI
  { name: "OpenAI", iconUrl: getIconUrl("openai", "#10A37F"), color: "#10A37F" },
  { name: "LangChain", icon: BrainCircuit, color: "#1C3C3C" },
  { name: "LlamaIndex", icon: Sparkles, color: "#8E44AD" },
  { name: "Gemini AI", iconUrl: getIconUrl("googlegemini", "#8E75B2"), color: "#8E75B2" },
  { name: "FAISS", icon: Database, color: "#3498DB" },
  { name: "ChromaDB", icon: Cpu, color: "#E67E22" },
];

// Split the tech stack into two rows for the marquee
const row1 = allTechs.slice(0, Math.ceil(allTechs.length / 2));
const row2 = allTechs.slice(Math.ceil(allTechs.length / 2));

const TechBadge = ({ tech }: { tech: any }) => (
  <div className="relative group/tech flex items-center gap-4 px-6 py-4 rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 hover:border-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-default overflow-hidden">
    {/* Magnetic Hover Glow Background */}
    <div 
      className="absolute inset-0 opacity-0 group-hover/tech:opacity-10 transition-opacity duration-300 pointer-events-none" 
      style={{ backgroundColor: tech.color }}
    ></div>
    
    {tech.iconUrl ? (
      <img 
        src={tech.iconUrl} 
        alt={tech.name} 
        className="w-8 h-8 drop-shadow-md group-hover/tech:scale-110 transition-transform duration-300" 
      />
    ) : (
      tech.icon && <tech.icon size={32} style={{ color: tech.color }} className="drop-shadow-md group-hover/tech:scale-110 transition-transform duration-300" />
    )}
    
    <span className="text-base font-bold text-gray-300 group-hover/tech:text-white transition-colors duration-300 whitespace-nowrap">
      {tech.name}
    </span>
  </div>
);

export default function TechStack() {
  return (
    <section className="w-full py-32 relative z-20 overflow-hidden bg-[#000000]">
      
      {/* Injecting CSS Keyframes for Infinite Marquee */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(calc(-50% - 1rem)); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: scroll-left 45s linear infinite;
        }
        .animate-marquee-right {
          animation: scroll-right 45s linear infinite;
        }
        .marquee-container:hover .animate-marquee-left,
        .marquee-container:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}} />

      {/* Background glow elements */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#FF7A00]/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#22D3EE]/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 mb-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6"
          >
            Technology Stack
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-24 h-1 bg-gradient-to-r from-[#FF9E59] to-[#FF7A00] rounded-full mx-auto mb-8"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed font-medium"
          >
            Building enterprise-grade applications with modern technologies, scalable architecture, cloud platforms, and AI-powered solutions.
          </motion.p>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex flex-col gap-6 marquee-container pb-10">
        {/* ROW 1 (Scrolls Left) */}
        <div className="flex gap-6 w-max animate-marquee-left px-3">
          {[...row1, ...row1].map((tech, idx) => (
            <TechBadge key={`row1-${idx}`} tech={tech} />
          ))}
        </div>
        
        {/* ROW 2 (Scrolls Right) */}
        <div className="flex gap-6 w-max animate-marquee-right px-3">
          {[...row2, ...row2].map((tech, idx) => (
            <TechBadge key={`row2-${idx}`} tech={tech} />
          ))}
        </div>

        {/* Gradient Edges to blend with background */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#000000] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#000000] to-transparent pointer-events-none z-10" />
      </div>

    </section>
  );
}
