"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: 500, label: "Active Companies", color: "text-brand-blue", suffix: "+" },
    { value: 98, label: "Customer Satisfaction", color: "text-blue-600", suffix: "%" },
    { value: 50, label: "Employees Managed", color: "text-blue-500", suffix: "K+" },
    { value: 24, label: "Support Available", color: "text-blue-700", suffix: "/7" },
  ];

  return (
    <section className="py-8 lg:py-12 relative overflow-hidden bg-gradient-to-b from-white to-blue-50/30">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-sora font-semibold text-2xl sm:text-3xl text-ink tracking-tight">
            Trusted by <span className="gradient-text">growing teams</span> worldwide
          </h2>
          <p className="mt-2 text-sm sm:text-base text-ink-muted font-inter">
            Real results from real companies
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index }: { stat: { value: number; label: string; color: string; suffix: string }; index: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 2000; // 2 seconds

      const animate = (currentTime: number): void => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * stat.value));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(stat.value);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.1, 
        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)",
        transition: { duration: 0.3 }
      }}
      className="glass-effect border-2 border-white/60 rounded-xl p-4 lg:p-5 text-center group cursor-pointer"
    >
      <motion.div 
        className={`font-sora font-bold text-3xl lg:text-4xl ${stat.color} mb-1`}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {count}{stat.suffix}
      </motion.div>
      <div className="text-xs lg:text-sm text-ink-muted font-inter font-medium">
        {stat.label}
      </div>
    </motion.div>
  );
}
