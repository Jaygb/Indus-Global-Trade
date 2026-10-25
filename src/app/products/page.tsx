import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { ProductCard } from "@/components/ui/ProductCard";
import { CTASection } from "@/components/sections/CTASection";
import { constructMetadata } from "@/lib/seo";
import { getActiveCategories } from "@/data/categories";
import { getFeaturedProducts } from "@/data/products";

export const metadata: Metadata = constructMetadata({
  title: "Products",
  description:
    "Explore the commercial and industrial export product lines offered by Indus Global Trade, currently featuring industrial and specialty chemicals for global buyers.",
  path: "/products",
});

export default function ProductsPage() {
  const categories = getActiveCategories();
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      {/* 1. Page Hero */}
      <section className="bg-white pt-8 pb-14 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 border-b border-border-subtle">
        <Container className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-light-grey border border-border-subtle">
            <span className="w-2 h-2 rounded-full bg-teal"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-navy">
              Our Products
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy leading-tight">
            Products We Supply
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Indus Global Trade is an export enterprise delivering commercial-grade products to international buyers. Our current portfolio concentrates on refined and specialty chemicals, with operational capacity designed to onboard additional trade categories as market demands evolve.
          </p>
        </Container>
      </section>

      {/* 2. Product Categories Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-light-grey/60 border-b border-border-subtle">
        <Container className="space-y-10 sm:space-y-12">
          <SectionHeading
            badge="Export Categories"
            title="Browse by Category"
            subtitle="Explore our active product categories. Each category is backed by verified manufacturing sources and coordinated export logistics."
          />

          {/* Dynamic Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}

            {/* Scalable Future Category Placeholder Card */}
            <div className="flex flex-col justify-between p-6 sm:p-8 rounded-lg bg-white/70 border border-dashed border-slate-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-md bg-slate-100 flex items-center justify-center text-slate-400">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                    Future Expansion
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy tracking-tight">
                    Additional Trade Verticals
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mt-2.5">
                    We continuously evaluate new commodity and industrial product lines for export based on buyer requirements and verified manufacturing partnerships.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200">
                <span className="text-xs text-slate-500 italic">
                  Inquire with our trade desk for specific procurement requirements.
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Current Active Products Quick Access */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-border-subtle">
        <Container className="space-y-10 sm:space-y-12">
          <SectionHeading
            badge="Available Now"
            title="Current Product Offerings"
            subtitle="Direct access to our active commercial chemical products. Request specifications or an export quotation directly."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Category CTA */}
      <CTASection
        badge="Direct Trade Desk"
        title="Need Sourcing in Another Product Category?"
        description="If you have commercial requirements beyond our current chemical portfolio, contact our trade desk to discuss your specifications and evaluate custom sourcing feasibility."
        primaryCta={{ text: "Send an Inquiry", href: "/contact-us" }}
        secondaryCta={{ text: "Explore Chemicals", href: "/products/chemicals" }}
      />
    </>
  );
}
