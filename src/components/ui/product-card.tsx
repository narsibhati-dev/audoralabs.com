import Link from "next/link";
import { clsx } from "clsx";
import { Badge } from "./badge";
import { ArrowUpRight } from "lucide-react";

type ProductStatus = "live" | "in-progress" | "planned";

interface ProductCardProps {
  name: string;
  description: string;
  status: ProductStatus;
  icon: React.ReactNode;
  techStack: string[];
  siteUrl?: string;
  githubUrl?: string;
  className?: string;
}

const statusConfig: Record<
  ProductStatus,
  { label: string; variant: "success" | "success" | "warning" }
> = {
  live: { label: "Live", variant: "success" },
  "in-progress": { label: "In Progress", variant: "success" },
  planned: { label: "Planned", variant: "warning" },
};

export function ProductCard({
  name,
  description,
  status,
  icon,
  techStack,
  siteUrl,
  githubUrl,
  className,
}: ProductCardProps) {
  const { label, variant } = statusConfig[status];

  return (
    <div
      className={clsx(
        "group relative flex flex-col rounded-xl border border-border bg-card p-6",
        "transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-md",
        className,
      )}
    >
      {/* Status Badge */}
      <div className="absolute right-4 top-4">
        <Badge variant={variant}>{label}</Badge>
      </div>

      {/* Icon */}
      <div className="mb-4 inline-flex w-fit rounded-lg bg-neutral-100 p-3 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
        {icon}
      </div>

      {/* Content */}
      <h3 className="mb-2 text-xl font-semibold text-foreground">{name}</h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      {/* Links */}
      <div className="mb-4 flex items-center gap-4">
        {siteUrl && (
          <Link
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
          >
            Visit Site
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        )}
        {githubUrl && (
          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            GitHub
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        )}
        {!siteUrl && !githubUrl && (
          <span className="text-sm text-muted-foreground">Coming Soon</span>
        )}
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
