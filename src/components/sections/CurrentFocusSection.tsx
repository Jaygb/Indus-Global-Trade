import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/Button";
import { getFeaturedProducts } from "@/data/products";

export function CurrentFocusSection() {
  const products = getFeaturedProducts();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-border-subtle">
      <Container className="space-y-10 sm:space-y-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <SectionHeading
            badge="Product Vertical"
            title="Our Current Product Focus"
            subtitle="Indus Global Trade currently concentrates on verified chemical products, supplying industrial and commercial grades suited for global manufacturing and processing."
          />
          <div>
            <Button href="/products/chemicals" variant="primary" size="md">
              Explore Our Chemicals
            </Button>
          </div>
        </div>

        {/* Concise Product Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href="/products/chemicals"
              className="group p-5 rounded-lg border border-border-subtle bg-light-grey/40 hover:bg-white hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="relative aspect-[16/10] w-full rounded overflow-hidden bg-white border border-border-subtle">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-102 transition-transform duration-200"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-base text-navy group-hover:text-teal transition-colors">
                    {product.title}
                  </h3>
                  {product.subtitle && (
                    <p className="text-xs text-teal font-medium mt-0.5">
                      {product.subtitle}
                    </p>
                  )}
                  <p className="text-xs text-slate-600 line-clamp-2 mt-2 leading-relaxed">
                    {product.shortDescription}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-border-subtle flex items-center justify-between text-xs font-semibold text-navy group-hover:text-teal">
                <span>View Chemical Details</span>
                <span aria-hidden="true">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
