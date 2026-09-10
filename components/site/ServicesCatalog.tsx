'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SiteLink } from '@/components/site/SiteLink';
import { publicServices, serviceCategories, siteData, type Service } from '@/data/site';

function ServiceCards({ services }: { services: Service[] }) {
  return (
    <div className="catalog-list">
      {services.map((service) => (
        <article className="catalog-item" key={service.slug}>
          <div>
            <p className="catalog-category">
              {serviceCategories.find((category) => category.id === service.categoryId)?.navTitle}
            </p>
            <h2><SiteLink href={'/services/' + service.slug}>{service.title}</SiteLink></h2>
          </div>
          <p>{service.summary}</p>
          <div className="catalog-meta">
            <span>{service.duration}</span>
            <span>{service.price ?? 'Стоимость — в Yclients'}</span>
          </div>
          <div className="catalog-actions">
            <SiteLink className="text-link" href={'/services/' + service.slug}>Подробнее <span aria-hidden="true">↗</span></SiteLink>
            <a className="text-link wine" href={siteData.links.booking} target="_blank" rel="noreferrer">
              Записаться <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ServicesCatalog() {
  return (
    <Tabs defaultValue="all" className="service-tabs">
      <TabsList variant="line" className="filter-list" aria-label="Фильтр услуг">
        <TabsTrigger className="filter-button" value="all">Все</TabsTrigger>
        {serviceCategories.map((category) => (
          <TabsTrigger className="filter-button" value={category.id} key={category.id}>
            {category.navTitle}
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent value="all"><ServiceCards services={publicServices} /></TabsContent>
      {serviceCategories.map((category) => (
        <TabsContent value={category.id} key={category.id}>
          <ServiceCards services={publicServices.filter((service) => service.categoryId === category.id)} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
