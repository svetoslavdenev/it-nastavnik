import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Контакти - IT Наставник | Свържете се с нас",
  description: "Свържете се с IT Наставник за консултации и въпроси. Имейл, телефон, работно време и бързо време за отговор. Започнете с безплатна консултация.",
  keywords: "контакти IT наставник, IT консултации контакт, програмиране помощ телефон, IT ментор имейл, свържете се",
  openGraph: {
    title: "Контакти - IT Наставник | Свържете се с нас",
    description: "Свържете се с IT Наставник за консултации и въпроси. Имейл, телефон и бързо време за отговор.",
    url: "https://it-nastavnik.com/kontakti",
  },
  alternates: {
    canonical: "https://it-nastavnik.com/kontakti",
  },
};

export default function KontaktiPage() {
  const contactMethods = [
    {
      title: 'Имейл',
      value: 'office@it-nastavnik.com',
      icon: '📧',
      description: 'Изпратете ни имейл и ще отговорим в рамките на 24 часа',
      action: 'mailto:office@it-nastavnik.com',
      color: 'blue'
    },
    {
      title: 'Facebook',
      value: 'IT Наставник',
      icon: '👥',
      description: 'Свържете се с нас във Facebook за новини, актуализации и въпроси',
      action: 'https://www.facebook.com/profile.php?id=61580809953620',
      color: 'purple'
    },
    {
      title: 'LinkedIn',
      value: 'IT-Наставник',
      icon: '💼',
      description: 'Последвайте ни в LinkedIn за професионални актуализации и IT съвети',
      action: 'https://www.linkedin.com/company/it-%D0%BD%D0%B0%D1%81%D1%82%D0%B0%D0%B2%D0%BD%D0%B8%D0%BA/',
      color: 'blue'
    },
    {
      title: 'Заявка за обаждане',
      value: 'Онлайн форма',
      icon: '📝',
      description: 'Попълнете формата и ние ще се свържем с вас',
      action: '/zayavka',
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
                <span className="text-sm font-medium text-white/90 mr-2">📞 Свържете се с нас</span>
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
                Контакти
              </h1>
            </div>
            <div className="animate-fade-in-up stagger-2">
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Готови сме да отговорим на всички ваши въпроси и да ви помогнем
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => {
              const colorClasses = getColorClasses(method.color);
              const isExternal = method.action.startsWith('mailto:') || method.action.startsWith('tel:') || method.action.startsWith('http');
              
              return (
                <div
                  key={index}
                  className={`interactive-card glass p-8 rounded-2xl border border-gray-700/50 group animate-fade-in-up stagger-${index + 1}`}
                >
                  <div className="flex items-start mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses.bg} rounded-2xl flex items-center justify-center mr-6 group-hover:animate-glow transition-all duration-300`}>
                      <span className="text-2xl">{method.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold text-white mb-2 group-hover:${colorClasses.text} transition-colors`}>
                        {method.title}
                      </h3>
                      <p className={`text-lg font-semibold ${colorClasses.text} mb-2`}>
                        {method.value}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {method.description}
                  </p>

                  {isExternal ? (
                    <a
                      href={method.action}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 group-hover:translate-x-2 ${colorClasses.text} ${colorClasses.hover} border ${colorClasses.border} hover:bg-white/5`}
                    >
                      Свържете се
                      <span className="ml-2 group-hover:animate-pulse">→</span>
                    </a>
                  ) : (
                    <Link
                      href={method.action}
                      className={`inline-flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 group-hover:translate-x-2 ${colorClasses.text} ${colorClasses.hover} border ${colorClasses.border} hover:bg-white/5`}
                    >
                      Свържете се
                      <span className="ml-2 group-hover:animate-pulse">→</span>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Working Hours & Info */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.3) 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-bold text-white mb-6 gradient-text">
                Допълнителна информация
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Working Hours */}
              <div className="glass p-8 rounded-2xl border border-gray-700/50 animate-fade-in-up stagger-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-xl">🕒</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Работно време</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Понеделник - Петък</span>
                    <span className="text-blue-400 font-semibold">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Събота</span>
                    <span className="text-blue-400 font-semibold">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Неделя</span>
                    <span className="text-gray-500">Почивен ден</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                  <p className="text-sm text-blue-300">
                    💡 За спешни случаи можете да ни изпратите имейл по всяко време
                  </p>
                </div>
              </div>

              {/* Response Times */}
              <div className="glass p-8 rounded-2xl border border-gray-700/50 animate-fade-in-up stagger-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-xl">⚡</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Време за отговор</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📧</span>
                    <div>
                      <div className="text-white font-semibold">Имейл</div>
                      <div className="text-gray-300 text-sm">До 24 часа</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📞</span>
                    <div>
                      <div className="text-white font-semibold">Телефон</div>
                      <div className="text-gray-300 text-sm">Незабавно в работно време</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📝</span>
                    <div>
                      <div className="text-white font-semibold">Заявка за обаждане</div>
                      <div className="text-gray-300 text-sm">До 4 часа</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            <h2 className="text-5xl font-bold mb-6 text-white">Започнете днес</h2>
            <p className="text-xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Не чакайте повече - първата консултация е безплатна!
            </p>
          </div>
          <div className="animate-fade-in-up stagger-2">
            <Link
              href="/zayavka"
              className="interactive-button bg-white text-gray-900 px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-white/25 transition-all duration-300 inline-flex items-center group"
            >
              <span className="mr-3 group-hover:animate-pulse">🚀</span>
              Заявете безплатна консултация
              <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
