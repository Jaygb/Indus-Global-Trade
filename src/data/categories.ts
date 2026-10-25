import { ProductCategory } from "@/types/product";

export const productCategories: ProductCategory[] = [
  {
    id: "cat-chemicals",
    slug: "chemicals",
    title: "Chemicals",
    shortDescription: "Industrial, specialty, and commercial-grade chemical compounds for global manufacturing and processing.",
    metaDescription: "Reliable international export of industrial and specialty chemicals by Indus Global Trade. Compliant packaging and quality documentation.",
    iconName: "flask",
    isActive: true,
  },
];

export function getActiveCategories(): ProductCategory[] {
  return productCategories.filter((category) => category.isActive);
}

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find(
    (category) => category.slug.toLowerCase() === slug.toLowerCase() && category.isActive
  );
}
