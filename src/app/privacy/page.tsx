import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Политика за Поверителност - IT Наставник | GDPR Съответствие",
  description: "Политика за поверителност на IT Наставник. GDPR съвместима защита на личните данни, права на потребителите и сигурност на информацията.",
  keywords: "политика поверителност, GDPR, защита данни, лични данни, права потребители, IT наставник поверителност",
  robots: {
    index: true,
    follow: false,
  },
  openGraph: {
    title: "Политика за Поверителност - IT Наставник",
    description: "GDPR съвместима политика за поверителност и защита на личните данни.",
    url: "https://it-nastavnik.com/privacy",
  },
  alternates: {
    canonical: "https://it-nastavnik.com/privacy",
  },
};

export default function PrivacyPage() {
  const sections = [
    {
      title: '1. Обща информация',
      content: [
        'IT Наставник ("ние", "нашата компания") се ангажира да защитава поверителността на вашите лични данни.',
        'Настоящата политика за поверителност описва как събираме, използваме, съхраняваме и защитаваме вашите лични данни в съответствие с Общия регламент за защита на данните (GDPR).',
        'Тази политика се прилага за всички услуги, предоставяни от IT Наставник, включително уебсайта ни и всички форми на комуникация.'
      ]
    },
    {
      title: '2. Събирани данни',
      content: [
        'Лични идентификационни данни: име, имейл адрес, телефонен номер',
        'Професионална информация: текуща позиция, опит, технически умения, кариерни цели',
        'Комуникационни данни: съдържанието на нашата кореспонденция и консултации',
        'Технически данни: IP адрес, тип браузър, операционна система, данни за посещенията на уебсайта',
        'Данни за използването: как използвате нашите услуги и уебсайт'
      ]
    },
    {
      title: '3. Цели на обработката',
      content: [
        'Предоставяне на заявените услуги (консултации, уроци, подготовка за интервюта)',
        'Комуникация с клиентите и отговаряне на запитвания',
        'Подобряване на качеството на нашите услуги',
        'Изпълнение на правни задължения',
        'Маркетинг и информиране за нови услуги (само с ваше съгласие)'
      ]
    },
    {
      title: '4. Правно основание',
      content: [
        'Изпълнение на договор: за предоставяне на заявените услуги',
        'Законен интерес: за подобряване на услугите и комуникация',
        'Съгласие: за маркетингови дейности и незадължителни услуги',
        'Правно задължение: за спазване на данъчното и счетоводното законодателство'
      ]
    },
    {
      title: '5. Споделяне на данни',
      content: [
        'Не продаваме, не отдаваме под наем и не споделяме вашите лични данни с трети страни за комерсиални цели.',
        'Данните могат да бъдат споделени само в следните случаи:',
        '• С ваше изрично съгласие',
        '• При правно задължение или съдебна заповед',
        '• С доверени доставчици на услуги, които ни помагат в дейността ни (под строги договори за поверителност)'
      ]
    },
    {
      title: '6. Съхранение на данни',
      content: [
        'Личните данни се съхраняват само толкова дълго, колкото е необходимо за постигане на целите, за които са събрани.',
        'Данни за активни клиенти: до приключване на услугите плюс 3 години',
        'Счетоводни данни: 5 години съгласно българското законодателство',
        'Маркетингови данни: до оттегляне на съгласието',
        'Данни от уебсайта: до 2 години'
      ]
    },
    {
      title: '7. Сигурност на данните',
      content: [
        'Прилагаме подходящи технически и организационни мерки за защита на вашите данни.',
        'Използваме SSL криптиране за всички онлайн комуникации.',
        'Достъпът до личните данни е ограничен само до упълномощени служители.',
        'Редовно актуализираме нашите системи за сигурност и провеждаме обучения на персонала.'
      ]
    },
    {
      title: '8. Вашите права',
      content: [
        'Право на достъп: можете да поискате копие от вашите лични данни',
        'Право на поправка: можете да поискате корекция на неточни данни',
        'Право на заличаване: можете да поискате изтриване на вашите данни',
        'Право на ограничаване: можете да поискате ограничаване на обработката',
        'Право на преносимост: можете да поискате прехвърляне на данните',
        'Право на възражение: можете да възразите срещу обработката',
        'Право да подадете жалба до Комисията за защита на личните данни'
      ]
    },
    {
      title: '9. Бисквитки',
      content: [
        'Нашият уебсайт използва бисквитки за подобряване на потребителското изживяване.',
        'Подробна информация за използваните бисквитки можете да намерите в нашата Политика за бисквитки.',
        'Можете да управлявате настройките за бисквитки чрез вашия браузър.'
      ]
    },
    {
      title: '10. Промени в политиката',
      content: [
        'Запазваме си правото да актуализираме тази политика за поверителност.',
        'При съществени промени ще ви уведомим чрез имейл или чрез съобщение на уебсайта.',
        'Препоръчваме редовно да преглеждате тази страница за актуални промени.'
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
                <span className="text-sm font-medium text-white/90 mr-2">🔒 GDPR съвместимост</span>
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
                Политика за поверителност
              </h1>
            </div>
            <div className="animate-fade-in-up stagger-2">
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Как защитаваме и обработваме вашите лични данни
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

            {/* GDPR Notice */}
            <div className="mb-12 glass p-6 rounded-2xl border border-green-500/50 bg-green-500/5 animate-fade-in-up">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-2xl">🛡️</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-green-400 mb-2">GDPR Съответствие</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Тази политика за поверителност е изготвена в съответствие с изискванията на Общия регламент за защита на данните (GDPR) и българското законодателство за защита на личните данни.
                  </p>
                </div>
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

            {/* Contact for Data Protection */}
            <div className="mt-16 glass p-8 rounded-2xl border border-gray-700/50 animate-fade-in-up">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="mr-3">🔐</span>
                Контакт за защита на данните
              </h3>
              <p className="text-gray-300 mb-6">
                За въпроси относно обработката на вашите лични данни или за упражняване на вашите права:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="mailto:office@it-nastavnik.com"
                  className="interactive-button bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-blue-500/25 transition-all duration-300 inline-flex items-center group"
                >
                  <span className="mr-2 group-hover:animate-pulse">📧</span>
                  office@it-nastavnik.com
                </a>
                <a
                  href="tel:+359888123456"
                  className="interactive-button glass border-2 border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center group"
                >
                  <span className="mr-2 group-hover:animate-pulse">📞</span>
                  +359 888 123 456
                </a>
              </div>
              <div className="mt-6 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                <p className="text-sm text-blue-300">
                  💡 Ще отговорим на вашето запитване в рамките на 30 дни, както изисква GDPR.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
