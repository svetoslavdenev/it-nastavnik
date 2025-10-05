'use client';

import { useState, useEffect } from 'react';

export default function CookiesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };


  const cookieCategories = [
    {
      id: 'essential',
      title: 'Задължителни бисквитки',
      description: 'Тези бисквитки са необходими за правилното функциониране на уебсайта и не могат да бъдат изключени.',
      color: 'green',
      cookies: [
        {
          name: 'session_id',
          purpose: 'Поддържа сесията на потребителя по време на посещението',
          duration: 'До затваряне на браузъра',
          type: 'HTTP Cookie'
        },
        {
          name: 'csrf_token',
          purpose: 'Защитава от CSRF атаки при изпращане на форми',
          duration: '24 часа',
          type: 'HTTP Cookie'
        },
        {
          name: 'cookie_consent',
          purpose: 'Запомня вашите предпочитания за бисквитки',
          duration: '1 година',
          type: 'HTTP Cookie'
        }
      ]
    },
    {
      id: 'functional',
      title: 'Функционални бисквитки',
      description: 'Тези бисквитки подобряват функционалността на уебсайта и персонализират изживяването.',
      color: 'blue',
      cookies: [
        {
          name: 'language_preference',
          purpose: 'Запомня избрания език на интерфейса',
          duration: '6 месеца',
          type: 'HTTP Cookie'
        },
        {
          name: 'theme_preference',
          purpose: 'Запомня предпочитанията за тема (светла/тъмна)',
          duration: '1 година',
          type: 'Local Storage'
        },
        {
          name: 'form_data',
          purpose: 'Временно съхранява данни от формите при прекъсване',
          duration: '1 час',
          type: 'Session Storage'
        }
      ]
    },
    {
      id: 'analytics',
      title: 'Аналитични бисквитки',
      description: 'Тези бисквитки ни помагат да разберем как посетителите използват уебсайта.',
      color: 'purple',
      cookies: [
        {
          name: '_ga',
          purpose: 'Google Analytics - отличава уникални потребители',
          duration: '2 години',
          type: 'HTTP Cookie'
        },
        {
          name: '_ga_*',
          purpose: 'Google Analytics - съхранява състоянието на сесията',
          duration: '2 години',
          type: 'HTTP Cookie'
        },
        {
          name: 'page_views',
          purpose: 'Брои посещенията на различни страници',
          duration: '30 дни',
          type: 'HTTP Cookie'
        }
      ]
    },
    {
      id: 'marketing',
      title: 'Маркетингови бисквитки',
      description: 'Тези бисквитки се използват за показване на релевантни реклами и маркетингови съобщения.',
      color: 'orange',
      cookies: [
        {
          name: 'marketing_consent',
          purpose: 'Запомня съгласието за маркетингови комуникации',
          duration: '1 година',
          type: 'HTTP Cookie'
        },
        {
          name: 'utm_source',
          purpose: 'Проследява източника на трафика за маркетингови цели',
          duration: '30 дни',
          type: 'HTTP Cookie'
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: {
        bg: 'from-green-500 to-green-600',
        border: 'border-green-400/50',
        text: 'text-green-400',
        bgLight: 'bg-green-500/10'
      },
      blue: {
        bg: 'from-blue-500 to-blue-600',
        border: 'border-blue-400/50',
        text: 'text-blue-400',
        bgLight: 'bg-blue-500/10'
      },
      purple: {
        bg: 'from-purple-500 to-purple-600',
        border: 'border-purple-400/50',
        text: 'text-purple-400',
        bgLight: 'bg-purple-500/10'
      },
      orange: {
        bg: 'from-orange-500 to-orange-600',
        border: 'border-orange-400/50',
        text: 'text-orange-400',
        bgLight: 'bg-orange-500/10'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

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
                <span className="text-sm font-medium text-white/90 mr-2">🍪 Прозрачност за бисквитки</span>
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
                Политика за бисквитки
              </h1>
            </div>
            <div className="animate-fade-in-up stagger-2">
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Как използваме бисквитки за подобряване на вашето изживяване
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

            {/* What are cookies */}
            <div className="mb-16 glass p-8 rounded-2xl border border-gray-700/50 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-white mb-6 gradient-text">Какво са бисквитките?</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Бисквитките са малки текстови файлове, които се съхраняват на вашето устройство (компютър, таблет или мобилен телефон) когато посещавате уебсайт.
                </p>
                <p>
                  Те ни помагат да направим уебсайта по-полезен за вас, като запомняме вашите предпочитания и подобряваме вашето изживяване при следващи посещения.
                </p>
                <p>
                  Можете да контролирате и/или изтриете бисквитките според желанието си. За подробности вижте aboutcookies.org. Можете да изтриете всички бисквитки, които вече са на вашия компютър, и можете да настроите повечето браузъри да предотвратят поставянето им.
                </p>
              </div>
            </div>

            {/* Cookie Categories */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white text-center mb-12 gradient-text animate-fade-in-up">
                Видове бисквитки, които използваме
              </h2>

              {cookieCategories.map((category, index) => {
                const colorClasses = getColorClasses(category.color);
                const isActive = activeCategory === category.id;
                
                return (
                  <div
                    key={category.id}
                    className={`glass rounded-2xl border border-gray-700/50 overflow-hidden transition-all duration-300 animate-fade-in-up stagger-${index + 1}`}
                  >
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="w-full p-8 text-left hover:bg-white/5 transition-colors duration-300 group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses.bg} rounded-2xl flex items-center justify-center mr-6 group-hover:animate-glow transition-all duration-300`}>
                            <span className="text-2xl">
                              {category.id === 'essential' && '🔒'}
                              {category.id === 'functional' && '⚙️'}
                              {category.id === 'analytics' && '📊'}
                              {category.id === 'marketing' && '📢'}
                            </span>
                          </div>
                          <div>
                            <h3 className={`text-2xl font-bold text-white mb-2 group-hover:${colorClasses.text} transition-colors`}>
                              {category.title}
                            </h3>
                            <p className="text-gray-300">
                              {category.description}
                            </p>
                          </div>
                        </div>
                        <div className={`w-8 h-8 rounded-full ${colorClasses.bgLight} flex items-center justify-center transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>
                          <span className={`${colorClasses.text} text-xl`}>↓</span>
                        </div>
                      </div>
                    </button>

                    <div className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-8 pb-8">
                        <div className="border-t border-gray-700/50 pt-6">
                          <div className="space-y-6">
                            {category.cookies.map((cookie, cookieIndex) => (
                              <div key={cookieIndex} className={`p-4 rounded-xl ${colorClasses.bgLight} border ${colorClasses.border}`}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div>
                                    <h4 className="font-semibold text-white mb-1">{cookie.name}</h4>
                                    <p className="text-sm text-gray-300">{cookie.purpose}</p>
                                  </div>
                                  <div className="space-y-2">
                                    <div className="flex justify-between">
                                      <span className="text-sm text-gray-400">Продължителност:</span>
                                      <span className="text-sm text-white">{cookie.duration}</span>
                                    </div>
                                    <div className="flex justify-between">
                                      <span className="text-sm text-gray-400">Тип:</span>
                                      <span className="text-sm text-white">{cookie.type}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Cookie Management */}
            <div className="mt-16 glass p-8 rounded-2xl border border-gray-700/50 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-white mb-6 gradient-text">Управление на бисквитките</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-blue-500/10 rounded-xl border border-blue-500/20">
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Настройки на браузъра</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Можете да контролирате бисквитките чрез настройките на вашия браузър. Повечето браузъри ви позволяват да блокирате или изтриете бисквитки.
                    </p>
                  </div>
                  <div className="p-6 bg-green-500/10 rounded-xl border border-green-500/20">
                    <h4 className="text-lg font-semibold text-green-400 mb-3">Нашите настройки</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Можете да промените вашите предпочитания за бисквитки по всяко време чрез банера за бисквитки на нашия уебсайт.
                    </p>
                  </div>
                </div>
                
                <div className="p-6 bg-orange-500/10 rounded-xl border border-orange-500/20">
                  <h4 className="text-lg font-semibold text-orange-400 mb-3">⚠️ Важна информация</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Моля, имайте предвид, че блокирането на определени бисквитки може да повлияе на функционалността на уебсайта и вашето потребителско изживяване.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="mt-16 glass p-8 rounded-2xl border border-gray-700/50 text-center animate-fade-in-up">
              <h3 className="text-xl font-bold text-white mb-4">Въпроси за бисквитките?</h3>
              <p className="text-gray-300 mb-6">
                Ако имате въпроси относно нашата употреба на бисквитки, моля свържете се с нас.
              </p>
              <a
                href="mailto:office@it-nastavnik.com"
                className="interactive-button bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-blue-500/25 transition-all duration-300 inline-flex items-center group"
              >
                <span className="mr-2 group-hover:animate-pulse">📧</span>
                office@it-nastavnik.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
