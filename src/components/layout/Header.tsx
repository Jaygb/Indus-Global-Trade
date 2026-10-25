import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Navbar } from "./Navbar";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-border-subtle">
      {/* Top micro-bar for international trade contact context */}
      <div className="bg-navy text-white text-xs py-1.5 hidden sm:block">
        <Container className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-slate-300">
            <span>Global Export &amp; Sourcing Partner</span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:inline">Inquiries: {siteConfig.contact.inquiryEmail}</span>
          </div>
          <div className="text-slate-300">
            <span>Direct Desk: {siteConfig.contact.phone}</span>
          </div>
        </Container>
      </div>

      {/* Main navigation header */}
      <Container className="flex items-center justify-between h-16 sm:h-20">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Visual monogram emblem */}
            <div className="w-10 h-10 rounded-md bg-navy flex items-center justify-center text-white font-bold text-lg tracking-wider border border-teal/40 group-hover:border-teal transition-colors">
              <span className="text-white">I</span>
              <span className="text-teal">G</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl tracking-tight text-navy leading-none">
                {siteConfig.name}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 tracking-wider uppercase mt-1">
                International Trade
              </span>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Navbar items={siteConfig.navigation.main} />

          <div className="hidden lg:block">
            <Button href="/contact-us" variant="primary" size="sm">
              Inquire Now
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
