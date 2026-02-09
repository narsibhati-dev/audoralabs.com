"use client";

import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "motion/react";

const MotionLink = motion.create(Link);

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-neutral-950">
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Build something that lasts
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400">
            Whether you&apos;re starting a new product or scaling an existing
            one, we&apos;re here to help build systems that work.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Primary CTA */}
            <motion.div whileHover="hover">
              <MotionLink
                href={`mailto:hello@audoralabs.com`}
                className="group inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-neutral-900 ring-2 ring-white/20 ring-offset-2 ring-offset-neutral-900 transition-all hover:bg-neutral-100 active:scale-95"
                whileHover="hover"
              >
                Start a Conversation
                <div className="relative h-4 w-4 overflow-hidden">
                  <motion.div
                    variants={{
                      hover: { x: "150%", y: "-150%" },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.div>
                  <motion.div
                    initial={{ x: "-150%", y: "150%" }}
                    variants={{
                      hover: { x: "0%", y: "0%" },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.div>
                </div>
              </MotionLink>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div whileHover="hover">
              <MotionLink
                href={SITE_CONFIG.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-800 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-neutral-700 hover:border-neutral-600 active:scale-95"
                whileHover="hover"
              >
                <Github className="h-4 w-4" />
                View Open Source Projects
              </MotionLink>
            </motion.div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
