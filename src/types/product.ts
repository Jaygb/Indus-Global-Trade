export interface ProductCategory {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  metaDescription: string;
  iconName?: string;
  isActive: boolean;
}

export interface ProductSpecification {
  property: string;
  value: string;
  standard?: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  categoryId: string;
  title: string;
  subtitle?: string;
  shortDescription: string;
  image: string;
  imageAlt: string;
  casNumber?: string;
  grade?: string;
  purity?: string;
  applications?: string[];
  packagingOptions?: string[];
  specifications?: ProductSpecification[];
  featured?: boolean;
  isActive: boolean;
}
