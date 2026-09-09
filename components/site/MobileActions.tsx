import { siteData } from '@/data/site';

export function MobileActions() {
  return (
    <nav className="mobile-actions" aria-label="Быстрые действия">
      <a className="mobile-action-primary" href={siteData.links.booking} target="_blank" rel="noreferrer">
        Записаться
      </a>
      <a href={siteData.contacts.phoneHref}>Позвонить</a>
      <a href={siteData.contacts.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
    </nav>
  );
}
