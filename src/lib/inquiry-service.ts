export interface InquiryFormData {
  fullName: string;
  companyName: string;
  businessEmail: string;
  country: string;
  productSlug: string;
  productTitle: string;
  estimatedQuantity?: string;
  message: string;
  botField?: string; // Honeypot spam trap
}

export interface InquiryResult {
  success: boolean;
  message: string;
}

/**
 * Clean abstraction for handling inquiry submissions on a static site.
 * Configured via process.env.NEXT_PUBLIC_INQUIRY_ENDPOINT.
 * If no endpoint is configured (development/static baseline), simulates a realistic submission.
 */
export async function submitInquiry(data: InquiryFormData): Promise<InquiryResult> {
  // 1. Honeypot check - reject spam bots silently
  if (data.botField) {
    return {
      success: true,
      message: "Your inquiry has been received.",
    };
  }

  const endpoint = process.env.NEXT_PUBLIC_INQUIRY_ENDPOINT;

  // 2. If external endpoint (e.g., Formspree, Basin, Web3Forms, AWS Lambda) is configured:
  if (endpoint && endpoint.trim().length > 0) {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          fullName: data.fullName,
          companyName: data.companyName,
          businessEmail: data.businessEmail,
          country: data.country,
          product: data.productTitle,
          productSlug: data.productSlug,
          estimatedQuantity: data.estimatedQuantity || "Not specified",
          message: data.message,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Endpoint returned status ${response.status}`);
      }

      return {
        success: true,
        message: "Your inquiry has been successfully sent to our trade desk.",
      };
    } catch {
      return {
        success: false,
        message:
          "We couldn't submit your inquiry right now. Please try again or reach out to our trade desk directly.",
      };
    }
  }

  // 3. Fallback for static deployment without active third-party form handler
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (process.env.NODE_ENV !== "production") {
    // Helpful developer notice in development console
    console.info(
      "[InquiryService] NEXT_PUBLIC_INQUIRY_ENDPOINT is not configured. Submission simulated successfully for static website.",
      data
    );
  }

  return {
    success: true,
    message: "Your inquiry has been received. Our trade desk will review your requirements.",
  };
}
