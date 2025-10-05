import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Заявете Разговор - IT Наставник | Безплатна Консултация",
  description: "Заявете безплатна консултация с IT експерт. Оставете вашите данни и ние ще се свържем с вас за персонализирана помощ с вашата IT кариера.",
  keywords: "заявка консултация, IT помощ, безплатна консултация, IT ментор, програмиране помощ, кариерни съвети",
  openGraph: {
    title: "Заявете Разговор - IT Наставник | Безплатна Консултация",
    description: "Заявете безплатна консултация с IT експерт. Оставете вашите данни и ние ще се свържем с вас.",
    url: "https://it-nastavnik.com/zayavka",
  },
  alternates: {
    canonical: "https://it-nastavnik.com/zayavka",
  },
};

export default function ZayavkaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
