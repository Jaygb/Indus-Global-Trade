import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { CTASection } from "@/components/sections/CTASection";
import { constructMetadata } from "@/lib/seo";
import { getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";

export const metadata: Metadata = constructMetadata({
  title: "Chemical Products",
  description:
    "Explore commercial chemical products supplied by Indus Global Trade for international B2B buyers, including Refined Glycerin, Menthol, and Monosodium Glutamate.",
  path: "/products/chemicals",
});

export default function ChemicalsCategoryPage() {
  const category = getCategoryBySlug("chemicals");
  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(category.id);

  return (
    <>
      {/* 1. Page Hero */}
      <section className="bg-white pt-8 pb-14 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 border-b border-border-subtle">
        <Container className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-light-grey border border-border-subtle">
            <span className="w-2 h-2 rounded-full bg-teal"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-navy">
              Chemicals
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy leading-tight">
            Chemical Products
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Indus Global Trade currently offers selected commercial and industrial chemical products for international buyers. We focus on dependable sourcing, product specification alignment, and clear communication throughout the export process.
          </p>
        </Container>
      </section>

      {/* 2. Chemicals Introduction Section */}
      <section className="py-12 sm:py-16 bg-light-grey/60 border-b border-border-subtle">
        <Container>
          <div className="max-w-3xl space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-navy tracking-tight">
              Our Chemical Sourcing Focus
            </h2>
            <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-3">
              <p>
                Our chemical export operations are centered on established commercial compounds utilized across manufacturing, food processing, personal care, and industrial formulations.
              </p>
              <p>
                We collaborate with reputable production facilities to supply goods matched to buyer-stipulated technical parameters. Buyers can request product samples, Certificates of Analysis (COA), and discuss specific packaging configurations directly with our trade team.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Product Grid Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-border-subtle">
        <Container className="space-y-10 sm:space-y-12">
          <SectionHeading
            badge="Catalogue"
            title="Available Chemical Products"
            subtitle="Browse our current chemical offerings. Each product listing provides core details, technical references where confirmed, and direct quotation inquiry actions."
          />

          {/* Product Cards Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {categoryProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                categorySlug={category.slug}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Inquiry & Sourcing Support Info */}
      <section className="py-14 sm:py-18 bg-light-grey/40 border-b border-border-subtle">
        <Container>
          <div className="max-w-3xl space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-navy tracking-tight">
              Commercial Inquiries &amp; Specifications
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              When submitting a quote request, please provide your intended application, target volume, preferred packaging (e.g., standard drums, bags, or bulk containers), and delivery terms (e.g., FOB or CIF destination port). Our team will prepare a formal commercial response outlining product availability and export details.
            </p>
          </div>
        </Container>
      </section>

      {/* 5. Category CTA */}
      <CTASection
        badge="Chemical Procurement"
        title="Looking for a Specific Chemical Product?"
        description="Invite our trade desk to evaluate your required chemical grades, target quantities, and commercial shipment timelines."
        primaryCta={{ text: "Send an Inquiry", href: "/contact-us" }}
        secondaryCta={{ text: "View All Products", href: "/products" }}
      />
    </>
  );
}
