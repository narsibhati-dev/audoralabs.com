import Link from "next/link";
import { clsx } from "clsx";
import { Badge } from "@/components/ui/badge";
import { Video, Activity, FileText, Users } from "lucide-react";
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

interface ProjectCardProps {
  product: Product;
  className?: string;
}

export function ProjectCard({ product, className }: ProjectCardProps) {
  const { label, variant } = statusConfig[product.status];

  return (
    <Link
      href={`/projects/${product.id}`}
      className={clsx(
        "group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card",
        "transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-lg hover:-translate-y-1",
        className,
      )}
    >
      {/* Preview area */}
      <div className="relative aspect-video w-full bg-muted/50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-xl bg-neutral-100 p-6 text-neutral-700 transition-transform group-hover:scale-110 dark:bg-neutral-800 dark:text-neutral-300">
            {iconMap[product.icon] || <Activity className="h-10 w-10" />}
          </div>
        </div>
        {/* Status Badge */}
        <div className="absolute right-3 top-3">
          <Badge variant={variant}>{label}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-muted-foreground transition-colors">
          {product.name}
        </h3>
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
    </Link>
  );
}
