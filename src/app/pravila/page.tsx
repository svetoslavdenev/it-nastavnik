import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Общи Условия - IT Наставник | Правила и Условия",
  description: "Общи условия за ползване на услугите на IT Наставник. Права и задължения на клиентите, цени, плащания и правна информация.",
  keywords: "общи условия, правила IT наставник, условия ползване, права клиенти, IT услуги условия",
  robots: {
    index: true,
    follow: false,
  },
  openGraph: {
    title: "Общи Условия - IT Наставник",
    description: "Общи условия за ползване на услугите на IT Наставник. Права и задължения на клиентите.",
    url: "https://it-nastavnik.com/pravila",
  },
  alternates: {
    canonical: "https://it-nastavnik.com/pravila",
  },
};

export default function PravilaPage() {
  const sections = [
    {
      title: '1. Общи положения',
      content: [
        'Настоящите общи условия регулират отношенията между IT Наставник (наричани по-долу "Доставчик") и клиентите, които използват нашите услуги.',
        'Използването на нашите услуги означава пълно приемане на настоящите условия.',
        'Доставчикът си запазва правото да променя тези условия по всяко време, като промените влизат в сила от момента на публикуването им на уебсайта.'
      ]
    },
    {
      title: '2. Описание на услугите',
      content: [
        'IT Наставник предлага следните услуги: персонализирани IT консултации, уроци по програмиране, подготовка за технически интервюта и дългосрочно менторство.',
        'Всички услуги се предоставят въз основа на предварително договорени условия и график.',
        'Съдържанието и продължителността на услугите се определят индивидуално за всеки клиент.'
      ]
    },
    {
      title: '3. Заявяване на услуги',
      content: [
        'Услугите се заявяват чрез попълване на онлайн формата на уебсайта или чрез директен контакт.',
        'Първоначалната консултация е безплатна и служи за определяне на нуждите на клиента.',
        'След първоначалната консултация се изготвя персонализирано предложение с цена и график.'
      ]
    },
    {
      title: '4. Цени и плащания',
      content: [
        'Цените се определят индивидуално въз основа на обхвата и сложността на услугите.',
        'Плащането се извършва предварително или според договорените условия.',
        'Приемаме банков превод, плащане с карта и други договорени начини за плащане.',
        'При отказ от услугата от страна на клиента, възстановяването на средствата се обсъжда индивидуално.'
      ]
    },
    {
      title: '5. Задължения на клиента',
      content: [
        'Клиентът се задължава да предостави точна и актуална информация при заявяване на услугите.',
        'Клиентът трябва да спазва договорените срокове и да участва активно в процеса на обучение/консултиране.',
        'При отмяна на сесия, клиентът трябва да уведоми поне 24 часа предварително.'
      ]
    },
    {
      title: '6. Задължения на доставчика',
      content: [
        'Доставчикът се задължава да предостави качествени услуги според договорените условия.',
        'Всички консултации и уроци се провеждат от квалифицирани специалисти.',
        'Доставчикът гарантира конфиденциалност на всички споделени данни и информация.'
      ]
    },
    {
      title: '7. Конфиденциалност',
      content: [
        'Всички данни и информация, споделени по време на консултациите, се третират като строго конфиденциални.',
        'Доставчикът не разкрива информация за клиентите на трети страни без изрично съгласие.',
        'Подробности за обработката на лични данни са описани в нашата Политика за поверителност.'
      ]
    },
    {
      title: '8. Отговорност',
      content: [
        'Доставчикът не носи отговорност за резултатите от интервюта или кариерното развитие на клиента.',
        'Услугите се предоставят като съвети и насоки, а крайният резултат зависи от усилията на клиента.',
        'Отговорността на доставчика е ограничена до стойността на платените услуги.'
      ]
    },
    {
      title: '9. Прекратяване на услугите',
      content: [
        'Всяка от страните може да прекрати сътрудничеството с предизвестие от 7 дни.',
        'При нарушение на условията от страна на клиента, доставчикът може да прекрати услугите незабавно.',
        'При прекратяване се уреждат всички финансови задължения между страните.'
      ]
    },
    {
      title: '10. Приложимо право',
      content: [
        'Настоящите условия се регулират от българското законодателство.',
        'Всички спорове се решават чрез преговори, а при невъзможност - от компетентните български съдилища.',
        'При противоречие между различните езикови версии, българската версия има приоритет.'
      ]
    }
  ];

  return (
    <div className="bg-gray-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 gradient-bg overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up mb-8">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
                <span className="text-sm font-medium text-white/90 mr-2">📋 Правни условия</span>
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
                Общи условия
              </h1>
            </div>
            <div className="animate-fade-in-up stagger-2">
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Условия за ползване на нашите услуги и права на клиентите
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Last Updated */}
            <div className="mb-12 text-center animate-fade-in-up">
              <div className="inline-flex items-center glass px-6 py-3 rounded-full border border-gray-700/50">
                <span className="text-sm text-gray-300 mr-2">Последна актуализация:</span>
                <span className="text-sm font-semibold text-blue-400">{new Date().toLocaleDateString('bg-BG')}</span>
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className={`glass p-8 rounded-2xl border border-gray-700/50 animate-fade-in-up stagger-${Math.min(index + 1, 6)}`}
                >
                  <h2 className="text-2xl font-bold text-white mb-6 gradient-text">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-300 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-16 glass p-8 rounded-2xl border border-gray-700/50 text-center animate-fade-in-up">
              <h3 className="text-xl font-bold text-white mb-4">Въпроси относно условията?</h3>
              <p className="text-gray-300 mb-6">
                Ако имате въпроси относно настоящите общи условия, моля свържете се с нас.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:office@it-nastavnik.com"
                  className="interactive-button bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-blue-500/25 transition-all duration-300 inline-flex items-center group"
                >
                  <span className="mr-2 group-hover:animate-pulse">📧</span>
                  office@it-nastavnik.com
                </a>
                <a
                  href="tel:+359888123456"
                  className="interactive-button glass border-2 border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center group"
                >
                  <span className="mr-2 group-hover:animate-pulse">📞</span>
                  +359 888 123 456
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
