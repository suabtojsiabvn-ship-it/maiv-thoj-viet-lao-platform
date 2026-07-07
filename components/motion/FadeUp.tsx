"use client";

import type { PropsWithChildren } from "react";

import { motion } from "framer-motion";

import { fadeUp } from "./animations";

interface FadeUpProps extends PropsWithChildren {
  delay?: number;
  className?: string;
}

export function FadeUp({
  children,
  delay = 0,
  className,
}: FadeUpProps) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}