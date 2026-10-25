import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white border-t border-navy-light/40">
      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Column */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center font-bold text-base tracking-wider border border-teal/40">
                <span className="text-white">I</span>
                <span className="text-teal-light">G</span>
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              International export enterprise delivering quality-inspected commercial products with reliable logistics and trade compliance.
            </p>
            <div className="text-xs text-slate-400">
              <span>Operating origin: {siteConfig.contact.country}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-teal-light uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.navigation.footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-teal-light uppercase tracking-wider">
              Export Categories
            </h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.navigation.footer.categories.map((category) => (
                <li key={category.href}>
                  <Link
                    href={category.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Inquiries & Communication */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-teal-light uppercase tracking-wider">
              Trade Desk
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              <p>
                <span className="block text-slate-400 text-xs">General:</span>
                {siteConfig.contact.email}
              </p>
              <p>
                <span className="block text-slate-400 text-xs">Export Quotations:</span>
                {siteConfig.contact.inquiryEmail}
              </p>
              <p>
                <span className="block text-slate-400 text-xs">Operating Hours:</span>
                {siteConfig.contact.operatingHours}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} {siteConfig.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Export &amp; Global Trade Operations</span>
            <span className="text-slate-600">•</span>
            <span>Static Deployment Architecture</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
