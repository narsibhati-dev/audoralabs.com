"use client";

import { clsx } from "clsx";
import { motion } from "motion/react";

interface IconCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
  className?: string;
}

export function IconCard({
  icon,
  title,
  description,
  index,
  className,
}: IconCardProps) {
  const indexLabel =
    index !== undefined ? String(index + 1).padStart(2, "0") : null;

  return (
    <motion.div
      className={clsx(
        "group relative rounded-xl border border-border bg-linear-to-b from-card-gradient-from to-card-gradient-to p-6",
        "hover:border-subtle-border",
        "hover:shadow-lg",
        className,
      )}
      initial={false}
      whileHover={{
        y: -4,
        transition: { type: "spring", stiffness: 300, damping: 25 },
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {/* Numbered indicator */}
      {indexLabel !== null && (
        <span
          className="absolute right-4 top-4 text-xs font-medium tabular-nums tracking-tighter text-muted-foreground/40"
          aria-hidden
        >
          {indexLabel}
        </span>
      )}

      <div className="mb-4 inline-flex rounded-lg bg-muted p-3 text-foreground transition-transform duration-300 ease-out group-hover:scale-105 group-hover:rotate-3">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </motion.div>
  );
}
