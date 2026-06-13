import type { Locale, Localized } from './types';

export const locales: Locale[] = ['es', 'en'];
export const defaultLocale: Locale = 'es';

export function normalizeLocale(locale?: string): Locale {
  return locale === 'en' ? 'en' : 'es';
}

export function localize<T>(value: Localized<T>, locale: Locale): T {
  return value[locale] ?? value.es;
}

export function localizedPath(locale: Locale, path = '') {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return clean === '/index' ? '/' : clean;
  return clean === '/' ? `/${locale}` : `/${locale}${clean}`;
}

export const ui = {
  es: {
    school: 'Escuela Internacional',
    navAbout: 'Nuestra escuela',
    navServices: 'Programas',
    navBlog: 'Comunidad',
    navContact: 'Contacto',
    whyUs: '¿Por Qué Nosotros?',
    aboutUs: 'Sobre Nosotros',
    learnMore: 'Saber más',
    team: 'Nuestro Equipo',
    educationalModel: 'Modelo Educativo',
    services: 'Programas',
    blog: 'Blog',
    contactCta: 'Solicitar información',
    allPrograms: 'Ver programas',
    legal: 'Legal'
  },
  en: {
    school: 'International School',
    navAbout: 'Our school',
    navServices: 'Programs',
    navBlog: 'Community',
    navContact: 'Contact',
    whyUs: 'Why choose us?',
    aboutUs: 'About us',
    learnMore: 'Learn more',
    team: 'Our Team',
    educationalModel: 'Educational Model',
    services: 'Programs',
    blog: 'Blog',
    contactCta: 'Request information',
    allPrograms: 'View programs',
    legal: 'Legal'
  }
} as const;
