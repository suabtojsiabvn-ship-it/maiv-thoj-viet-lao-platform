"use client";

import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { fadeDown } from "./animations";

interface FadeDownProps extends PropsWithChildren {
  delay?: number;
  className?: string;
}

export function FadeDown({
  children,
  delay = 0,
  className,
}: FadeDownProps) {
  return (
    <motion.div
      className={className}
      variants={fadeDown}
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