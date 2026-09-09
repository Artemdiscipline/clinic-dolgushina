import { BookingStrip } from '@/components/site/BookingStrip';
import { Faq } from '@/components/site/Faq';
import { Reviews } from '@/components/site/Reviews';
import { approach, publicServices, serviceCategories, siteData } from '@/data/site';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const featuredServices = publicServices.filter((service) => service.featured);

  return (
    <main id="main-content">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Skin Cosm · Екатеринбург</p>
          <h1>Косметология с&nbsp;вниманием к&nbsp;вашим чертам</h1>
          <p className="hero-lead">
            Уход, аппаратные процедуры, лазерная эпиляция и консультации
            специалистов в центре Екатеринбурга.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={siteData.links.booking} target="_blank" rel="noreferrer">
              Записаться онлайн <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#directions">
              Выбрать процедуру <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-meta">
            <span>{siteData.contacts.address}</span>
            <span>{siteData.contacts.hours}</span>
          </div>
        </div>
        <figure className="hero-visual">
          <Image
            src="/hero-editorial.png"
            alt="Композиция из матовой керамики, рифлёного стекла и винной ленты"
            width="1120"
            height="1400"
            priority
          />
          <figcaption>Естественность — ориентир, а не громкое обещание</figcaption>
        </figure>
      </section>

      <section className="directions" id="directions" aria-labelledby="directions-title">
        <div className="section-intro">
          <p className="eyebrow">Направления</p>
          <h2 id="directions-title">Начните с того, что важно сейчас</h2>
        </div>
        <div className="direction-list">
          {serviceCategories.map((direction, index) => (
            <Link href="/services" className="direction-row" key={direction.id}>
              <span className="direction-index">{String(index + 1).padStart(2, '0')}</span>
              <h3>{direction.title}</h3>
              <p>{direction.description}</p>
              <span className="direction-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="approach-section" aria-labelledby="approach-title">
        <div className="approach-heading">
          <p className="eyebrow">Подход</p>
          <h2 id="approach-title">Заметить детали. Объяснить выбор. Не менять вас.</h2>
        </div>
        <blockquote>
          «Нам важно, чтобы решение о процедуре было спокойным и понятным».
        </blockquote>
        <div className="approach-list">
          {approach.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="featured-section" aria-labelledby="featured-title">
        <div className="section-intro">
          <p className="eyebrow">Популярные процедуры</p>
          <h2 id="featured-title">Для первого знакомства</h2>
        </div>
        <div className="featured-grid">
          {featuredServices.map((service) => (
            <article className="featured-card" key={service.slug}>
              <p className="catalog-category">
                {serviceCategories.find((category) => category.id === service.categoryId)?.navTitle}
              </p>
              <h3><Link href={'/services/' + service.slug}>{service.shortTitle}</Link></h3>
              <p>{service.summary}</p>
              <div className="featured-card-bottom">
                <span>{service.duration}</span>
                <Link href={'/services/' + service.slug} aria-label={'Подробнее: ' + service.title}>↗</Link>
              </div>
            </article>
          ))}
        </div>
        <Link className="button button-outline" href="/services">Все услуги <span aria-hidden="true">↗</span></Link>
      </section>

      <section className="specialists-preview" aria-labelledby="specialists-title">
        <div>
          <p className="eyebrow">Специалисты</p>
          <h2 id="specialists-title">Доверие начинается с&nbsp;проверяемых фактов</h2>
        </div>
        <div className="specialist-placeholder">
          <span className="placeholder-initials" aria-hidden="true">Имя</span>
          <div>
            <p className="placeholder-label">Карточки готовятся к публикации</p>
            <p>
              Мы добавим имена, образование, действующую аккредитацию, стаж и
              фотографии после того, как клиника предоставит подтверждающие сведения.
            </p>
            <Link className="text-link" href="/specialists">Что будет указано <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <Reviews />
      <Faq />

      <section className="home-contact" aria-labelledby="contact-title">
        <div className="contact-copy">
          <p className="eyebrow">Контакты</p>
          <h2 id="contact-title">В центре Екатеринбурга</h2>
          <address>
            <p>{siteData.contacts.address}</p>
            <p>{siteData.contacts.hours}</p>
          </address>
          <div className="contact-actions">
            <a href={siteData.contacts.phoneHref}>{siteData.contacts.phone}</a>
            <a href={siteData.contacts.whatsapp} target="_blank" rel="noreferrer">Написать в WhatsApp ↗</a>
            <a href={siteData.links.yandexMaps} target="_blank" rel="noreferrer">Построить маршрут ↗</a>
          </div>
        </div>
        <div className="map-frame">
          <iframe
            title="Клиника Дарьи Долгушиной на карте"
            src="https://yandex.ru/map-widget/v1/?oid=53742534634"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <BookingStrip />
    </main>
  );
}
