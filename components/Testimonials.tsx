"use client";
import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Polarapt transformed how we manage our entire HR workflow. Setup took less than 30 minutes!",
      author: "Sarah Ahmed",
      role: "Head of Operations",
      company: "TechVenture Karachi",
      rating: 5,
    },
    {
      quote: "The unified dashboard is a game-changer. Everything we need in one place, no more switching between 5 different tools.",
      author: "Ali Hassan",
      role: "CEO",
      company: "Digital Labs Dubai",
      rating: 5,
    },
    {
      quote: "Finally, an HR system that actually understands the needs of growing startups. Payroll automation alone saved us 15 hours per month.",
      author: "Fatima Khan",
      role: "Finance Director",
      company: "Orbital Solutions",
      rating: 5,
    },
  ];

  return (
    <section className="py-12 lg:py-16 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-sora font-semibold text-2xl sm:text-3xl lg:text-4xl text-ink tracking-tight leading-tight mb-3">
            Loved by <span className="gradient-text">HR teams</span> everywhere
          </h2>
          <p className="text-sm sm:text-base text-ink-muted font-inter max-w-2xl mx-auto">
            See what our customers have to say about transforming their HR operations
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.08)", transition: { duration: 0.25 } }}
              className="glass-effect border-2 border-white/60 rounded-2xl p-5 group cursor-pointer"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05, type: "spring", stiffness: 300 }}
                  >
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <p className="text-ink-muted text-sm leading-relaxed font-inter mb-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author Info */}
              <div className="pt-3 border-t border-ink/10">
                <div className="font-sora font-semibold text-ink text-base">
                  {testimonial.author}
                </div>
                <div className="text-xs text-ink-muted font-inter mt-1">
                  {testimonial.role}
                </div>
                <div className="text-xs text-brand-blue font-medium font-inter mt-0.5">
                  {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-ink-muted font-inter mb-3">
            Join <span className="font-bold text-brand-blue">500+</span> companies already using Polarapt
          </p>
          <motion.a
            href="#trial"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-blue to-blue-600 rounded-lg shadow-lg shadow-blue-500/30 transition-all duration-300"
          >
            Start your free trial →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
