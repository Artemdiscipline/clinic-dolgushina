import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';
import { ServicesCatalog } from '@/components/site/ServicesCatalog';
import { absoluteUrl } from '@/data/site';

export const metadata: Metadata = {
  title: 'Услуги',
  description:
    'Эстетический и аппаратный уход, лазерная эпиляция, массаж и консультации в Екатеринбурге.',
  alternates: { canonical: absoluteUrl('/services') },
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Каталог услуг"
        title="Выберите направление без спешки"
        lead="Здесь собраны немедицинские услуги клиники. Фильтруйте по направлению, изучайте подробности и переходите к актуальному расписанию в Yclients."
        aside="Каталог содержит только подтверждённые немедицинские направления."
      />
      <section className="catalog-section" aria-label="Список услуг">
        <ServicesCatalog />
      </section>
    </main>
  );
}
