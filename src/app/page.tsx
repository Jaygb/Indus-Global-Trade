import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/lib/site-config";
import { getActiveCategories } from "@/data/categories";

export default function HomePage() {
  const categories = getActiveCategories();

  return (
    <div className="py-12 sm:py-20 bg-surface-muted/50">
      <Container className="space-y-12">
        {/* Verification Status Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <Badge variant="teal">Foundation Ready</Badge>
            <span className="text-xs text-slate-500 font-mono">Next.js App Router • Static Export</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy">
            {siteConfig.name}
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            {siteConfig.tagline}. Architectural setup and static baseline verification page for our international export enterprise.
          </p>
        </div>

        {/* Verification Architecture Checklist Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-white border border-border-subtle shadow-xs space-y-3">
            <div className="w-8 h-8 rounded bg-navy text-white flex items-center justify-center font-bold text-sm">
              01
            </div>
            <h2 className="text-base font-semibold text-navy">Planned Routes Architecture</h2>
            <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
              <li>Home (<code>/</code>)</li>
              <li>About Us (<code>/about-us</code>)</li>
              <li>Products Landing (<code>/products</code>)</li>
              <li>Chemicals Category (<code>/products/chemicals</code>)</li>
              <li>Contact Us (<code>/contact-us</code>)</li>
            </ul>
          </div>

          <div className="p-6 rounded-lg bg-white border border-border-subtle shadow-xs space-y-3">
            <div className="w-8 h-8 rounded bg-teal text-white flex items-center justify-center font-bold text-sm">
              02
            </div>
            <h2 className="text-base font-semibold text-navy">Design Tokens &amp; Styling</h2>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-navy inline-block border border-slate-300"></span>
                <span>Navy Blue (<code>#16324F</code>)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-teal inline-block border border-slate-300"></span>
                <span>Muted Teal (<code>#2A817A</code>)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-light-grey inline-block border border-slate-300"></span>
                <span>Light Grey (<code>#F3F5F7</code>)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded bg-white inline-block border border-slate-300"></span>
                <span>Pure White (<code>#FFFFFF</code>)</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg bg-white border border-border-subtle shadow-xs space-y-3">
            <div className="w-8 h-8 rounded bg-slate-800 text-white flex items-center justify-center font-bold text-sm">
              03
            </div>
            <h2 className="text-base font-semibold text-navy">SEO &amp; Static Generation</h2>
            <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
              <li>Next.js Metadata API configured</li>
              <li>Canonical URLs &amp; OpenGraph tags</li>
              <li>Schema.org JSON-LD (Organization &amp; WebSite)</li>
              <li>Dynamic <code>sitemap.xml</code> and <code>robots.txt</code></li>
              <li>Static HTML export output verified</li>
            </ul>
          </div>
        </div>

        {/* Categories Data Demonstration */}
        <div className="p-6 rounded-lg bg-white border border-border-subtle space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <h2 className="text-base font-semibold text-navy">Configured Categories Registry</h2>
              <p className="text-xs text-slate-500">
                Data-driven architecture decoupled from presentation. Current active categories: {categories.length}.
              </p>
            </div>
            <Badge variant="teal">{categories.length} Active</Badge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="p-4 rounded-md border border-border-subtle bg-light-grey/40 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm text-navy">{cat.title}</span>
                  <span className="text-[10px] text-teal font-mono">/products/{cat.slug}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {cat.shortDescription}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Reusable UI Components Test Row */}
        <div className="p-6 rounded-lg bg-white border border-border-subtle space-y-3">
          <h2 className="text-base font-semibold text-navy">Design System Verification</h2>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Badge variant="default">Default Badge</Badge>
            <Badge variant="teal">Teal Badge</Badge>
            <Badge variant="outline">Outline Badge</Badge>
          </div>
        </div>
      </Container>
    </div>
  );
}
