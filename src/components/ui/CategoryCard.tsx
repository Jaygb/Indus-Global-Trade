import Link from "next/link";
import { ProductCategory } from "@/types/product";
import { Button } from "./Button";

interface CategoryCardProps {
  category: ProductCategory;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className="flex flex-col justify-between p-6 sm:p-8 rounded-lg bg-white border border-border-subtle hover:border-slate-300 transition-all duration-200">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-md bg-light-grey flex items-center justify-center text-teal border border-border-subtle">
            {/* Flask / Chemistry Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-teal bg-teal/10 px-2.5 py-1 rounded">
            Active Category
          </span>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-navy tracking-tight">
            <Link
              href={`/products/${category.slug}`}
              className="hover:text-teal transition-colors"
            >
              {category.title}
            </Link>
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-2.5">
            {category.shortDescription}
          </p>
        </div>
      </div>

      <div className="pt-6 mt-6 border-t border-border-subtle flex items-center justify-between">
        <Button
          href={`/products/${category.slug}`}
          variant="primary"
          size="md"
        >
          Explore {category.title}
        </Button>
        <span className="text-xs font-medium text-slate-400">
          Refined &amp; Specialty
        </span>
      </div>
    </div>
  );
}
