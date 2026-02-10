import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/ui/product-card";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/stagger-container";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { products } from "@/data/products";
import { ArrowRight } from "lucide-react";

export function ProductsSection() {
  return (
    <section id="products" className="py-20 sm:py-28">
      {/* Section divider - thin gradient line */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8" aria-hidden>
        <div className="h-px w-full bg-linear-to-r from-transparent via-border to-transparent" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="mt-12 text-center">
            <Badge className="mb-4">Products</Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What we&apos;re building
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              A portfolio of thoughtfully crafted tools for developers, teams,
              and growing businesses.
            </p>
          </div>
        </AnimateOnScroll>

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {products.map((product) => (
            <StaggerItem key={product.id}>
              <ProductCard product={product} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-12 flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            View all products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
