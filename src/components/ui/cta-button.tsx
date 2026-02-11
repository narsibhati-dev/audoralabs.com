"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { clsx } from "clsx";

const MotionLink = motion.create(Link);

export interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  /** "primary" = hero (fg/bg theme). "onDark" = white on dark section. "onLight" = light section. */
  variant?: "primary" | "onDark" | "onLight";
  /** If true, adds target="_blank" rel="noopener noreferrer". */
  external?: boolean;
}

const arrowVariants = {
  out: { x: "150%", y: "-150%" },
  in: { x: "0%", y: "0%" },
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
}: CTAButtonProps) {
  const variantClasses = {
    primary:
      "rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background ring-2 ring-foreground/10 ring-offset-2 ring-offset-background transition-all hover:bg-foreground/90 active:scale-95",
    onDark:
      "rounded-lg bg-white px-6 py-3 text-sm font-medium text-neutral-900 ring-2 ring-white/20 ring-offset-2 ring-offset-section-dark transition-all hover:bg-neutral-100 active:scale-95",
    onLight:
      "rounded-lg bg-white px-6 py-3 text-sm font-medium text-foreground shadow-sm ring-1 ring-border transition-all hover:bg-card-gradient-from hover:ring-subtle-border active:scale-95",
  };

  return (
    <motion.div whileHover="hover">
      <MotionLink
        href={href}
        className={clsx(
          "group inline-flex items-center gap-2",
          variantClasses[variant],
        )}
        whileHover="hover"
        {...(external && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
      >
        {children}
        <div className="relative h-4 w-4 overflow-hidden">
          <motion.div
            variants={{ hover: arrowVariants.out }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <ArrowUpRight className="h-4 w-4" />
          </motion.div>
          <motion.div
            initial={{ x: "-150%", y: "150%" }}
            variants={{ hover: arrowVariants.in }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <ArrowUpRight className="h-4 w-4" />
          </motion.div>
        </div>
      </MotionLink>
    </motion.div>
  );
}
