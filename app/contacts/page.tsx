import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';
import { siteData } from '@/data/site';

export const metadata: Metadata = {
  title: 'Контакты',
  description:
    'Адрес, режим работы, телефон и мессенджеры Клиники Дарьи Долгушиной в центре Екатеринбурга.',
  alternates: { canonical: '/contacts' },
};

export default function ContactsPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Контакты"
        title="В центре Екатеринбурга"
        lead="Мы работаем ежедневно по предварительной записи. Выберите время онлайн или свяжитесь с клиникой удобным способом."
      />
      <section className="contact-page-grid">
        <div className="contact-facts">
          <div>
            <p className="contact-label">Адрес</p>
            <h2>{siteData.contacts.address}</h2>
            <div className="inline-links">
              <a href={siteData.links.yandexMaps} target="_blank" rel="noreferrer">Яндекс Карты ↗</a>
              <a href={siteData.links.twoGis} target="_blank" rel="noreferrer">2ГИС ↗</a>
            </div>
          </div>
          <div>
            <p className="contact-label">Режим работы</p>
            <p>{siteData.contacts.hours}</p>
          </div>
          <div>
            <p className="contact-label">Телефон</p>
            <a className="contact-phone" href={siteData.contacts.phoneHref}>{siteData.contacts.phone}</a>
          </div>
          <div>
            <p className="contact-label">Написать</p>
            <div className="inline-links">
              <a href={siteData.contacts.whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a>
              <a href={siteData.contacts.telegram} target="_blank" rel="noreferrer">Telegram ↗</a>
              <a href={siteData.links.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
            </div>
          </div>
          <a className="button button-primary" href={siteData.links.booking} target="_blank" rel="noreferrer">
            Записаться онлайн <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="map-wrap">
          <iframe
            title="Клиника Дарьи Долгушиной на карте"
            src="https://yandex.ru/map-widget/v1/?oid=53742534634"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}
