import { ProductItem } from "@/types/product";

export const products: ProductItem[] = [
  {
    id: "prod-glycerin",
    slug: "refined-glycerin",
    categoryId: "cat-chemicals",
    title: "Refined Glycerin — Glycerol",
    subtitle: "High-Purity Industrial & Commercial Grade",
    shortDescription:
      "High-purity refined glycerin suitable for pharmaceutical, personal care, food, and industrial formulations. Available in commercial export packaging.",
    image: "/images/products/refined-glycerin.jpg",
    imageAlt: "Sample of clear refined glycerin in laboratory glassware",
    featured: true,
    isActive: true,
  },
  {
    id: "prod-menthol",
    slug: "menthol",
    categoryId: "cat-chemicals",
    title: "Menthol — Natural & Synthetic",
    subtitle: "Crystalline Flakes & Needles",
    shortDescription:
      "Pure crystalline natural and synthetic menthol for pharmaceutical, cosmetic, flavoring, and confectionery processing with consistent aroma profiles.",
    image: "/images/products/menthol.jpg",
    imageAlt: "Pure white menthol crystals on clean inspection surface",
    featured: true,
    isActive: true,
  },
  {
    id: "prod-msg",
    slug: "monosodium-glutamate",
    categoryId: "cat-chemicals",
    title: "Monosodium Glutamate — MSG",
    subtitle: "Food-Grade Flavor Enhancer Crystals",
    shortDescription:
      "Refined food-grade monosodium glutamate crystals supplied in bulk for commercial food processing, seasoning blends, and savory formulations.",
    image: "/images/products/monosodium-glutamate.jpg",
    imageAlt: "Refined crystalline monosodium glutamate (MSG) sample",
    featured: true,
    isActive: true,
  },
];

export function getActiveProducts(): ProductItem[] {
  return products.filter((product) => product.isActive);
}

export function getFeaturedProducts(): ProductItem[] {
  return products.filter((product) => product.isActive && product.featured);
}

export function getProductsByCategory(categoryId: string): ProductItem[] {
  return products.filter(
    (product) => product.categoryId === categoryId && product.isActive
  );
}

export function getProductBySlug(slug: string): ProductItem | undefined {
  return products.find(
    (product) => product.slug.toLowerCase() === slug.toLowerCase() && product.isActive
  );
}
