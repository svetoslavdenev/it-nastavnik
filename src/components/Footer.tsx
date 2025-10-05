import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">IT Наставник</h3>
            <p className="text-gray-300 mb-4">
              Професионална помощ за софтуерни разработчици. Консултации, уроци и подготовка за интервюта.
            </p>
            <p className="text-gray-300">
              Развийте своята IT кариера с нашата експертна помощ.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Бързи връзки</h4>
            <ul className="space-y-2">
              <li><Link href="/uslugi" className="text-gray-300 hover:text-white transition-colors">Услуги</Link></li>
              <li><Link href="/zayavka" className="text-gray-300 hover:text-white transition-colors">Заявка</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/kontakti" className="text-gray-300 hover:text-white transition-colors">Контакти</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Правна информация</h4>
            <ul className="space-y-2">
              <li><Link href="/pravila" className="text-gray-300 hover:text-white transition-colors">Общи условия</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Поверителност</Link></li>
              <li><Link href="/cookies" className="text-gray-300 hover:text-white transition-colors">Бисквитки</Link></li>
              <li><Link href="/kontakti" className="text-gray-300 hover:text-white transition-colors">Контакти</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} IT Наставник. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  );
}
