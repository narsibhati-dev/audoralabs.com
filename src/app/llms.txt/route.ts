import { SITE_CONFIG } from "@/config/site";
import { products } from "@/data/products";
import { getBlogPosts } from "@/blogs/data/mdx";

export const dynamic = "force-static";

export function GET() {
  const url = SITE_CONFIG.url.replace(/\/$/, "");
  const blogPosts = getBlogPosts();

  const routesSection = `## Main Routes

| Route | Description |
|-------|-------------|
| ${url}/ | Home: hero, expertise, products, philosophy, blog preview, CTA |
| ${url}/blogs | Blog index with pagination |
| ${url}/blogs/[slug] | MDX blog post with table of contents |
| ${url}/products | Product listing |
| ${url}/products/[id] | Product detail page |
| ${url}/terms | Terms of service |
| ${url}/privacy | Privacy policy |
`;

  const productsSection = `## Products

${products
  .map((p) => {
    const productUrl = `${url}/products/${p.id}`;
    const extras: string[] = [];
    if (p.siteUrl) extras.push(`Site: ${p.siteUrl}`);
    if (p.githubUrl) extras.push(`GitHub: ${p.githubUrl}`);
    return `- **${p.name}** (${p.status}): ${p.description}
  Page: ${productUrl}${extras.length ? "\n  " + extras.join(" | ") : ""}`;
  })
  .join("\n\n")}
`;

  const blogSection =
    blogPosts.length > 0
      ? `## Blog

Index: ${url}/blogs

Posts:
${blogPosts.map((p) => `- ${p.metadata.title} - ${url}/blogs/${p.slug}`).join("\n")}
`
      : `## Blog

Index: ${url}/blogs
`;

  const linksSection = `## Links

- Twitter: ${SITE_CONFIG.links.twitter}
- GitHub: ${SITE_CONFIG.links.github}
- LinkedIn: ${SITE_CONFIG.links.linkedin}
`;

  const resourcesSection = `## Resources

- This summary: ${url}/llms.txt
- Sitemap: ${url}/sitemap.xml
`;

  const keywordsSection = `## Keywords

${SITE_CONFIG.keywords.join(", ")}
`;

  const content = `# ${SITE_CONFIG.name}

> ${SITE_CONFIG.tagline}

${SITE_CONFIG.description}

${SITE_CONFIG.shortDescription}

${routesSection}
${productsSection}
${blogSection}
${linksSection}
${resourcesSection}
${keywordsSection}

## Local Development

\`\`\`bash
bun install
bun dev
\`\`\`

Open http://localhost:3000
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
