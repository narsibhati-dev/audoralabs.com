import { Badge } from "@/components/ui/badge";
import { IconCard } from "@/components/ui/icon-card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { expertiseAreas } from "@/data/expertise";

export function ExpertiseSection() {
  return (
    <section className="bg-muted/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center">
            <Badge className="mb-4">Our Expertise</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Production-grade systems that scale
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              From real-time collaboration to high-throughput APIs, we build
              software that performs under pressure.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {expertiseAreas.map((area, index) => (
            <AnimateOnScroll key={area.title} delay={index * 100}>
              <IconCard
                icon={area.icon}
                title={area.title}
                description={area.description}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
