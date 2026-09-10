import { siteData } from '@/data/site';
import { SiteLink } from '@/components/site/SiteLink';

export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <p className="eyebrow">404</p>
      <h1>Такой страницы нет</h1>
      <p>
        Возможно, адрес изменился. Вернитесь на главную или откройте каталог услуг.
      </p>
      <div className="hero-actions">
        <SiteLink className="button button-primary" href="/">На главную</SiteLink>
        <SiteLink className="text-link" href="/services">Выбрать услугу ↗</SiteLink>
        <a className="text-link" href={siteData.links.booking} target="_blank" rel="noreferrer">Записаться ↗</a>
      </div>
    </main>
  );
}
