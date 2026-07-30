"use client";

import { motion } from "framer-motion";
import { 
  Smartphone, Layers, Globe, Cloud, Sparkles, 
  Wrench, TestTube2, ShieldCheck, Briefcase 
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      category: "Mobile Development",
      icon: <Smartphone size={24} className="text-primary" />,
      skills: [
        { name: "Flutter", exp: "5+ Years" },
        { name: "Dart", exp: "5+ Years" },
        { name: "Ionic Framework", exp: "11+ Years" },
        { name: "Capacitor" },
        { name: "Cordova" },
        { name: "Android Development" },
        { name: "iOS Development" },
        { name: "Swift" },
        { name: "Kotlin" },
        { name: "Progressive Web Apps (PWA)" }
      ],
    },
    {
      category: "Architecture & State",
      icon: <Layers size={24} className="text-accent" />,
      skills: [
        { name: "Flutter Clean Architecture" },
        { name: "MVVM" },
        { name: "BLoC" },
        { name: "Provider" },
        { name: "Riverpod" },
        { name: "GetX" },
        { name: "MobX" },
        { name: "Dependency Injection" },
        { name: "Modular Architecture" },
        { name: "Native SDK Integration" }
      ],
    },
    {
      category: "Frontend & Backend",
      icon: <Globe size={24} className="text-primary" />,
      skills: [
        { name: "Angular", exp: "11+ Years" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "Node.js" },
        { name: "Python" },
        { name: "GraphQL" },
        { name: "REST APIs" },
        { name: "WebSocket" },
        { name: "MongoDB" },
        { name: "PostgreSQL" }
      ],
    },
    {
      category: "Cloud, DevOps & CI/CD",
      icon: <Cloud size={24} className="text-accent" />,
      skills: [
        { name: "AWS" },
        { name: "Firebase" },
        { name: "GitHub Actions" },
        { name: "Codemagic" },
        { name: "Fastlane" },
        { name: "Jenkins" },
        { name: "Bitbucket" },
        { name: "Git" },
        { name: "SVN" },
        { name: "App Store Connect" },
        { name: "Google Play Console" },
        { name: "CI/CD Pipelines" }
      ],
    },
    {
      category: "AI & GenAI",
      icon: <Sparkles size={24} className="text-primary" />,
      skills: [
        { name: "OpenAI API" },
        { name: "Gemini API" },
        { name: "Grok API" },
        { name: "LangChain" },
        { name: "LlamaIndex" },
        { name: "RAG Systems" },
        { name: "Vector Databases" },
        { name: "FAISS" },
        { name: "ChromaDB" },
        { name: "Prompt Engineering" },
        { name: "On-device ML (TensorFlow Lite)" }
      ],
    },
    {
      category: "Development Tools",
      icon: <Wrench size={24} className="text-accent" />,
      skills: [
        { name: "Android Studio" },
        { name: "Xcode" },
        { name: "Xcode Instruments" },
        { name: "VS Code" },
        { name: "Cursor AI" },
        { name: "GitHub Copilot" },
        { name: "Claude AI" },
        { name: "ChatGPT" },
        { name: "Postman" },
        { name: "Figma" }
      ],
    },
    {
      category: "Testing & Quality",
      icon: <TestTube2 size={24} className="text-primary" />,
      skills: [
        { name: "JUnit" },
        { name: "Espresso" },
        { name: "XCTest" },
        { name: "Jasmine" },
        { name: "Karma" },
        { name: "Detox" },
        { name: "Appium" },
        { name: "Widget Testing" },
        { name: "Integration Testing" },
        { name: "Firebase Crashlytics" },
        { name: "Sentry" },
        { name: "Performance Profiling" }
      ],
    },
    {
      category: "Security",
      icon: <ShieldCheck size={24} className="text-accent" />,
      skills: [
        { name: "VAPT Compliance" },
        { name: "BFSI Security Protocols" },
        { name: "Certificate Pinning" },
        { name: "Secure Local Storage" },
        { name: "Authentication" },
        { name: "Authorization" }
      ],
    },
    {
      category: "Leadership & Delivery",
      icon: <Briefcase size={24} className="text-primary" />,
      skills: [
        { name: "Technical Leadership" },
        { name: "Solution Architecture" },
        { name: "Team Mentoring" },
        { name: "Code Reviews" },
        { name: "Agile Scrum" },
        { name: "Sprint Planning" },
        { name: "Requirement Analysis" },
        { name: "Stakeholder Management" },
        { name: "Release Management" },
        { name: "Performance Optimisation" }
      ],
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="skills" className="relative w-full py-32 px-6 sm:px-12 lg:px-24">
      {/* Background Particle Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Technical Arsenal
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
          <p className="text-lg text-gray-400 leading-relaxed font-medium">
            Over 12 years of building enterprise-grade mobile applications, scalable frontend architectures, AI-powered solutions, and modern DevOps pipelines.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((group) => (
            <motion.div
              key={group.category}
              variants={itemVariants}
              className="relative p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-transparent group overflow-hidden"
            >
              {/* Glassmorphism Card */}
              <div className="relative h-full bg-black/40 backdrop-blur-xl p-8 rounded-3xl border border-white/5 group-hover:border-primary/30 transition-all duration-500 z-10 group-hover:bg-white/[0.02]">
                
                {/* Spotlight Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10 shadow-inner group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 relative">
                    <div className="absolute inset-0 bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                    {group.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-primary transition-colors duration-300">
                    {group.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="group/badge relative px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default flex items-center gap-2 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(254,127,45,0.25)]"
                    >
                      <span className="text-sm font-semibold text-gray-300 group-hover/badge:text-white transition-colors">
                        {skill.name}
                      </span>
                      {skill.exp && (
                        <span className="text-[10px] font-black uppercase tracking-wider text-primary/80 bg-primary/10 px-2 py-0.5 rounded-md border border-primary/20 group-hover/badge:bg-primary group-hover/badge:text-black transition-colors">
                          {skill.exp}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
