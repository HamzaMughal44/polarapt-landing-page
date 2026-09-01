"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Integrations() {
  const integrations = [
    { name: "Slack", category: "Communication", color: "from-purple-500 to-pink-500" },
    { name: "MS Teams", category: "Communication", color: "from-blue-600 to-indigo-600" },
    { name: "Google", category: "Productivity", color: "from-red-500 to-yellow-500" },
    { name: "Zoom", category: "Video", color: "from-blue-400 to-blue-600" },
    { name: "QuickBooks", category: "Accounting", color: "from-green-500 to-teal-500" },
    { name: "Xero", category: "Accounting", color: "from-cyan-500 to-blue-500" },
    { name: "Stripe", category: "Payments", color: "from-violet-500 to-purple-600" },
    { name: "DocuSign", category: "Documents", color: "from-yellow-500 to-orange-500" },
  ];

  return (
    <section className="py-16 lg:py-20 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-sora font-bold text-3xl sm:text-4xl text-ink mb-3">
            Integrates with your favorite tools
          </h2>
          <p className="text-base text-ink-muted max-w-2xl mx-auto">
            Connect Polarapt with 50+ popular business tools and streamline your workflow
          </p>
        </motion.div>

        {/* Integration Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{
                scale: 1.12,
                boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
                y: -4,
                transition: { duration: 0.2 },
              }}
              className="glass-effect border border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center text-center cursor-pointer group"
            >
              <motion.div
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`w-12 h-12 bg-gradient-to-br ${integration.color} rounded-lg flex items-center justify-center mb-2 text-white font-bold text-sm shadow-md`}
              >
                {integration.name.substring(0, 2).toUpperCase()}
              </motion.div>
              <div className="text-xs font-semibold text-ink mb-1">{integration.name}</div>
              <div className="text-[10px] text-ink-muted">{integration.category}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <motion.a
            href="#integrations"
            whileHover={{ x: 4 }}
            className="text-brand-blue font-semibold hover:underline inline-flex items-center gap-1"
          >
            View all 50+ integrations →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
