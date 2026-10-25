import { ProductItem } from "@/types/product";

export const products: ProductItem[] = [
  {
    id: "chem-001",
    slug: "industrial-grade-acetic-acid",
    categoryId: "cat-chemicals",
    title: "Industrial Grade Acetic Acid",
    casNumber: "64-19-7",
    grade: "Industrial Grade",
    purity: "99.85% min",
    applications: [
      "Chemical synthesis",
      "Textile dyeing and finishing",
      "Paints and resins formulation",
      "Solvent and intermediate production",
    ],
    packagingOptions: [
      "30 kg Jerry Cans",
      "220 kg HDPE Drums",
      "1000 kg IBC Tanks",
      "ISO Tank Containers",
    ],
    specifications: [
      { property: "Assay / Purity", value: "≥ 99.85 %" },
      { property: "Moisture Content", value: "≤ 0.15 %" },
      { property: "Density at 20°C", value: "1.049 g/cm³" },
      { property: "Freezing Point", value: "≥ 16.3 °C" },
    ],
    isActive: true,
  },
  {
    id: "chem-002",
    slug: "caustic-soda-flakes",
    categoryId: "cat-chemicals",
    title: "Caustic Soda Flakes (Sodium Hydroxide)",
    casNumber: "1310-73-2",
    grade: "Technical / Industrial Grade",
    purity: "99.0% min",
    applications: [
      "Pulp and paper manufacturing",
      "Soap and detergent production",
      "Water treatment processes",
      "Textile processing and mercerizing",
    ],
    packagingOptions: [
      "25 kg PP Bags with inner PE liner",
      "50 kg Woven Bags",
      "1000 kg Jumbo Bags",
    ],
    specifications: [
      { property: "NaOH Assay", value: "≥ 99.0 %" },
      { property: "Na2CO3", value: "≤ 0.5 %" },
      { property: "NaCl", value: "≤ 0.03 %" },
      { property: "Fe2O3", value: "≤ 0.005 %" },
    ],
    isActive: true,
  },
];

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
