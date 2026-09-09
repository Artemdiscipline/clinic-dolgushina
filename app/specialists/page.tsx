import type { Metadata } from 'next';
import { BookingStrip } from '@/components/site/BookingStrip';
import { PageHero } from '@/components/site/PageHero';
import { specialists } from '@/data/site';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Специалисты',
  description:
    'Специалисты Клиники Дарьи Долгушиной. Профили публикуются только после проверки образования и аккредитации.',
  alternates: { canonical: '/specialists' },
};

export default function SpecialistsPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="Команда"
        title="Знакомство начинается с фактов"
        lead="На этой странице будут опубликованы полные имена, специализация, образование, аккредитация, стаж и направления работы — после документального подтверждения."
      />
      <section className="specialists-section" aria-label="Специалисты">
        {specialists.length > 0 ? (
          <div className="specialists-grid">
            {specialists.map((specialist) => (
              <article className="specialist-card" key={specialist.name}>
                <Image src={specialist.photo} alt={specialist.name} width="640" height="420" />
                <h2>{specialist.name}</h2>
                <p>{specialist.specialty}</p>
                <dl>
                  <div><dt>Образование</dt><dd>{specialist.education}</dd></div>
                  <div><dt>Аккредитация</dt><dd>{specialist.accreditation}</dd></div>
                  <div><dt>Стаж</dt><dd>{specialist.experience}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-specialists">
            <div className="empty-specialist-visual">
              <span aria-hidden="true">Имя</span>
            </div>
            <div>
              <p className="eyebrow">Данные готовятся</p>
              <h2>Карточки появятся после проверки документов</h2>
              <p>
                Мы не публикуем вымышленные имена, фотографии, образование,
                стаж или квалификацию. Пока выбрать специалиста можно в
                сервисе онлайн-записи.
              </p>
            </div>
          </div>
        )}
      </section>
      <BookingStrip title="Посмотреть доступных специалистов" />
    </main>
  );
}
