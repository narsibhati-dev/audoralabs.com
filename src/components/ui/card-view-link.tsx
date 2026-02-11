"use client";

import Link from "next/link";
import { clsx } from "clsx";
import { ArrowUpRight } from "lucide-react";

export interface CardViewLinkProps {
  href: string;
  ariaLabel: string;
  /** Use "dark" when the card is inside a dark section (e.g. dark background). */
  variant?: "light" | "dark";
  /** When true, link is always visible (e.g. standalone below a grid). When false, shows on parent group-hover. */
  standalone?: boolean;
}

export function CardViewLink({
  href,
  ariaLabel,
  variant = "light",
  standalone = false,
}: CardViewLinkProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "flex shrink-0 items-center justify-center transition-all duration-200",
        standalone
          ? "translate-x-0 rounded-lg border border-border bg-background px-4 py-2.5 opacity-100 shadow-sm hover:bg-accent hover:text-accent-foreground"
          : "translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
        variant === "light" &&
          "text-muted-foreground hover:text-foreground group-hover:text-foreground",
        variant === "dark" &&
          "text-muted-foreground hover:text-white group-hover:text-white",
      )}
      aria-label={ariaLabel}
    >
      <ArrowUpRight className="h-5 w-5" />
    </Link>
  );
}
