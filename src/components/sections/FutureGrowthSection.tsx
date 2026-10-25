import { Container } from "@/components/ui/Container";

export function FutureGrowthSection() {
  return (
    <section className="py-14 sm:py-16 bg-light-grey/40 border-b border-border-subtle">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Portfolio Evolution
          </span>

          <h2 className="text-xl sm:text-2xl font-bold text-navy tracking-tight">
            Growing With New Opportunities
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            While industrial chemicals represent our initial export focus, our trade infrastructure and logistics networks are structured to expand into additional commercial product categories over time as buyer partnerships and vetted supply sources develop.
          </p>

          <p className="text-xs text-slate-500 italic pt-1">
            We welcome inquiries from procurement managers with specific product sourcing requirements.
          </p>
        </div>
      </Container>
    </section>
  );
}
