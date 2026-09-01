"use client";
import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="pricing" className="py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-2xl shadow-2xl shadow-blue-900/30"
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 animate-gradient" />

          {/* Animated blobs */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"
          />

          <div className="relative z-10 p-5 sm:p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xl space-y-3"
            >
              <h2 className="font-sora font-semibold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                Ready to bring HR into{" "}
                <span className="text-blue-200">one place?</span>
              </h2>
              <p className="text-sm sm:text-base text-white/80 font-inter font-normal">
                Free for teams under 10 people. No credit card required.
              </p>
            </motion.div>

            {/* Right Column: CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="shrink-0"
            >
              <motion.a
                href="#signup"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 20px 40px rgba(255,255,255,0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-blue-600 bg-white rounded-lg shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 transition-all duration-300 text-center relative overflow-hidden"
              >
                <span className="relative z-10">Get started →</span>
                <span className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
