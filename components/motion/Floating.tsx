"use client";

import type { PropsWithChildren } from "react";

import { motion } from "framer-motion";

interface FloatingProps extends PropsWithChildren {
  className?: string;
}

export function Floating({
  children,
  className,
}: FloatingProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}