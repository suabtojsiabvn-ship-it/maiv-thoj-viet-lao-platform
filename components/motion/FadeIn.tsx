"use client";

import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./animations";

interface FadeInProps extends PropsWithChildren {
  delay?: number;
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  className,
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      variants={fadeIn}
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