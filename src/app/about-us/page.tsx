import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "About Us",
  description:
    "Learn about Indus Global Trade, our mission in international export, and our commitment to dependable trade partnerships.",
  path: "/about-us",
});

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          badge="Company"
          title="About Indus Global Trade"
          subtitle="International trade and supply enterprise foundation. Full company overview will be implemented in the subsequent phase."
        />
      </Container>
    </div>
  );
}
