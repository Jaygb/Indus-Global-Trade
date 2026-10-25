import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function WhatWeDoSection() {
  const activities = [
    {
      title: "Product Sourcing",
      description:
        "Identifying and sourcing commercial-grade products from reputable domestic manufacturers according to the technical requirements and grades specified by overseas buyers.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      title: "Export Supply",
      description:
        "Supporting cross-border fulfillment for international buyers, coordinating compliant packaging, Certificates of Analysis (COA), and scheduled port dispatch.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      title: "Product Focus",
      description:
        "Currently concentrating on core chemical lines (Refined Glycerin, Menthol, and MSG) while maintaining an agile framework to onboard new export categories as buyer demands expand.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: "Business Communication",
      description:
        "Maintaining prompt, transparent communication throughout the initial inquiry, specification review, quotation phase, and post-dispatch coordination.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-light-grey/60 border-b border-border-subtle">
      <Container className="space-y-12">
        <SectionHeading
          badge="Core Services"
          title="What We Do"
          subtitle="Our core operations revolve around structured product sourcing, transparent commercial trade facilitation, and dependable export coordination."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <div
              key={activity.title}
              className="p-6 rounded-lg bg-white border border-border-subtle space-y-4 hover:border-slate-300 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-md bg-light-grey text-teal flex items-center justify-center border border-border-subtle">
                  {activity.icon}
                </div>
                <span className="text-xs font-mono text-slate-400">
                  0{index + 1}
                </span>
              </div>
              <h3 className="font-bold text-lg text-navy tracking-tight">
                {activity.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
