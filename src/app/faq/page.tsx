'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function FaqPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };


  const faqData = [
    {
      category: 'Общи въпроси',
      questions: [
        {
          question: 'Какви услуги предлагате?',
          answer: 'Предлагаме персонализирани IT консултации, уроци по програмиране, подготовка за технически интервюта и дългосрочно менторство. Всички услуги са адаптирани според вашите индивидуални нужди и цели.'
        },
        {
          question: 'Как работи процесът на консултация?',
          answer: 'Първо заявявате безплатна консултация чрез нашата форма. След това се свързваме с вас, за да обсъдим вашите нужди. Въз основа на разговора създаваме персонализиран план и започваме работа заедно.'
        },
        {
          question: 'За кого са подходящи вашите услуги?',
          answer: 'Нашите услуги са подходящи за начинаещи програмисти, опитни разработчици, които искат да се развиват, хора, които търсят кариерна промяна към IT, и всички, които се подготвят за технически интервюта.'
        }
      ]
    },
    {
      category: 'Консултации и уроци',
      questions: [
        {
          question: 'Какви технологии покривате?',
          answer: 'Специализираме се в backend технологии и системен дизайн: C#/.NET Framework/Core, Golang, микросервиси архитектура, бази данни (SQL Server, PostgreSQL, MongoDB), системен дизайн, основни концепции на програмирането и software engineering principles. Ако имате специфични нужди, обсъдете ги с нас.'
        },
        {
          question: 'Колко време отнема една консултация?',
          answer: 'Консултациите обикновено продължават между 1-2 часа, уроците - 1.5-3 часа, а сесиите за подготовка за интервю - 2-4 часа. Времетраенето зависи от сложността на темата и вашите нужди.'
        },
        {
          question: 'Провеждате ли онлайн сесии?',
          answer: 'Да, предлагаме както онлайн, така и присъствени сесии. Онлайн сесиите се провеждат чрез видео конферентни платформи като Zoom, Google Meet или Teams.'
        }
      ]
    },
    {
      category: 'Подготовка за интервюта',
      questions: [
        {
          question: 'Какво включва подготовката за интервю?',
          answer: 'Подготовката включва алгоритми и структури данни, системен дизайн, поведенчески въпроси, mock интервюта, оптимизация на CV и LinkedIn профил, и стратегии за успешно представяне.'
        },
        {
          question: 'Помагате ли с конкретни компании?',
          answer: 'Да, можем да ви подготвим специално за интервюта в конкретни компании. Имаме опит с процесите на много български и международни IT компании.'
        },
        {
          question: 'Колко време отнема подготовката?',
          answer: 'Времето зависи от вашето текущо ниво и целевата позиция. Обикновено препоръчваме между 4-8 седмици интензивна подготовка за най-добри резултати.'
        }
      ]
    },
    {
      category: 'Цени и плащане',
      questions: [
        {
          question: 'Как се определят цените?',
          answer: 'Цените се определят индивидуално въз основа на вашите нужди, сложността на темите и продължителността на сътрудничеството. Първата консултация е винаги безплатна.'
        },
        {
          question: 'Предлагате ли пакетни цени?',
          answer: 'Да, предлагаме отстъпки за пакети от няколко сесии или дългосрочно менторство. Обсъдете възможностите с нас по време на безплатната консултация.'
        },
        {
          question: 'Какви са начините за плащане?',
          answer: 'Приемаме банков превод, плащане с карта и други удобни за вас начини. Детайлите ще бъдат обсъдени при първоначалната консултация.'
        }
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
                <span className="text-sm font-medium text-white/90 mr-2">❓ Често задавани въпроси</span>
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
                FAQ
              </h1>
            </div>
            <div className="animate-fade-in-up stagger-2">
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Отговори на най-често задаваните въпроси за нашите услуги
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12 animate-fade-in-up" style={{animationDelay: `${categoryIndex * 0.1}s`}}>
                <h2 className="text-3xl font-bold text-white mb-8 gradient-text">
                  {category.category}
                </h2>
                
                <div className="space-y-4">
                  {category.questions.map((item, itemIndex) => {
                    const globalIndex = categoryIndex * 100 + itemIndex;
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <div
                        key={itemIndex}
                        className="glass rounded-2xl border border-gray-700/50 overflow-hidden transition-all duration-300 hover:border-gray-600/50"
                      >
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300 group"
                        >
                          <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors pr-4">
                            {item.question}
                          </h3>
                          <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                            <span className="text-blue-400 text-xl">↓</span>
                          </div>
                        </button>
                        
                        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="px-8 pb-6">
                            <div className="border-t border-gray-700/50 pt-6">
                              <p className="text-gray-300 leading-relaxed">
                                {item.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.3) 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center animate-fade-in-up">
            <h2 className="text-4xl font-bold text-white mb-6 gradient-text">
              Не намерихте отговор на въпроса си?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Свържете се с нас директно и ще отговорим на всички ваши въпроси
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/zayavka"
                className="interactive-button bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 inline-flex items-center group"
              >
                <span className="mr-3 group-hover:animate-pulse">📞</span>
                Заявете разговор
                <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              
              <Link
                href="/kontakti"
                className="interactive-button glass border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 inline-flex items-center group"
              >
                <span className="mr-3 group-hover:animate-pulse">📧</span>
                Контакти
                <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
