import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Клиника Дарьи Долгушиной',
    short_name: 'Клиника ДД',
    description: 'Косметология и уход в центре Екатеринбурга',
    start_url: '/',
    display: 'standalone',
    background_color: '#f3f0e9',
    theme_color: '#6e243b',
    lang: 'ru',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
