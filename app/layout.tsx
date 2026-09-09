import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import { Footer } from '@/components/site/Footer';
import { Header } from '@/components/site/Header';
import { MobileActions } from '@/components/site/MobileActions';
import { StructuredData } from '@/components/site/StructuredData';
import { siteData } from '../data/site';
import './globals.css';

const display = Cormorant_Garamond({
  variable: '--font-display',
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

const sans = Manrope({
  variable: '--font-sans',
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? siteData.seo.localFallbackUrl,
  ),
  title: {
    default: `${siteData.brand.name} — косметология в Екатеринбурге`,
    template: `%s — ${siteData.brand.name}`,
  },
  description:
    'Эстетическая и аппаратная косметология, лазерная эпиляция и массаж в центре Екатеринбурга. Понятный выбор процедур и онлайн-запись.',
  icons: { icon: '/icon.svg' },
  manifest: '/manifest.webmanifest',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    title: `${siteData.brand.name} — косметология в Екатеринбурге`,
    description:
      'Деликатный уход, аппаратные процедуры, лазерная эпиляция и массаж в центре Екатеринбурга.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={display.variable + ' ' + sans.variable}>
        <a className="skip-link" href="#main-content">Перейти к содержанию</a>
        <Header />
        {children}
        <Footer />
        <MobileActions />
        <StructuredData />
      </body>
    </html>
  );
}
