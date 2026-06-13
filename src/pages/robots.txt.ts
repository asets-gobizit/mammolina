export function GET() {
  return new Response(`User-agent: *
Allow: /
Sitemap: https://mammolinamontessori.com/sitemap-index.xml
`);
}
