import { siteData } from '@/data/site';

type BookingStripProps = {
  title?: string;
  text?: string;
};

export function BookingStrip({
  title = 'Выберите удобное время',
  text = 'Актуальное расписание и стоимость услуг доступны в Yclients.',
}: BookingStripProps) {
  return (
    <section className="booking-strip" aria-label="Онлайн-запись">
      <div>
        <p className="eyebrow">Онлайн-запись</p>
        <h2>{title}</h2>
      </div>
      <p>{text}</p>
      <a className="button button-light" href={siteData.links.booking} target="_blank" rel="noreferrer">
        Перейти к записи <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}
