"use client";
import { motion } from "framer-motion";

const items = [
  "✦ Hiring Automation",
  "✦ Multi-Currency Payroll",
  "✦ Geo-Fenced Attendance",
  "✦ 360° Performance Reviews",
  "✦ AI Voice Assistant",
  "✦ Real-Time Analytics",
  "✦ 50+ Integrations",
  "✦ SOC 2 Certified",
  "✦ 500+ Companies",
  "✦ 98% Satisfaction",
];

export default function MarqueeTicker() {
  const doubled = [...items, ...items];

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-brand-blue via-indigo-600 to-blue-700 py-2.5 relative z-20">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-block text-white/90 text-xs font-semibold tracking-widest uppercase mx-8"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
