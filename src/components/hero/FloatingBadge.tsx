"use client";

import { motion } from "framer-motion";

interface FloatingBadgeProps {
  text: string;
  className?: string;
}

export default function FloatingBadge({
  text,
  className,
}: FloatingBadgeProps) {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
        rotate: [0, 2, 0, -2, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute rounded-full border border-white/40 bg-white/80 px-5 py-3 text-sm font-medium shadow-lg backdrop-blur-xl ${className}`}
    >
      {text}
    </motion.div>
  );
}