import { NavItem } from "./navigation";

export interface ContactInfo {
  email: string;
  inquiryEmail: string;
  phone: string;
  country: string;
  city?: string;
  operatingHours?: string;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  ogImage?: string;
  contact: ContactInfo;
  navigation: {
    main: NavItem[];
    footer: {
      quickLinks: Array<{ title: string; href: string }>;
      categories: Array<{ title: string; href: string }>;
    };
  };
}
