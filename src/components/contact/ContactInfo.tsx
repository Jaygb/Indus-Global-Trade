export function ContactInfo() {
  const steps = [
    {
      number: "01",
      title: "Inquiry Review",
      description:
        "Our export trade desk evaluates your requested chemical specifications, grade requirements, and target volumes.",
    },
    {
      number: "02",
      title: "Commercial Quote & COA",
      description:
        "We issue a formal proforma quotation detailing competitive pricing, Certificate of Analysis (COA), and FOB/CIF shipping schedules.",
    },
    {
      number: "03",
      title: "Sample & Logistics Coordination",
      description:
        "Product samples can be arranged for laboratory analysis before final container booking, packing, and customs clearance.",
    },
  ];

  return (
    <div className="space-y-6">
      {/* 1. Quotation Preparation Guidance Card */}
      <div className="p-6 sm:p-7 rounded-lg bg-light-grey/60 border border-border-subtle space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-md bg-white border border-border-subtle flex items-center justify-center text-teal shrink-0 shadow-xs">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
          </div>
          <h3 className="font-bold text-base text-navy tracking-tight">
            What Details Help Prepare Your Quote
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          To receive a rapid and accurate commercial response, consider specifying:
        </p>

        <ul className="text-xs sm:text-sm text-slate-600 space-y-2 list-disc pl-4">
          <li>Specific chemical grade or application intent</li>
          <li>Estimated order volume (e.g., metric tons or pallet lots)</li>
          <li>Preferred packaging (drums, IBC totes, bags, or bulk)</li>
          <li>Target destination seaport or airport (FOB/CIF terms)</li>
        </ul>
      </div>

      {/* 2. Quotation & Export Process Card */}
      <div className="p-6 sm:p-7 rounded-lg bg-white border border-border-subtle space-y-5 shadow-xs">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-teal">
            Export Workflow
          </span>
          <h3 className="text-base font-bold text-navy tracking-tight mt-0.5">
            What Happens Next?
          </h3>
        </div>

        <div className="space-y-4">
          {steps.map((step) => (
            <div key={step.number} className="flex items-start gap-3.5">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-light-grey text-navy text-xs font-bold shrink-0 mt-0.5 border border-border-subtle">
                {step.number}
              </span>
              <div className="space-y-0.5">
                <h4 className="text-xs sm:text-sm font-semibold text-navy">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
