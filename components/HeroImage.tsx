"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, x: 40 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center justify-center w-full"
    >
      {/* Outer wrapper — fixed size, NO overflow clip so cards show */}
      <div className="relative w-full max-w-[420px] mx-auto" style={{ aspectRatio: "1/1" }}>

        {/* Subtle glow blobs behind circle */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"
        />

        {/* ── Rotating rings ── */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-10px] rounded-full border-2 border-dashed border-blue-300/35 pointer-events-none"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[-22px] rounded-full border border-dotted border-indigo-300/20 pointer-events-none"
        />

        {/* ── Main circle + photo ── */}
        <motion.div
          animate={{
            boxShadow: [
              "0 0 40px rgba(59,130,246,0.25)",
              "0 0 70px rgba(59,130,246,0.50)",
              "0 0 40px rgba(59,130,246,0.25)",
            ],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
            alt="HR professional"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80";
            }}
          />
        </motion.div>

        {/* ═══════════════════════════════════════════
            CARD 1 — Sign-in time  (top-left, outside)
        ════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, x: -40, y: -10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          whileHover={{ scale: 1.06 }}
          className="absolute -top-6 -left-2 z-20 w-[148px] glass-effect border-2 border-white/80 rounded-2xl p-3 shadow-xl"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-[10px] text-brand-blue font-semibold mb-0.5">
              Signed in today at
            </p>
            <p className="font-sora font-bold text-xl text-ink mb-2">5:55:20</p>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="w-full bg-brand-blue text-white text-[10px] font-bold py-1.5 rounded-lg"
            >
              SIGN OUT
            </motion.button>
          </motion.div>
        </motion.div>

        {/* ═══════════════════════════════════════════
            CARD 2 — Rating  (top-right, outside)
        ════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, x: 40, y: -10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          whileHover={{ scale: 1.06 }}
          className="absolute -top-6 -right-2 z-20 w-[130px] glass-effect border-2 border-white/80 rounded-2xl p-3 shadow-xl"
        >
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center mb-2 mx-auto shadow-md">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 10L12 3L17 10L21 11L15.5 16L17 22L12 19L7 22L8.5 16L3 11L7 10Z"
                  fill="#FCB505"
                />
              </svg>
            </div>
            <div className="flex justify-center gap-0.5 mb-1.5">
              {[...Array(5)].map((_, i) => (
                <motion.svg
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.1 + i * 0.07, type: "spring", stiffness: 300 }}
                  className="w-2.5 h-2.5 fill-yellow-400"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
            </div>
            <p className="text-[9px] text-ink-muted text-center font-semibold tracking-wide">
              GOOD RATING
            </p>
          </motion.div>
        </motion.div>

        {/* ═══════════════════════════════════════════
            CARD 3 — Payslip  (bottom-right, outside)
        ════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, x: 40, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          whileHover={{ scale: 1.06 }}
          className="absolute -bottom-6 -right-2 z-20 w-[168px] glass-effect border-2 border-white/80 rounded-2xl p-3 shadow-xl"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.0 }}
          >
            <div className="flex items-center gap-2 mb-2.5">
              <div className="w-7 h-7 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-[10px] text-ink font-bold leading-tight">Last month payslip</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="w-full bg-brand-blue text-white text-[10px] font-bold py-1.5 rounded-lg flex items-center justify-center gap-1"
            >
              <span>Download</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* ═══════════════════════════════════════════
            CARD 4 — AI Voice  (bottom-left, outside)
        ════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, x: -40, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          whileHover={{ scale: 1.06 }}
          className="absolute -bottom-6 -left-2 z-20 w-[148px] glass-effect border-2 border-white/80 rounded-2xl p-3 shadow-xl"
        >
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          >
            <p className="text-[9px] text-brand-blue font-bold mb-2 text-center leading-tight">
              Pakistan&apos;s First AI Voice Assistant
            </p>
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0px rgba(59,130,246,0.3)",
                  "0 0 18px rgba(59,130,246,0.8)",
                  "0 0 0px rgba(59,130,246,0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-12 h-12 bg-gradient-to-br from-brand-blue to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.div>
            {/* Sound bars */}
            <div className="flex justify-center items-end gap-[2px] h-5">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ scaleY: [0.25, 1, 0.25] }}
                  transition={{
                    duration: 0.7,
                    repeat: Infinity,
                    delay: i * 0.08,
                    ease: "easeInOut",
                  }}
                  className="w-[3px] bg-brand-blue rounded-full origin-bottom"
                  style={{ height: "18px" }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  );
}
