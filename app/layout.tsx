import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import { Footer } from '@/components/site/Footer';
import { Header } from '@/components/site/Header';
import { MobileActions } from '@/components/site/MobileActions';
import { StructuredData } from '@/components/site/StructuredData';
import { absoluteUrl, deploymentBasePath, siteData, sitePath } from '../data/site';
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
  metadataBase: new URL(absoluteUrl()),
  title: {
    default: `${siteData.brand.name} — косметология в Екатеринбурге`,
    template: `%s — ${siteData.brand.name}`,
  },
  description:
    'Эстетическая и аппаратная косметология, лазерная эпиляция и массаж в центре Екатеринбурга. Понятный выбор процедур и онлайн-запись.',
  icons: { icon: deploymentBasePath + '/icon.svg' },
  alternates: { canonical: absoluteUrl() },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    title: `${siteData.brand.name} — косметология в Екатеринбурге`,
    description:
      'Деликатный уход, аппаратные процедуры, лазерная эпиляция и массаж в центре Екатеринбурга.',
    url: absoluteUrl(),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="manifest" href={sitePath('/manifest.webmanifest')} />
      </head>
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
