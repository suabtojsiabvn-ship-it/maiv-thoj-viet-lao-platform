"use client";

import type { PropsWithChildren } from "react";

import { motion } from "framer-motion";

interface HoverLiftProps extends PropsWithChildren {
  className?: string;
}

export function HoverLift({
  children,
  className,
}: HoverLiftProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: -8,
        transition: {
          duration: 0.25,
        },
      }}
    >
      {children}
    </motion.div>
  );
}