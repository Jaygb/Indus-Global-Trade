import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CompanyIntroSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-border-subtle">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden border border-border-subtle shadow-sm aspect-[4/3] bg-light-grey">
              <Image
                src="/images/company-intro.jpg"
                alt="Organized international export warehouse facility with palletized cargo ready for dispatch"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal">
                Company Overview
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-navy">
                Your Partner in Global Trade
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Indus Global Trade operates as a dedicated international trade enterprise bridging commercial manufacturers with overseas buyers. Our primary focus is ensuring smooth cross-border supply chains through disciplined sourcing, quality inspection, and dependable communication.
            </p>

            <div className="space-y-3.5 text-sm sm:text-base text-slate-700">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-teal/10 text-teal flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>
                  <strong>Product Sourcing:</strong> Identifying reliable manufacturing sources that meet defined commercial standards and international specifications.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-teal/10 text-teal flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>
                  <strong>Export Supply Coordination:</strong> Managing packaging verification, labeling guidelines, and container dispatch preparation.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-teal/10 text-teal flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>
                  <strong>Professional Collaboration:</strong> Maintaining clear communication across inquiry evaluation, quotation, and shipment documentation.
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Button href="/about-us" variant="primary" size="md">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
