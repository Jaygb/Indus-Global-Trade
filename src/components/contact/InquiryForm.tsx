"use client";

import { useState, useId, FormEvent, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getActiveProducts } from "@/data/products";
import { countries } from "@/data/countries";
import { submitInquiry, InquiryFormData } from "@/lib/inquiry-service";
import { Button } from "@/components/ui/Button";
import { CustomSelect } from "@/components/ui/CustomSelect";

const countryOptions = countries.map((c) => ({
  value: c.name,
  label: c.name,
}));

function InquiryFormContent() {
  const searchParams = useSearchParams();
  const activeProducts = getActiveProducts();
  const formId = useId();

  const productQuery = searchParams.get("product");
  const matchedProduct = productQuery
    ? activeProducts.find((p) => p.slug.toLowerCase() === productQuery.toLowerCase())
    : undefined;

  const initialProductTitle = matchedProduct
    ? matchedProduct.title
    : productQuery
      ? productQuery.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
      : "";

  // Form State initialized with URL product preselection
  const [formData, setFormData] = useState<InquiryFormData>(() => ({
    fullName: "",
    companyName: "",
    businessEmail: "",
    country: "",
    productSlug: matchedProduct ? matchedProduct.slug : (productQuery || ""),
    productTitle: initialProductTitle,
    estimatedQuantity: "",
    message: "",
    botField: "",
  }));

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Synchronize when product query param changes during navigation
  const [prevProductQuery, setPrevProductQuery] = useState(productQuery);
  if (prevProductQuery !== productQuery) {
    setPrevProductQuery(productQuery);
    if (matchedProduct) {
      setFormData((prev) => ({
        ...prev,
        productSlug: matchedProduct.slug,
        productTitle: matchedProduct.title,
      }));
    } else if (productQuery) {
      setFormData((prev) => ({
        ...prev,
        productSlug: productQuery,
        productTitle: productQuery.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      }));
    }
  }

  // Client-side validation
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your name.";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Please enter your company name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = "Please enter your business email.";
    } else if (!emailRegex.test(formData.businessEmail.trim())) {
      newErrors.businessEmail = "Please enter a valid business email address.";
    }

    if (!formData.country.trim()) {
      newErrors.country = "Please select your country.";
    }

    if (!formData.productTitle.trim()) {
      newErrors.productTitle = "Please enter your product of interest.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell us about your requirements.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please provide more details regarding your inquiry (minimum 10 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitInquiry(formData);
      if (result.success) {
        setSubmitSuccess(true);
      } else {
        setSubmitError(result.message);
      }
    } catch {
      setSubmitError(
        "Unable to send your inquiry right now. Please try again or reach out to our trade desk directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setFormData({
      fullName: "",
      companyName: "",
      businessEmail: "",
      country: "",
      productSlug: "",
      productTitle: "",
      estimatedQuantity: "",
      message: "",
      botField: "",
    });
    setErrors({});
    setSubmitSuccess(false);
    setSubmitError(null);
  };

  // 1. Success State UI
  if (submitSuccess) {
    return (
      <div className="p-8 sm:p-10 rounded-lg bg-white border border-border-subtle shadow-xs space-y-6 text-center">
        <div className="w-14 h-14 rounded-full bg-teal/10 text-teal flex items-center justify-center mx-auto">
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div className="space-y-2 max-w-lg mx-auto">
          <h3 className="text-2xl font-bold text-navy tracking-tight">
            Thank You for Your Inquiry
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Your export inquiry has been sent to our trade desk (<span className="text-navy font-semibold">jaygabani365@gmail.com</span>). Our team will review your product specifications and reply to you shortly.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/products" variant="primary" size="md">
            Explore Products
          </Button>
          <button
            type="button"
            onClick={handleResetForm}
            className="text-sm font-semibold text-teal hover:underline py-2 px-4 focus:outline-none"
          >
            Send Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  // 2. Active Form UI
  return (
    <div className="p-6 sm:p-8 rounded-lg bg-white border border-border-subtle shadow-xs">
      <div className="mb-6 space-y-1">
        <h2 className="text-xl font-bold text-navy tracking-tight">
          Commercial Inquiry Form
        </h2>
        <p className="text-xs text-slate-500">
          Fields marked with <span className="text-red-500">*</span> are required for quotation processing.
        </p>
      </div>

      {submitError && (
        <div
          role="alert"
          className="mb-6 p-4 rounded-md bg-red-50 border border-red-200 text-red-800 text-sm space-y-1"
        >
          <div className="font-semibold">Unable to submit inquiry</div>
          <div>{submitError}</div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Anti-spam honeypot (hidden from human visitors) */}
        <div aria-hidden="true" style={{ display: "none" }}>
          <label htmlFor={`${formId}-bot`}>Leave this field blank</label>
          <input
            id={`${formId}-bot`}
            type="text"
            name="botField"
            value={formData.botField}
            onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Row 1: Full Name & Company Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label
              htmlFor={`${formId}-name`}
              className="block text-xs font-semibold uppercase tracking-wider text-slate-700"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id={`${formId}-name`}
              type="text"
              required
              aria-required="true"
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? `${formId}-name-err` : undefined}
              value={formData.fullName}
              onChange={(e) => {
                setFormData({ ...formData, fullName: e.target.value });
                if (errors.fullName) setErrors({ ...errors, fullName: "" });
              }}
              placeholder="e.g. John Doe"
              className="w-full px-3.5 py-2.5 text-sm rounded-md border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal"
            />
            {errors.fullName && (
              <p id={`${formId}-name-err`} className="text-xs text-red-600 font-medium">
                {errors.fullName}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor={`${formId}-company`}
              className="block text-xs font-semibold uppercase tracking-wider text-slate-700"
            >
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              id={`${formId}-company`}
              type="text"
              required
              aria-required="true"
              aria-invalid={!!errors.companyName}
              aria-describedby={errors.companyName ? `${formId}-company-err` : undefined}
              value={formData.companyName}
              onChange={(e) => {
                setFormData({ ...formData, companyName: e.target.value });
                if (errors.companyName) setErrors({ ...errors, companyName: "" });
              }}
              placeholder="e.g. Acme Industrial Ltd."
              className="w-full px-3.5 py-2.5 text-sm rounded-md border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal"
            />
            {errors.companyName && (
              <p id={`${formId}-company-err`} className="text-xs text-red-600 font-medium">
                {errors.companyName}
              </p>
            )}
          </div>
        </div>

        {/* Row 2: Business Email & Country */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label
              htmlFor={`${formId}-email`}
              className="block text-xs font-semibold uppercase tracking-wider text-slate-700"
            >
              Business Email <span className="text-red-500">*</span>
            </label>
            <input
              id={`${formId}-email`}
              type="email"
              required
              aria-required="true"
              aria-invalid={!!errors.businessEmail}
              aria-describedby={errors.businessEmail ? `${formId}-email-err` : undefined}
              value={formData.businessEmail}
              onChange={(e) => {
                setFormData({ ...formData, businessEmail: e.target.value });
                if (errors.businessEmail) setErrors({ ...errors, businessEmail: "" });
              }}
              placeholder="name@company.com"
              className="w-full px-3.5 py-2.5 text-sm rounded-md border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal"
            />
            {errors.businessEmail && (
              <p id={`${formId}-email-err`} className="text-xs text-red-600 font-medium">
                {errors.businessEmail}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor={`${formId}-country`}
              className="block text-xs font-semibold uppercase tracking-wider text-slate-700"
            >
              Destination / Country <span className="text-red-500">*</span>
            </label>
            <CustomSelect
              id={`${formId}-country`}
              name="country"
              required
              hasError={!!errors.country}
              ariaDescribedBy={errors.country ? `${formId}-country-err` : undefined}
              value={formData.country}
              onChange={(val) => {
                setFormData({ ...formData, country: val });
                if (errors.country) setErrors({ ...errors, country: "" });
              }}
              placeholder="Select your destination country *"
              options={countryOptions}
            />
            {errors.country && (
              <p id={`${formId}-country-err`} className="text-xs text-red-600 font-medium">
                {errors.country}
              </p>
            )}
          </div>
        </div>

        {/* Row 3: Product of Interest & Estimated Quantity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label
              htmlFor={`${formId}-product`}
              className="block text-xs font-semibold uppercase tracking-wider text-slate-700"
            >
              Product of Interest <span className="text-red-500">*</span>
            </label>
            <input
              id={`${formId}-product`}
              type="text"
              required
              aria-required="true"
              aria-invalid={!!errors.productTitle}
              aria-describedby={errors.productTitle ? `${formId}-product-err` : undefined}
              value={formData.productTitle}
              onChange={(e) => {
                const val = e.target.value;
                setFormData({
                  ...formData,
                  productTitle: val,
                  productSlug: val.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-"),
                });
                if (errors.productTitle) setErrors({ ...errors, productTitle: "" });
              }}
              placeholder="e.g. Refined Glycerin, Menthol, MSG, or Custom Product"
              className="w-full px-3.5 py-2.5 text-sm rounded-md border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal"
            />
            {errors.productTitle && (
              <p id={`${formId}-product-err`} className="text-xs text-red-600 font-medium">
                {errors.productTitle}
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor={`${formId}-quantity`}
              className="block text-xs font-semibold uppercase tracking-wider text-slate-700"
            >
              Estimated Quantity <span className="text-slate-400 font-normal">(Optional)</span>
            </label>
            <input
              id={`${formId}-quantity`}
              type="text"
              value={formData.estimatedQuantity}
              onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
              placeholder="e.g. 500 kg / 1 MT / 20 MT"
              className="w-full px-3.5 py-2.5 text-sm rounded-md border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal"
            />
          </div>
        </div>

        {/* Row 4: Message / Requirements */}
        <div className="space-y-1.5">
          <label
            htmlFor={`${formId}-message`}
            className="block text-xs font-semibold uppercase tracking-wider text-slate-700"
          >
            Message / Requirements <span className="text-red-500">*</span>
          </label>
          <textarea
            id={`${formId}-message`}
            required
            rows={4}
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? `${formId}-message-err` : undefined}
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              if (errors.message) setErrors({ ...errors, message: "" });
            }}
            placeholder="Tell us about your product requirements, specifications, quantity, packaging, destination port, or any other details."
            className="w-full px-3.5 py-2.5 text-sm rounded-md border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal"
          />
          {errors.message && (
            <p id={`${formId}-message-err`} className="text-xs text-red-600 font-medium">
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto min-w-[200px] inline-flex items-center justify-center font-medium rounded-md transition-colors px-6 py-3 text-base bg-navy text-white hover:bg-navy-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending Inquiry...
              </span>
            ) : (
              "Send Inquiry"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export function InquiryForm() {
  return (
    <Suspense
      fallback={
        <div className="p-8 rounded-lg bg-white border border-border-subtle animate-pulse space-y-4">
          <div className="h-6 bg-slate-200 rounded w-1/3"></div>
          <div className="h-4 bg-slate-100 rounded w-1/2"></div>
          <div className="h-32 bg-slate-100 rounded"></div>
        </div>
      }
    >
      <InquiryFormContent />
    </Suspense>
  );
}
