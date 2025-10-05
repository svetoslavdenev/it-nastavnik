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
        url: '/og-image.jpg',
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
    images: ['/og-image.jpg'],
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
