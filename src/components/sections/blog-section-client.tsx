"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/stagger-container";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { Calendar } from "lucide-react";
import { motion } from "motion/react";
import { CardViewLink } from "@/components/ui/card-view-link";
import { CTAButton } from "@/components/ui/cta-button";

type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
};

interface BlogSectionClientProps {
  posts: BlogPost[];
}

export function BlogSectionClient({ posts }: BlogSectionClientProps) {
  const featured = posts[0];
  const recent = posts.slice(1, 4);

  return (
    <section
      id="blogs"
      className="relative py-20 sm:py-28 dark bg-[#0a0a0a] text-foreground"
    >
      {/* Dot pattern background */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[24px_24px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center">
            <Badge className="mb-4">Insights</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              From the build log
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Technical deep-dives, architecture decisions, and lessons from
              production
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Featured Post */}
          {featured && (
            <AnimateOnScroll className="lg:col-span-2">
              <motion.div
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-gradient-to-b from-card-gradient-from to-card-gradient-to"
                initial={false}
                whileHover={{
                  scale: 1.01,
                  boxShadow:
                    "0 25px 50px -12px rgba(0,0,0,0.12), 0 12px 24px -8px rgba(0,0,0,0.08)",
                  transition: { type: "spring", stiffness: 300, damping: 25 },
                }}
              >
                <Link
                  href={`/blogs/${featured.slug}`}
                  className="flex flex-1 flex-col p-6 sm:p-8"
                >
                  <h3 className="mb-3 text-xl font-semibold text-foreground transition-colors group-hover:text-muted-foreground sm:text-2xl">
                    {featured.title}
                  </h3>
                  <p className="mb-4 line-clamp-3 text-muted-foreground">
                    {featured.summary}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(featured.publishedAt).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        },
                      )}
                    </span>
                  </div>
                </Link>
                <div className="flex items-center justify-end px-6 pb-6 pt-0">
                  <CardViewLink
                    href={`/blogs/${featured.slug}`}
                    ariaLabel={`Read ${featured.title}`}
                    variant="dark"
                  />
                </div>
              </motion.div>
            </AnimateOnScroll>
          )}

          {/* Recent Posts with stagger */}
          <div className="space-y-4">
            <StaggerContainer className="flex flex-col gap-4">
              {recent.map((post) => (
                <StaggerItem key={post.slug}>
                  <div className="group flex flex-col rounded-xl border border-border bg-gradient-to-b from-card-gradient-from to-card-gradient-to p-4 transition-colors hover:border-subtle-border hover:shadow-md">
                    <Link href={`/blogs/${post.slug}`} className="flex-1">
                      <h4 className="mb-2 font-semibold text-foreground transition-colors group-hover:text-muted-foreground">
                        <span className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-muted-foreground after:transition-all after:duration-200 group-hover:after:w-full">
                          {post.title}
                        </span>
                      </h4>
                      <p className="line-clamp-2 text-sm text-muted-foreground">
                        {post.summary}
                      </p>
                    </Link>
                    <div className="mt-2 flex justify-end">
                      <CardViewLink
                        href={`/blogs/${post.slug}`}
                        ariaLabel={`Read ${post.title}`}
                        variant="dark"
                      />
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        {/* View All Link */}
        <AnimateOnScroll delay={400}>
          <div className="mt-12 text-center">
            <CTAButton href="/blogs" variant="onDark" external={true}>
              View All Articles
            </CTAButton>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
