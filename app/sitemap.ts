import type { MetadataRoute } from 'next';
import { publicServices, siteData } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? siteData.seo.localFallbackUrl;
  const routes = ['', '/services', '/specialists', '/prices', '/contacts', '/legal'];
  return [
    ...routes.map((route) => ({ url: baseUrl + route })),
    ...publicServices.map((service) => ({
      url: baseUrl + '/services/' + service.slug,
    })),
  ];
}
