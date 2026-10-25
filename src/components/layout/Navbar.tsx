"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "@/types/navigation";
import { cn } from "@/lib/utils";

interface NavbarProps {
  items: NavItem[];
}

export function Navbar({ items }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({
    Products: true,
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus when route changes
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }

  const toggleDropdown = (title: string) => {
    setActiveDropdown((prev) => (prev === title ? null : title));
  };

  const toggleMobileExpand = (title: string) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="flex items-center" aria-label="Main Navigation">
      {/* Desktop Navigation Links */}
      <div className="hidden md:flex md:items-center md:gap-1" ref={dropdownRef}>
        {items.map((item) => {
          const hasChildren = item.children && item.children.length > 0;
          const isActive = isLinkActive(item.href);
          const isDropdownOpen = activeDropdown === item.title;

          if (hasChildren) {
            return (
              <div
                key={item.title}
                className="relative flex items-center"
                onMouseEnter={() => setActiveDropdown(item.title)}
              >
                {/* Main Link */}
                <Link
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-l-md transition-colors",
                    isActive
                      ? "text-teal-light bg-white/10 font-semibold"
                      : "text-slate-200 hover:text-white hover:bg-white/10"
                  )}
                >
                  {item.title}
                </Link>

                {/* Dropdown Toggle Button */}
                <button
                  type="button"
                  onClick={() => toggleDropdown(item.title)}
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                  aria-label={`Toggle ${item.title} menu`}
                  className={cn(
                    "px-1.5 py-2 text-sm font-medium rounded-r-md transition-colors",
                    isActive || isDropdownOpen
                      ? "text-teal-light bg-white/10"
                      : "text-slate-200 hover:text-white hover:bg-white/10"
                  )}
                >
                  <svg
                    className={cn(
                      "w-4 h-4 transition-transform duration-150",
                      isDropdownOpen ? "rotate-180" : ""
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute left-0 top-full mt-2 w-72 rounded-lg shadow-xl bg-navy-dark border border-navy-light/60 py-2.5 z-50 animate-in fade-in slide-in-from-top-1 backdrop-blur-md"
                    role="menu"
                    aria-orientation="vertical"
                  >
                    {item.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        role="menuitem"
                        className={cn(
                          "block px-4 py-2.5 text-sm transition-colors",
                          pathname === child.href
                            ? "bg-white/10 text-teal-light font-medium"
                            : "text-slate-200 hover:bg-white/10 hover:text-white"
                        )}
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="font-semibold">{child.title}</div>
                        {child.description && (
                          <div className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                            {child.description}
                          </div>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                isActive
                  ? "text-teal-light bg-white/10 font-semibold"
                  : "text-slate-200 hover:text-white hover:bg-white/10"
              )}
            >
              {item.title}
            </Link>
          );
        })}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex md:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          className="p-2 rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-teal-light"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-navy-dark border-b border-navy-light/60 shadow-2xl px-4 pt-3 pb-6 space-y-2 z-50 max-h-[calc(100vh-65px)] overflow-y-auto text-white">
          {items.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            const isActive = isLinkActive(item.href);
            const isExpanded = !!mobileExpanded[item.title];

            if (hasChildren) {
              return (
                <div key={item.title} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className={cn(
                        "block flex-1 px-3 py-2 text-sm font-semibold rounded-md transition-colors",
                        isActive ? "text-teal-light bg-white/10" : "text-white hover:bg-white/5"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleMobileExpand(item.title)}
                      aria-expanded={isExpanded}
                      aria-label={`Toggle ${item.title} subcategories`}
                      className="p-2 text-slate-300 hover:text-white"
                    >
                      <svg
                        className={cn(
                          "w-4 h-4 transition-transform duration-150",
                          isExpanded ? "rotate-180" : ""
                        )}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="pl-4 space-y-1 border-l-2 border-navy-light/60 ml-3">
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block px-3 py-2 text-sm rounded-md transition-colors",
                            pathname === child.href
                              ? "bg-white/10 text-teal-light font-medium"
                              : "text-slate-300 hover:bg-white/10 hover:text-white"
                          )}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  "block px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "bg-white/10 text-teal-light font-semibold"
                    : "text-slate-200 hover:bg-white/10 hover:text-white"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            );
          })}

          <div className="pt-3 border-t border-navy-light/40">
            <Link
              href="/contact-us"
              className="block w-full text-center py-2.5 px-4 rounded-md bg-teal text-white text-sm font-semibold hover:bg-teal-dark transition-colors shadow-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request Export Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
