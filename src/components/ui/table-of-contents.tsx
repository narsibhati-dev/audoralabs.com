import Link from "next/link";

interface TableOfContentsProps {
  sections: { id: string; title: string }[];
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  return (
    <section className="rounded-xl border border-border bg-card p-8">
      <h2 className="mb-8 text-2xl font-bold text-foreground">
        Table of Contents
      </h2>
      <nav>
        <ul className="space-y-2">
          {sections.map((section, index) => (
            <li key={section.id}>
              <Link
                href={`#${section.id}`}
                className="group flex items-center rounded-md px-3 py-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="mr-3 text-sm font-medium text-muted-foreground/50 group-hover:text-foreground">
                  {index + 1}
                </span>
                <span className="font-medium">{section.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
