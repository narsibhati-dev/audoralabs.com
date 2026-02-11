"use client";

import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "lucide-react";
import { CTAButton } from "@/components/ui/cta-button";
import { ParticleCanvasDynamic } from "@/components/gl/particle-canvas-dynamic";

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
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-section-dark -mt-14 md:-mt-16 pt-14 md:pt-16">
      <ParticleCanvasDynamic />
      {/* Bottom fade so particles blend into expertise section */}
      <div
        className="pointer-events-none absolute inset-0 z-1 bg-[linear-gradient(to_bottom,transparent_0,transparent_95%,#0a0a0a_100%)]"
        aria-hidden
      />
      {/* Floating terminal snippets (static, no animation) */}
      {terminalSnippets.map((snippet, i) => (
        <div
          key={`terminal-${i}`}
          className={`absolute ${snippet.position} hidden lg:block`}
        >
          <div className="rounded-lg border border-white/10 bg-black/60 backdrop-blur-sm p-4 shadow-lg">
            <div className="flex items-center gap-1.5 mb-3">
              <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground" />
              <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground" />
              <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground" />
            </div>
            <pre className="font-mono text-xs text-neutral-400 whitespace-pre">
              {snippet.code}
            </pre>
          </div>
        </div>
      ))}

      {/* Leaky code background snippets (static, no parallax) */}
      {codeSnippets.map((snippet, i) => (
        <div
          key={i}
          className={`absolute ${snippet.position} hidden lg:block pointer-events-none select-none max-w-md`}
          style={{ rotate: snippet.rotation }}
        >
          <pre className="font-mono text-xs leading-relaxed text-white/20 whitespace-pre">
            {snippet.code}
          </pre>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
        <div className="inline-block">
          <span className="inline-block rounded-full">
            <Badge
              variant="outline"
              className="mb-6 ring-0 border-white/20 text-foreground/80 bg-black/40 backdrop-blur-sm"
            >
              Product Studio
            </Badge>
          </span>
        </div>

        <h1 className="mb-6 text-4xl font-bold tracking-tight font-sentient text-white [text-shadow:0_0_20px_rgba(0,0,0,0.8),0_0_40px_rgba(0,0,0,0.5)] sm:text-5xl md:text-6xl lg:text-7xl">
          {SITE_CONFIG.tagline}
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-neutral-400 [text-shadow:0_0_12px_rgba(0,0,0,0.8)] sm:text-xl">
          {SITE_CONFIG.shortDescription}
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <div className="inline-flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            {/* Primary CTA */}
            <CTAButton href="#products" variant="onDark">
              View Products
            </CTAButton>

            {/* Secondary CTA */}
            <Link
              href={SITE_CONFIG.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-black/40 backdrop-blur-sm px-6 py-3 text-sm font-medium text-white transition-all hover:bg-black/60 active:scale-95"
            >
              Follow the Build
            </Link>
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="mt-8">
          <Link
            href={SITE_CONFIG.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground [text-shadow:0_0_8px_rgba(0,0,0,0.6)] transition-colors hover:text-white"
          >
            <GithubIcon className="h-4 w-4" />
            Check out our open source work
          </Link>
        </div>
      </div>
    </section>
  );
}
