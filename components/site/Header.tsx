'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { siteData } from '@/data/site';
import Link from 'next/link';

const navigation = [
  { label: 'Услуги', href: '/services' },
  { label: 'Специалисты', href: '/specialists' },
  { label: 'Цены', href: '/prices' },
  { label: 'Контакты', href: '/contacts' },
] as const;

export function Header() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Клиника Дарьи Долгушиной — на главную">
        <span className="wordmark-mark" aria-hidden="true">ДД</span>
        <span>Клиника Дарьи<br />Долгушиной</span>
      </Link>

      <nav className="header-nav" aria-label="Основная навигация">
        {navigation.map((item) => (
          <Link href={item.href} key={item.href}>{item.label}</Link>
        ))}
      </nav>

      <div className="header-actions">
        <a className="header-phone" href={siteData.contacts.phoneHref}>
          {siteData.contacts.phone}
        </a>
        <a
          className="header-book"
          href={siteData.links.booking}
          target="_blank"
          rel="noreferrer"
        >
          Записаться <span aria-hidden="true">↗</span>
        </a>
        <Sheet>
          <SheetTrigger className="menu-trigger" aria-label="Открыть меню">
            Меню
          </SheetTrigger>
          <SheetContent className="menu-sheet">
            <div className="menu-sheet-top">
              <SheetTitle className="menu-sheet-title">Меню</SheetTitle>
              <SheetDescription className="menu-sheet-description">
                {siteData.brand.name}
              </SheetDescription>
            </div>
            <nav className="mobile-nav" aria-label="Мобильная навигация">
              {navigation.map((item) => (
                <Link href={item.href} key={item.href}>{item.label}<span aria-hidden="true">↗</span></Link>
              ))}
              <Link href="/legal">Правовая информация<span aria-hidden="true">↗</span></Link>
            </nav>
            <div className="menu-sheet-contact">
              <a href={siteData.contacts.phoneHref}>{siteData.contacts.phone}</a>
              <p>{siteData.contacts.address}</p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
