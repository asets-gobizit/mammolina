# Mammolina

Astro + Sanity website for Mammolina Montessori, built as the first GoBizIT AI Website Factory customer project.

## Quick Start

```bash
npm install
npm run dev
```

Open:

- Website: `http://localhost:4321`
- Sanity Studio: `http://localhost:4321/admin`

## Environment

Copy `.env.example` to `.env.local` and fill in:

```bash
PUBLIC_SITE_URL=https://mammolinamontessori.com
PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2026-06-12
SANITY_API_READ_TOKEN=
SANITY_API_WRITE_TOKEN=
PICSART_API_KEY=
```

Never commit `.env`, `.env.local`, Sanity tokens, Vercel tokens, GitHub tokens, or Picsart API keys.

## Sanity Setup

Use your Sanity account to create a project named `mammolina`.

Recommended dataset: `production`.

After creating the Sanity project:

1. Put the project ID in `.env.local` as `PUBLIC_SANITY_PROJECT_ID`.
2. Put the dataset name in `.env.local` as `PUBLIC_SANITY_DATASET`.
3. Add CORS origins in Sanity for:
   - `http://localhost:4321`
   - the final Vercel production domain
4. Keep API tokens only in local/Vercel environment variables.

The site can render with local seed content before Sanity is connected. Once a real Sanity project ID is set, `src/lib/contentProvider.ts` switches to the Sanity provider.

## Content Editing

Customers should edit only through Sanity Studio at `/admin` or a controlled GoBizIT CMS route later.

Customers should not access:

- Source code
- GitHub
- Vercel
- API keys
- Environment variables

## Image Workflow

Rules for source media:

- Hero images max width: 1600 px.
- Content images max width: 1200 px.
- Recommended quality: 70-80%.
- Warn when an optimized image is larger than 2 MB.
- Do not store large raw media in the repository.

Picsart API support is represented by `PICSART_API_KEY`; the final optimization automation can be added after the API workflow is confirmed.

## Deployment

Vercel can import this GitHub repository and auto-detect Astro.

Build command:

```bash
npm run build
```

Output directory:

```bash
dist
```

## Size Guard

The build runs `scripts/check-project-size.mjs`.

- Warns over 80 MB.
- Blocks over 95 MB.
- Excludes `node_modules`, `dist`, `.astro`, `.git`, and `.vercel`.

## Rollback

Recovery options:

- GitHub version history: revert to a previous commit.
- Vercel deployment history: promote a previous successful deployment.
- Local project copy: rebuild and redeploy from this customer folder.

## Architecture

See `docs/architecture.md`.
