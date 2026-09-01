"use client";
import React from "react";
import { Users, DollarSign, Clock, TrendingUp, FileText, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductModules() {
  const modules = [
    {
      icon: <Users className="w-6 h-6" />,
      name: "Recruitment & ATS",
      description: "End-to-end applicant tracking system with AI-powered candidate screening",
      features: ["Job posting automation", "Resume parsing", "Interview scheduling", "Offer management"],
      color: "blue",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      name: "Payroll Management",
      description: "Automated payroll processing with tax compliance and multi-currency support",
      features: ["Auto tax calculations", "Direct deposits", "Salary slips", "Compliance reports"],
      color: "green",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      name: "Time & Attendance",
      description: "Real-time attendance tracking with geo-fencing and shift management",
      features: ["Clock in/out", "Leave management", "Shift scheduling", "Overtime tracking"],
      color: "orange",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      name: "Performance Management",
      description: "360° reviews, goal tracking, and continuous feedback for better performance",
      features: ["OKR management", "360° reviews", "Performance analytics", "Career development"],
      color: "purple",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      name: "Employee Self-Service",
      description: "Empower employees with self-service portal for all HR needs",
      features: ["Personal info updates", "Leave requests", "Document access", "Payslip download"],
      color: "cyan",
    },
    {
      icon: <Award className="w-6 h-6" />,
      name: "Learning & Development",
      description: "Skill development platform with courses, certifications, and training paths",
      features: ["Course library", "Skill tracking", "Certifications", "Training analytics"],
      color: "pink",
    },
  ];

  const colorClasses = {
    blue:   { bg: "bg-blue-50",   border: "border-blue-200",   text: "text-blue-600",   hoverBg: "hover:bg-blue-100",   shadow: "hover:shadow-blue-100" },
    green:  { bg: "bg-green-50",  border: "border-green-200",  text: "text-green-600",  hoverBg: "hover:bg-green-100",  shadow: "hover:shadow-green-100" },
    orange: { bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-600", hoverBg: "hover:bg-orange-100", shadow: "hover:shadow-orange-100" },
    purple: { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-600", hoverBg: "hover:bg-purple-100", shadow: "hover:shadow-purple-100" },
    cyan:   { bg: "bg-cyan-50",   border: "border-cyan-200",   text: "text-cyan-600",   hoverBg: "hover:bg-cyan-100",   shadow: "hover:shadow-cyan-100" },
    pink:   { bg: "bg-pink-50",   border: "border-pink-200",   text: "text-pink-600",   hoverBg: "hover:bg-pink-100",   shadow: "hover:shadow-pink-100" },
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-1.5 bg-brand-blue/10 text-brand-blue text-sm font-semibold rounded-full mb-4"
          >
            Complete HCM Platform
          </motion.span>
          <h2 className="font-sora font-bold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight mb-4">
            All-in-one <span className="gradient-text">HR solution</span>
          </h2>
          <p className="text-base sm:text-lg text-ink-muted max-w-3xl mx-auto font-inter">
            Everything you need to manage your workforce from hire to retire. Our integrated modules work seamlessly together.
          </p>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => {
            const colors = colorClasses[module.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 },
                }}
                className={`bg-white border-2 ${colors.border} rounded-2xl p-6 group cursor-pointer`}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-12 h-12 ${colors.bg} ${colors.text} rounded-xl flex items-center justify-center mb-4`}
                >
                  {module.icon}
                </motion.div>

                {/* Title */}
                <h3 className="font-sora font-bold text-xl text-ink mb-2">
                  {module.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-ink-muted mb-4 leading-relaxed">
                  {module.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-4">
                  {module.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 + idx * 0.05 }}
                      className="flex items-start gap-2 text-sm text-ink-muted"
                    >
                      <svg className={`w-4 h-4 ${colors.text} mt-0.5 shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <motion.a
                  href="#"
                  whileHover={{ x: 4 }}
                  className={`inline-flex items-center gap-1 text-sm font-semibold ${colors.text} ${colors.hoverBg} px-3 py-1.5 rounded-lg transition-colors`}
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-ink-muted mb-4">Want to see how all modules work together?</p>
          <motion.a
            href="#demo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-brand-blue to-blue-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Schedule a demo
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
