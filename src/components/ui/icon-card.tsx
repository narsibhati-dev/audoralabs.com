import { clsx } from "clsx";

interface IconCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function IconCard({
  icon,
  title,
  description,
  className,
}: IconCardProps) {
  return (
    <div
      className={clsx(
        "group relative rounded-xl bg-card p-6 transition-all duration-300",
        "border border-border hover:border-neutral-400 dark:hover:border-neutral-600",
        "hover:shadow-lg hover:-translate-y-1",
        className,
      )}
    >
      <div className="mb-4 inline-flex rounded-lg bg-neutral-100 p-3 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
