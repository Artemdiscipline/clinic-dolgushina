import type { MetadataRoute } from 'next';
import { siteData } from '@/data/site';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteData.seo.localFallbackUrl;
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: baseUrl + '/sitemap.xml',
  };
}
