import { sanityClient } from 'sanity:client';
import type { BlogPost, HomePage, Page, Person, SeoData, Service, SiteSettings } from './types';

const imageProjection = `"image": image.asset->url`;
const bodyTextProjection = `{
  "es": body[].children[].text,
  "en": body[].children[].text
}`;
const detailsTextProjection = `{
  "es": details[].children[].text,
  "en": details[].children[].text
}`;
const seoProjection = `{
  "title": coalesce(title, ^.title.es),
  description,
  ogTitle,
  ogDescription,
  "ogImage": ogImage.asset->url,
  canonicalUrl
}`;

export const sanityProvider = {
  async getHomePage(): Promise<HomePage> {
    return sanityClient.fetch(`*[_type == "homePage"][0]{
      headline,
      subheadline,
      "heroImage": heroImage.asset->url,
      whyTitle,
      whyBody,
      highlights,
      essenceTitle,
      essenceBody,
      outdoorTitle,
      outdoorBody,
      "seo": {"es": seo ${seoProjection}, "en": seo ${seoProjection}}
    }`);
  },
  async getPageBySlug(slug: string): Promise<Page | undefined> {
    return sanityClient.fetch(`*[_type == "page" && slug.current == $slug][0]{
      "slug": slug.current,
      title,
      summary,
      "body": ${bodyTextProjection},
      "heroImage": heroImage.asset->url,
      "seo": {"es": seo ${seoProjection}, "en": seo ${seoProjection}}
    }`, { slug });
  },
  async getServices(): Promise<Service[]> {
    return sanityClient.fetch(`*[_type == "service"] | order(title.es asc){
      "slug": slug.current,
      title,
      ageRange,
      summary,
      "details": ${detailsTextProjection},
      ${imageProjection},
      "seo": {"es": seo ${seoProjection}, "en": seo ${seoProjection}}
    }`);
  },
  async getServiceBySlug(slug: string): Promise<Service | undefined> {
    return sanityClient.fetch(`*[_type == "service" && slug.current == $slug][0]{
      "slug": slug.current,
      title,
      ageRange,
      summary,
      "details": ${detailsTextProjection},
      ${imageProjection},
      "seo": {"es": seo ${seoProjection}, "en": seo ${seoProjection}}
    }`, { slug });
  },
  async getBlogPosts(): Promise<BlogPost[]> {
    return sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc){
      "slug": slug.current,
      title,
      publishedAt,
      excerpt,
      "body": ${bodyTextProjection},
      ${imageProjection},
      "seo": {"es": seo ${seoProjection}, "en": seo ${seoProjection}}
    }`);
  },
  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return sanityClient.fetch(`*[_type == "post" && slug.current == $slug][0]{
      "slug": slug.current,
      title,
      publishedAt,
      excerpt,
      "body": ${bodyTextProjection},
      ${imageProjection},
      "seo": {"es": seo ${seoProjection}, "en": seo ${seoProjection}}
    }`, { slug });
  },
  async getSiteSettings(): Promise<SiteSettings> {
    return sanityClient.fetch(`*[_type == "siteSettings"][0]{
      title,
      description,
      "logo": logo.asset->url,
      email,
      phone,
      address,
      "social": {
        "instagram": instagramUrl,
        "facebook": facebookUrl
      },
      "seo": defaultSeo ${seoProjection}
    }`);
  },
  async getSeoData(slug: string, locale: 'es' | 'en'): Promise<SeoData> {
    const page = await this.getPageBySlug(slug);
    return page?.seo?.[locale] ?? (await this.getSiteSettings()).seo;
  },
  async getPeople(): Promise<Person[]> {
    return sanityClient.fetch(`*[_type == "person"] | order(order asc, name asc){
      name,
      role,
      bio,
      "image": image.asset->url
    }`);
  }
};
