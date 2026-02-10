"use client";

import Link from "next/link";
import { clsx } from "clsx";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import {
  Video,
  Activity,
  FileText,
  Users,
  ExternalLink,
  Github,
} from "lucide-react";
import type { Product } from "@/data/products";
import { CardViewLink } from "@/components/ui/card-view-link";

const iconMap: Record<string, React.ReactNode> = {
  video: <Video className="h-5 w-5" />,
  activity: <Activity className="h-5 w-5" />,
  "file-text": <FileText className="h-5 w-5" />,
  users: <Users className="h-5 w-5" />,
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
  /** Use "dark" when the card is inside a dark section (e.g. dark background). */
  sectionVariant?: "light" | "dark";
}

export function ProductCard({
  product,
  className,
  sectionVariant = "light",
}: ProductCardProps) {
  const { label, variant } = statusConfig[product.status];
  const hasLinks = product.siteUrl || product.githubUrl;
  const productHref = `/products/${product.id}`;

  return (
    <motion.div
      className={clsx("group block h-full", className)}
      initial={false}
      whileHover={{
        y: -4,
        transition: { type: "spring", stiffness: 300, damping: 25 },
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-gradient-to-b from-neutral-50 to-neutral-100 transition-all duration-300 group-hover:shadow-lg group-hover:border-neutral-400 dark:from-neutral-900 dark:to-neutral-950 dark:group-hover:border-neutral-600">
        {/* Shimmer overlay on hover */}
        <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-neutral-200/20 to-transparent transition-transform duration-500 group-hover:translate-x-full dark:via-neutral-600/20" />
        </div>

        {/* Main content: link to product page (no nested <a>) */}
        <MotionLink href={productHref} className="flex flex-1 flex-col">
          {/* Top gradient accent line */}
          <div
            className="h-0.5 w-full shrink-0 bg-linear-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-600"
            aria-hidden
          />

          {/* Content */}
          <div className="relative flex flex-1 flex-col p-5">
            {/* Header: icon + name + status badge */}
            <div className="mb-2 flex items-start justify-between gap-3">
              <div className="flex min-w-0 flex-1 items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                  {iconMap[product.icon] || <Activity className="h-5 w-5" />}
                </div>
                <h3 className="truncate text-lg font-semibold text-foreground transition-colors group-hover:text-foreground/90">
                  {product.name}
                </h3>
              </div>
              <Badge variant={variant} className="shrink-0">
                {label}
              </Badge>
            </div>

            {/* Category pill */}
            {product.category && (
              <div className="mb-3">
                <span className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                  {product.category}
                </span>
              </div>
            )}

            <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
              {product.description}
            </p>

            {/* Tech Stack - all pills */}
            <div className="flex flex-wrap gap-1.5">
              {product.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </MotionLink>

        {/* Links row (sibling to product link - no nested <a>) */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border px-5 pb-5 pt-4">
          <div className="flex flex-wrap items-center gap-3">
            {product.siteUrl && (
              <Link
                href={product.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Visit Site
              </Link>
            )}
            {product.githubUrl && (
              <Link
                href={product.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-3.5 w-3.5" />
                GitHub
              </Link>
            )}
            {!hasLinks && (
              <span className="text-sm text-muted-foreground">Coming soon</span>
            )}
          </div>
          <CardViewLink
            href={productHref}
            ariaLabel={`View ${product.name}`}
            variant={sectionVariant}
          />
        </div>
      </div>
    </motion.div>
  );
}
