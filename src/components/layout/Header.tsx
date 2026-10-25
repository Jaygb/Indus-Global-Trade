import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Navbar } from "./Navbar";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-navy text-white border-b border-navy-light/40 shadow-sm backdrop-blur-sm">
      {/* Main navigation header */}
      <Container className="flex items-center justify-between h-16 sm:h-20">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Visual monogram emblem */}
            <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center text-white font-bold text-lg tracking-wider border border-teal/40 group-hover:border-teal transition-colors">
              <span className="text-white">I</span>
              <span className="text-teal-light">G</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-teal-light transition-colors leading-none">
                {siteConfig.name}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-300 tracking-wider uppercase mt-1">
                International Trade
              </span>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Navbar items={siteConfig.navigation.main} />

          <div className="hidden lg:block">
            <Button href="/contact-us" variant="secondary" size="sm">
              Inquire Now
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
