'use client';

import { useState, useEffect } from 'react';

export default function ZayavkaPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
    timeToCall: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [validationErrors, setValidationErrors] = useState<{[key: string]: string}>({});

  // Field length limits
  const fieldLimits = {
    name: 100,
    email: 254,
    phone: 20,
    description: 1000,
    timeToCall: 200
  };


  const validateField = (fieldName: string, value: string): string => {
    const limit = fieldLimits[fieldName as keyof typeof fieldLimits];
    if (value.length > limit) {
      return `${fieldName === 'name' ? 'Името' : 
               fieldName === 'email' ? 'Имейлът' : 
               fieldName === 'phone' ? 'Телефонът' : 
               fieldName === 'description' ? 'Описанието' : 
               'Времето за обаждане'} не може да бъде повече от ${limit} символа`;
    }
    
    if (fieldName === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return 'Невалиден формат на имейл адреса';
      }
    }
    
    if (fieldName === 'phone' && value) {
      const phoneRegex = /^[\+]?[0-9\s\-\(\)]{7,20}$/;
      if (!phoneRegex.test(value)) {
        return 'Невалиден формат на телефонния номер';
      }
    }
    
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Update form data
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Validate field and update errors
    const error = validateField(name, value);
    setValidationErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields before submission
    const errors: {[key: string]: string} = {};
    Object.entries(formData).forEach(([fieldName, value]) => {
      const error = validateField(fieldName, value);
      if (error) errors[fieldName] = error;
    });
    
    // Check required fields
    if (!formData.name.trim()) errors.name = 'Името е задължително поле';
    if (!formData.email.trim()) errors.email = 'Имейлът е задължително поле';
    if (!formData.phone.trim()) errors.phone = 'Телефонът е задължително поле';
    
    setValidationErrors(errors);
    
    // Don't submit if there are validation errors
    if (Object.keys(errors).length > 0) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', description: '', timeToCall: '' });
        setValidationErrors({});
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper function to get character count display
  const getCharacterCount = (fieldName: string, value: string) => {
    const limit = fieldLimits[fieldName as keyof typeof fieldLimits];
    const remaining = limit - value.length;
    const isNearLimit = remaining <= 50;
    const isOverLimit = remaining < 0;
    
    return (
      <div className={`text-xs mt-1 ${isOverLimit ? 'text-red-400' : isNearLimit ? 'text-yellow-400' : 'text-gray-500'}`}>
        {value.length}/{limit} символа
      </div>
    );
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
                <span className="text-sm font-medium text-white/90 mr-2">📞 Безплатна консултация</span>
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
                Заявете обаждане
              </h1>
            </div>
            <div className="animate-fade-in-up stagger-2">
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Оставете вашите данни и ние ще се свържем с вас в удобно за вас време
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {submitStatus === 'success' && (
              <div className="mb-8 p-6 bg-green-500/20 border border-green-500/50 rounded-2xl animate-fade-in-up">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">✅</span>
                  <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-1">Заявката е изпратена успешно!</h3>
                    <p className="text-gray-300">Ще се свържем с вас в най-скоро време.</p>
                  </div>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-8 p-6 bg-red-500/20 border border-red-500/50 rounded-2xl animate-fade-in-up">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">❌</span>
                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-1">Възникна грешка</h3>
                    <p className="text-gray-300">Моля, опитайте отново или се свържете с нас директно.</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl border border-gray-700/50 animate-fade-in-up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Име и фамилия *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                      validationErrors.name 
                        ? 'border-red-500/50 focus:ring-red-500' 
                        : 'border-gray-600/50 focus:ring-blue-500'
                    }`}
                    placeholder="Въведете вашето име"
                  />
                  {validationErrors.name && (
                    <div className="text-red-400 text-xs mt-1">{validationErrors.name}</div>
                  )}
                  {getCharacterCount('name', formData.name)}
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                      validationErrors.phone 
                        ? 'border-red-500/50 focus:ring-red-500' 
                        : 'border-gray-600/50 focus:ring-blue-500'
                    }`}
                    placeholder="+359 888 123 456"
                  />
                  {validationErrors.phone && (
                    <div className="text-red-400 text-xs mt-1">{validationErrors.phone}</div>
                  )}
                  {getCharacterCount('phone', formData.phone)}
                </div>
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Имейл адрес *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                    validationErrors.email 
                      ? 'border-red-500/50 focus:ring-red-500' 
                      : 'border-gray-600/50 focus:ring-blue-500'
                  }`}
                  placeholder="your.email@example.com"
                />
                {validationErrors.email && (
                  <div className="text-red-400 text-xs mt-1">{validationErrors.email}</div>
                )}
                {getCharacterCount('email', formData.email)}
              </div>

              {/* Time to Call Field */}
              <div className="mb-6">
                <label htmlFor="timeToCall" className="block text-sm font-medium text-gray-300 mb-2">
                  Удобно време за обаждане
                </label>
                <input
                  type="text"
                  id="timeToCall"
                  name="timeToCall"
                  value={formData.timeToCall}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${
                    validationErrors.timeToCall 
                      ? 'border-red-500/50 focus:ring-red-500' 
                      : 'border-gray-600/50 focus:ring-blue-500'
                  }`}
                  placeholder="Например: Понеделник-Петък 9:00-17:00 или Всеки ден след 18:00"
                />
                {validationErrors.timeToCall && (
                  <div className="text-red-400 text-xs mt-1">{validationErrors.timeToCall}</div>
                )}
                {getCharacterCount('timeToCall', formData.timeToCall)}
              </div>

              {/* Description Field */}
              <div className="mb-8">
                <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                  Кратко описание на вашите нужди
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 bg-gray-800/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 resize-none ${
                    validationErrors.description 
                      ? 'border-red-500/50 focus:ring-red-500' 
                      : 'border-gray-600/50 focus:ring-blue-500'
                  }`}
                  placeholder="Разкажете ни какво търсите - консултации, уроци, подготовка за интервю или менторство..."
                />
                {validationErrors.description && (
                  <div className="text-red-400 text-xs mt-1">{validationErrors.description}</div>
                )}
                {getCharacterCount('description', formData.description)}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full interactive-button bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Изпращане...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <span className="mr-3 group-hover:animate-pulse">📞</span>
                    Изпратете заявката
                    <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                )}
              </button>

              <p className="text-sm text-gray-400 text-center mt-4">
                * Задължителни полета. Ще се свържем с вас възможно най-скоро.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-gray-950 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.3) 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-white mb-6 gradient-text">Какво следва?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '1',
                title: 'Получаваме заявката',
                description: 'Вашата заявка постъпва в нашата система и я разглеждаме внимателно',
                icon: '📨'
              },
              {
                step: '2',
                title: 'Свързваме се с вас',
                description: 'Обаждаме ви се в удобно за вас време за безплатна консултация',
                icon: '📞'
              },
              {
                step: '3',
                title: 'Планираме решението',
                description: 'Обсъждаме вашите нужди и създаваме персонализиран план',
                icon: '🎯'
              }
            ].map((item, index) => (
              <div key={index} className={`text-center group animate-fade-in-up stagger-${index + 1}`}>
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-glow transition-all duration-300 group-hover:scale-110">
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-sm font-bold text-white">
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
    </div>
  );
}
