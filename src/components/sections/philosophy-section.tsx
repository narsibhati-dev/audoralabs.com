"use client";

import { Badge } from "@/components/ui/badge";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/stagger-container";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { principles, type Principle } from "@/data/philosophy";
import { CheckCircle, TrendingUp, Eye, Shield } from "lucide-react";
import { motion } from "motion/react";

const iconMap: Record<Principle["iconName"], React.ReactNode> = {
  "check-circle": <CheckCircle className="h-5 w-5" />,
  "trending-up": <TrendingUp className="h-5 w-5" />,
  eye: <Eye className="h-5 w-5" />,
  shield: <Shield className="h-5 w-5" />,
};

export function PhilosophySection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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

        <StaggerContainer className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {principles.map((principle) => (
            <StaggerItem key={principle.title} className="flex">
              <motion.div
                className="group flex h-full w-full flex-col rounded-xl border border-border bg-linear-to-b from-card-gradient-from to-card-gradient-to p-4 text-center transition-all hover:border-subtle-border hover:shadow-lg"
                initial={false}
                whileHover={{
                  y: -2,
                  transition: { type: "spring", stiffness: 300, damping: 25 },
                }}
              >
                <div className="mb-3 inline-flex shrink-0 items-center justify-center self-center rounded-lg bg-muted p-2.5 text-foreground transition-transform duration-300 ease-out group-hover:scale-105 group-hover:rotate-3">
                  {iconMap[principle.iconName]}
                </div>
                <h3 className="mb-1.5 shrink-0 text-base font-semibold text-foreground">
                  {principle.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {principle.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
