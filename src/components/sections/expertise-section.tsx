import { Badge } from "@/components/ui/badge";
import { IconCard } from "@/components/ui/icon-card";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/stagger-container";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { expertiseAreas } from "@/data/expertise";
import { Activity, Server, Cloud, Rocket } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  activity: <Activity className="h-6 w-6" />,
  server: <Server className="h-6 w-6" />,
  cloud: <Cloud className="h-6 w-6" />,
  rocket: <Rocket className="h-6 w-6" />,
};

export function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className="relative py-20 sm:py-28 dark bg-[#0a0a0a] text-foreground"
    >
      {/* Subtle grid pattern overlay */}
      {/* Dot pattern overlay with radial fade */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {expertiseAreas.map((area, index) => (
            <StaggerItem key={area.title}>
              <IconCard
                icon={iconMap[area.icon] ?? <Activity className="h-6 w-6" />}
                title={area.title}
                description={area.description}
                index={index}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
