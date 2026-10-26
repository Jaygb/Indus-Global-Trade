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
 * Sends inquiry to Next.js API route /api/inquiry which dispatches an email
 * from jaygabani3008@gmail.com to jaygabani365@gmail.com via Nodemailer.
 */
export async function submitInquiry(data: InquiryFormData): Promise<InquiryResult> {
  // 1. Honeypot check - reject spam bots silently
  if (data.botField) {
    return {
      success: true,
      message: "Your inquiry has been received.",
    };
  }

  try {
    const response = await fetch("/api/inquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Failed to send inquiry.");
    }

    return {
      success: true,
      message:
        result.message ||
        "Your inquiry has been successfully sent to our trade desk.",
    };
  } catch (error) {
    const errorMsg =
      error instanceof Error ? error.message : "Failed to send inquiry email.";
    return {
      success: false,
      message: errorMsg,
    };
  }
}
