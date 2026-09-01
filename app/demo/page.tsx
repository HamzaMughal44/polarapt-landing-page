"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Users, Clock, Shield, Star, ArrowLeft, Building2, Phone, Mail, Globe, ChevronDown } from "lucide-react";
import Link from "next/link";
import ThreeBackground from "@/components/ThreeBackground";
import ScrollProgress from "@/components/ScrollProgress";

const companySizes = ["1–10", "11–50", "51–200", "201–500", "500+"];
const industries = ["Technology", "Healthcare", "Finance", "Retail", "Manufacturing", "Education", "Other"];

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    companySize: "",
    industry: "",
    website: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-white text-ink font-inter overflow-x-hidden">
      <ScrollProgress />
      <ThreeBackground />

      <div className="relative z-10">
        {/* ── Nav ── */}
        <motion.header
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-blue-600 rounded-lg flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" fillOpacity="0.9"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-sora font-bold text-ink tracking-tight text-xl">polarapt</span>
              </motion.div>
            </Link>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-brand-blue transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to home
              </Link>
            </motion.div>
          </div>
        </motion.header>

        {/* ── Hero ── */}
        <section className="py-14 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

              {/* ── Left: Info panel ── */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                {/* Badge */}
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-blue/10 text-brand-blue text-sm font-semibold rounded-full"
                >
                  <span className="w-2 h-2 bg-brand-blue rounded-full animate-pulse" />
                  Live Demo Available
                </motion.span>

                <div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="font-sora font-bold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight leading-[1.15] mb-4"
                  >
                    See polarapt in{" "}
                    <span className="gradient-text">action</span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-base sm:text-lg text-ink-muted leading-relaxed"
                  >
                    Book a personalized 30-minute demo with our product experts. We&apos;ll walk you through everything and answer your questions live.
                  </motion.p>
                </div>

                {/* What you'll get */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="space-y-3"
                >
                  {[
                    { icon: <Users className="w-5 h-5 text-brand-blue" />, text: "Personalized walkthrough tailored to your team size" },
                    { icon: <Clock className="w-5 h-5 text-brand-blue" />, text: "30-minute session — no fluff, just the good stuff" },
                    { icon: <Shield className="w-5 h-5 text-brand-blue" />, text: "No commitment required — completely free" },
                    { icon: <Star className="w-5 h-5 text-brand-blue" />, text: "Q&A with a real product expert, not a bot" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.55 + i * 0.08 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-9 h-9 bg-brand-blue/10 rounded-xl flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-sm text-ink-muted font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Testimonial snippet */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="glass-effect border-2 border-white/60 rounded-2xl p-5 shadow-md"
                >
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-ink-muted italic leading-relaxed mb-3">
                    &ldquo;The demo was incredibly helpful. We went live within a week and haven&apos;t looked back since.&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      SA
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink">Sarah Ahmed</p>
                      <p className="text-xs text-ink-muted">Head of Operations, TechVenture</p>
                    </div>
                  </div>
                </motion.div>

                {/* Stats row */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                  className="grid grid-cols-3 gap-4"
                >
                  {[
                    { value: "500+", label: "Companies" },
                    { value: "98%", label: "Satisfaction" },
                    { value: "< 5min", label: "Setup time" },
                  ].map((s, i) => (
                    <div key={i} className="text-center p-3 bg-gray-50 rounded-xl">
                      <p className="font-sora font-bold text-xl text-brand-blue">{s.value}</p>
                      <p className="text-xs text-ink-muted mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* ── Right: Form ── */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="glass-effect border-2 border-white/60 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-blue-100/50"
                    >
                      <h2 className="font-sora font-bold text-2xl text-ink mb-1">Book your demo</h2>
                      <p className="text-sm text-ink-muted mb-6">Fill in your details and we&apos;ll be in touch within 2 hours.</p>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name row */}
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-semibold text-ink mb-1.5">First name *</label>
                            <input
                              name="firstName"
                              required
                              value={form.firstName}
                              onChange={handleChange}
                              placeholder="Enter your first name"
                              className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition-all bg-white"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-ink mb-1.5">Last name *</label>
                            <input
                              name="lastName"
                              required
                              value={form.lastName}
                              onChange={handleChange}
                              placeholder="Enter your last name"
                              className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition-all bg-white"
                            />
                          </div>
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-xs font-semibold text-ink mb-1.5">Work email *</label>
                          <div className="relative">
                            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                              name="email"
                              type="email"
                              required
                              value={form.email}
                              onChange={handleChange}
                              placeholder="Enter your work email"
                              className="w-full pl-10 pr-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition-all bg-white"
                            />
                          </div>
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block text-xs font-semibold text-ink mb-1.5">Phone number</label>
                          <div className="relative">
                            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                              name="phone"
                              type="tel"
                              value={form.phone}
                              onChange={handleChange}
                              placeholder="Enter your phone number"
                              className="w-full pl-10 pr-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition-all bg-white"
                            />
                          </div>
                        </div>

                        {/* Company + Website */}
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-semibold text-ink mb-1.5">Company name *</label>
                            <div className="relative">
                              <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                              <input
                                name="company"
                                required
                                value={form.company}
                                onChange={handleChange}
                                placeholder="Enter your company name"
                                className="w-full pl-10 pr-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition-all bg-white"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-ink mb-1.5">Website</label>
                            <div className="relative">
                              <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                              <input
                                name="website"
                                value={form.website}
                                onChange={handleChange}
                                placeholder="Enter your website URL"
                                className="w-full pl-10 pr-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition-all bg-white"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Company size + Industry */}
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-semibold text-ink mb-1.5">Company size *</label>
                            <div className="relative">
                              <select
                                name="companySize"
                                required
                                value={form.companySize}
                                onChange={handleChange}
                                className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition-all bg-white appearance-none"
                              >
                                <option value="">How many employees?</option>
                                {companySizes.map((s) => <option key={s}>{s}</option>)}
                              </select>
                              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-ink mb-1.5">Industry *</label>
                            <div className="relative">
                              <select
                                name="industry"
                                required
                                value={form.industry}
                                onChange={handleChange}
                                className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition-all bg-white appearance-none"
                              >
                                <option value="">Your industry?</option>
                                {industries.map((s) => <option key={s}>{s}</option>)}
                              </select>
                              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>
                          </div>
                        </div>

                        {/* Message */}
                        <div>
                          <label className="block text-xs font-semibold text-ink mb-1.5">Anything specific you want to see?</label>
                          <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows={3}
                              placeholder="Tell us what you'd like to see..."
                            className="w-full px-3.5 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition-all bg-white resize-none"
                          />
                        </div>

                        {/* Submit */}
                        <motion.button
                          type="submit"
                          disabled={loading}
                          whileHover={{ scale: loading ? 1 : 1.02 }}
                          whileTap={{ scale: loading ? 1 : 0.98 }}
                          className="w-full py-3.5 text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-blue-600 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 relative overflow-hidden disabled:opacity-80"
                        >
                          {loading ? (
                            <span className="flex items-center justify-center gap-2">
                              <motion.span
                                animate={{ rotate: 360 }}
                                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                                className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full inline-block"
                              />
                              Booking your demo...
                            </span>
                          ) : (
                            "Book my free demo →"
                          )}
                        </motion.button>

                        <p className="text-center text-xs text-ink-muted">
                          By submitting, you agree to our{" "}
                          <a href="#" className="text-brand-blue underline">Privacy Policy</a>.
                          No spam, ever.
                        </p>
                      </form>
                    </motion.div>
                  ) : (
                    /* ── Success state ── */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className="glass-effect border-2 border-white/60 rounded-3xl p-8 shadow-2xl text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                      >
                        <CheckCircle className="w-10 h-10 text-green-500" />
                      </motion.div>

                      <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="font-sora font-bold text-2xl text-ink mb-3"
                      >
                        You&apos;re all set! 🎉
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-ink-muted text-sm mb-2"
                      >
                        Thanks <span className="font-semibold text-ink">{form.firstName}</span>! We&apos;ve received your request.
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-ink-muted text-sm mb-8"
                      >
                        Our team will reach out to{" "}
                        <span className="font-semibold text-brand-blue">{form.email}</span>{" "}
                        within 2 hours to confirm your demo slot.
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="space-y-3"
                      >
                        <div className="flex items-center gap-3 bg-blue-50 rounded-xl p-4 text-left">
                          <Clock className="w-5 h-5 text-brand-blue shrink-0" />
                          <div>
                            <p className="text-sm font-semibold text-ink">What happens next?</p>
                            <p className="text-xs text-ink-muted mt-0.5">We&apos;ll send a calendar invite with a Zoom link for your 30-min session.</p>
                          </div>
                        </div>

                        <Link href="/">
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-3 text-sm font-semibold text-brand-blue bg-white border-2 border-brand-blue/20 rounded-xl hover:bg-brand-blue/5 transition-colors text-center cursor-pointer"
                          >
                            ← Back to home
                          </motion.div>
                        </Link>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="border-t border-gray-200 py-6 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
            <p>© {new Date().getFullYear()} polarapt inc. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-brand-blue transition-colors">Privacy</a>
              <a href="#" className="hover:text-brand-blue transition-colors">Terms</a>
              <a href="/" className="hover:text-brand-blue transition-colors">Home</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
