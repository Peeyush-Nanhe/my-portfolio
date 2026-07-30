"use client";

import { motion } from "framer-motion";
import { Code2, Award, Briefcase, Layers } from "lucide-react";

export default function HeroStats() {
  const stats = [
    {
      icon: <Code2 size={24} className="text-white" />,
      value: "32+",
      label: "Technologies Mastered",
      bgColor: "bg-[#FF7A00]"
    },
    {
      icon: <Layers size={24} className="text-white" />,
      value: "12+",
      label: "Projects Published",
      bgColor: "bg-[#FF9E59]"
    },
    {
      icon: <Award size={24} className="text-white" />,
      value: "5",
      label: "Certifications Earned",
      bgColor: "bg-[#D97757]"
    },
    {
      icon: <Briefcase size={24} className="text-white" />,
      value: "12+",
      label: "Years of Experience",
      bgColor: "bg-[#FF7A00]"
    }
  ];

  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 py-10 relative z-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex flex-col items-center justify-center p-8 rounded-[32px] bg-[#0A0A0A] border border-white/5 shadow-2xl hover:border-[#FF7A00]/30 hover:shadow-[0_0_30px_rgba(255,122,0,0.1)] transition-all duration-300 group"
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform ${stat.bgColor}`}>
              {stat.icon}
            </div>
            <div className="text-4xl font-black text-white mb-2 tracking-tight">
              {stat.value}
            </div>
            <div className="text-sm font-medium text-gray-400 text-center">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
