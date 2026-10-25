import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

  const variantClasses: Record<ButtonVariant, string> = {
    primary:
      "bg-navy text-white hover:bg-navy-dark focus:ring-navy border border-transparent shadow-sm",
    secondary:
      "bg-teal text-white hover:bg-teal-dark focus:ring-teal border border-transparent shadow-sm",
    outline:
      "border border-navy text-navy bg-transparent hover:bg-light-grey focus:ring-navy",
    ghost:
      "text-navy bg-transparent hover:bg-light-grey focus:ring-navy border border-transparent",
  };

  const sizeClasses: Record<ButtonSize, string> = {
    sm: "px-3 py-1.5 text-xs tracking-wide",
    md: "px-4 py-2 text-sm tracking-wide",
    lg: "px-6 py-3 text-base tracking-wide",
  };

  const combinedClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if ("href" in props && typeof props.href === "string") {
    const { href, ...linkProps } = props as ButtonAsLink;
    return (
      <Link href={href} className={combinedClasses} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
