import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Често Задавани Въпроси - IT Наставник | FAQ",
  description: "Отговори на най-често задаваните въпроси за IT консултации, уроци по програмиране, подготовка за интервюта и цени на услугите.",
  keywords: "FAQ, въпроси отговори, IT консултации въпроси, програмиране помощ, интервю подготовка, цени услуги",
  openGraph: {
    title: "Често Задавани Въпроси - IT Наставник | FAQ",
    description: "Отговори на най-често задаваните въпроси за IT консултации, уроци по програмиране и подготовка за интервюта.",
    url: "https://it-nastavnik.com/faq",
  },
  alternates: {
    canonical: "https://it-nastavnik.com/faq",
  },
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
