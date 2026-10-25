import { Container } from "@/components/ui/Container";

export function ContactHero() {
  return (
    <section className="bg-white pt-8 pb-14 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 border-b border-border-subtle">
      <Container className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-light-grey border border-border-subtle">
          <span className="w-2 h-2 rounded-full bg-teal"></span>
          <span className="text-xs font-semibold uppercase tracking-wider text-navy">
            Contact Indus Global Trade
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy leading-tight">
          Let&apos;s Discuss Your Requirements
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Contact Indus Global Trade to discuss commercial chemical availability, detailed specifications, order quantities, packaging options, and international export logistics.
        </p>
      </Container>
    </section>
  );
}
