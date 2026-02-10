import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Video,
  Activity,
  FileText,
  Users,
} from "lucide-react";
import { products, getProductById } from "@/data/products";

const iconMap: Record<string, React.ReactNode> = {
  video: <Video className="h-12 w-12" />,
  activity: <Activity className="h-12 w-12" />,
  "file-text": <FileText className="h-12 w-12" />,
  users: <Users className="h-12 w-12" />,
};

const statusConfig: Record<string, { label: string; color: string }> = {
  live: { label: "Live", color: "bg-emerald-500/10 text-emerald-600" },
  "in-progress": {
    label: "In Progress",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  planned: { label: "Planned", color: "bg-amber-500/10 text-amber-600" },
};

function descriptionToBullets(description: string): string[] {
  return description
    .split("\n")
    .map((line) => line.replace(/^\s*-\s*/, "").trim())
    .filter(Boolean);
}

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return {};
  return {
    title: `${product.name} | AudoraLabs`,
    description: product.description,
  };
}

export default async function ProductsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const bullets = product.longDescription
    ? descriptionToBullets(product.longDescription)
    : [];
  const status = statusConfig[product.status];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Back navigation */}
      <div className="mb-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to products
        </Link>
      </div>

      {/* Hero / Icon area */}
      <div className="mb-8 overflow-hidden rounded-xl border border-border bg-muted/30">
        <div className="flex aspect-video w-full items-center justify-center bg-muted/50">
          <div className="rounded-2xl bg-neutral-100 p-8 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
            {iconMap[product.icon] || <Activity className="h-12 w-12" />}
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="mb-8 flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:flex-wrap sm:items-center">
        <div className="flex flex-wrap items-center gap-3">
          {product.siteUrl && (
            <Link
              href={product.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              <ExternalLink className="h-4 w-4" />
              View Live
            </Link>
          )}
          {product.githubUrl && (
            <Link
              href={product.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <Github className="h-4 w-4" />
              View Source
            </Link>
          )}
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground sm:ml-auto">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${status.color}`}
          >
            {status.label}
          </span>
          {product.category && (
            <span className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium">
              {product.category}
            </span>
          )}
        </div>
      </div>

      {/* Project Title & About */}
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {product.name}
        </h1>
        <p className="mb-6 text-lg text-muted-foreground">
          {product.description}
        </p>

        {bullets.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Key Features
            </h2>
            <ul className="list-none space-y-3 text-muted-foreground">
              {bullets.map((line, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Tech Stack */}
      {product.techStack.length > 0 && (
        <div className="rounded-xl border border-border bg-muted/20 p-4 sm:p-6">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {product.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-neutral-800 px-3 py-1.5 text-sm font-medium text-neutral-100 dark:bg-neutral-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
