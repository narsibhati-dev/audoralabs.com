"use client";

import { motion } from "motion/react";
import { clsx } from "clsx";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

export function AnimateOnScroll({
  children,
  className,
  delay = 0,
  threshold = 0.1,
}: AnimateOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: threshold }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
        delay: delay / 1000,
      }}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  );
}
