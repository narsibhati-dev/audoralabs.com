"use client";

import Link from "next/link";
import { clsx } from "clsx";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Video, Activity, FileText, Users } from "lucide-react";
import type { Product } from "@/data/products";

const iconMap: Record<string, React.ReactNode> = {
  video: <Video className="h-6 w-6" />,
  activity: <Activity className="h-6 w-6" />,
  "file-text": <FileText className="h-6 w-6" />,
  users: <Users className="h-6 w-6" />,
};

const statusConfig: Record<
  Product["status"],
  { label: string; variant: "success" | "warning" }
> = {
  live: { label: "Live", variant: "success" },
  "in-progress": { label: "In Progress", variant: "success" },
  planned: { label: "Planned", variant: "warning" },
};

const MotionLink = motion.create(Link);

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { label, variant } = statusConfig[product.status];

  return (
    <MotionLink
      href={`/products/${product.id}`}
      className={clsx("group block", className)}
    >
      <motion.div
        className="relative flex flex-col overflow-hidden rounded-xl border border-border bg-card"
        initial={false}
        whileHover={{
          y: -6,
          boxShadow:
            "0 20px 25px -5px rgba(0,0,0,0.08), 0 8px 10px -6px rgba(0,0,0,0.04)",
          transition: { type: "spring", stiffness: 300, damping: 25 },
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Top gradient accent line */}
        <div
          className="h-0.5 w-full shrink-0 bg-linear-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-600"
          aria-hidden
        />

        {/* Preview area */}
        <div className="relative aspect-video w-full bg-muted/50">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="rounded-xl bg-neutral-100 p-6 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
              initial={false}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {iconMap[product.icon] || <Activity className="h-10 w-10" />}
            </motion.div>
          </div>
          <div className="absolute right-3 top-3">
            <Badge variant={variant}>{label}</Badge>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-2 flex items-start justify-between gap-2">
            <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-foreground/90">
              {product.name}
            </h3>
            <span className="flex shrink-0 translate-x-1 items-center justify-center opacity-0 text-muted-foreground transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>
          <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {product.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5">
            {product.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
              >
                {tech}
              </span>
            ))}
            {product.techStack.length > 3 && (
              <span className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                +{product.techStack.length - 3}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </MotionLink>
  );
}
