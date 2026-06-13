import { homePage } from './homePage';
import { page } from './page';
import { person } from './person';
import { post } from './post';
import { service } from './service';
import { localizedString, localizedText, seo } from './objects';
import { siteSettings } from './siteSettings';

export const schemaTypes = [
  localizedString,
  localizedText,
  seo,
  siteSettings,
  homePage,
  page,
  service,
  post,
  person
];
