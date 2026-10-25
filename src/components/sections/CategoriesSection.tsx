import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { getActiveCategories } from "@/data/categories";

export function CategoriesSection() {
  const categories = getActiveCategories();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-light-grey/60 border-b border-border-subtle">
      <Container className="space-y-10 sm:space-y-12">
        <SectionHeading
          badge="Product Categories"
          title="Our Products"
          subtitle="Indus Global Trade currently concentrates on industrial and commercial chemical compounds, with plans to expand our export portfolio across additional trade verticals as our supplier networks grow."
        />

        {/* Data-driven category grid - adapts automatically when new categories are registered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}

          {/* Planned Expansion Card */}
          <div className="flex flex-col justify-between p-6 sm:p-8 rounded-lg bg-white/70 border border-dashed border-slate-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-md bg-slate-100 flex items-center justify-center text-slate-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                  Future Expansion
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy tracking-tight">
                  Additional Trade Categories
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-2.5">
                  We continuously evaluate new commodity and industrial product lines for export based on buyer requirements and verified manufacturing partnerships.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200">
              <span className="text-xs text-slate-500 italic">
                Inquire with our trade desk for specific procurement requirements.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
