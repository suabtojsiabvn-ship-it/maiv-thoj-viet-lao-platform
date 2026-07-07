"use client";

import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { fadeLeft } from "./animations";

interface FadeLeftProps extends PropsWithChildren {
  delay?: number;
  className?: string;
}

export function FadeLeft({
  children,
  delay = 0,
  className,
}: FadeLeftProps) {
  return (
    <motion.div
      className={className}
      variants={fadeLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}