import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative bg-white pt-8 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 border-b border-border-subtle">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-light-grey border border-border-subtle">
              <span className="w-2 h-2 rounded-full bg-teal"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-navy">
                Indus Global Trade
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy leading-[1.15]">
              Connecting Global Markets with Quality Products
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Indus Global Trade is an international export partner dedicated to supplying commercial and industrial products to global buyers. We focus on reliable product sourcing, clear communication, and disciplined export supply.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Button href="/products" variant="primary" size="lg">
                Explore Products
              </Button>
              <Button href="/contact-us" variant="outline" size="lg">
                Send an Inquiry
              </Button>
            </div>

            {/* Core Export Attributes */}
            <div className="pt-6 border-t border-border-subtle grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div className="space-y-1">
                <span className="block font-semibold text-navy">Current Portfolio</span>
                <span className="text-slate-500">Refined &amp; Specialty Chemicals</span>
              </div>
              <div className="space-y-1">
                <span className="block font-semibold text-navy">Supply Model</span>
                <span className="text-slate-500">Direct Export &amp; B2B Procurement</span>
              </div>
              <div className="space-y-1 col-span-2 sm:col-span-1">
                <span className="block font-semibold text-navy">Trade Support</span>
                <span className="text-slate-500">Specification &amp; Logistics Focus</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden border border-border-subtle shadow-md aspect-[16/10] sm:aspect-[16/10] lg:aspect-[4/3] bg-light-grey">
              <Image
                src="/images/hero-shipping.jpg"
                alt="Commercial cargo container ship navigating international ocean trade routes"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent p-4 sm:p-5 text-white">
                <p className="text-xs uppercase tracking-wider font-semibold text-teal-light">
                  International Commerce
                </p>
                <p className="text-sm font-medium text-slate-100 mt-0.5">
                  Supplying verified industrial goods across maritime corridors
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
