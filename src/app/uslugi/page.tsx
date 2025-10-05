import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Услуги - IT Наставник | Консултации, Уроци, Подготовка за Интервюта",
  description: "Открийте нашите IT услуги: системен дизайн, C#/.NET и Golang консултации, микросервиси архитектура, бази данни и подготовка за интервюта. Професионална помощ за вашата IT кариера.",
  keywords: "IT услуги, системен дизайн, C# .NET уроци, Golang обучение, микросервиси, бази данни SQL, подготовка интервю, IT ментор, софтуерна архитектура",
  openGraph: {
    title: "Услуги - IT Наставник | Консултации, Уроци, Подготовка за Интервюта",
    description: "Открийте нашите IT услуги: системен дизайн, C#/.NET и Golang консултации, микросервиси архитектура и подготовка за интервюта.",
    url: "https://it-nastavnik.com/uslugi",
  },
  alternates: {
    canonical: "https://it-nastavnik.com/uslugi",
  },
};

export default function UslugiPage() {
  const services = [
    {
      id: 'consultations',
      title: 'IT Консултации',
      icon: '💬',
      description: 'Персонализирани консултации за решаване на технически проблеми и кариерно развитие',
      features: [
        'Архитектурни решения',
        'Code review и оптимизация',
        'Технически съвети',
        'Кариерно планиране',
        'Избор на технологии'
      ],
      duration: '1-2 часа',
      color: 'blue'
    },
    {
      id: 'lessons',
      title: 'Персонализирани уроци',
      icon: '📚',
      description: 'Структурирани уроци по програмиране и нови технологии за всички нива',
      features: [
        'C#, .NET Framework/Core',
        'Golang и микросервиси',
        'Системен дизайн и архитектура',
        'Бази данни и SQL оптимизация',
        'Основни концепции и patterns'
      ],
      duration: '1.5-3 часа',
      color: 'green'
    },
    {
      id: 'interview-prep',
      title: 'Подготовка за интервюта',
      icon: '🎯',
      description: 'Специализирана подготовка за технически интервюта в IT компании',
      features: [
        'Алгоритми и структури данни',
        'Системен дизайн',
        'Поведенчески въпроси',
        'Mock интервюта',
        'CV и LinkedIn оптимизация'
      ],
      duration: '2-4 часа',
      color: 'purple'
    },
    {
      id: 'mentorship',
      title: 'Менторство',
      icon: '🚀',
      description: 'Дългосрочно менторство за професионално развитие в IT сферата',
      features: [
        'Месечни планове за развитие',
        'Регулярни check-in сесии',
        'Проектно ръководство',
        'Networking възможности',
        'Кариерни съвети'
      ],
      duration: '3-6 месеца',
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'from-blue-500 to-blue-600',
        border: 'border-blue-400/50',
        text: 'text-blue-400',
        hover: 'hover:text-blue-300'
      },
      green: {
        bg: 'from-green-500 to-green-600',
        border: 'border-green-400/50',
        text: 'text-green-400',
        hover: 'hover:text-green-300'
      },
      purple: {
        bg: 'from-purple-500 to-purple-600',
        border: 'border-purple-400/50',
        text: 'text-purple-400',
        hover: 'hover:text-purple-300'
      },
      orange: {
        bg: 'from-orange-500 to-orange-600',
        border: 'border-orange-400/50',
        text: 'text-orange-400',
        hover: 'hover:text-orange-300'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="bg-gray-950 min-h-screen">
      {/* Services Grid */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const colorClasses = getColorClasses(service.color);
              return (
                <div
                  key={service.id}
                  className={`interactive-card glass p-8 rounded-2xl border border-gray-700/50 group animate-fade-in-up stagger-${index + 1}`}
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses.bg} rounded-2xl flex items-center justify-center mr-4 group-hover:animate-glow transition-all duration-300`}>
                        <span className="text-2xl">{service.icon}</span>
                      </div>
                      <div>
                        <h3 className={`text-2xl font-bold text-white mb-2 group-hover:${colorClasses.text} transition-colors`}>
                          {service.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-400">
                          <span>⏱️ {service.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Service Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4">Включва:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <span className={`mr-3 ${colorClasses.text}`}>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/zayavka"
                    className={`inline-flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 group-hover:translate-x-2 ${colorClasses.text} ${colorClasses.hover} border ${colorClasses.border} hover:bg-white/5`}
                  >
                    Заявете разговор
                    <span className="ml-2 group-hover:animate-pulse">→</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.3) 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-white mb-6 gradient-text">Как работим</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Нашият процес е проектиран да ви осигури максимална стойност и резултати
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: '01',
                title: 'Консултация',
                description: 'Безплатна първоначална консултация за определяне на вашите нужди',
                icon: '📞'
              },
              {
                step: '02',
                title: 'Планиране',
                description: 'Създаваме персонализиран план според вашите цели и график',
                icon: '📋'
              },
              {
                step: '03',
                title: 'Изпълнение',
                description: 'Работим заедно за постигане на поставените цели',
                icon: '🚀'
              },
              {
                step: '04',
                title: 'Проследяване',
                description: 'Продължаваме да ви подкрепяме и след завършване на услугата',
                icon: '📈'
              }
            ].map((item, index) => (
              <div key={index} className={`text-center group animate-fade-in-up stagger-${index + 1}`}>
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-glow transition-all duration-300 group-hover:scale-110">
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg py-24 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-cyan-300 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6 text-white">Готови за следващата стъпка?</h2>
            <p className="text-xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Оставете вашите данни и ние ще се свържем с вас за безплатна консултация
            </p>
          </div>
          <div className="animate-fade-in-up stagger-2">
            <Link
              href="/zayavka"
              className="interactive-button bg-white text-gray-900 px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-white/25 transition-all duration-300 inline-flex items-center group"
            >
              <span className="mr-3 group-hover:animate-pulse">📞</span>
              Заявете разговор
              <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
