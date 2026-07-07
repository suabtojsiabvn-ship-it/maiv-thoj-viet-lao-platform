"use client";

import type { PropsWithChildren } from "react";

import { motion } from "framer-motion";

import { fadeUp } from "./animations";

interface MotionSectionProps extends PropsWithChildren {
  className?: string;
}

export function MotionSection({
  children,
  className,
}: MotionSectionProps) {
  return (
    <motion.section
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
    >
      {children}
    </motion.section>
  );
}