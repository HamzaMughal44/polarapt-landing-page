"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseFollower() {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const x = useSpring(rawX, { stiffness: 180, damping: 22 });
  const y = useSpring(rawY, { stiffness: 180, damping: 22 });

  const trailX = useSpring(rawX, { stiffness: 80, damping: 18 });
  const trailY = useSpring(rawY, { stiffness: 80, damping: 18 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      rawX.set(e.clientX - 10);
      rawY.set(e.clientY - 10);
      setVisible(true);
    };
    const down = () => setClicking(true);
    const up   = () => setClicking(false);
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup",   up);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup",   up);
      window.removeEventListener("mouseleave", leave);
    };
  }, [rawX, rawY]);

  if (!visible) return null;

  return (
    <>
      {/* Trail dot */}
      <motion.div
        style={{ x: trailX, y: trailY }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-400/40 pointer-events-none z-[9999]"
        animate={{ scale: clicking ? 1.8 : 1, opacity: clicking ? 0.3 : 0.5 }}
        transition={{ duration: 0.15 }}
      />
      {/* Main cursor dot */}
      <motion.div
        style={{ x, y }}
        className="fixed top-0 left-0 w-5 h-5 rounded-full bg-brand-blue/70 pointer-events-none z-[9999] mix-blend-multiply"
        animate={{ scale: clicking ? 0.6 : 1 }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
}
