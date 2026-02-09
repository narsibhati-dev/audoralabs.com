import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/ui/product-card";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { products } from "@/data/products";
import { Video, Activity, FileText, Users } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  video: <Video className="h-6 w-6" />,
  activity: <Activity className="h-6 w-6" />,
  "file-text": <FileText className="h-6 w-6" />,
  users: <Users className="h-6 w-6" />,
};

export function ProductsSection() {
  return (
    <section id="products" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center">
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

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {products.map((product, index) => (
            <AnimateOnScroll key={product.id} delay={index * 100}>
              <ProductCard
                name={product.name}
                description={product.description}
                status={product.status}
                icon={iconMap[product.icon] || <Activity className="h-6 w-6" />}
                techStack={product.techStack}
                siteUrl={product.siteUrl}
                githubUrl={product.githubUrl}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
