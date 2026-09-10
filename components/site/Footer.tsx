import { siteData } from '@/data/site';
import { SiteLink } from '@/components/site/SiteLink';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <SiteLink className="footer-brand" href="/">
            <span className="wordmark-mark" aria-hidden="true">ДД</span>
            <span>{siteData.brand.name}</span>
          </SiteLink>
          <p className="footer-note">
            Эстетический уход и понятный выбор процедур в центре Екатеринбурга.
          </p>
        </div>
        <div className="footer-column">
          <p className="footer-label">Навигация</p>
          <SiteLink href="/services">Услуги</SiteLink>
          <SiteLink href="/specialists">Специалисты</SiteLink>
          <SiteLink href="/prices">Цены</SiteLink>
          <SiteLink href="/contacts">Контакты</SiteLink>
        </div>
        <div className="footer-column">
          <p className="footer-label">Связаться</p>
          <a href={siteData.contacts.phoneHref}>{siteData.contacts.phone}</a>
          <a href={siteData.contacts.whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a>
          <a href={siteData.contacts.telegram} target="_blank" rel="noreferrer">Telegram ↗</a>
          <a href={siteData.links.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
        </div>
        <div className="footer-column">
          <p className="footer-label">Адрес</p>
          <p>{siteData.contacts.address}</p>
          <p>{siteData.contacts.hours}</p>
        </div>
      </div>
      <div className="footer-legal">
        <span>© {new Date().getFullYear()} {siteData.brand.name}</span>
        <span>{siteData.legal.operator} · ИНН {siteData.legal.inn} · ОГРНИП {siteData.legal.ogrnip}</span>
        <SiteLink href="/legal">Правовая информация и политика</SiteLink>
      </div>
    </footer>
  );
}
