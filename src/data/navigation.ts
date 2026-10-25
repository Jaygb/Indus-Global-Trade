import { NavItem } from "@/types/navigation";
import { getActiveCategories } from "./categories";

export function getMainNavItems(): NavItem[] {
  const categories = getActiveCategories();

  const categorySubItems: NavItem[] = categories.map((cat) => ({
    title: cat.title,
    href: `/products/${cat.slug}`,
    description: cat.shortDescription,
  }));

  return [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Us",
      href: "/about-us",
    },
    {
      title: "Products",
      href: "/products",
      children: [
        {
          title: "All Products Overview",
          href: "/products",
          description: "Explore all export categories and product lines.",
        },
        ...categorySubItems,
      ],
    },
    {
      title: "Contact Us",
      href: "/contact-us",
    },
  ];
}

export const footerQuickLinks = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about-us" },
  { title: "Products Overview", href: "/products" },
  { title: "Contact Us", href: "/contact-us" },
];
