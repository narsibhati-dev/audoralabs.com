"use client";

import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { Github } from "lucide-react";
import { motion } from "motion/react";
import { CTAButton } from "@/components/ui/cta-button";

const MotionLink = motion.create(Link);

const staggerTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
};

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-neutral-950">
      {/* Dot pattern background */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[24px_24px]"
        aria-hidden
      />
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...staggerTransition, delay: 0 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Build something that lasts
          </h2>
        </motion.div>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...staggerTransition, delay: 0.1 }}
        >
          Whether you&apos;re starting a new product or scaling an existing one,
          we&apos;re here to help build systems that work.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...staggerTransition, delay: 0.2 }}
        >
          {/* Primary CTA */}
          <CTAButton href="mailto:hello@audoralabs.com" variant="onDark">
            Start a Conversation
          </CTAButton>

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
        </motion.div>
      </div>
    </section>
  );
}
