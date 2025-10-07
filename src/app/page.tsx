import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Наставник - Ускорете своята IT кариера | Консултации и Уроци",
  description: "Професионални IT консултации, системен дизайн, C#/.NET и Golang обучение, микросервиси и подготовка за интервюта. Ускорете своята IT кариера с експертна помощ от IT Наставник.",
  keywords: "IT наставник, IT кариера, системен дизайн, C# .NET Golang уроци, микросервиси, бази данни SQL, подготовка интервю, IT ментор България",
  openGraph: {
    title: "IT Наставник - Ускорете своята IT кариера",
    description: "Професионални IT консултации, системен дизайн, C#/.NET и Golang обучение, микросервиси и подготовка за интервюта. Ускорете своята IT кариера с експертна помощ.",
    url: "https://it-nastavnik.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IT Наставник - Професионална помощ за разработчици",
      },
    ],
  },
  alternates: {
    canonical: "https://it-nastavnik.com",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IT Наставник",
    "description": "Професионални IT консултации, системен дизайн, C#/.NET и Golang обучение, микросервиси и подготовка за интервюта",
    "url": "https://it-nastavnik.com",
    "logo": "https://it-nastavnik.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+359888123456",
      "contactType": "customer service",
      "email": "office@it-nastavnik.com",
      "availableLanguage": "Bulgarian"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BG",
      "addressLocality": "София"
    },
    "sameAs": [
      "https://linkedin.com/company/it-nastavnik"
    ],
    "offers": [
      {
        "@type": "Service",
        "name": "IT Консултации",
        "description": "Персонализирани консултации за решаване на технически проблеми и кариерно развитие"
      },
      {
        "@type": "Service", 
        "name": "Уроци по програмиране",
        "description": "Структурирани уроци по C#/.NET, Golang, системен дизайн и микросервиси за всички нива"
      },
      {
        "@type": "Service",
        "name": "Подготовка за интервюта", 
        "description": "Специализирана подготовка за технически интервюта в IT компании"
      },
      {
        "@type": "Service",
        "name": "Менторство",
        "description": "Дългосрочно менторство за професионално развитие в IT сферата"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="bg-gray-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen gradient-bg overflow-hidden flex items-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 mix-blend-multiply filter blur-3xl animate-morphing animate-float"></div>
          <div className="absolute top-40 right-10 w-80 h-80 bg-cyan-500 mix-blend-multiply filter blur-3xl animate-morphing animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 mix-blend-multiply filter blur-3xl animate-morphing animate-float" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-pink-500 mix-blend-multiply filter blur-3xl animate-morphing animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-particle-float opacity-60" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-particle-float opacity-40" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-cyan-300 rounded-full animate-particle-float opacity-50" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-purple-300 rounded-full animate-particle-float opacity-30" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-2.5 h-2.5 bg-pink-300 rounded-full animate-particle-float opacity-45" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-3/4 right-1/6 w-1 h-1 bg-yellow-300 rounded-full animate-particle-float opacity-35" style={{animationDelay: '5s'}}></div>
          <div className="absolute top-1/6 left-3/4 w-2 h-2 bg-green-300 rounded-full animate-particle-float opacity-40" style={{animationDelay: '6s'}}></div>
          <div className="absolute bottom-1/6 left-1/2 w-1.5 h-1.5 bg-red-300 rounded-full animate-particle-float opacity-30" style={{animationDelay: '7s'}}></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20 z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Main heading with enhanced effects */}
            <div className="animate-fade-in-up mb-8">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <span className="text-sm font-medium text-white/90 mr-2">🚀 Твоят IT наставник</span>
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse group-hover:animate-glow"></span>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight text-white">
                <span className="block">
                  Ускорете своята
                </span>
                <span className="block">
                  IT кариера
                </span>
              </h1>
            </div>
            
            {/* Enhanced description */}
            <div className="animate-fade-in-up stagger-2 mb-12">
              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
                Развийте своята кариера с експертна помощ в системния дизайн, backend технологии и подготовка за интервюта
              </p>
              
              {/* Feature highlights */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 hover:bg-white/15 hover:border-blue-400/50 transition-all duration-300 group cursor-pointer">
                  <span className="mr-2 group-hover:animate-pulse">⚡</span>
                  <span className="text-sm font-medium text-white/90 group-hover:text-white">Бързи резултати</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 hover:bg-white/15 hover:border-green-400/50 transition-all duration-300 group cursor-pointer">
                  <span className="mr-2 group-hover:animate-pulse">🎯</span>
                  <span className="text-sm font-medium text-white/90 group-hover:text-white">Персонализиран подход</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 hover:bg-white/15 hover:border-purple-400/50 transition-all duration-300 group cursor-pointer">
                  <span className="mr-2 group-hover:animate-pulse">🏆</span>
                  <span className="text-sm font-medium text-white/90 group-hover:text-white">Експертен опит</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up stagger-3 mb-16">
              <Link
                href="/zayavka"
                className="interactive-button bg-white text-gray-900 px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center">
                  <span className="mr-3 group-hover:animate-pulse text-2xl">🚀</span>
                  Започнете сега
                  <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
              <Link
                href="/uslugi"
                className="interactive-button glass border-2 border-white/30 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center">
                  <span className="mr-3 group-hover:animate-pulse text-2xl">⚡</span>
                  Разгледайте услугите
                  <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 gradient-text">Нашите услуги</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Предлагаме персонализирани решения за всеки етап от вашата IT кариера
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Consultations */}
            <div className="interactive-card glass p-8 rounded-2xl border border-gray-700/50 group animate-fade-in-up stagger-1">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:animate-glow transition-all duration-300">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">Консултации</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Персонализирани консултации за решаване на технически проблеми, архитектурни решения и кариерно развитие.
              </p>
              <Link href="/uslugi" className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors group-hover:translate-x-2 transform duration-300">
                Научете повече 
                <span className="ml-2 group-hover:animate-pulse">→</span>
              </Link>
            </div>

            {/* Lessons */}
            <div className="interactive-card glass p-8 rounded-2xl border border-gray-700/50 group animate-fade-in-up stagger-2">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-8 group-hover:animate-glow transition-all duration-300">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">Уроци</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Структурирани уроци по програмиране, нови технологии и best practices за всички нива на опит.
              </p>
              <Link href="/uslugi" className="inline-flex items-center text-green-400 font-semibold hover:text-green-300 transition-colors group-hover:translate-x-2 transform duration-300">
                Научете повече 
                <span className="ml-2 group-hover:animate-pulse">→</span>
              </Link>
            </div>

            {/* Interview Preparation */}
            <div className="interactive-card glass p-8 rounded-2xl border border-gray-700/50 group animate-fade-in-up stagger-3">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:animate-glow transition-all duration-300">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">Подготовка за интервюта</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Специализирана подготовка за технически интервюта, включително алгоритми, системен дизайн и поведенчески въпроси.
              </p>
              <Link href="/uslugi" className="inline-flex items-center text-purple-400 font-semibold hover:text-purple-300 transition-colors group-hover:translate-x-2 transform duration-300">
                Научете повече 
                <span className="ml-2 group-hover:animate-pulse">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Agnostic Approach */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 animate-fade-in-up">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 gradient-text">
                Технологично независим подход
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Не учим само конктетен framework или библиотека. Фокусираме се върху основните концепции и принципи, които ще ви помогнат да преуспеете с всяка технология.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Core Concepts */}
              <div className="animate-fade-in-up stagger-1">
                <div className="glass p-8 rounded-2xl border border-gray-700/50 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-3xl">🧠</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Основни концепции</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Вместо да се фокусираме върху конкретни версии на framework-и, учим фундаменталните принципи на програмирането, които остават актуални независимо от технологията.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Алгоритми и структури данни',
                      'Design patterns и архитектурни принципи',
                      'SOLID принципи и clean code',
                      'Системно мислене и problem solving',
                      'Performance optimization техники'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <span className="mr-3 text-blue-400">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Universal Skills */}
              <div className="animate-fade-in-up stagger-2">
                <div className="glass p-8 rounded-2xl border border-gray-700/50 h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-3xl">🎯</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Универсални умения</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Развиваме умения, които ще ви направят успешни във всяка IT роля - от frontend до backend, от startup до enterprise компания.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Системен дизайн и архитектура',
                      'Debugging и troubleshooting',
                      'Code review и качество на кода',
                      'Комуникация и teamwork',
                      'Continuous learning mindset'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <span className="mr-3 text-purple-400">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Frontend vs Backend */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up stagger-3">
              {/* Frontend Path */}
              <div className="glass p-8 rounded-2xl border border-gray-700/50 group hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:animate-glow transition-all duration-300">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Frontend кариера</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Подготовка за frontend роли с фокус върху основните концепции, които работят с всички framework-и.
                </p>
                <div className="text-sm text-gray-400">
                  ✓ Component-based архитектура<br/>
                  ✓ State management patterns<br/>
                  ✓ Performance optimization<br/>
                  ✓ Browser APIs и web standards
                </div>
              </div>

              {/* Backend Path */}
              <div className="glass p-8 rounded-2xl border border-gray-700/50 group hover:border-green-500/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 group-hover:animate-glow transition-all duration-300">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">Backend кариера</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Задълбочена подготовка за backend роли с акцент върху скалируеми системи и архитектура.
                </p>
                <div className="text-sm text-gray-400">
                  ✓ Микросервиси и distributed systems<br/>
                  ✓ Database design и optimization<br/>
                  ✓ API design и security<br/>
                  ✓ Cloud архитектура и DevOps
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16 animate-fade-in-up stagger-4">
              <div className="glass p-8 rounded-2xl border border-gray-700/50 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4 gradient-text">
                  Готови за всяко предизвикателство
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Нашият подход ви подготвя не само за днешните технологии, но и за бъдещите. Учите принципи, които ще ви служат през цялата ви кариера.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="flex items-center justify-center bg-blue-500/10 px-6 py-3 rounded-xl border border-blue-500/20">
                    <span className="mr-2">🚀</span>
                    <span className="text-blue-400 font-semibold">Адаптивност към нови технологии</span>
                  </div>
                  <div className="flex items-center justify-center bg-green-500/10 px-6 py-3 rounded-xl border border-green-500/20">
                    <span className="mr-2">🎯</span>
                    <span className="text-green-400 font-semibold">Дълготрайни кариерни умения</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-950 py-24 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.3) 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 gradient-text">Защо да изберете нас?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Нашият уникален подход гарантира успех във вашето професионално развитие
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="text-center group animate-fade-in-up stagger-1">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-glow transition-all duration-300 group-hover:scale-110">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">Бързи резултати</h3>
              <p className="text-gray-300 leading-relaxed">Ефективни методи за бързо усвояване на нови знания</p>
            </div>

            <div className="text-center group animate-fade-in-up stagger-2">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-glow transition-all duration-300 group-hover:scale-110">
                <span className="text-3xl">👤</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">Персонализиран подход</h3>
              <p className="text-gray-300 leading-relaxed">Индивидуален план според вашите нужди и цели</p>
            </div>

            <div className="text-center group animate-fade-in-up stagger-3">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-glow transition-all duration-300 group-hover:scale-110">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">Експертен опит</h3>
              <p className="text-gray-300 leading-relaxed">Години опит в индустрията и преподаването</p>
            </div>

            <div className="text-center group animate-fade-in-up stagger-4">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-glow transition-all duration-300 group-hover:scale-110">
                <span className="text-3xl">🔄</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">Гъвкавост</h3>
              <p className="text-gray-300 leading-relaxed">Online и offline сесии според вашето разписание</p>
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
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-300 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Готови ли сте да започнете?</h2>
            <p className="text-xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Направете първата стъпка към успешната си IT кариера с нашата експертна помощ
            </p>
          </div>
          <div className="animate-fade-in-up stagger-2">
            <Link
              href="/zayavka"
              className="interactive-button bg-white text-gray-900 px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-white/25 transition-all duration-300 inline-flex items-center group"
            >
              <span className="mr-3 group-hover:animate-pulse">🚀</span>
              Заявете разговор сега
              <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto animate-fade-in-up stagger-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 gradient-text">500+</div>
              <div className="text-gray-300">Успешни консултации</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 gradient-text">95%</div>
              <div className="text-gray-300">Успешни интервюта</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2 gradient-text">24/7</div>
              <div className="text-gray-300">Поддръжка</div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
