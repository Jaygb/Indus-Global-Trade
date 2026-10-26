import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/AboutHero";
import { WhoWeAreSection } from "@/components/sections/WhoWeAreSection";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { OurApproachSection } from "@/components/sections/OurApproachSection";
import { MissionVisionSection } from "@/components/sections/MissionVisionSection";
import { FutureGrowthSection } from "@/components/sections/FutureGrowthSection";
import { CTASection } from "@/components/sections/CTASection";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "About Us",
  description:
    "Learn about Indus Global Trade, an international trading company specializing in commercial product sourcing and export supply, currently focusing on high-grade chemicals.",
  path: "/about-us",
});

export default function AboutPage() {
  return (
    <>
      {/* 1. Page Hero */}
      <AboutHero />

      {/* 2. Company Introduction (Who We Are) */}
      <WhoWeAreSection />

      {/* 3. What We Do */}
      <WhatWeDoSection />

      {/* 4. Our Approach */}
      <OurApproachSection />

      {/* 5. Mission and Vision */}
      <MissionVisionSection />

      {/* 6. Future Growth */}
      <FutureGrowthSection />

      {/* 7. Final Inquiry CTA */}
      <CTASection
        badge="Partner With Us"
        title="Let's Build a Business Connection"
        description="We invite international buyers and commercial procurement teams to discuss their product specifications and supply requirements with our trade desk."
        primaryCta={{ text: "Send an Inquiry", href: "/contact-us" }}
        secondaryCta={{ text: "Explore Products", href: "/products" }}
      />
    </>
  );
}
