"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/stagger-container";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/product-card";
import { clsx } from "clsx";

const ALL = "All";
type CategoryFilter = typeof ALL | string;

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>(ALL);

  const categories = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => p.category && set.add(p.category));
    return [ALL, ...Array.from(set).sort()];
  }, []);

  const filteredProducts = useMemo(() => {
    if (activeCategory === ALL) return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center">
            <Badge className="mb-4">Portfolio</Badge>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Our Projects
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              A collection of products and tools we&apos;ve built — from
              real-time collaboration platforms to developer infrastructure.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Category tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => {
            const label = cat === ALL ? `${ALL} (${products.length})` : cat;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={clsx(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground",
                )}
              >
                {label}
              </button>
            );
          })}
        </div>

        <div className="mt-12">
          {filteredProducts.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No projects in this category.
            </p>
          ) : (
            <StaggerContainer
              key={activeCategory}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8"
            >
              {filteredProducts.map((product) => (
                <StaggerItem key={product.id}>
                  <ProductCard product={product} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </div>
    </section>
  );
}
