import { siteConfig } from "@/lib/site-config";

export function ContactInfo() {
  const isPlaceholder = (val?: string) => !val || val.startsWith("YOUR_") || val.startsWith("[");

  return (
    <div className="space-y-8">
      {/* Contact Channels Card */}
      <div className="p-6 sm:p-8 rounded-lg bg-light-grey/60 border border-border-subtle space-y-6">
        <div>
          <h2 className="text-xl font-bold text-navy tracking-tight">
            Direct Trade Desk
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Official communication channels for international buyers and commercial procurement.
          </p>
        </div>

        <div className="space-y-5 text-sm text-slate-700">
          {/* Email */}
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-md bg-white border border-border-subtle flex items-center justify-center text-teal shrink-0 mt-0.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Business Inquiries Email
              </span>
              {isPlaceholder(siteConfig.contact.inquiryEmail) ? (
                <span className="font-mono text-xs text-slate-500 bg-white px-2 py-0.5 rounded border border-border-subtle inline-block mt-1">
                  {siteConfig.contact.inquiryEmail}
                </span>
              ) : (
                <a
                  href={`mailto:${siteConfig.contact.inquiryEmail}`}
                  className="font-medium text-navy hover:text-teal transition-colors"
                >
                  {siteConfig.contact.inquiryEmail}
                </a>
              )}
            </div>
          </div>

          {/* Phone / WhatsApp */}
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-md bg-white border border-border-subtle flex items-center justify-center text-teal shrink-0 mt-0.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Direct Phone / WhatsApp
              </span>
              {isPlaceholder(siteConfig.contact.phone) ? (
                <span className="font-mono text-xs text-slate-500 bg-white px-2 py-0.5 rounded border border-border-subtle inline-block mt-1">
                  {siteConfig.contact.phone}
                </span>
              ) : (
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="font-medium text-navy hover:text-teal transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              )}
            </div>
          </div>

          {/* Registered Address */}
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-md bg-white border border-border-subtle flex items-center justify-center text-teal shrink-0 mt-0.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Operating Location
              </span>
              {isPlaceholder(siteConfig.contact.address) ? (
                <span className="font-mono text-xs text-slate-500 bg-white px-2 py-0.5 rounded border border-border-subtle inline-block mt-1">
                  {siteConfig.contact.address} ({siteConfig.contact.country})
                </span>
              ) : (
                <span className="font-medium text-navy block mt-0.5">
                  {siteConfig.contact.address}
                </span>
              )}
            </div>
          </div>

          {/* Operating Hours */}
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-md bg-white border border-border-subtle flex items-center justify-center text-teal shrink-0 mt-0.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                Operating Hours
              </span>
              <span className="font-medium text-navy block mt-0.5">
                {siteConfig.contact.operatingHours}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Business Inquiry Guidance */}
      <div className="p-6 rounded-lg bg-white border border-border-subtle space-y-3">
        <h3 className="font-bold text-sm text-navy uppercase tracking-wider">
          What Details Help Prepare Your Quote
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed">
          To provide an accurate commercial quote, please mention:
        </p>
        <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
          <li>Specific chemical grade or application intent</li>
          <li>Estimated order volume (e.g., metric tons or pallet lots)</li>
          <li>Preferred packaging (drums, IBC totes, bags, or bulk)</li>
          <li>Target destination seaport or airport (FOB/CIF terms)</li>
        </ul>
      </div>
    </div>
  );
}
