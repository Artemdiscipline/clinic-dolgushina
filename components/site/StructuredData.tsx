import { publicServices, siteData } from '@/data/site';

export function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: siteData.brand.name,
    alternateName: siteData.brand.secondaryName,
    telephone: siteData.contacts.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteData.contacts.city,
      streetAddress: siteData.contacts.address,
      addressCountry: 'RU',
    },
    openingHours: 'Mo-Su 09:00-21:00',
    sameAs: [
      siteData.links.instagram,
      siteData.links.yandexMaps,
      siteData.links.twoGis,
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Немедицинские услуги',
      itemListElement: publicServices.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.summary,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
