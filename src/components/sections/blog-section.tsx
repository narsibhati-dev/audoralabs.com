import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { getBlogPosts } from "@/blogs/data/mdx";
import { ArrowRight, Calendar } from "lucide-react";

export function BlogSection() {
  const allBlogs = getBlogPosts();
  const sorted = [...allBlogs]
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime(),
    )
    .slice(0, 4);

  const featured = sorted[0];
  const recent = sorted.slice(1, 4);

  if (sorted.length === 0) {
    return null;
  }

  return (
    <section className="bg-muted/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              <Link
                href={`/blogs/${featured.slug}`}
                className="group block overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-lg"
              >
                <div className="p-6 sm:p-8">
                  <h3 className="mb-3 text-xl font-semibold text-foreground transition-colors group-hover:text-muted-foreground sm:text-2xl">
                    {featured.metadata.title}
                  </h3>
                  <p className="mb-4 line-clamp-3 text-muted-foreground">
                    {featured.metadata.summary}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(
                        featured.metadata.publishedAt,
                      ).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          )}

          {/* Recent Posts */}
          <div className="space-y-4">
            {recent.map((post, index) => (
              <AnimateOnScroll key={post.slug} delay={(index + 1) * 100}>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="group block rounded-xl border border-border bg-card p-4 transition-all hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-md"
                >
                  <h4 className="mb-2 font-semibold text-foreground transition-colors group-hover:text-muted-foreground">
                    {post.metadata.title}
                  </h4>
                  <p className="line-clamp-2 text-sm text-muted-foreground">
                    {post.metadata.summary}
                  </p>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* View All Link */}
        <AnimateOnScroll delay={400}>
          <div className="mt-12 text-center">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-muted-foreground"
            >
              View All Articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
