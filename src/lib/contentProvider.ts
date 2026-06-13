import { homePage, pages, people, posts, services, siteSettings } from '@data/seed';
import type { BlogPost, HomePage, Locale, Page, Person, SeoData, Service, SiteSettings } from './types';
import { sanityProvider } from './sanityContentProvider';

export type ContentProvider = {
  getHomePage(): Promise<HomePage>;
  getPageBySlug(slug: string): Promise<Page | undefined>;
  getServices(): Promise<Service[]>;
  getServiceBySlug(slug: string): Promise<Service | undefined>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  getSiteSettings(): Promise<SiteSettings>;
  getSeoData(slug: string, locale: Locale): Promise<SeoData>;
  getPeople(): Promise<Person[]>;
};

const seedProvider: ContentProvider = {
  async getHomePage() {
    return homePage;
  },
  async getPageBySlug(slug) {
    return pages.find((page) => page.slug === slug);
  },
  async getServices() {
    return services;
  },
  async getServiceBySlug(slug) {
    return services.find((service) => service.slug === slug);
  },
  async getBlogPosts() {
    return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  },
  async getBlogPostBySlug(slug) {
    return posts.find((post) => post.slug === slug);
  },
  async getSiteSettings() {
    return siteSettings;
  },
  async getSeoData(slug, locale) {
    if (slug === 'home') return homePage.seo[locale];
    const page = pages.find((item) => item.slug === slug);
    const service = services.find((item) => item.slug === slug);
    const post = posts.find((item) => item.slug === slug);
    return page?.seo[locale] ?? service?.seo[locale] ?? post?.seo[locale] ?? siteSettings.seo;
  },
  async getPeople() {
    return people;
  }
};

const hasSanityProject =
  Boolean(import.meta.env.PUBLIC_SANITY_PROJECT_ID) &&
  import.meta.env.PUBLIC_SANITY_PROJECT_ID !== 'replace-with-sanity-project-id';

function withFallback<TArgs extends unknown[], TResult>(
  sanityMethod: (...args: TArgs) => Promise<TResult>,
  seedMethod: (...args: TArgs) => Promise<TResult>
) {
  return async (...args: TArgs) => {
    if (!hasSanityProject) return seedMethod(...args);

    try {
      const result = await sanityMethod(...args);
      if (result === null || typeof result === 'undefined') return seedMethod(...args);
      if (Array.isArray(result) && result.length === 0) return seedMethod(...args);
      return result;
    } catch {
      return seedMethod(...args);
    }
  };
}

export const contentProvider: ContentProvider = {
  getHomePage: withFallback(sanityProvider.getHomePage.bind(sanityProvider), seedProvider.getHomePage),
  getPageBySlug: withFallback(sanityProvider.getPageBySlug.bind(sanityProvider), seedProvider.getPageBySlug),
  getServices: withFallback(sanityProvider.getServices.bind(sanityProvider), seedProvider.getServices),
  getServiceBySlug: withFallback(sanityProvider.getServiceBySlug.bind(sanityProvider), seedProvider.getServiceBySlug),
  getBlogPosts: withFallback(sanityProvider.getBlogPosts.bind(sanityProvider), seedProvider.getBlogPosts),
  getBlogPostBySlug: withFallback(sanityProvider.getBlogPostBySlug.bind(sanityProvider), seedProvider.getBlogPostBySlug),
  getSiteSettings: withFallback(sanityProvider.getSiteSettings.bind(sanityProvider), seedProvider.getSiteSettings),
  getSeoData: withFallback(sanityProvider.getSeoData.bind(sanityProvider), seedProvider.getSeoData),
  getPeople: withFallback(sanityProvider.getPeople.bind(sanityProvider), seedProvider.getPeople)
};
