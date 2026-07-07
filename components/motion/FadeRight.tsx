"use client";

import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { fadeRight } from "./animations";

interface FadeRightProps extends PropsWithChildren {
  delay?: number;
  className?: string;
}

export function FadeRight({
  children,
  delay = 0,
  className,
}: FadeRightProps) {
  return (
    <motion.div
      className={className}
      variants={fadeRight}
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