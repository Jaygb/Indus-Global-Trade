import { Container } from "@/components/ui/Container";

export function MissionVisionSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-light-grey/60 border-b border-border-subtle">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <div className="p-8 sm:p-10 rounded-lg bg-white border border-border-subtle space-y-4 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-teal bg-teal/10 px-3 py-1 rounded">
                Our Mission
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight">
                Delivering Reliable Cross-Border Trade
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                To serve as a dependable link between commercial manufacturers and international buyers by delivering verified products, disciplined export coordination, and transparent commercial practices that simplify global procurement.
              </p>
            </div>
            <div className="pt-6 border-t border-border-subtle">
              <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0"></span>
                  <span>Connecting buyers with suitable product specifications</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0"></span>
                  <span>Providing structured commercial export support</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0"></span>
                  <span>Building dependable international business relationships</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-8 sm:p-10 rounded-lg bg-white border border-border-subtle space-y-4 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-navy bg-light-grey px-3 py-1 rounded border border-border-subtle">
                Our Vision
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight">
                Sustainable Growth Across Global Markets
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                To steadily develop as a trusted international trading enterprise recognized for integrity, expanding product verticals methodically, and cultivating long-term partnerships across international commercial corridors.
              </p>
            </div>
            <div className="pt-6 border-t border-border-subtle">
              <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy shrink-0"></span>
                  <span>Growing as a recognized export supply partner</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy shrink-0"></span>
                  <span>Expanding trade categories methodically and responsibly</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy shrink-0"></span>
                  <span>Cultivating durable buyer partnerships built on consistency</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
