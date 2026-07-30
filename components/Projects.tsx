"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, LayoutTemplate, Star, CheckCircle2 } from "lucide-react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All", "AI", "Healthcare", "Banking", "Insurance", 
    "Recruitment", "Manufacturing", "Energy", "Enterprise"
  ];

  const projects = [
    {
      title: "Asteco IAS",
      category: "Enterprise Facilities & Asset Management Platform",
      industry: "Facilities Management",
      description: "Asteco IAS is an enterprise Facilities & Asset Management platform enabling organizations to manage maintenance operations, field service teams, and assets. As Tech Lead and Solution Architect, I designed scalable mobile architecture, led the engineering team, and delivered a production-ready mobile application.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      highlights: [
        "Designed scalable enterprise architecture",
        "Led cross-functional engineering teams",
        "Delivered production-ready mobile app",
        "Implemented CI/CD workflows"
      ],
      technologies: ["Flutter", "Dart", "Ionic", "Capacitor", "Angular", "Node.js", "REST APIs", "Firebase", "GitHub Actions", "Fastlane"],
      featured: true,
      link: "https://play.google.com/store/apps/details?id=com.musanada.check&hl=en_IN"
    },
    {
      title: "GenAI POC & Automation Agent",
      category: "Artificial Intelligence",
      industry: "AI / Enterprise Automation",
      description: "Built a Retrieval-Augmented Generation (RAG) platform capable of understanding enterprise PDF documents using semantic search and AI-powered contextual responses.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
      highlights: [
        "Built end-to-end RAG pipeline",
        "Semantic document search",
        "AI-powered knowledge retrieval",
        "Enterprise automation workflows"
      ],
      technologies: ["Python", "LangChain", "LlamaIndex", "OpenAI API", "Gemini API", "Grok API", "FAISS", "ChromaDB"],
      featured: true
    },
    {
      title: "StaffDNA",
      category: "Healthcare Platform",
      industry: "Healthcare",
      description: "Enterprise healthcare staffing platform connecting healthcare professionals with hospitals across the United States. Developed scalable mobile features with real-time communication.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
      highlights: [
        "Real-time notifications",
        "Firebase Crashlytics",
        "BLoC architecture",
        "Enterprise mobile platform"
      ],
      technologies: ["Ionic 7", "Capacitor", "Angular 14", "Node.js", "PostgreSQL", "Firebase", "WebSocket"],
      featured: true
    },
    {
      title: "WorkPac",
      category: "Recruitment Platform",
      industry: "Workforce Management",
      description: "Enterprise workforce management application for Australian recruitment services with automated deployment pipelines and enterprise release management.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80",
      highlights: [
        "CI/CD automation",
        "App Store deployments",
        "Enterprise workforce management",
        "Performance optimization"
      ],
      technologies: ["Ionic", "Capacitor", "Angular", "Node.js", "PostgreSQL", "Codemagic", "Fastlane"],
      featured: false
    },
    {
      title: "Mobile Banking Applications",
      category: "Banking",
      industry: "Banking",
      description: "Developed secure mobile banking applications (Cosmos Bank, Janta Sahakari Bank) with enterprise-grade security, digital banking services, and VAPT compliance.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
      highlights: [
        "Secure authentication",
        "BFSI security",
        "Digital banking",
        "Payment integration"
      ],
      technologies: ["Ionic", "Java", "Spring Boot", "Node.js", "Certificate Pinning", "Secure Storage"],
      featured: true
    },
    {
      title: "ACL & ACC Dealers App",
      category: "Dealer Management",
      industry: "Manufacturing",
      description: "Dealer management platform for Ambuja Cement and ACC dealers, enabling order management, logistics, and enterprise collaboration.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
      highlights: [
        "Dealer management",
        "Enterprise workflows",
        "Logistics integration",
        "Production support"
      ],
      technologies: ["Ionic", "Android", "iOS", "Node.js", "PostgreSQL"],
      featured: false
    },
    {
      title: "MHL Mobile Connect",
      category: "Healthcare",
      industry: "Healthcare",
      description: "Healthcare communication platform connecting patients, laboratories, healthcare partners, and providers with real-time updates.",
      image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80",
      highlights: [
        "WebSocket integration",
        "Real-time reports",
        "Sentry monitoring",
        "Enterprise healthcare"
      ],
      technologies: ["Ionic", "Android", "iOS", "WebSocket", "Sentry"],
      featured: false
    },
    {
      title: "BPCL",
      category: "Enterprise Platform",
      industry: "Energy",
      description: "Digital advertising management platform for Bharat Petroleum sales executives to manage campaigns and customer engagement.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80",
      highlights: [
        "Enterprise dashboard",
        "Campaign management",
        "Mobile-first experience",
        "Business automation"
      ],
      technologies: ["Ionic", "Android", "iOS", "Web"],
      featured: false
    },
    {
      title: "Reliance Industries (RIL)",
      category: "Enterprise Social Platform",
      industry: "Enterprise",
      description: "Enterprise social platform for employee collaboration with Firebase Cloud Messaging and production monitoring.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      highlights: [
        "Push notifications",
        "Crash monitoring",
        "Enterprise collaboration",
        "High scalability"
      ],
      technologies: ["Firebase", "FCM", "Ionic", "Android", "iOS"],
      featured: false
    },
    {
      title: "Bharti AXA Life Insurance",
      category: "Insurance",
      industry: "Insurance",
      description: "Mobile application enabling insurance agents to present products, calculate premiums, generate invoices, and process secure payments.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&q=80",
      highlights: [
        "Payment gateway integration",
        "Insurance platform",
        "Secure transactions",
        "Financial calculations"
      ],
      technologies: ["Ionic", "Android", "iOS", "Payment Gateway"],
      featured: false
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.industry.includes(activeFilter) || p.category.includes(activeFilter));

  return (
    <section id="projects" className="relative w-full py-32 px-6 sm:px-12 lg:px-24">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="container mx-auto relative z-10 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 text-center">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Work</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-8" />
          <p className="text-gray-400 text-lg text-center max-w-3xl leading-relaxed">
            A collection of enterprise mobile applications, AI solutions, and digital products built across Healthcare, Banking, Insurance, Manufacturing, Energy, and Recruitment domains over 12+ years.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeFilter === filter 
                  ? "bg-primary text-black border-primary shadow-[0_0_15px_rgba(254,127,45,0.4)]" 
                  : "bg-white/5 text-gray-400 border-white/10 hover:border-primary/50 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                className="group relative rounded-3xl overflow-hidden bg-white/[0.02] border border-white/10 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(254,127,45,0.3)] flex flex-col"
                style={{ perspective: "1000px" }}
              >
                {/* Glow Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Featured Ribbon */}
                {project.featured && (
                  <div className="absolute top-4 -right-12 z-20 rotate-45 bg-accent text-white text-[10px] font-bold uppercase tracking-widest py-1.5 w-40 text-center shadow-lg">
                    <span className="flex items-center justify-center gap-1">
                      <Star size={10} fill="currentColor" /> Featured
                    </span>
                  </div>
                )}

                {/* Project Image */}
                <div className="relative h-64 overflow-hidden shrink-0 border-b border-white/5">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10 duration-500" />
                  
                  {/* Industry Badge overlay */}
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg text-xs font-semibold text-gray-200">
                    {project.industry}
                  </div>

                  <motion.div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                </div>

                {/* Project Info */}
                <div className="p-8 flex flex-col grow relative z-10 bg-gradient-to-b from-transparent to-black/50">
                  <span className="text-primary text-sm font-semibold mb-2">{project.category}</span>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6 space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.technologies.map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-white/5 text-[11px] font-medium text-gray-300 rounded-md border border-white/10 group-hover:border-white/20 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 mt-auto">
                    <a href={project.link || "#"} target={project.link ? "_blank" : undefined} rel={project.link ? "noopener noreferrer" : undefined} className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary hover:bg-primary/90 text-black font-semibold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40">
                      View Details
                      <ExternalLink size={16} />
                    </a>
                    <a href="#" className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10 hover:border-white/20 flex items-center justify-center gap-2 font-medium">
                      <LayoutTemplate size={16} />
                      Architecture
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
