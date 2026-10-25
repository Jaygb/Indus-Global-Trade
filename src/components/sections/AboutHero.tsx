import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function AboutHero() {
  return (
    <section className="bg-white pt-8 pb-14 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 border-b border-border-subtle">
      <Container className="space-y-8 sm:space-y-10">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-light-grey border border-border-subtle">
            <span className="w-2 h-2 rounded-full bg-teal"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-navy">
              About Indus Global Trade
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy leading-tight">
            Connecting Businesses Through Global Trade
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Indus Global Trade is an international trading company focused on product sourcing and cross-border export supply. We bridge commercial manufacturers with global procurement teams through disciplined coordination and clear business practices.
          </p>
        </div>

        {/* Hero Visual Banner */}
        <div className="relative rounded-lg overflow-hidden border border-border-subtle shadow-sm aspect-[16/8] sm:aspect-[16/7] lg:aspect-[16/6] bg-light-grey">
          <Image
            src="/images/about-hero.jpg"
            alt="International maritime cargo vessel transporting export goods across global waters"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent flex items-end p-4 sm:p-6 text-white">
            <span className="text-xs sm:text-sm font-medium text-slate-200">
              Facilitating dependable international supply chains with dedicated trade support
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
