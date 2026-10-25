import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function OurApproachSection() {
  const principles = [
    {
      title: "Quality-Conscious Sourcing",
      description:
        "We prioritize manufacturing partners with disciplined quality control, ensuring that product batches align with verified commercial parameters prior to export dispatch.",
      icon: (
        <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Clear Communication",
      description:
        "We believe proactive and realistic communication is essential in international trade. We provide candid updates regarding order status, lead times, and dispatch logistics.",
      icon: (
        <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
    },
    {
      title: "Understanding Buyer Requirements",
      description:
        "Every industrial client works within distinct regulatory, packaging, and processing constraints. We actively listen to buyer specifications before proposing supply agreements.",
      icon: (
        <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Long-Term Business Relationships",
      description:
        "We focus on repeatable, sustainable trade partnerships built on mutual respect and consistency, rather than transient one-off export opportunities.",
      icon: (
        <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-border-subtle">
      <Container className="space-y-12">
        <SectionHeading
          badge="Guiding Principles"
          title="Our Approach"
          subtitle="Our commercial operations are guided by practical business standards focused on accuracy, reliability, and long-term buyer trust."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="p-6 rounded-lg bg-light-grey/50 border border-border-subtle hover:border-slate-300 transition-colors flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-md bg-white border border-border-subtle flex items-center justify-center shrink-0 shadow-xs">
                {principle.icon}
              </div>
              <div className="space-y-1.5">
                <h3 className="font-bold text-lg text-navy tracking-tight">
                  {principle.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
