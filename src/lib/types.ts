export type Locale = 'es' | 'en';

export type Localized<T = string> = Record<Locale, T>;

export type SeoData = {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
};

export type SiteSettings = {
  title: string;
  description: string;
  logo: string;
  email: string;
  phone: string;
  address: string;
  social: {
    instagram: string;
    facebook: string;
  };
  seo: SeoData;
};

export type HomePage = {
  headline: Localized;
  subheadline: Localized;
  heroImage: string;
  whyTitle: Localized;
  whyBody: Localized;
  highlights: Localized[];
  essenceTitle: Localized;
  essenceBody: Localized;
  outdoorTitle: Localized;
  outdoorBody: Localized;
  seo: Record<Locale, SeoData>;
};

export type Page = {
  slug: string;
  title: Localized;
  summary: Localized;
  body: Localized<string[]>;
  heroImage?: string;
  seo: Record<Locale, SeoData>;
};

export type Service = {
  slug: string;
  title: Localized;
  ageRange: Localized;
  summary: Localized;
  details: Localized<string[]>;
  image?: string;
  seo: Record<Locale, SeoData>;
};

export type BlogPost = {
  slug: string;
  title: Localized;
  publishedAt: string;
  excerpt: Localized;
  body: Localized<string[]>;
  image?: string;
  seo: Record<Locale, SeoData>;
};

export type Person = {
  name: string;
  role: Localized;
  bio: Localized;
  image: string;
};
