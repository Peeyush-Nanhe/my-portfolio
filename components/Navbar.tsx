"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? "py-4 bg-background/70 backdrop-blur-xl border-b border-white/10" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 sm:px-12 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          PN<span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
            >
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-sm font-medium transition-all backdrop-blur-md"
            >
              Let's Talk
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "100vh" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-3xl border-t border-white/10 flex flex-col items-center justify-center gap-8"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl font-medium text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
