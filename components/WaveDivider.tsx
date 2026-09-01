"use client";
import { motion } from "framer-motion";

export default function WaveDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`relative w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`} style={{ height: 60 }}>
      <motion.svg
        viewBox="0 0 1440 60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute w-full h-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.path
          d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
          fill="rgba(59,130,246,0.06)"
          animate={{ d: [
            "M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z",
            "M0,20 C240,0 480,60 720,20 C960,0 1200,60 1440,20 L1440,60 L0,60 Z",
            "M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z",
          ]}}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,40 C360,10 720,50 1080,20 C1260,10 1380,40 1440,40 L1440,60 L0,60 Z"
          fill="rgba(99,102,241,0.05)"
          animate={{ d: [
            "M0,40 C360,10 720,50 1080,20 C1260,10 1380,40 1440,40 L1440,60 L0,60 Z",
            "M0,50 C360,30 720,10 1080,40 C1260,55 1380,20 1440,50 L1440,60 L0,60 Z",
            "M0,40 C360,10 720,50 1080,20 C1260,10 1380,40 1440,40 L1440,60 L0,60 Z",
          ]}}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </motion.svg>
    </div>
  );
}
