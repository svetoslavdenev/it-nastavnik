import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Политика за Бисквитки - IT Наставник | Cookie Policy",
  description: "Подробна информация за използването на бисквитки на уебсайта на IT Наставник. Видове бисквитки, цели и как да ги управлявате.",
  keywords: "политика бисквитки, cookies policy, управление бисквитки, уеб бисквитки, IT наставник бисквитки",
  robots: {
    index: true,
    follow: false,
  },
  openGraph: {
    title: "Политика за Бисквитки - IT Наставник",
    description: "Подробна информация за използването на бисквитки и как да ги управлявате.",
    url: "https://it-nastavnik.com/cookies",
  },
  alternates: {
    canonical: "https://it-nastavnik.com/cookies",
  },
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
