import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="bg-navy text-white py-16 sm:py-20 lg:py-24 border-b border-navy-light/40">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-teal-light bg-teal/20 px-3 py-1 rounded-full border border-teal/30">
            Start a Conversation
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
            Looking for a Reliable Product Supply Partner?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Whether you are evaluating chemical specifications, seeking product availability, or requesting a commercial export quotation, our trade desk is ready to support your procurement needs.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/contact-us"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Send an Inquiry
            </Button>
            <Button
              href="/products"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-white border-slate-400 hover:bg-white/10 hover:text-white"
            >
              Explore Products
            </Button>
          </div>

          <p className="text-xs text-slate-400 pt-2">
            Inquiries are typically reviewed within one business day.
          </p>
        </div>
      </Container>
    </section>
  );
}
