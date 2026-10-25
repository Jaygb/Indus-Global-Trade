import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { InquiryForm } from "@/components/contact/InquiryForm";
import { CTASection } from "@/components/sections/CTASection";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Contact Us",
  description:
    "Contact Indus Global Trade for commercial export inquiries, product availability, chemical specifications, and shipping quotations.",
  path: "/contact-us",
});

export default function ContactPage() {
  return (
    <>
      {/* 1. Contact Hero */}
      <ContactHero />

      {/* 2. Main Contact & Form Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-border-subtle">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Contact Channels & Guidance */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ContactInfo />
            </div>

            {/* Right Column: Interactive Inquiry Form */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <InquiryForm />
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Final CTA */}
      <CTASection
        badge="Product Catalogue"
        title="Explore Our Active Export Lines"
        description="Review our current portfolio of verified commercial chemicals or reach out to discuss custom sourcing feasibility."
        primaryCta={{ text: "Explore Products", href: "/products" }}
        secondaryCta={{ text: "Chemicals Overview", href: "/products/chemicals" }}
      />
    </>
  );
}
