"use client";

import { motion } from "framer-motion";
import { Smartphone, Layers, Zap, Users, BrainCircuit, Rocket } from "lucide-react";

export default function About() {
  const cards = [
    {
      title: "Cross-Platform Engineering",
      description: "Build high-performance applications for iOS, Android, Web, and Progressive Web Apps using Flutter, Ionic, Angular, and Capacitor—delivering a single, scalable codebase with a native user experience.",
      icon: <Smartphone size={24} className="text-primary" />,
    },
    {
      title: "Enterprise Architecture",
      description: "Design clean, modular, and maintainable application architectures using MVVM, BLoC, Provider, Riverpod, and scalable design patterns that simplify development and support long-term growth.",
      icon: <Layers size={24} className="text-accent" />,
    },
    {
      title: "Performance & Quality",
      description: "Optimize rendering performance, memory usage, application startup time, and production stability using profiling tools, Crashlytics, Sentry, CI/CD automation, and modern engineering best practices.",
      icon: <Zap size={24} className="text-primary" />,
    },
    {
      title: "Technical Leadership",
      description: "Lead cross-functional engineering teams, mentor developers, conduct architecture reviews, enforce coding standards, and collaborate with stakeholders to successfully deliver enterprise-scale applications.",
      icon: <Users size={24} className="text-accent" />,
    },
    {
      title: "AI & Innovation",
      description: "Develop intelligent applications using Generative AI, RAG systems, LangChain, LlamaIndex, OpenAI, Gemini, and Vector Databases to automate workflows and enhance user experiences.",
      icon: <BrainCircuit size={24} className="text-primary" />,
    },
    {
      title: "End-to-End Delivery",
      description: "Manage the complete software lifecycle—from requirement analysis and solution architecture to development, testing, CI/CD automation, App Store & Google Play deployment, and production monitoring.",
      icon: <Rocket size={24} className="text-accent" />,
    },
  ];

  return (
    <section id="about" className="relative w-full py-32 px-6 sm:px-12 lg:px-24 overflow-hidden">
      {/* Subtle floating background elements */}
      <div className="absolute top-40 left-10 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto relative z-10 max-w-7xl">
        
        {/* Top Text Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl mx-auto text-center space-y-6 mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Engineering Enterprise-Grade <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Digital Solutions
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto my-8" />
          <p className="text-gray-400 text-lg leading-relaxed">
            With over 12 years of experience in mobile engineering and cross-platform application development, I specialize in designing scalable enterprise solutions that combine clean architecture, exceptional user experiences, and high-performance engineering.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            From leading engineering teams to architecting enterprise applications, I transform complex business requirements into secure, scalable, and production-ready digital products used across Healthcare, Banking, Insurance, Energy, Manufacturing, and Enterprise platforms.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            My expertise spans Flutter, Ionic, Angular, AI-powered applications, cloud integration, DevOps, and modern mobile architecture, enabling businesses to deliver reliable and future-ready software at scale.
          </p>
        </motion.div>

        {/* Bottom Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative p-[1px] rounded-2xl overflow-hidden bg-gradient-to-b from-white/10 to-transparent h-full"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />
              
              <div className="relative h-full bg-background/50 backdrop-blur-md p-8 rounded-2xl border border-white/5 transition-colors group-hover:bg-white/[0.02] flex flex-col">
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white leading-tight">{card.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed text-sm flex-grow">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
