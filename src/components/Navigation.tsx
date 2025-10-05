'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Начало' },
    { href: '/uslugi', label: 'Услуги' },
    { href: '/zayavka', label: 'Заявка' },
    { href: '/faq', label: 'FAQ' },
    { href: '/kontakti', label: 'Контакти' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-gray-800' 
        : 'bg-gray-900/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300 animate-fade-in-left"
          >
            IT Наставник
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group animate-fade-in-up stagger-${index + 1} ${
                  pathname === item.href
                    ? 'text-blue-400 bg-blue-500/20 shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 animate-scale-in"></div>
                )}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
              <span className={`block w-5 h-0.5 bg-gray-300 transition-all duration-300 transform origin-center ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : 'group-hover:w-6'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-gray-300 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0 scale-0' : 'group-hover:w-4'
              }`}></span>
              <span className={`block w-5 h-0.5 bg-gray-300 transition-all duration-300 transform origin-center ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'group-hover:w-6'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}>
          <div className="glass rounded-lg p-4 mt-2">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-300 animate-fade-in-right stagger-${index + 1} ${
                    pathname === item.href
                      ? 'text-blue-400 bg-blue-500/20 shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  {pathname === item.href && (
                    <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
