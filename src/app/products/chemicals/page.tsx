import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { constructMetadata } from "@/lib/seo";
import { getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";

export const metadata: Metadata = constructMetadata({
  title: "Chemicals Export",
  description:
    "Industrial and specialty chemicals export specifications, packaging standards, and compliance by Indus Global Trade.",
  path: "/products/chemicals",
});

export default function ChemicalsCategoryPage() {
  const category = getCategoryBySlug("chemicals");
  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(category.id);

  return (
    <div className="py-16 sm:py-24">
      <Container className="space-y-8">
        <SectionHeading
          badge="Export Category"
          title={category.title}
          subtitle={category.shortDescription}
        />
        <div className="p-6 rounded-lg bg-light-grey border border-border-subtle space-y-3">
          <h3 className="font-semibold text-navy text-sm">
            Architecture Setup State
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Chemicals category route configured with dynamic data binding. Currently{" "}
            <strong>{categoryProducts.length} product records</strong> registered in{" "}
            <code>src/data/products.ts</code> ready for full listing presentation in the next phase.
          </p>
        </div>
      </Container>
    </div>
  );
}
