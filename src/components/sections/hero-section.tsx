"use client";

import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "lucide-react";
import { CTAButton } from "@/components/ui/cta-button";
import { motion, useScroll, useTransform } from "motion/react";
import { ParticleCanvasDynamic } from "@/components/gl/particle-canvas-dynamic";
const MotionLink = motion.create(Link);

// Code snippets that "leak" across the hero
const codeSnippets = [
  {
    code: `const server = await serve({
  port: 8080,
  handler: async (req) => {
    return Response.json(data)
  }
})`,
    position: "top-20 -left-4",
    rotation: "-6deg",
  },
  {
    code: `export async function POST(req) {
  const body = await req.json()
  await db.insert(users, body)
  return { success: true }
}`,
    position: "top-32 -right-8",
    rotation: "4deg",
  },
  {
    code: `impl WebSocket for Connection {
  async fn handle(&self) -> Result<()> {
    loop {
      let msg = self.recv().await?;
      self.broadcast(msg).await?;
    }
  }
}`,
    position: "bottom-40 -left-12",
    rotation: "3deg",
  },
  {
    code: `SELECT users.*, COUNT(orders.id)
FROM users
LEFT JOIN orders ON orders.user_id = users.id
GROUP BY users.id
HAVING COUNT(orders.id) > 10`,
    position: "bottom-24 -right-4",
    rotation: "-5deg",
  },
];

// Floating terminal snippets
const terminalSnippets = [
  {
    code: `$ cargo build --release\n✓ Compiled in 2.3s\n✓ Running tests...`,
    position: "top-1/4 left-8",
  },
  {
    code: `const api = await fetch('/api')\nconst data = await api.json()`,
    position: "bottom-1/3 right-8",
  },
];

export function HeroSection() {
  const { scrollYProgress } = useScroll();
  const codeParallaxY = useTransform(scrollYProgress, [0, 0.25], [0, 60]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-neutral-950 -mt-14 md:-mt-16 pt-14 md:pt-16">
      <ParticleCanvasDynamic />
      {/* Bottom fade so particles blend into expertise section */}
      <div
        className="pointer-events-none absolute inset-0 z-1 bg-[linear-gradient(to_bottom,transparent_0,transparent_95%,#0a0a0a_100%)]"
        aria-hidden
      />
      {/* Floating terminal snippets */}
      {terminalSnippets.map((snippet, i) => (
        <div
          key={`terminal-${i}`}
          className={`absolute ${snippet.position} hidden lg:block`}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: [0, -6, 0],
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.5 + i * 0.3 },
              y: {
                duration: 3.5 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2 + i * 0.2,
              },
            }}
            className="rounded-lg border border-white/10 bg-black/60 backdrop-blur-sm p-4 shadow-lg"
          >
            <div className="flex items-center gap-1.5 mb-3">
              <div className="h-2.5 w-2.5 rounded-full bg-neutral-500" />
              <div className="h-2.5 w-2.5 rounded-full bg-neutral-500" />
              <div className="h-2.5 w-2.5 rounded-full bg-neutral-500" />
            </div>
            <pre className="font-mono text-xs text-neutral-300 whitespace-pre">
              {snippet.code}
            </pre>
          </motion.div>
        </div>
      ))}

      {/* Leaky code background snippets with parallax */}
      {codeSnippets.map((snippet, i) => (
        <motion.div
          key={i}
          className={`absolute ${snippet.position} hidden lg:block pointer-events-none select-none max-w-md`}
          style={{
            rotate: snippet.rotation,
            y: codeParallaxY,
          }}
        >
          <pre className="font-mono text-xs leading-relaxed text-white/20 whitespace-pre">
            {snippet.code}
          </pre>
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block"
        >
          <motion.span
            initial={{ opacity: 0, boxShadow: "0 0 0 0 rgba(0,0,0,0)" }}
            animate={{
              opacity: 1,
              boxShadow: [
                "0 0 0 0 rgba(163,163,163,0)",
                "0 0 20px 2px rgba(163,163,163,0.15)",
                "0 0 0 0 rgba(163,163,163,0)",
              ],
            }}
            transition={{
              duration: 1.8,
              delay: 0.4,
              boxShadow: { times: [0, 0.5, 1], duration: 1.8 },
            }}
            className="inline-block rounded-full"
          >
            <Badge
              variant="outline"
              className="mb-6 ring-0 border-white/20 text-neutral-200 bg-black/40 backdrop-blur-sm"
            >
              Product Studio
            </Badge>
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 text-4xl font-bold tracking-tight font-sentient text-white [text-shadow:0_0_20px_rgba(0,0,0,0.8),0_0_40px_rgba(0,0,0,0.5)] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {SITE_CONFIG.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-neutral-300 [text-shadow:0_0_12px_rgba(0,0,0,0.8)] sm:text-xl"
        >
          {SITE_CONFIG.shortDescription}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          {/* Primary CTA */}
          <CTAButton href="#products" variant="onDark">
            View Products
          </CTAButton>

          {/* Secondary CTA */}
          <motion.div whileHover="hover">
            <MotionLink
              href={SITE_CONFIG.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg border border-white/20 bg-black/40 backdrop-blur-sm px-6 py-3 text-sm font-medium text-white transition-all hover:bg-black/60 active:scale-95"
              whileHover="hover"
            >
              Follow the Build
            </MotionLink>
          </motion.div>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8"
        >
          <Link
            href={SITE_CONFIG.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 [text-shadow:0_0_8px_rgba(0,0,0,0.6)] transition-colors hover:text-white"
          >
            <GithubIcon className="h-4 w-4" />
            Check out our open source work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
