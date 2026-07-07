"use client";

import type { PropsWithChildren } from "react";

import { motion } from "framer-motion";

import { hoverScale } from "./animations";

interface HoverScaleProps extends PropsWithChildren {
  className?: string;
}

export function HoverScale({
  children,
  className,
}: HoverScaleProps) {
  return (
    <motion.div
      className={className}
      {...hoverScale}
    >
      {children}
    </motion.div>
  );
}