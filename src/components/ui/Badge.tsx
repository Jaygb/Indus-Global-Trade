import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "teal" | "outline";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variantClasses: Record<BadgeVariant, string> = {
    default: "bg-light-grey text-navy border border-border-subtle",
    teal: "bg-teal/10 text-teal border border-teal/20",
    outline: "bg-transparent text-navy border border-navy/30",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
