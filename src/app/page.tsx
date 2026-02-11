import { SITE_CONFIG } from "@/config/site";
import { getPageMetadata } from "@/lib/seo";
import { HeroSection } from "@/components/sections/hero-section";
import { ExpertiseSection } from "@/components/sections/expertise-section";
import { ProductsSection } from "@/components/sections/products-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { BlogSection } from "@/components/sections/blog-section";
import { CTASection } from "@/components/sections/cta-section";
export const metadata = getPageMetadata({
  title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
  path: "/",
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <ExpertiseSection />
      <ProductsSection />
      <PhilosophySection />
      <BlogSection />
      <CTASection />
    </>
  );
}
