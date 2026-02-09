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
      initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: threshold }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: delay / 1000,
      }}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  );
}
