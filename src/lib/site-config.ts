import { SiteConfig } from "@/types/site";
import { getMainNavItems, footerQuickLinks } from "@/data/navigation";
import { getActiveCategories } from "@/data/categories";

const siteUrl = process.env.NEXT_SITE_URL || "https://indusglobaltrade.com";

export const siteConfig: SiteConfig = {
  name: "Indus Global Trade",
  legalName: "Indus Global Trade",
  tagline: "International Export & Supply Partner",
  description:
    "Indus Global Trade is an international export enterprise dedicated to supplying commercial and industrial products, starting with quality-certified chemicals, to global buyers with transparent logistics and strict quality compliance.",
  url: siteUrl,
  ogImage: `${siteUrl}/images/og-image.jpg`,
  contact: {
    email: "jaygabani365@gmail.com",
    inquiryEmail: "jaygabani365@gmail.com",
    phone: "+91 9023964267",
    whatsapp: "+91 9023964267",
    address: "Ahmedabad, Gujarat",
    country: "India",
    operatingHours: "Monday to Friday: 09:00 - 18:00 IST",
  },
  navigation: {
    main: getMainNavItems(),
    footer: {
      quickLinks: footerQuickLinks,
      categories: getActiveCategories().map((cat) => ({
        title: cat.title,
        href: `/products/${cat.slug}`,
      })),
    },
  },
};
