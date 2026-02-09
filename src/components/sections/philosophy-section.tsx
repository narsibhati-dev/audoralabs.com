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
  "check-circle": <CheckCircle className="h-6 w-6" />,
  "trending-up": <TrendingUp className="h-6 w-6" />,
  eye: <Eye className="h-6 w-6" />,
  shield: <Shield className="h-6 w-6" />,
};

export function PhilosophySection() {
  return (
    <section className="py-20 sm:py-28">
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

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => (
            <StaggerItem key={principle.title}>
              <motion.div
                className="group text-center"
                initial={false}
                whileHover={{
                  y: -4,
                  transition: { type: "spring", stiffness: 300, damping: 25 },
                }}
              >
                <motion.div
                  className="mx-auto mb-4 inline-flex rounded-lg bg-neutral-100 p-4 dark:bg-neutral-800"
                  initial={false}
                  whileInView={{
                    scale: [1, 1.08, 1],
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className="text-neutral-700 dark:text-neutral-300">
                    {iconMap[principle.iconName]}
                  </div>
                </motion.div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {principle.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
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
