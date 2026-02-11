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
      className="relative pt-12 sm:pt-16 pb-20 sm:pb-28 dark bg-[#0a0a0a]"
    >
      {/* Subtle grid pattern overlay */}
      {/* Dot pattern background */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[24px_24px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center">
            <Badge className="mb-4">Our Expertise</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Production-grade systems that scale
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-400">
              From real-time collaboration to high-throughput APIs, we build
              software that performs under pressure.
            </p>
          </div>
        </AnimateOnScroll>

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {expertiseAreas.map((area, index) => (
            <StaggerItem key={area.title} className="flex">
              <IconCard
                icon={iconMap[area.icon] ?? <Activity className="h-6 w-6" />}
                title={area.title}
                description={area.description}
                index={index}
                className="w-full"
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
