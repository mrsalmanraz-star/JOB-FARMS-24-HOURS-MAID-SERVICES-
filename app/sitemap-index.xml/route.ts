import { NextResponse } from 'next/server';

/**
 * Custom Route Handler for Master Sitemap Index
 * Required by Next.js 15 to link sharded sitemaps.
 */
export async function GET() {
  const shardCount = 6; // Based on our 2,800 PIN codes / 500 shard size
  
  const sitemaps = Array.from({ length: shardCount }, (_, i) => {
    return `  <sitemap>
    <loc>https://24hoursmaidservices.in/sitemap/${i}.xml</loc>
  </sitemap>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps}
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
