import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "left",
  className,
  children,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "space-y-3",
        isCentered ? "text-center mx-auto max-w-3xl" : "max-w-3xl",
        className
      )}
    >
      {badge && (
        <span className="inline-block text-xs uppercase tracking-widest font-semibold text-teal bg-teal/10 px-3 py-1 rounded-full border border-teal/20">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-navy">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
