import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { getFeaturedProducts } from "@/data/products";

export function FeaturedProductsSection() {
  const products = getFeaturedProducts();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-border-subtle">
      <Container className="space-y-10 sm:space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <SectionHeading
            badge="Current Portfolio"
            title="Featured Chemical Products"
            subtitle="Explore our active commercial chemical offerings. Each product is sourced from vetted production facilities to meet commercial export specifications."
          />
        </div>

        {/* 3 Featured Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
