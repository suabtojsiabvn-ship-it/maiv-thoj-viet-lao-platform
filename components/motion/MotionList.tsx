"use client";

import type { PropsWithChildren } from "react";

import { motion } from "framer-motion";

import { staggerContainer } from "./animations";

interface MotionListProps extends PropsWithChildren {
  className?: string;
}

export function MotionList({
  children,
  className,
}: MotionListProps) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}