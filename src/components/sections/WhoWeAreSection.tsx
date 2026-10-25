import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function WhoWeAreSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-border-subtle">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Company Description */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal">
                Our Foundation
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-navy">
                Who We Are
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Indus Global Trade operates as a dedicated international trade enterprise specializing in cross-border product sourcing and supply. We serve as a dependable liaison for overseas buyers who require commercially verified goods matched to their precise technical specifications.
            </p>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                Our current commercial operations are centered on the export of industrial and specialty chemical compounds. We work closely with vetted domestic production facilities to coordinate compliant packaging, clear documentation, and scheduled logistics.
              </p>
              <p>
                International commerce relies on integrity and transparency. Rather than focusing on one-off transactions, we seek to cultivate long-term commercial relationships grounded in timely communication, realistic commitments, and dependable business practices.
              </p>
            </div>
          </div>

          {/* Right Column: Business/Export Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-lg overflow-hidden border border-border-subtle shadow-sm aspect-[4/3] bg-light-grey">
              <Image
                src="/images/about-who-we-are.jpg"
                alt="International export warehouse team inspecting commercial chemical drum cargo and container dispatch"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
