"use client";
import React from "react";
import StripeAccent from "./StripeAccent";
import { motion } from "framer-motion";

export default function Footer() {
  const productLinks = ["Hiring", "Payroll", "Attendance", "Performance", "Analytics"];
  const companyLinks = ["About us", "Careers", "Press & media", "Contact support"];
  const legalLinks = ["Privacy policy", "Terms of service", "Security overview", "Compliance (GDPR)"];

  return (
    <footer id="company" className="border-t border-gray-200 pt-10 pb-6 relative overflow-hidden bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 pb-6 border-b border-gray-200">

          {/* Column 1: Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 lg:col-span-2 space-y-3"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="font-sora font-bold text-ink tracking-tight text-2xl gradient-text inline-block cursor-pointer"
            >
              polarapt
            </motion.span>
            <p className="text-sm text-ink-muted leading-relaxed max-w-sm font-inter">
              Every person on your team, one connected system. Polarapt unifies hiring, payroll, attendance, and performance for modern teams.
            </p>
            <div className="pt-2">
              <StripeAccent width="w-24" height="h-[3px]" />
            </div>
          </motion.div>

          {/* Column 2: Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-2.5"
          >
            <h4 className="font-sora font-semibold text-sm text-ink capitalize">Product</h4>
            <ul className="space-y-2 text-sm text-ink-muted">
              {productLinks.map((link) => (
                <li key={link}>
                  <motion.a
                    href="#product"
                    whileHover={{ x: 4, color: "#2563EB" }}
                    transition={{ duration: 0.2 }}
                    className="font-medium inline-block"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-2.5"
          >
            <h4 className="font-sora font-semibold text-sm text-ink capitalize">Company</h4>
            <ul className="space-y-2 text-sm text-ink-muted">
              {companyLinks.map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 4, color: "#2563EB" }}
                    transition={{ duration: 0.2 }}
                    className="font-medium inline-block"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-2.5"
          >
            <h4 className="font-sora font-semibold text-sm text-ink capitalize">Legal</h4>
            <ul className="space-y-2 text-sm text-ink-muted">
              {legalLinks.map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 4, color: "#2563EB" }}
                    transition={{ duration: 0.2 }}
                    className="font-medium inline-block"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400"
        >
          <p className="font-medium">© {new Date().getFullYear()} polarapt inc. all rights reserved.</p>
          <p className="font-inter font-medium">
            Designed with <span className="text-blue-500">❤</span> for modern workplaces
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
