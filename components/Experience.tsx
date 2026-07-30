"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Building2 } from "lucide-react";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const experiences = [
    {
      role: "Tech Lead | Solution Architect",
      company: "SMI Technology LLC",
      location: "Dubai, UAE (Part-Time)",
      period: "2026 (Feb – Jun)",
      description: "Led technical architecture and solution design for enterprise mobile applications. Collaborated with stakeholders to transform business requirements into scalable technical solutions. Established CI/CD pipelines and modernized enterprise healthcare applications.",
      achievements: [
        "Designed scalable mobile solution architecture",
        "Led architecture and technical decision making",
        "Mentored engineering teams",
        "Implemented automated CI/CD pipelines",
        "Modernized enterprise healthcare applications",
        "Managed App Store & Google Play releases"
      ],
      technologies: ["Flutter", "Dart", "Angular", "Ionic", "Capacitor", "GitHub Actions", "Fastlane", "Firebase", "CI/CD"]
    },
    {
      role: "Tech Lead",
      company: "E-Zest Digital Solutions",
      location: "Pune, India",
      period: "2021 – 2025",
      description: "Led enterprise-scale mobile application development across Healthcare, Banking, Insurance, Energy, and Enterprise platforms. Designed scalable Flutter Clean Architecture while mentoring engineering teams and driving Agile delivery.",
      achievements: [
        "Led multiple enterprise mobile projects",
        "Architected scalable Flutter applications",
        "Migrated legacy Ionic/Cordova apps to Capacitor",
        "Implemented CI/CD automation",
        "Improved application performance",
        "Established engineering best practices",
        "Led release management for Android & iOS"
      ],
      technologies: ["Flutter", "Angular", "Ionic", "Capacitor", "Firebase", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Git", "Codemagic", "Fastlane", "GitHub Actions"]
    },
    {
      role: "Senior Software Developer",
      company: "Birlasoft",
      location: "India",
      period: "2017 – 2021",
      description: "Developed enterprise mobile applications for Banking, Insurance, Manufacturing, and Healthcare clients. Focused on scalable frontend development, secure mobile applications, API integration, and performance optimization.",
      achievements: [
        "Delivered enterprise banking applications",
        "Implemented VAPT security standards",
        "Optimized Android & iOS performance",
        "Integrated REST, GraphQL & WebSocket APIs",
        "Improved application stability"
      ],
      technologies: ["Flutter", "Ionic", "Angular", "JavaScript", "TypeScript", "GraphQL", "WebSocket", "Android", "iOS"]
    },
    {
      role: "Senior Software Developer",
      company: "Human Interface",
      location: "India",
      period: "2016 – 2017",
      description: "Developed and maintained enterprise dealer management applications for Android and iOS platforms while ensuring production stability and high application quality.",
      achievements: [
        "Enterprise application development",
        "Production support",
        "Performance optimization",
        "Automated testing"
      ],
      technologies: ["Ionic", "Android", "iOS", "XCTest", "Espresso"]
    },
    {
      role: "Senior Software Developer",
      company: "Mechatronics Systems Pvt. Ltd.",
      location: "India",
      period: "2015 – 2016",
      description: "Worked on cross-platform enterprise applications while collaborating directly with clients to deliver scalable mobile solutions.",
      achievements: [
        "Requirement analysis",
        "Application development",
        "Client collaboration",
        "Performance improvements"
      ],
      technologies: ["Ionic", "AngularJS", "JavaScript", "HTML", "CSS"]
    },
    {
      role: "Junior Software Developer",
      company: "Variant Infotech",
      location: "India",
      period: "2014 – 2015",
      description: "Started my professional career developing cross-platform mobile applications and building scalable frontend solutions.",
      achievements: [
        "Mobile application development",
        "UI implementation",
        "Feature development",
        "Bug fixing"
      ],
      technologies: ["Ionic", "Cordova", "JavaScript", "HTML5", "CSS3"]
    }
  ];

  return (
    <section id="experience" className="relative w-full py-32 px-6 sm:px-12 lg:px-24">
      <div className="container mx-auto max-w-5xl" ref={containerRef}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Professional Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line background */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:-translate-x-1/2" />
          
          {/* Animated Timeline fill */}
          <motion.div 
            className="absolute left-[20px] md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-primary via-accent to-primary md:-translate-x-1/2 shadow-[0_0_15px_rgba(254,127,45,0.5)]"
            style={{ height: timelineHeight }}
          />

          <div className="space-y-24">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center w-full">
                  
                  {/* Desktop Layout - Left Side */}
                  <div className={`hidden md:block w-1/2 pr-16 text-right ${!isEven ? 'md:order-1 opacity-0' : ''}`}>
                    {isEven && (
                      <ExperienceCard exp={exp} index={index} align="right" />
                    )}
                  </div>

                  {/* Timeline Dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
                    className="absolute left-[20px] md:left-1/2 w-10 h-10 rounded-full bg-background border-4 border-primary z-10 -translate-x-1/2 flex items-center justify-center shadow-[0_0_20px_rgba(254,127,45,0.4)] md:order-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </motion.div>

                  {/* Desktop Layout - Right Side */}
                  <div className={`hidden md:block w-1/2 pl-16 ${isEven ? 'md:order-3 opacity-0' : 'md:order-3'}`}>
                    {!isEven && (
                      <ExperienceCard exp={exp} index={index} align="left" />
                    )}
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden w-full pl-16 py-4">
                    <ExperienceCard exp={exp} index={index} align="left" />
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp, index, align }: { exp: any, index: number, align: 'left' | 'right' }) {
  // Extract initials for the logo placeholder
  const initials = exp.company.substring(0, 2).toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'right' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 group hover:scale-[1.02]`}
    >
      <div className={`absolute top-1/2 -translate-y-1/2 w-0 h-0 border-[10px] border-transparent 
        ${align === 'right' ? '-right-[20px] border-l-white/10 group-hover:border-l-white/20 hidden md:block' : '-left-[20px] border-r-white/10 group-hover:border-r-white/20 hidden md:block'}
      `} />
      
      {/* Year & Role */}
      <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-lg md:text-xl font-bold mb-4 border border-primary/20 shadow-[0_0_15px_rgba(254,127,45,0.15)]">
        {exp.period}
      </span>
      <h3 className="text-3xl font-black text-white tracking-tight mb-4">{exp.role}</h3>
      
      {/* Company details with logo placeholder */}
      <div className={`flex items-center gap-4 mb-6 ${align === 'right' ? 'md:justify-end' : 'justify-start'}`}>
        {align === 'right' && (
          <div className="text-right hidden md:block">
            <h4 className="text-xl font-semibold text-gray-200">{exp.company}</h4>
            <span className="block text-sm text-gray-500 mt-1">{exp.location}</span>
          </div>
        )}
        
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(254,127,45,0.3)] transition-all overflow-hidden relative">
          <Building2 size={24} className="text-gray-400 group-hover:text-primary group-hover:scale-110 transition-all absolute opacity-20" />
          <span className="font-bold text-gray-300 group-hover:text-white z-10 text-lg">{initials}</span>
        </div>

        <div className={`text-left ${align === 'right' ? 'md:hidden' : ''}`}>
          <h4 className="text-xl font-semibold text-gray-200">{exp.company}</h4>
          <span className="block text-sm text-gray-500 mt-1">{exp.location}</span>
        </div>
      </div>
      
      {/* Summary */}
      <p className="text-gray-400 text-base leading-relaxed mb-6 font-medium">
        {exp.description}
      </p>

      {/* Achievements */}
      {exp.achievements && exp.achievements.length > 0 && (
        <div className="mb-8 p-5 rounded-2xl bg-black/20 border border-white/5 group-hover:border-white/10 transition-colors">
          <h5 className="text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2 justify-start">
             <span className={`w-2 h-2 rounded-full bg-primary ${align === 'right' ? 'md:hidden' : ''}`} />
             Key Achievements
             <span className={`w-2 h-2 rounded-full bg-primary hidden ${align === 'right' ? 'md:block' : ''}`} />
          </h5>
          <ul className={`space-y-3 text-gray-300 text-sm ${align === 'right' ? 'md:text-right' : 'text-left'}`}>
            {exp.achievements.map((achievement: string, i: number) => (
              <li key={i} className={`flex ${align === 'right' ? 'md:flex-row-reverse md:space-x-reverse' : 'flex-row'} gap-3 items-start`}>
                <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(254,127,45,0.5)] transition-all" />
                <span className="leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Technology Badges */}
      <div className={`flex flex-wrap gap-2.5 ${align === 'right' ? 'md:justify-end' : 'justify-start'}`}>
        {exp.technologies.map((tech: string) => (
          <span key={tech} className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-primary/20 hover:text-primary transition-all text-gray-300 text-sm font-semibold border border-white/10 hover:border-primary/40 hover:shadow-[0_0_15px_rgba(254,127,45,0.3)] cursor-default hover:-translate-y-0.5">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
