import { getBlogPosts } from "@/blogs/data/mdx";
import { BlogSectionClient } from "./blog-section-client";

export function BlogSection() {
  const allBlogs = getBlogPosts();
  const sorted = [...allBlogs]
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime(),
    )
    .slice(0, 4);

  if (sorted.length === 0) {
    return null;
  }

  // Serialize the data for client component
  const posts = sorted.map((post) => ({
    slug: post.slug,
    title: post.metadata.title,
    summary: post.metadata.summary,
    publishedAt: post.metadata.publishedAt,
  }));

  return <BlogSectionClient posts={posts} />;
}
