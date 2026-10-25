import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface CTASectionProps {
  badge?: string;
  title?: string;
  description?: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  footnote?: string;
}

export function CTASection({
  badge = "Start a Conversation",
  title = "Looking for a Reliable Product Supply Partner?",
  description = "Whether you are evaluating chemical specifications, seeking product availability, or requesting a commercial export quotation, our trade desk is ready to support your procurement needs.",
  primaryCta = { text: "Send an Inquiry", href: "/contact-us" },
  secondaryCta = { text: "Explore Products", href: "/products" },
  footnote = "Inquiries are typically reviewed within one business day.",
}: CTASectionProps = {}) {
  return (
    <section className="bg-navy text-white py-16 sm:py-20 lg:py-24 border-b border-navy-light/40">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-light bg-teal/20 px-3 py-1 rounded-full border border-teal/30">
            {badge}
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={primaryCta.href}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              {primaryCta.text}
            </Button>
            {secondaryCta && (
              <Button
                href={secondaryCta.href}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-white border-slate-400 hover:bg-white/10 hover:text-white"
              >
                {secondaryCta.text}
              </Button>
            )}
          </div>

          {footnote && (
            <p className="text-xs text-slate-400 pt-2">
              {footnote}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
