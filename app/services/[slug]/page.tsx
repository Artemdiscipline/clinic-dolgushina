import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BookingStrip } from '@/components/site/BookingStrip';
import { SiteLink } from '@/components/site/SiteLink';
import { absoluteUrl, publicServices, serviceCategories, siteData } from '@/data/site';

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return publicServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = publicServices.find((item) => item.slug === slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: absoluteUrl('/services/' + service.slug) },
    openGraph: {
      title: service.title,
      description: service.summary,
      url: absoluteUrl('/services/' + service.slug),
      images: [],
    },
    twitter: {
      title: service.title,
      description: service.summary,
      images: [],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = publicServices.find((item) => item.slug === slug);
  if (!service) notFound();

  const category = serviceCategories.find((item) => item.id === service.categoryId);

  return (
    <main id="main-content">
      <article className="service-detail">
        <SiteLink className="back-link" href="/services">← Все услуги</SiteLink>
        <div className="service-detail-head">
          <div>
            <p className="eyebrow">{category?.title}</p>
            <h1>{service.title}</h1>
          </div>
          <div className="service-summary">
            <p>{service.summary}</p>
            <a className="button button-primary" href={siteData.links.booking} target="_blank" rel="noreferrer">
              Записаться онлайн <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <dl className="service-facts">
          <div>
            <dt>Кому может подойти</dt>
            <dd>{service.forWhom}</dd>
          </div>
          <div>
            <dt>Продолжительность</dt>
            <dd>{service.duration}</dd>
          </div>
          <div>
            <dt>Стоимость</dt>
            <dd>{service.price ?? 'Актуальная стоимость — в Yclients'}</dd>
          </div>
        </dl>

        <section className="service-process" aria-labelledby="process-title">
          <p className="eyebrow">Как проходит знакомство</p>
          <h2 id="process-title">Понятно до начала</h2>
          <ol>
            {service.details.map((detail, index) => (
              <li key={detail}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{detail}</p>
              </li>
            ))}
          </ol>
        </section>

        {service.consultationNote ? (
          <aside className="service-note">
            <p className="eyebrow">Важно</p>
            <p>{service.consultationNote}</p>
          </aside>
        ) : null}
      </article>
      <BookingStrip title="Готовы выбрать время?" />
    </main>
  );
}
