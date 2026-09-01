"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does Polarapt pricing work?",
      answer: "Our pricing is simple and transparent. The Starter plan is free for teams up to 10 employees. Professional plan costs $8 per employee per month, and Enterprise pricing is customized based on your needs. All plans include a 14-day free trial.",
    },
    {
      question: "Can I migrate my existing HR data to Polarapt?",
      answer: "Yes! We provide free data migration support for all Professional and Enterprise plans. Our team will help you import employee data, attendance records, payroll history, and more from your existing systems.",
    },
    {
      question: "Is my company data secure?",
      answer: "Absolutely. We use bank-level encryption (AES-256) for data at rest and TLS 1.3 for data in transit. We're SOC 2 Type II certified and fully GDPR compliant. Your data is backed up daily and stored in secure data centers.",
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes! Starter plans get email support with 24-hour response time. Professional plans include priority support with live chat. Enterprise customers get 24/7 phone support and a dedicated account manager.",
    },
    {
      question: "Can I integrate Polarapt with my existing tools?",
      answer: "Yes, Polarapt integrates with 50+ popular tools including Slack, Microsoft Teams, Google Workspace, QuickBooks, Xero, and more. We also provide a REST API for custom integrations.",
    },
    {
      question: "What happens if I need to cancel?",
      answer: "You can cancel anytime without penalties. Your data will remain accessible for 30 days after cancellation, giving you time to export everything you need. We also offer data export in multiple formats.",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-sora font-bold text-3xl sm:text-4xl text-ink mb-4">
            Frequently asked questions
          </h2>
          <p className="text-base text-ink-muted">
            Can&apos;t find the answer you&apos;re looking for?{" "}
            <a href="#contact" className="text-brand-blue font-semibold hover:underline">
              Contact our support team
            </a>
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "border-brand-blue/40 shadow-md shadow-blue-100"
                  : "border-gray-200 hover:border-brand-blue/30 hover:shadow-md"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-blue-50/40 transition-colors"
              >
                <span className="font-sora font-semibold text-lg text-ink pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-5 h-5 text-brand-blue shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="p-5 pt-0 text-sm text-ink-muted leading-relaxed bg-blue-50/30 border-t border-gray-100"
                    >
                      {faq.answer}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 p-8 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl"
        >
          <h3 className="font-sora font-bold text-2xl text-ink mb-2">Still have questions?</h3>
          <p className="text-ink-muted mb-4">Our team is here to help you get started</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-brand-blue to-blue-600 rounded-lg shadow-lg transition-all duration-300"
          >
            Talk to sales
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
