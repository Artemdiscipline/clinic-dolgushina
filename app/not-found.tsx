import { siteData } from '@/data/site';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <p className="eyebrow">404</p>
      <h1>Такой страницы нет</h1>
      <p>
        Возможно, адрес изменился. Вернитесь на главную или откройте каталог услуг.
      </p>
      <div className="hero-actions">
        <Link className="button button-primary" href="/">На главную</Link>
        <Link className="text-link" href="/services">Выбрать услугу ↗</Link>
        <a className="text-link" href={siteData.links.booking} target="_blank" rel="noreferrer">Записаться ↗</a>
      </div>
    </main>
  );
}
