import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { CompanyIntroSection } from "@/components/sections/CompanyIntroSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { FeaturedProductsSection } from "@/components/sections/FeaturedProductsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { GlobalTradeSection } from "@/components/sections/GlobalTradeSection";
import { CTASection } from "@/components/sections/CTASection";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Connecting Global Markets with Quality Products",
  description:
    "Indus Global Trade is an international export and supply partner delivering commercial chemicals, including Refined Glycerin, Menthol, and Monosodium Glutamate (MSG), to global B2B buyers with dependable logistics.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Company Introduction */}
      <CompanyIntroSection />

      {/* 3. Product Categories */}
      <CategoriesSection />

      {/* 4. Featured Chemicals */}
      <FeaturedProductsSection />

      {/* 5. Why Choose Us */}
      <WhyChooseUsSection />

      {/* 6. Global Trade & Logistics */}
      <GlobalTradeSection />

      {/* 7. Final Inquiry CTA */}
      <CTASection />
    </>
  );
}
