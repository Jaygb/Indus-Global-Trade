import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function WhyChooseUsSection() {
  const principles = [
    {
      title: "Quality-Focused Sourcing",
      description:
        "We prioritize manufacturing partners with consistent production standards, verifying that commercial chemical lots align with agreed buyer specifications and test parameters.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Export & Documentation Support",
      description:
        "Cross-border trade demands accuracy. We coordinate export paperwork, Certificates of Analysis (COA), packaging labels, and shipping documentation to facilitate smooth port clearance.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Reliable Communication",
      description:
        "We believe clear, proactive communication is the foundation of international business. Buyers receive regular status updates from inquiry review through dispatch and tracking.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      title: "Customer-Focused Approach",
      description:
        "Every market presents distinct packaging and volume requirements. We work cooperatively with procurement teams to structure orders that match their operational schedules.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-light-grey/60 border-b border-border-subtle">
      <Container className="space-y-12">
        <SectionHeading
          badge="Our Values"
          title="Why Choose Indus Global Trade"
          subtitle="Our export operations are guided by business integrity, structured communication, and dependable fulfillment."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item, index) => (
            <div
              key={item.title}
              className="p-6 rounded-lg bg-white border border-border-subtle space-y-4 hover:border-slate-300 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-md bg-light-grey text-teal flex items-center justify-center border border-border-subtle">
                  {item.icon}
                </div>
                <span className="text-xs font-mono text-slate-400">
                  0{index + 1}
                </span>
              </div>
              <h3 className="font-bold text-lg text-navy tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
