"use client";

import type { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { scaleIn } from "./animations";

interface ScaleInProps extends PropsWithChildren {
  delay?: number;
  className?: string;
}

export function ScaleIn({
  children,
  delay = 0,
  className,
}: ScaleInProps) {
  return (
    <motion.div
      className={className}
      variants={scaleIn}
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