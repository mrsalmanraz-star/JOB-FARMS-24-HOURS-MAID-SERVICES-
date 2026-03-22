import { MetadataRoute } from 'next';

/**
 * Next.js 15 Programmatic Sitemap Sharding
 * Capped at 50,000 URLs per shard.
 */
export async function generateSitemaps() {
  // Targeting 2,800 PIN codes across India
  const totalPincodes = 2800;
  const shardSize = 500; 
  const shardCount = Math.ceil(totalPincodes / shardSize);
  
  return Array.from({ length: shardCount }, (_, i) => ({ id: i }));
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
  // Mocking PIN code data for the manifest
  const services = ['Maid', 'Cook', 'Nanny', 'JapaMaid', 'ElderlyCare', 'Driver'];
  const routes: any[] = [];
  
  // Each shard handles ~500 PIN codes
  const start = id * 500;
  const end = Math.min(start + 500, 2800);

  for (let i = start; i < end; i++) {
    const pincode = (110001 + i).toString(); // Starting from Delhi PIN codes
    services.forEach(service => {
      routes.push({
        url: `https://24hoursmaidservices.in/services/india/delhi/new-delhi/${pincode}/${service.toLowerCase()}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1.0, // High priority for PIN code pages
      });
    });
  }

  return routes;
}
