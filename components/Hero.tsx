"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Mail, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center text-white pt-32 pb-20">

      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center lg:items-start">

          {/* Left Text Column */}
          <div className="flex flex-col justify-center items-start order-2 lg:order-1">

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-900/50 bg-[#0F1714] mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-500 text-xs font-medium tracking-wide">
                Available for freelance & full-time roles
              </span>
            </motion.div>

            {/* Typography Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col space-y-1"
            >
              <span className="text-xl text-gray-300 font-medium tracking-wide mb-1">Hi, I'm</span>
              <h1 className="font-black uppercase tracking-tighter leading-[0.85]">
                <span className="block text-white text-[clamp(4.5rem,8vw,7.5rem)] drop-shadow-lg">Peeyush</span>
                <span className="block text-[clamp(4.5rem,8vw,7.5rem)] text-transparent bg-clip-text bg-gradient-to-r from-[#FF9E59] to-[#FF7A00]">Nanhe</span>
              </h1>
              <div className="pt-2 font-caveat text-4xl sm:text-5xl text-[#22D3EE] font-bold tracking-wider -rotate-1">
                Senior Mobile Engineer • Tech Lead • Solution Architect
              </div>
            </motion.div>

            {/* Bio Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-400 font-normal leading-relaxed max-w-[550px] mt-8 space-y-4"
            >
              <p>
                Senior Mobile Engineer, Technical Lead, and Solution Architect with <span className="text-white font-semibold">12+ years of experience</span> delivering enterprise-grade mobile applications across Healthcare, Banking, Insurance, Manufacturing, Energy, and Recruitment industries.
              </p>
              <p>
                I specialize in designing scalable cross-platform solutions using <span className="text-white font-semibold">Flutter, Ionic, Angular, and modern cloud technologies</span>, while leading engineering teams through architecture, development, code reviews, CI/CD automation, and successful App Store & Google Play deployments.
              </p>
              <p>
                Passionate about clean architecture, AI-powered applications, performance optimization, and building secure, maintainable digital products that create measurable business value and exceptional user experiences.
              </p>
            </motion.div>

          </div>

          {/* Right Column (Visual / Orbital Animation) */}
          <div className="flex flex-col items-center justify-center order-1 lg:order-2 w-full pt-10 lg:pt-24">
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center" style={{ perspective: "1000px", transformStyle: "preserve-3d" }}>
              {/* Orbital 3D Animation - Ring 1 */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ transformStyle: "preserve-3d" }}>
                <div className="absolute rounded-full border-[1px] border-[#FF7A00]/20 w-[360px] h-[360px] sm:w-[420px] sm:h-[420px]" style={{ transform: "rotateX(70deg) rotateY(-15deg)", transformStyle: "preserve-3d" }}>
                  <div className="absolute inset-0 rounded-full" style={{ animation: "orbitRotateCw 25s linear infinite", transformStyle: "preserve-3d" }}>

                    {/* Orbit Nodes */}
                    {[
                      { 
                        bg: "#3DDC84", 
                        deg: 0,
                        icon: (
                          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                            <path d="M17.523 15.3414C17.523 15.3414 17.523 15.3414 17.523 15.3414ZM6.476 15.3414C6.476 15.3414 6.476 15.3414 6.476 15.3414ZM17.348 10.9664L19.317 7.55644C19.429 7.36244 19.363 7.11444 19.169 7.00244C18.975 6.89044 18.727 6.95644 18.615 7.15044L16.591 10.6554C15.228 10.0354 13.664 9.67144 12.001 9.67144C10.338 9.67144 8.774 10.0354 7.411 10.6554L5.387 7.15044C5.275 6.95644 5.027 6.89044 4.833 7.00244C4.639 7.11444 4.573 7.36244 4.685 7.55644L6.654 10.9664C3.045 12.9464 0.589 16.7114 0.177 21.0854H23.825C23.413 16.7114 20.957 12.9464 17.348 10.9664ZM6.477 17.2024C5.758 17.2024 5.176 16.6204 5.176 15.9014C5.176 15.1824 5.758 14.6004 6.477 14.6004C7.196 14.6004 7.778 15.1824 7.778 15.9014C7.778 16.6204 7.196 17.2024 6.477 17.2024ZM17.525 17.2024C16.806 17.2024 16.224 16.6204 16.224 15.9014C16.224 15.1824 16.806 14.6004 17.525 14.6004C18.244 14.6004 18.826 15.1824 18.826 15.9014C18.826 16.6204 18.244 17.2024 17.525 17.2024Z"/>
                          </svg>
                        )
                      },
                      { 
                        bg: "#3880FF", 
                        deg: 90,
                        icon: (
                          <svg viewBox="0 0 512 512" width="16" height="16" fill="currentColor"><path d="M256 16C123.45 16 16 123.45 16 256s107.45 240 240 240 240-107.45 240-240S388.55 16 256 16zm114.7 205l-69.6 138.8a18.2 18.2 0 01-16.2 10h-57.8c-14.7 0-24.2-15-18.3-28l69.6-138.8c3.2-6.4 9.8-10 16.2-10h57.8c14.7 0 24.2 15 18.3 28zM245.3 142.2a27.7 27.7 0 11-27.7 27.7 27.7 27.7 0 0127.7-27.7z"/></svg>
                        )
                      },
                      { 
                        bg: "#61DAFB", 
                        deg: 180,
                        icon: (
                          <svg viewBox="-11.5 -10.23174 23 20.46348" width="16" height="16" fill="currentColor">
                            <circle cx="0" cy="0" r="2.05"/>
                            <g stroke="currentColor" strokeWidth="1" fill="none">
                              <ellipse rx="11" ry="4.2"/>
                              <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                              <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                            </g>
                          </svg>
                        )
                      },
                      { 
                        bg: "#FFCA28", 
                        deg: 270,
                        icon: (
                          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                            <path d="M3.89 15.672l2.365-15.211a.542.542 0 011.015-.173l2.543 4.771-5.923 10.613zm7.527-7.314l-1.604-3.167a.541.541 0 00-.965 0L3.89 15.672l7.527-7.314zm2.267 2.641l3.526-3.66a.542.542 0 01.916.326l1.248 7.375-5.69-4.041zm0 0L3.89 15.672l7.591 4.25c.34.19.748.19 1.088 0l6.805-3.882-5.69-5.041z"/>
                          </svg>
                        )
                      },
                    ].map((node, i) => {
                      const rad = (node.deg * Math.PI) / 180;
                      const x = (50 + 50 * Math.sin(rad)).toFixed(2);
                      const y = (50 - 50 * Math.cos(rad)).toFixed(2);
                      return (
                        <div key={i} className="absolute pointer-events-auto" style={{ top: `${y}%`, left: `${x}%`, transform: "translate(-50%, -50%)", transformStyle: "preserve-3d" }}>
                          <div style={{ animation: "counterTransform3dCw 25s linear infinite", transformStyle: "preserve-3d" }}>
                            <div className="w-10 h-10 rounded-full bg-[#111] backdrop-blur border shadow-lg flex items-center justify-center transition-transform hover:scale-110" style={{ borderColor: `${node.bg}50`, color: node.bg, boxShadow: `0 0 15px ${node.bg}30` }}>
                              {node.icon}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Orbital 3D Animation - Ring 2 (Mirror Image) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ transformStyle: "preserve-3d" }}>
                <div className="absolute rounded-full border-[1px] border-[#22D3EE]/20 w-[360px] h-[360px] sm:w-[420px] sm:h-[420px]" style={{ transform: "rotateX(70deg) rotateY(15deg)", transformStyle: "preserve-3d" }}>
                  <div className="absolute inset-0 rounded-full" style={{ animation: "orbitRotateCcw 25s linear infinite", transformStyle: "preserve-3d" }}>

                    {/* Orbit Nodes (Mirrored) */}
                    {[
                      { 
                        bg: "#FFFFFF", 
                        deg: 0,
                        icon: (
                          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-1.918.046-3.778 1.118-4.849 2.922-2.33 3.963-.568 9.774 1.706 13.061 1.116 1.624 2.477 3.491 4.214 3.442 1.681-.05 2.331-1.08 4.316-1.08 1.986 0 2.585 1.08 4.35 1.04 1.802-.046 2.969-1.687 4.077-3.328 1.341-1.921 1.89-3.784 1.915-3.879-.04-.016-3.64-1.396-3.666-5.59-.026-3.513 2.871-5.184 2.999-5.267-1.637-2.39-4.14-2.73-5.06-2.784-2.023-.173-4.088 1.198-5.042 1.198zm2.493-2.613c1.037-1.258 1.737-3.003 1.547-4.733-1.48.058-3.325.986-4.402 2.222-.958 1.096-1.796 2.877-1.564 4.568 1.65.127 3.385-.802 4.419-2.057z"/></svg>
                        )
                      },
                      { 
                        bg: "#DD0031", 
                        deg: 90,
                        icon: (
                          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2.29l-9.5 3.37.9 10.6 8.6 4.75 8.6-4.75.9-10.6zm4.8 15.34l-1.8-4.5H9l-1.8 4.5H5.4L12 5.14l6.6 12.49zm-2.7-6.8h-4.2L12 7z"/></svg>
                        )
                      },
                      { 
                        bg: "#10B981", 
                        deg: 180,
                        icon: (
                          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>
                        )
                      },
                      { 
                        bg: "#F05032", 
                        deg: 270,
                        icon: (
                          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                            <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.759 2.759c.64-.22 1.383-.073 1.898.441.836.836.836 2.192 0 3.028-.836.836-2.192.836-3.028 0-.515-.515-.658-1.258-.438-1.9l-2.614-2.614v4.475c.22.215.362.511.362.836 0 .836-.677 1.513-1.513 1.513-.836 0-1.513-.677-1.513-1.513 0-.325.142-.621.362-.836v-4.475c-.22-.215-.362-.511-.362-.836 0-.325.142-.621.362-.836L5.308 5.483.453 10.338c-.604.604-.604 1.583 0 2.188l10.48 10.48c.604.604 1.582.604 2.188 0l10.425-10.425c.604-.604.604-1.583 0-2.188z"/>
                          </svg>
                        )
                      },
                    ].map((node, i) => {
                      const rad = (node.deg * Math.PI) / 180;
                      const x = (50 + 50 * Math.sin(rad)).toFixed(2);
                      const y = (50 - 50 * Math.cos(rad)).toFixed(2);
                      return (
                        <div key={i} className="absolute pointer-events-auto" style={{ top: `${y}%`, left: `${x}%`, transform: "translate(-50%, -50%)", transformStyle: "preserve-3d" }}>
                          <div style={{ animation: "counterTransform3dCcw 25s linear infinite", transformStyle: "preserve-3d" }}>
                            <div className="w-10 h-10 rounded-full bg-[#111] backdrop-blur border shadow-lg flex items-center justify-center transition-transform hover:scale-110" style={{ borderColor: `${node.bg}50`, color: node.bg, boxShadow: `0 0 15px ${node.bg}30` }}>
                              {node.icon}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Headshot Frame with Corner Accents */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-3xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* 4 Corner Accents */}
                <div className="absolute -top-1 -left-1 w-10 h-10 border-t-2 border-l-2 border-[#FF7A00] rounded-tl-3xl pointer-events-none" style={{ transform: "translateZ(1px)" }}></div>
                <div className="absolute -top-1 -right-1 w-10 h-10 border-t-2 border-r-2 border-[#FF7A00] rounded-tr-3xl pointer-events-none" style={{ transform: "translateZ(1px)" }}></div>
                <div className="absolute -bottom-1 -left-1 w-10 h-10 border-b-2 border-l-2 border-[#FF7A00] rounded-bl-3xl pointer-events-none" style={{ transform: "translateZ(1px)" }}></div>
                <div className="absolute -bottom-1 -right-1 w-10 h-10 border-b-2 border-r-2 border-[#FF7A00] rounded-br-3xl pointer-events-none" style={{ transform: "translateZ(1px)" }}></div>

                {/* Inner Image Mask */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br from-[#222] to-[#0a0a0a] border border-white/10 shadow-[0_0_60px_rgba(255,122,0,0.15)] flex items-end justify-center">
                  <div className="w-full h-full relative">
                    <Image
                      src="/profile.jpg"
                      alt="Peeyush Nanhe"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Floating "Flutter Specialist" Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center gap-4 shadow-2xl"
                  style={{ transform: "translateZ(20px)" }}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#222] border border-white/5 flex items-center justify-center text-[#FF7A00]">
                    <span className="text-xs font-mono font-bold">{"</>"}</span>
                  </div>
                  <div className="flex-grow">
                    <div className="text-white text-sm font-bold">Mobile Architect</div>
                    <div className="text-gray-400 text-xs">Cross-Platform Expert</div>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
                </motion.div>
              </motion.div>
            </div>

            {/* Content Moved from Left Column to Fill Blank Space */}
            <div className="w-full max-w-[500px] mt-10 flex flex-col items-center">
              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center justify-center gap-4"
              >
                <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-black bg-gradient-to-r from-[#FF9E59] to-[#FF7A00] hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_8px_30px_rgba(255,122,0,0.3)] group">
                  Hire Me
                  <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                <a href="#" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-gray-300 bg-[#151515] border border-white/10 hover:bg-[#1f1f1f] hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 group">
                  <Download size={18} className="text-[#FF7A00] group-hover:-translate-y-1 transition-transform" />
                  Download Resume
                </a>
              </motion.div>

              {/* Social Icons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center justify-center gap-3 mt-8"
              >
                {[
                  { icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>, href: "https://github.com/peeyush" },
                  { icon: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>, href: "https://www.linkedin.com/in/peeyush-nanhe-6333531a/" },
                  { icon: <Mail size={18} />, href: "mailto:hello@peeyush.com" },
                  { icon: <Phone size={18} className="text-emerald-400" />, href: "tel:+919730195962" },
                ].map((social, i) => (
                  <a key={i} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined} className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#111] border border-white/5 text-gray-400 hover:text-white hover:border-white/20 transition-all hover:scale-110">
                    {social.icon}
                  </a>
                ))}
              </motion.div>

              {/* Mini Stat Cards Grid */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="grid grid-cols-2 gap-3 mt-8 w-full"
              >
                {[
                  { icon: "💼", value: "12+", label: "Years Experience" },
                  { icon: "🚀", value: "30+", label: "Projects Completed" },
                  { icon: "⚡", value: "32+", label: "Technologies Mastered" },
                  { icon: "⭐", value: "100%", label: "Client Satisfaction" },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-[#111] border border-white/5 text-center">
                    <div className="flex items-center gap-1.5 mb-1 text-white font-bold text-lg sm:text-xl">
                      <span className="text-sm">{stat.icon}</span> {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-500 font-medium">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
