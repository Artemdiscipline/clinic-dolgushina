import type { Metadata } from 'next';
import { BookingStrip } from '@/components/site/BookingStrip';
import { PageHero } from '@/components/site/PageHero';
import { SiteLink } from '@/components/site/SiteLink';
import { absoluteUrl, publicServices, serviceCategories } from '@/data/site';

export const metadata: Metadata = {
  title: 'Цены',
  description:
    'Информация о стоимости немедицинских услуг Клиники Дарьи Долгушиной в Екатеринбурге.',
  alternates: { canonical: absoluteUrl('/prices') },
};

export default function PricesPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Стоимость"
        title="Прозрачный прайс — после подтверждения"
        lead="Мы не переносим цены без актуального прайс-листа клиники. Сейчас точная стоимость и состав услуг доступны в Yclients."
        aside="После получения подтверждённых цен этот раздел обновляется в одном файле данных."
      />
      <section className="price-section" aria-label="Список услуг и стоимость">
        {serviceCategories.map((category) => {
          const items = publicServices.filter((service) => service.categoryId === category.id);
          if (items.length === 0) return null;
          return (
            <div className="price-group" key={category.id}>
              <h2>{category.title}</h2>
              <div>
                {items.map((service) => (
                  <SiteLink className="price-row" href={'/services/' + service.slug} key={service.slug}>
                    <span>{service.title}</span>
                    <span>{service.price ?? 'Уточнить в Yclients'}</span>
                    <span aria-hidden="true">↗</span>
                  </SiteLink>
                ))}
              </div>
            </div>
          );
        })}
      </section>
      <BookingStrip title="Открыть актуальный прайс" />
    </main>
  );
}
