import Image from "next/image";
import Link from "next/link";
import { ProductItem } from "@/types/product";
import { Button } from "./Button";

interface ProductCardProps {
  product: ProductItem;
  categorySlug?: string;
}

export function ProductCard({ product, categorySlug = "chemicals" }: ProductCardProps) {
  const detailsHref = `/products/${categorySlug}`;
  const inquiryHref = `/contact-us?product=${product.slug}`;

  return (
    <article className="flex flex-col h-full bg-white rounded-lg border border-border-subtle overflow-hidden hover:border-slate-300 transition-all duration-200">
      {/* Product Image Container */}
      <div className="relative aspect-[4/3] w-full bg-light-grey overflow-hidden">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-102"
        />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-navy bg-white/95 px-2.5 py-1 rounded shadow-xs border border-slate-200">
            Chemicals
          </span>
          {product.displayCasNumber && product.casNumber && (
            <span className="inline-block text-[11px] font-mono text-slate-700 bg-white/95 px-2 py-1 rounded shadow-xs border border-slate-200">
              CAS: {product.casNumber}
            </span>
          )}
        </div>
      </div>

      {/* Product Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <div className="space-y-1">
          <h3 className="font-bold text-lg text-navy tracking-tight">
            <Link href={detailsHref} className="hover:text-teal transition-colors">
              {product.title}
            </Link>
          </h3>
          {product.subtitle && (
            <p className="text-xs font-medium text-teal">
              {product.subtitle}
            </p>
          )}
        </div>

        <p className="text-sm text-slate-600 leading-relaxed mt-3 flex-1">
          {product.shortDescription}
        </p>

        {/* Action Buttons */}
        <div className="pt-5 mt-5 border-t border-border-subtle flex items-center gap-3">
          <Button href={inquiryHref} variant="primary" size="sm" className="flex-1">
            Request a Quote
          </Button>
          <Button href={detailsHref} variant="outline" size="sm">
            View Details
          </Button>
        </div>
      </div>
    </article>
  );
}
