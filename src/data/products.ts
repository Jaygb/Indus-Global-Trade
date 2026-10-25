import { ProductItem } from "@/types/product";

export const products: ProductItem[] = [
  {
    id: "prod-glycerin",
    slug: "refined-glycerin",
    categoryId: "cat-chemicals",
    title: "Refined Glycerin — Glycerol",
    subtitle: "Clear Liquid Chemical Compound",
    shortDescription:
      "Refined glycerin (glycerol) supplied for industrial, personal care, and commercial manufacturing applications. Sourced according to buyer specifications.",
    image: "/images/products/refined-glycerin.jpg",
    imageAlt: "Sample of clear refined glycerin in laboratory glassware",
    casNumber: "56-81-5",
    displayCasNumber: true,
    featured: true,
    isActive: true,
  },
  {
    id: "prod-menthol",
    slug: "menthol",
    categoryId: "cat-chemicals",
    title: "Menthol — Natural and/or Synthetic",
    subtitle: "Crystalline Formulations",
    shortDescription:
      "Menthol supplied in crystalline form for pharmaceutical, cosmetic, flavoring, and confectionery processing. Available in natural and/or synthetic forms depending on specification.",
    image: "/images/products/menthol.jpg",
    imageAlt: "Pure white menthol crystals on inspection surface",
    casNumber: "1490-04-6", // Racemic reference; stereoisomer confirmed per specification
    displayCasNumber: false, // Per specification guidelines, omitted on card until exact form verified
    featured: true,
    isActive: true,
  },
  {
    id: "prod-msg",
    slug: "monosodium-glutamate",
    categoryId: "cat-chemicals",
    title: "Monosodium Glutamate — MSG",
    subtitle: "Food-Grade Crystalline Ingredient",
    shortDescription:
      "Monosodium glutamate (MSG) supplied as a flavor enhancer for commercial food processing and savory formulations, subject to applicable product grade and regional regulations.",
    image: "/images/products/monosodium-glutamate.jpg",
    imageAlt: "Refined crystalline monosodium glutamate (MSG) sample",
    casNumber: "142-47-2",
    displayCasNumber: true,
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

export function getProductsByCategorySlug(slug: string): ProductItem[] {
  if (slug.toLowerCase() === "chemicals") {
    return products.filter((p) => p.categoryId === "cat-chemicals" && p.isActive);
  }
  return [];
}

export function getProductBySlug(slug: string): ProductItem | undefined {
  return products.find(
    (product) => product.slug.toLowerCase() === slug.toLowerCase() && product.isActive
  );
}
