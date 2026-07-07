"use client";

import type { PropsWithChildren } from "react";

import { motion } from "framer-motion";

import { fadeUp } from "./animations";

interface MotionItemProps extends PropsWithChildren {
  className?: string;
}

export function MotionItem({
  children,
  className,
}: MotionItemProps) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
    >
      {children}
    </motion.div>
  );
}