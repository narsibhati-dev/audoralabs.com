import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  getMetadata,
  getViewport,
  getWebSiteJsonLd,
  getOrganizationJsonLd,
} from "@/lib/seo";
import { getBlogPosts } from "@/blogs/data/mdx";
import "@/styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = getMetadata();
export const viewport: Viewport = getViewport();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [getWebSiteJsonLd(), getOrganizationJsonLd()];
  const blogPosts = getBlogPosts();
  const blogs = blogPosts.map((p) => ({
    slug: p.slug,
    metadata: { title: p.metadata.title },
  }));

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          id="schema-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <Header blogs={blogs} />
            <main className="flex-1 pt-14 md:pt-16">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
