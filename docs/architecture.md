# GoBizIT Website Factory Architecture Notes

## Current V1

Mammolina uses:

- Astro for the static website frontend.
- Sanity for editable content and embedded Studio at `/admin`.
- A content provider abstraction in `src/lib/contentProvider.ts`.
- Local seed content in `src/data/seed.ts` so development can continue before Sanity is fully connected.
- Vercel-compatible build scripts and project size checks.

## Content Boundary

Frontend pages and components should call only the provider methods:

- `getHomePage()`
- `getPageBySlug(slug)`
- `getServices()`
- `getServiceBySlug(slug)`
- `getBlogPosts()`
- `getBlogPostBySlug(slug)`
- `getSiteSettings()`
- `getSeoData(slug, locale)`
- `getPeople()`

Components should not import `sanity:client` directly.

## Future CMS Replacement

To replace Sanity later, create a new provider that implements the same methods and returns the same normalized types from `src/lib/types.ts`.

Possible future providers:

- GoBizIT CMS API
- MongoDB-backed API
- GitHub content files
- Another headless CMS

The Astro routes should not need structural changes if the provider contract stays stable.

## Skill Candidates After This Build

- `gobizit-client-scaffold`: customer folder, Astro files, env docs, size check.
- `gobizit-sanity-provider`: Sanity schemas plus normalized content provider.
- `gobizit-website-clone-to-cms`: reference website capture, seed content, editable CMS mapping, visual QA.
- `gobizit-image-workflow`: source media capture, optimization rules, size warnings, Picsart handoff.
- `gobizit-deployment-readiness`: Vercel/GitHub/security/rollback checklist.
