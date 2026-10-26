"use client";

import { useState, useRef, useEffect, useId } from "react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  value: string;
  label: string;
}

interface CustomSelectProps {
  id?: string;
  name?: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  hasError?: boolean;
  ariaDescribedBy?: string;
  required?: boolean;
  className?: string;
}

export function CustomSelect({
  id,
  name,
  options,
  value,
  onChange,
  placeholder = "Select an option",
  hasError = false,
  ariaDescribedBy,
  required = false,
  className,
}: CustomSelectProps) {
  const generatedId = useId();
  const selectId = id || generatedId;
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    } else {
      setSearchQuery("");
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const filteredOptions = searchQuery.trim()
    ? options.filter((opt) =>
        opt.label.toLowerCase().includes(searchQuery.toLowerCase().trim())
      )
    : options;

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      {/* Hidden input for form submission compatibility */}
      {name && <input type="hidden" name={name} value={value} />}

      {/* Custom Trigger Button */}
      <button
        id={selectId}
        type="button"
        role="combobox"
        aria-controls={`${selectId}-listbox`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-required={required}
        aria-invalid={hasError}
        aria-describedby={ariaDescribedBy}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full px-3.5 py-2.5 text-sm rounded-md border text-left bg-white transition-all flex items-center justify-between",
          "focus:outline-none focus:ring-1",
          hasError
            ? "border-red-400 focus:border-red-500 focus:ring-red-500"
            : isOpen
              ? "border-teal ring-1 ring-teal"
              : "border-slate-300 hover:border-slate-400 focus:border-teal focus:ring-teal"
        )}
      >
        <span
          className={cn(
            "truncate block",
            selectedOption ? "text-slate-900 font-medium" : "text-slate-400"
          )}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        {/* Custom Chevron Icon */}
        <span className="ml-2 flex items-center pointer-events-none text-slate-400">
          <svg
            className={cn(
              "w-4 h-4 transition-transform duration-200 text-slate-500",
              isOpen ? "rotate-180 text-teal" : ""
            )}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>

      {/* Custom Dropdown Menu */}
      {isOpen && (
        <div
          id={`${selectId}-listbox`}
          role="listbox"
          tabIndex={-1}
          className="absolute z-50 left-0 right-0 top-full mt-1.5 bg-white border border-border-subtle rounded-lg shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-1"
        >
          {/* Quick Filter Search Box */}
          {options.length > 8 && (
            <div className="p-2 border-b border-border-subtle bg-light-grey/60">
              <div className="relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type to filter..."
                  className="w-full pl-8 pr-3 py-1.5 text-xs rounded border border-slate-300 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal"
                />
                <svg
                  className="w-3.5 h-3.5 absolute left-2.5 top-2 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          )}

          {/* Options Scroll List */}
          <div className="max-h-56 overflow-y-auto py-1 divide-y divide-slate-50">
            {filteredOptions.length === 0 ? (
              <div className="py-4 text-center text-xs text-slate-500">
                No matching countries found
              </div>
            ) : (
              filteredOptions.map((option) => {
                const isSelected = option.value === value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(option.value)}
                    className={cn(
                      "w-full px-3.5 py-2 text-xs sm:text-sm text-left flex items-center justify-between transition-colors",
                      isSelected
                        ? "bg-teal/10 text-teal font-semibold"
                        : "text-slate-700 hover:bg-light-grey hover:text-navy"
                    )}
                  >
                    <span>{option.label}</span>
                    {isSelected && (
                      <svg
                        className="w-4 h-4 text-teal shrink-0 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
