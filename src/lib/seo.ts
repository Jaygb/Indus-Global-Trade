import type { Metadata } from "next";
import { siteConfig } from "./site-config";

interface ConstructMetadataParams {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description = siteConfig.description,
  path = "",
  image = siteConfig.ogImage,
  noIndex = false,
}: ConstructMetadataParams = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | ${siteConfig.tagline}`;

  const canonicalUrl = `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: image ? [image] : undefined,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressCountry: siteConfig.contact.country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales and export inquiries",
        email: siteConfig.contact.inquiryEmail,
        telephone: siteConfig.contact.phone,
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };
}
