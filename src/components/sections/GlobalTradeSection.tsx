import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function GlobalTradeSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-border-subtle">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal">
                International Logistics
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-navy">
                Building Connections Across Markets
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Global commerce requires synchronized planning across freight booking, port handling, and regulatory customs compliance. Indus Global Trade coordinates with maritime shipping lines and multimodal logistics providers to ensure our goods are prepared and dispatched safely to overseas destinations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700 pt-2">
              <div className="p-4 rounded-md bg-light-grey/60 border border-border-subtle space-y-1.5">
                <span className="font-semibold text-navy block text-sm">
                  Containerized Cargo
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  FCL (Full Container Load) and standard container handling tailored to chemical drum and pallet cargo.
                </p>
              </div>

              <div className="p-4 rounded-md bg-light-grey/60 border border-border-subtle space-y-1.5">
                <span className="font-semibold text-navy block text-sm">
                  Compliant Packing
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Standardized industrial packaging designed to protect product integrity throughout marine transit.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button href="/contact-us" variant="primary" size="md">
                Talk to Us
              </Button>
            </div>
          </div>

          {/* Visual Container Port Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-lg overflow-hidden border border-border-subtle shadow-md aspect-[16/10] bg-light-grey">
              <Image
                src="/images/global-trade-terminal.jpg"
                alt="Active international deep-water container terminal with gantry cranes loading freight cargo vessels"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent flex items-end p-5 text-white">
                <span className="text-xs font-medium tracking-wide text-slate-200">
                  Global supply routes linking manufacturing centers to international ports
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
