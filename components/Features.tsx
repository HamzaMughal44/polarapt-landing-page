"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FeatureCardProps {
  moduleName: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  tintBgClass: string;
  gradientFrom: string;
  gradientTo: string;
}

const HiringIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="11" r="5" stroke="#EF4444" strokeWidth="2.2" fill="none"/>
    <path d="M6 30c0-5.523 4.477-10 10-10h1" stroke="#EF4444" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
    <circle cx="29" cy="27" r="7" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2"/>
    <path d="M25.5 27l2.5 2.5 5-5" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PayrollIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="20" cy="13" rx="10" ry="4" stroke="#F97316" strokeWidth="2.2" fill="#FFF7ED"/>
    <path d="M10 13v6c0 2.21 4.477 4 10 4s10-1.79 10-4v-6" stroke="#F97316" strokeWidth="2.2" fill="none"/>
    <path d="M10 19v6c0 2.21 4.477 4 10 4s10-1.79 10-4v-6" stroke="#F97316" strokeWidth="2.2" fill="none"/>
    <path d="M20 10v2M20 14v2" stroke="#F97316" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const AttendanceIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="12" stroke="#EAB308" strokeWidth="2.2" fill="#FEFCE8"/>
    <path d="M20 12v8l5 3" stroke="#EAB308" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 9v1.5M20 29.5V31M9 20h1.5M29.5 20H31" stroke="#EAB308" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const PerformanceIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
    <rect x="8"  y="24" width="6" height="8"  rx="1.5" fill="#22C55E" opacity="0.8"/>
    <rect x="17" y="16" width="6" height="16" rx="1.5" fill="#22C55E"/>
    <rect x="26" y="10" width="6" height="22" rx="1.5" fill="#22C55E" opacity="0.9"/>
    <path d="M10 22L18 14L26 18L34 8" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M30 8h4v4" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const featuresData: FeatureCardProps[] = [
  {
    moduleName: "hiring",
    label: "Hiring",
    description: "Source candidates, schedule interviews, and issue automated offer letters without switching tools.",
    icon: <HiringIcon />,
    tintBgClass: "bg-red-50 border-red-200",
    gradientFrom: "from-red-50",
    gradientTo: "to-rose-50",
  },
  {
    moduleName: "payroll",
    label: "Payroll",
    description: "Run multi-currency payroll in seconds with automated tax compliance and instant direct deposits.",
    icon: <PayrollIcon />,
    tintBgClass: "bg-orange-50 border-orange-200",
    gradientFrom: "from-orange-50",
    gradientTo: "to-amber-50",
  },
  {
    moduleName: "attendance",
    label: "Attendance",
    description: "Track shifts, leave approvals, and live clock-ins with geo-fenced mobile check-ins.",
    icon: <AttendanceIcon />,
    tintBgClass: "bg-yellow-50 border-yellow-200",
    gradientFrom: "from-yellow-50",
    gradientTo: "to-lime-50",
  },
  {
    moduleName: "performance",
    label: "Performance",
    description: "Conduct continuous 360 review cycles, set OKRs, and align team goals effortlessly.",
    icon: <PerformanceIcon />,
    tintBgClass: "bg-green-50 border-green-200",
    gradientFrom: "from-green-50",
    gradientTo: "to-emerald-50",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="product" ref={ref} className="py-12 lg:py-16 relative bg-white overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-50/40 rounded-full blur-3xl" />
      </div>
      <motion.div
        animate={{ borderRadius: ["60% 40% 30% 70%/60% 30% 70% 40%", "30% 60% 70% 40%/50% 60% 30% 60%", "60% 40% 30% 70%/60% 30% 70% 40%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-blue-100/20 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ borderRadius: ["30% 70% 70% 30%/30% 52% 48% 70%", "70% 30% 52% 48%/52% 30% 70% 48%", "30% 70% 70% 30%/30% 52% 48% 70%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-indigo-100/20 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-10 text-center mx-auto"
        >
          <h2 className="font-sora font-semibold text-2xl sm:text-3xl lg:text-4xl text-ink tracking-tight leading-tight text-balance mb-3">
            Four core pillars, <span className="gradient-text">perfectly synced.</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-ink-muted font-inter">
            Everything your HR team needs to manage the complete employee journey from day one.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-5">
          {featuresData.map((feature, index) => (
            <motion.div
              key={feature.moduleName}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, boxShadow: "0 25px 50px rgba(0,0,0,0.10)", transition: { duration: 0.25 } }}
              className="glass-effect border-2 border-white/60 shadow-lg rounded-2xl p-5 lg:p-6 group flex flex-col justify-between relative overflow-hidden cursor-pointer"
            >
              {/* Hover gradient wash */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Icon box */}
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 280 }}
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 ${feature.tintBgClass} mb-4 shadow-md`}
                >
                  {feature.icon}
                </motion.div>

                <h3 className="font-sora font-semibold text-xl lg:text-2xl text-ink tracking-tight mb-2">
                  {feature.label}
                </h3>
                <p className="text-ink-muted text-sm lg:text-base leading-relaxed font-inter">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-ink/10 flex items-center justify-between text-xs text-ink-faint relative z-10">
                <span className="capitalize font-medium">{feature.label} module</span>
                <motion.span whileHover={{ x: 5 }} className="font-semibold text-ink inline-flex items-center gap-1">
                  Explore →
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
