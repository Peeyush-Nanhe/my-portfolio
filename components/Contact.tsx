"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, Globe, Calendar, ArrowRight, Download, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative w-full py-32 px-6 sm:px-12 lg:px-24 bg-white/[0.02]">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Let's Build Something <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Amazing Together</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-8" />
          <p className="text-gray-400 text-lg leading-relaxed mb-4">
            I'm always interested in discussing enterprise mobile development, Flutter architecture, technical leadership, AI-powered applications, consulting opportunities, and exciting freelance or full-time roles.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Whether you're building a startup, scaling an enterprise platform, or looking for a Technical Lead or Mobile Architect, I'd love to hear from you.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-32">
          
          {/* Left Column - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12 space-y-8"
          >
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md shadow-2xl hover:border-primary/30 transition-colors">
              <div className="space-y-6">
                <a href="https://maps.google.com/?q=Amravati,Maharashtra,India" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary/20 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300 shadow-inner">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1 font-medium tracking-wide">Location</p>
                    <p className="text-lg text-white font-semibold group-hover:text-primary transition-colors">
                      Amravati, Maharashtra, India
                    </p>
                  </div>
                </a>

                <a href="mailto:peeyushnanhe@gmail.com" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent/20 group-hover:border-accent/50 group-hover:scale-110 transition-all duration-300 shadow-inner">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1 font-medium tracking-wide">Email</p>
                    <p className="text-lg text-white font-semibold group-hover:text-accent transition-colors">
                      peeyushnanhe@gmail.com
                    </p>
                  </div>
                </a>

                <a href="tel:+919730195962" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary/20 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300 shadow-inner">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1 font-medium tracking-wide">Phone</p>
                    <p className="text-lg text-white font-semibold group-hover:text-primary transition-colors">
                      +91 9730195962
                    </p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/peeyush-nanhe-6333531a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent/20 group-hover:border-accent/50 group-hover:scale-110 transition-all duration-300 shadow-inner">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1 font-medium tracking-wide">LinkedIn</p>
                    <p className="text-lg text-white font-semibold group-hover:text-accent transition-colors">
                      Let's Connect
                    </p>
                  </div>
                </a>

                <a href="https://github.com/PeeyushNanhe" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary/20 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300 shadow-inner">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1 font-medium tracking-wide">GitHub</p>
                    <p className="text-lg text-white font-semibold group-hover:text-primary transition-colors">
                      View Repositories
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 backdrop-blur-md shadow-[0_0_30px_rgba(254,127,45,0.1)]">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                Available for
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                {["Full-time Opportunities", "Remote Roles", "Technical Consulting", "Freelance Projects", "Mobile Architecture", "Flutter Development", "Angular Development", "AI Solution Development"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300 text-sm font-medium">
                    <CheckCircle2 size={14} className="text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <div className="p-8 md:p-12 rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/10 shadow-2xl relative overflow-hidden group">
              {/* Form Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Thank you!</h3>
                  <p className="text-gray-400 text-lg max-w-md">
                    Your message has been sent successfully. I'll get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 px-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400 pl-1">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all placeholder:text-gray-600 focus:ring-1 focus:ring-primary/50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400 pl-1">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all placeholder:text-gray-600 focus:ring-1 focus:ring-primary/50"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400 pl-1">Company</label>
                      <input 
                        type="text" 
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all placeholder:text-gray-600 focus:ring-1 focus:ring-primary/50"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400 pl-1">Job Title</label>
                      <input 
                        type="text" 
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all placeholder:text-gray-600 focus:ring-1 focus:ring-primary/50"
                        placeholder="Product Manager"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400 pl-1">Project Type *</label>
                      <select required defaultValue="" className="w-full px-5 py-4 rounded-xl bg-[#111] border border-white/10 text-white focus:outline-none focus:border-primary focus:bg-[#1a1a1a] transition-all focus:ring-1 focus:ring-primary/50 appearance-none">
                        <option value="" disabled>Select a project type</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="Flutter Development">Flutter Development</option>
                        <option value="Angular Development">Angular Development</option>
                        <option value="Technical Consulting">Technical Consulting</option>
                        <option value="AI Solution">AI Solution</option>
                        <option value="Enterprise Project">Enterprise Project</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400 pl-1">Project Budget (Optional)</label>
                      <input 
                        type="text" 
                        className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all placeholder:text-gray-600 focus:ring-1 focus:ring-primary/50"
                        placeholder="$10k - $50k"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 pl-1">Message *</label>
                    <textarea 
                      required
                      rows={5}
                      className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all placeholder:text-gray-600 resize-none focus:ring-1 focus:ring-primary/50"
                      placeholder="Tell me about your project requirements, timeline, and goals..."
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full flex items-center justify-center gap-3 bg-white text-black py-5 rounded-xl font-bold transition-all overflow-hidden mt-2 hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.2)] disabled:opacity-70 disabled:hover:scale-100"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </form>
              )}

              <div className="mt-8 pt-8 border-t border-white/10 text-center relative z-10">
                <p className="text-gray-500 mb-6 font-medium">OR</p>
                <a 
                  href="#"
                  className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary font-semibold transition-all border border-primary/20 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(254,127,45,0.2)]"
                >
                  <Calendar size={18} />
                  Book a Free Consultation
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Premium CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-12 md:p-20 rounded-[40px] overflow-hidden bg-gradient-to-br from-primary/20 via-black to-accent/20 border border-white/10 text-center shadow-2xl"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
              Ready to Build Your Next <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Digital Product?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 font-medium">
              Let's create scalable, secure, and high-performance applications that deliver exceptional user experiences and business value.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:peeyushnanhe@gmail.com" className="w-full sm:w-auto px-10 py-4 rounded-full bg-primary hover:bg-primary/90 text-black font-bold text-lg transition-transform hover:scale-105 shadow-[0_0_30px_rgba(254,127,45,0.4)] flex items-center justify-center gap-2">
                Hire Me
                <ArrowRight size={20} />
              </a>
              <a href="#" className="w-full sm:w-auto px-10 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-lg transition-transform hover:scale-105 border border-white/20 flex items-center justify-center gap-2 backdrop-blur-md">
                Download Resume
                <Download size={20} />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
