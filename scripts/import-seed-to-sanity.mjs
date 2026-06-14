import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { extname, join } from 'node:path';
import vm from 'node:vm';

const root = process.cwd();

function loadEnv() {
  const envPath = join(root, '.env.local');
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#') || !trimmed.includes('=')) continue;
    const [key, ...valueParts] = trimmed.split('=');
    process.env[key.trim()] ||= valueParts.join('=').trim();
  }
}

function loadSeed() {
  const seedPath = join(root, 'src', 'data', 'seed.ts');
  let source = readFileSync(seedPath, 'utf8');
  source = source
    .replace(/^import type .+;\r?\n/m, '')
    .replace(/export const (\w+)\s*:\s*[^=]+=/g, 'const $1 =')
    .replace(/export const (\w+)\s*=/g, 'const $1 =');

  const names = ['siteSettings', 'homePage', 'services', 'people', 'pages', 'posts'];
  source += `\nresult = {${names.join(',')}};`;
  const context = { result: undefined };
  vm.createContext(context);
  vm.runInContext(source, context, { filename: seedPath });
  return context.result;
}

function slugify(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function stableId(type, key) {
  return `${type}.${slugify(key)}`;
}

function seo(value = {}) {
  return {
    _type: 'seo',
    title: value.title,
    description: value.description,
    ogTitle: value.ogTitle,
    ogDescription: value.ogDescription,
    canonicalUrl: value.canonicalUrl
  };
}

function blocks(lines = []) {
  return lines.map((line, index) => ({
    _type: 'block',
    _key: createHash('sha1').update(`${index}:${line}`).digest('hex').slice(0, 12),
    style: 'normal',
    markDefs: [],
    children: [
      {
        _type: 'span',
        _key: createHash('sha1').update(`span:${index}:${line}`).digest('hex').slice(0, 12),
        text: line,
        marks: []
      }
    ]
  }));
}

function imageMime(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (ext === '.png') return 'image/png';
  if (ext === '.webp') return 'image/webp';
  if (ext === '.avif') return 'image/avif';
  return 'image/jpeg';
}

async function sanityFetch(path, options = {}) {
  const projectId = process.env.PUBLIC_SANITY_PROJECT_ID;
  const apiVersion = process.env.PUBLIC_SANITY_API_VERSION || '2026-06-12';
  const token = process.env.SANITY_API_WRITE_TOKEN;
  const response = await fetch(`https://${projectId}.api.sanity.io/v${apiVersion}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      ...(options.headers || {})
    }
  });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${await response.text()}`);
  return response.json();
}

const uploadedImages = new Map();

async function imageRef(publicPath) {
  if (!publicPath) return undefined;
  if (uploadedImages.has(publicPath)) return uploadedImages.get(publicPath);

  const relativePath = publicPath.replace(/^\//, '');
  const filePath = join(root, 'public', relativePath);
  if (!existsSync(filePath)) return undefined;

  const filename = relativePath.split('/').pop();
  const body = readFileSync(filePath);
  const result = await sanityFetch(`/assets/images/${process.env.PUBLIC_SANITY_DATASET}?filename=${encodeURIComponent(filename)}`, {
    method: 'POST',
    headers: { 'Content-Type': imageMime(filePath) },
    body
  });
  const ref = { _type: 'image', asset: { _type: 'reference', _ref: result.document._id } };
  uploadedImages.set(publicPath, ref);
  return ref;
}

async function mutateDocuments(documents) {
  const dataset = process.env.PUBLIC_SANITY_DATASET;
  for (let index = 0; index < documents.length; index += 10) {
    const chunk = documents.slice(index, index + 10);
    const result = await sanityFetch(`/data/mutate/${dataset}?returnIds=true&visibility=sync`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        mutations: chunk.map((document) => ({ createOrReplace: document }))
      })
    });
    if (result.error || result.errors) {
      throw new Error(`Sanity mutation failed: ${JSON.stringify(result.error || result.errors)}`);
    }
  }
}

async function main() {
  loadEnv();
  const missing = ['PUBLIC_SANITY_PROJECT_ID', 'PUBLIC_SANITY_DATASET', 'SANITY_API_WRITE_TOKEN'].filter(
    (key) => !process.env[key] || process.env[key].includes('replace-with')
  );
  if (missing.length) throw new Error(`Missing required env values: ${missing.join(', ')}`);

  const { siteSettings, homePage, services, people, pages, posts } = loadSeed();
  const documents = [];

  documents.push({
    _id: 'siteSettings.main',
    _type: 'siteSettings',
    title: siteSettings.title,
    description: siteSettings.description,
    logo: await imageRef(siteSettings.logo),
    email: siteSettings.email,
    phone: siteSettings.phone,
    address: siteSettings.address,
    instagramUrl: siteSettings.social?.instagram,
    facebookUrl: siteSettings.social?.facebook,
    defaultSeo: seo(siteSettings.seo)
  });

  documents.push({
    _id: 'homePage.main',
    _type: 'homePage',
    headline: homePage.headline,
    subheadline: homePage.subheadline,
    heroImage: await imageRef(homePage.heroImage),
    whyTitle: homePage.whyTitle,
    whyBody: homePage.whyBody,
    highlights: homePage.highlights,
    essenceTitle: homePage.essenceTitle,
    essenceBody: homePage.essenceBody,
    outdoorTitle: homePage.outdoorTitle,
    outdoorBody: homePage.outdoorBody,
    seo: seo(homePage.seo?.es)
  });

  for (const service of services) {
    documents.push({
      _id: stableId('service', service.slug),
      _type: 'service',
      title: service.title,
      slug: { _type: 'slug', current: service.slug },
      ageRange: service.ageRange,
      summary: service.summary,
      details: blocks(service.details?.es),
      image: await imageRef(service.image),
      seo: seo(service.seo?.es)
    });
  }

  for (const [order, person] of people.entries()) {
    documents.push({
      _id: stableId('person', person.name),
      _type: 'person',
      name: person.name,
      role: person.role,
      bio: person.bio,
      image: await imageRef(person.image),
      order
    });
  }

  for (const page of pages) {
    documents.push({
      _id: stableId('page', page.slug),
      _type: 'page',
      title: page.title,
      slug: { _type: 'slug', current: page.slug },
      summary: page.summary,
      body: blocks(page.body?.es),
      heroImage: await imageRef(page.heroImage),
      seo: seo(page.seo?.es)
    });
  }

  for (const post of posts) {
    documents.push({
      _id: stableId('post', post.slug),
      _type: 'post',
      title: post.title,
      slug: { _type: 'slug', current: post.slug },
      publishedAt: post.publishedAt,
      excerpt: post.excerpt,
      body: blocks(post.body?.es),
      image: await imageRef(post.image),
      seo: seo(post.seo?.es)
    });
  }

  await sanityFetch(`/data/mutate/${process.env.PUBLIC_SANITY_DATASET}?visibility=sync`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mutations: [{ delete: { id: 'debug.codexMutationTest' } }] })
  });

  await mutateDocuments(documents);
  console.log(`Imported ${documents.length} documents and ${uploadedImages.size} images to Sanity.`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
