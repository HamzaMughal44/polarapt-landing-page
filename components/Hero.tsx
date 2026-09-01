"use client";
import React from "react";
import HeroImage from "./HeroImage";
import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import TypewriterText from "./TypewriterText";

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-blue-50/30 to-white"
    >
      {/* Animated Background Blobs - Blue themed */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-blue-200/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-50/40 to-blue-100/30 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-blue-50/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline & CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 flex flex-col justify-center"
          >
            {/* Label */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block"
            >
              <span className="text-xs uppercase tracking-wider font-semibold text-ink-muted font-inter">
                Human Capital Management
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-sora font-semibold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight leading-[1.15]"
            >
              Every person on your team, <TypewriterText />
            </motion.h1>

            {/* Subhead */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm sm:text-base text-ink-muted leading-relaxed font-inter font-normal"
            >
              Hiring, payroll, attendance, and performance unified into one intelligent workspace designed for <span className="text-brand-blue font-medium">growing companies.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <motion.a
                href="#trial"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-blue to-blue-600 rounded-lg shadow-lg shadow-blue-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 transition-all duration-300 text-center relative overflow-hidden"
              >
                <span className="relative z-10">Start free trial</span>
                <span className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
              <motion.a
                href="/demo"
                whileHover={{ scale: 1.05, backgroundColor: "#1a1a1a", color: "#ffffff" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-ink bg-white border-2 border-ink/20 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue transition-all duration-300 text-center shadow-md"
              >
                See how it works →
              </motion.a>
            </motion.div>

            {/* Subtle sub-text */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-2 text-xs text-ink-faint"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-brand-green shrink-0" />
              <span>No credit card required · Setup in under 5 minutes</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Image with Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center py-10 px-6"
          >
            <HeroImage />
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
