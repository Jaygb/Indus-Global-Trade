import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      companyName,
      businessEmail,
      country,
      productTitle,
      estimatedQuantity,
      message,
      botField,
    } = body;

    // 1. Anti-spam honeypot check
    if (botField) {
      return NextResponse.json({
        success: true,
        message: "Inquiry received successfully.",
      });
    }

    // 2. Server-side validation
    if (
      !fullName?.trim() ||
      !companyName?.trim() ||
      !businessEmail?.trim() ||
      !country?.trim() ||
      !productTitle?.trim() ||
      !message?.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER || "jaygabani3008@gmail.com";
    const rawPass = process.env.SMTP_PASS;
    const smtpPass = rawPass ? rawPass.replace(/['"]/g, "").trim() : undefined;
    const adminEmail = process.env.ADMIN_EMAIL || "jaygabani365@gmail.com";

    // 3. Fallback if SMTP_PASS is not set yet in environment
    if (!smtpPass || smtpPass.trim().length === 0) {
      console.warn(
        "[Inquiry API] SMTP_PASS is not set in .env.local. Add your 16-character Gmail App Password for " +
          smtpUser +
          " to send live emails."
      );

      return NextResponse.json({
        success: true,
        message:
          "Your inquiry has been received. (Development note: Add SMTP_PASS to .env.local to dispatch live emails).",
      });
    }

    // 4. Create Nodemailer Gmail transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const plainTextContent = [
      `New Commercial Export Inquiry via Indus Global Trade Web Portal:`,
      ``,
      `--------------------------------------------------`,
      `INQUIRY DETAILS`,
      `--------------------------------------------------`,
      `Full Name:           ${fullName}`,
      `Company Name:        ${companyName}`,
      `Business Email:      ${businessEmail}`,
      `Destination Country: ${country}`,
      `Product of Interest: ${productTitle}`,
      `Estimated Quantity:  ${estimatedQuantity || "Not specified"}`,
      ``,
      `--------------------------------------------------`,
      `MESSAGE / REQUIREMENTS:`,
      `--------------------------------------------------`,
      `${message}`,
      ``,
      `Submitted at: ${new Date().toISOString()}`,
    ].join("\n");

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #E2E8F0; border-radius: 8px; background-color: #FFFFFF;">
        <div style="background-color: #16324F; padding: 16px 20px; border-radius: 6px; margin-bottom: 24px;">
          <h2 style="color: #FFFFFF; margin: 0; font-size: 20px; letter-spacing: -0.5px;">Indus Global Trade — New Export Inquiry</h2>
          <p style="color: #389d95; margin: 4px 0 0 0; font-size: 13px;">Commercial Trade Desk Alert</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
          <tr style="border-bottom: 1px solid #F3F5F7;">
            <td style="padding: 10px 0; color: #64748B; width: 38%; font-weight: 600;">Full Name:</td>
            <td style="padding: 10px 0; color: #1E293B; font-weight: bold;">${fullName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #F3F5F7;">
            <td style="padding: 10px 0; color: #64748B; font-weight: 600;">Company Name:</td>
            <td style="padding: 10px 0; color: #1E293B; font-weight: 600;">${companyName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #F3F5F7;">
            <td style="padding: 10px 0; color: #64748B; font-weight: 600;">Business Email:</td>
            <td style="padding: 10px 0; color: #2A817A; font-weight: 600;"><a href="mailto:${businessEmail}" style="color: #2A817A; text-decoration: none;">${businessEmail}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #F3F5F7;">
            <td style="padding: 10px 0; color: #64748B; font-weight: 600;">Destination Country:</td>
            <td style="padding: 10px 0; color: #1E293B;">${country}</td>
          </tr>
          <tr style="border-bottom: 1px solid #F3F5F7;">
            <td style="padding: 10px 0; color: #64748B; font-weight: 600;">Product of Interest:</td>
            <td style="padding: 10px 0; color: #16324F; font-weight: bold;">${productTitle}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #64748B; font-weight: 600;">Estimated Quantity:</td>
            <td style="padding: 10px 0; color: #1E293B;">${estimatedQuantity || "Not specified"}</td>
          </tr>
        </table>

        <div style="background-color: #F8FAFC; border-left: 4px solid #2A817A; padding: 16px; border-radius: 4px; margin-bottom: 24px;">
          <h4 style="margin: 0 0 8px 0; color: #16324F; font-size: 14px;">Requirements &amp; Specifications:</h4>
          <p style="margin: 0; color: #334155; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>

        <div style="border-top: 1px solid #E2E8F0; padding-top: 16px; font-size: 12px; color: #94A3B8; text-align: center;">
          <p style="margin: 0;">Sent automatically from <a href="https://indusglobaltrade.com" style="color: #2A817A;">Indus Global Trade Portal</a></p>
          <p style="margin: 4px 0 0 0;">Reply directly to this email to contact the buyer at <strong>${businessEmail}</strong></p>
        </div>
      </div>
    `;

    // 5. Send Email via Gmail SMTP
    await transporter.sendMail({
      from: `"Indus Global Trade Desk" <${smtpUser}>`,
      to: adminEmail,
      replyTo: `"${fullName}" <${businessEmail}>`,
      subject: `[New Export Inquiry] ${productTitle} — ${companyName}`,
      text: plainTextContent,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been successfully sent to our trade desk.",
    });
  } catch (error) {
    console.error("[Inquiry API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to send inquiry email right now. Please verify your SMTP settings or try again.",
      },
      { status: 500 }
    );
  }
}
