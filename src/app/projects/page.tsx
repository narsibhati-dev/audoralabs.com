import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/ui/project-card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { products } from "@/data/products";

export const metadata = {
  title: "Projects | AudoraLabs",
  description:
    "A portfolio of products and projects built by AudoraLabs - from real-time media platforms to developer tools.",
};

export default function ProjectsPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center">
            <Badge className="mb-4">Portfolio</Badge>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Our Projects
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              A collection of products and tools we&apos;ve built — from
              real-time collaboration platforms to developer infrastructure.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-12">
          {products.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No projects yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
              {products.map((product, index) => (
                <AnimateOnScroll key={product.id} delay={index * 100}>
                  <ProjectCard product={product} />
                </AnimateOnScroll>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
