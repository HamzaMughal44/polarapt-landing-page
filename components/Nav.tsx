"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#product", label: "Product" },
    { href: "#pricing", label: "Pricing" },
    { href: "#company", label: "Company" },
    { href: "#resources", label: "Resources" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-md shadow-md border-b border-gray-200"
          : "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Brand Name with Icon */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-lg py-2 px-3 -ml-3 transition-all hover:bg-blue-50 duration-300 flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-blue-600 rounded-lg flex items-center justify-center shadow-md">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" fillOpacity="0.9"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-sora font-bold text-ink tracking-tight text-xl">polarapt</span>
        </motion.a>

        {/* Center/Right: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-muted">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              whileHover={{ color: "#2563EB" }}
              className="hover:text-brand-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-md px-3 py-2 hover:bg-blue-50 relative group"
            >
              {link.label}
              <motion.span
                className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-blue rounded-full"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
        </nav>

        {/* Far Right: Desktop CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hidden md:flex items-center gap-3"
        >
          <motion.a
            href="#login"
            whileHover={{ color: "#2563EB" }}
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-ink-muted transition-colors rounded-md hover:bg-blue-50"
          >
            Sign in
          </motion.a>
          <Link href="/demo">
            <motion.span
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-blue to-blue-600 rounded-lg shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue transition-all duration-300 relative overflow-hidden cursor-pointer"
            >
              <span className="relative z-10">Book a demo</span>
              <span className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.span>
          </Link>
        </motion.div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <motion.button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-lg text-ink-muted hover:text-ink hover:bg-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-b border-gray-200 bg-white px-4 overflow-hidden shadow-lg"
          >
            <nav className="flex flex-col space-y-1 pt-2 pb-4 text-base font-medium text-ink-muted">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                  className="px-3 py-2.5 hover:text-brand-blue hover:bg-blue-50 rounded-lg transition-colors font-semibold"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#login"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                className="px-3 py-2.5 hover:text-brand-blue hover:bg-blue-50 rounded-lg transition-colors font-semibold"
              >
                Sign in
              </motion.a>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
              className="pb-5"
            >
              <Link
                href="/demo"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-blue-600 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Book a demo
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
