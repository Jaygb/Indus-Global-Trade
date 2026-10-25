import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { constructMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = constructMetadata({
  title: "Contact Us & Export Inquiries",
  description:
    "Connect with the Indus Global Trade team for international trade inquiries, product specifications, and shipment quotes.",
  path: "/contact-us",
});

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container className="space-y-8">
        <SectionHeading
          badge="Trade Desk"
          title="Contact Indus Global Trade"
          subtitle="Inquire about export terms, bulk specifications, and logistics. Interactive inquiry form interface will be implemented in the subsequent phase."
        />
        <div className="p-6 rounded-lg bg-light-grey/60 border border-border-subtle max-w-xl space-y-3 text-sm text-slate-700">
          <p>
            <span className="font-semibold text-navy">Export Inquiries:</span>{" "}
            {siteConfig.contact.inquiryEmail}
          </p>
          <p>
            <span className="font-semibold text-navy">General Desk:</span>{" "}
            {siteConfig.contact.email}
          </p>
          <p>
            <span className="font-semibold text-navy">Phone:</span>{" "}
            {siteConfig.contact.phone}
          </p>
          <p>
            <span className="font-semibold text-navy">Operating Hours:</span>{" "}
            {siteConfig.contact.operatingHours}
          </p>
        </div>
      </Container>
    </div>
  );
}
