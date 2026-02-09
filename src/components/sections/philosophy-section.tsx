import { Badge } from "@/components/ui/badge";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { principles, type Principle } from "@/data/philosophy";
import { CheckCircle, TrendingUp, Eye, Shield } from "lucide-react";

const iconMap: Record<Principle["iconName"], React.ReactNode> = {
  "check-circle": <CheckCircle className="h-6 w-6" />,
  "trending-up": <TrendingUp className="h-6 w-6" />,
  eye: <Eye className="h-6 w-6" />,
  shield: <Shield className="h-6 w-6" />,
};

export function PhilosophySection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center">
            <Badge className="mb-4">Philosophy</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built to last
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Our approach to building software that stands the test of time.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, index) => (
            <AnimateOnScroll key={principle.title} delay={index * 100}>
              <div className="text-center">
                <div className="mx-auto mb-4 inline-flex rounded-lg bg-neutral-100 p-4 dark:bg-neutral-800">
                  <div className="text-neutral-700 dark:text-neutral-300">
                    {iconMap[principle.iconName]}
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {principle.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
