import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'IT Наставник - Професионална помощ за разработчици',
    short_name: 'IT Наставник',
    description: 'Професионални IT консултации, уроци по програмиране и подготовка за интервюта',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['education', 'business', 'productivity'],
    lang: 'bg',
    orientation: 'portrait-primary',
  }
}
