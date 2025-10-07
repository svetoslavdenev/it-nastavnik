import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IT Наставник - Професионална помощ за разработчици",
  description: "Предлагаме консултации, уроци и подготовка за интервюта за софтуерни разработчици. Специализираме се в системен дизайн, C#/.NET, Golang и микросервиси.",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  keywords: "IT консултации, системен дизайн, C# .NET уроци, Golang обучение, микросервиси, бази данни SQL, подготовка интервю, IT ментор, backend разработка",
  authors: [{ name: "IT Наставник" }],
  creator: "IT Наставник",
  publisher: "IT Наставник",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'bg_BG',
    url: 'https://it-nastavnik.com',
    siteName: 'IT Наставник',
    title: 'IT Наставник - Професионална помощ за разработчици',
    description: 'Предлагаме консултации, уроци и подготовка за интервюта за софтуерни разработчици. Специализираме се в системен дизайн, C#/.NET, Golang и микросервиси.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'IT Наставник - Професионална помощ за разработчици',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Наставник - Професионална помощ за разработчици',
    description: 'Предлагаме консултации, уроци и подготовка за интервюта за софтуерни разработчици. Специализираме се в системен дизайн, C#/.NET, Golang и микросервиси.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://it-nastavnik.com',
  },
  category: 'Education',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg">
      <head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1240007331226183');
              fbq('track', 'PageView');
            `
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1240007331226183&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
