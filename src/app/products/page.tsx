import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { constructMetadata } from "@/lib/seo";
import { getActiveCategories } from "@/data/categories";

export const metadata: Metadata = constructMetadata({
  title: "Export Products & Categories",
  description:
    "Explore the international export catalogue of Indus Global Trade. Sourcing verified chemical and industrial products.",
  path: "/products",
});

export default function ProductsPage() {
  const categories = getActiveCategories();

  return (
    <div className="py-16 sm:py-24">
      <Container className="space-y-8">
        <SectionHeading
          badge="Catalogue"
          title="Export Categories"
          subtitle="Overview of export products. Category pages are connected to the central categories registry."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products/${category.slug}`}
              className="p-6 rounded-lg border border-border-subtle hover:border-teal transition-colors bg-white shadow-xs group"
            >
              <h3 className="font-semibold text-lg text-navy group-hover:text-teal transition-colors">
                {category.title}
              </h3>
              <p className="text-sm text-slate-600 mt-2">
                {category.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
