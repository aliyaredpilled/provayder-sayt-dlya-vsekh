
import { useState } from 'react';
import { CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    address: '',
    plan: 'ultrafast',
    submitted: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', formState);
    setFormState(prev => ({ ...prev, submitted: true }));
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormState({
        name: '',
        phone: '',
        address: '',
        plan: 'ultrafast',
        submitted: false
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-skynet-gray-light/50 to-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-skynet-blue/10 text-skynet-blue text-sm font-medium mb-3">
            Подключение
          </span>
          <h2 className="heading-lg mb-4 text-gray-900">
            Готовы ощутить скорость 10 Гбит/с?
          </h2>
          <p className="text-gray-600">
            Заполните форму ниже, и наш специалист свяжется с вами в течение 24 часов, 
            чтобы организовать подключение и ответить на все ваши вопросы.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-2xl shadow-card p-6 md:p-8 animate-fade-in-up">
            {formState.submitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center bg-green-100 text-green-600 rounded-full w-16 h-16 mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Спасибо за заявку!</h3>
                <p className="text-gray-600">
                  Мы свяжемся с вами в ближайшее время для подтверждения деталей подключения.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Ваше имя
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-skynet-blue focus:border-transparent outline-none transition-all"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Телефон
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-skynet-blue focus:border-transparent outline-none transition-all"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Адрес подключения
                    </label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      required
                      value={formState.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-skynet-blue focus:border-transparent outline-none transition-all"
                      placeholder="Город, улица, дом, квартира"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="plan" className="block text-sm font-medium text-gray-700 mb-1">
                      Выберите тариф
                    </label>
                    <select
                      id="plan"
                      name="plan"
                      value={formState.plan}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-skynet-blue focus:border-transparent outline-none transition-all"
                    >
                      <option value="standard">Стандарт (100 Мбит/с)</option>
                      <option value="fast">Быстрый (1 Гбит/с)</option>
                      <option value="ultrafast">Сверхскоростной (10 Гбит/с)</option>
                    </select>
                  </div>
                  
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-skynet-blue text-white rounded-lg px-4 py-3 font-medium hover:bg-skynet-blue-dark transition-all focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:ring-offset-2"
                    >
                      Отправить заявку
                    </button>
                  </div>
                  
                  <div className="text-xs text-gray-500 text-center">
                    Нажимая кнопку "Отправить заявку", вы соглашаетесь с нашей{' '}
                    <a href="#" className="text-skynet-blue hover:underline">
                      Политикой конфиденциальности
                    </a>
                  </div>
                </div>
              </form>
            )}
          </div>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-skynet-blue/10 to-skynet-blue/5 rounded-xl p-6 animate-fade-in-up">
              <h3 className="text-xl font-bold mb-4">Преимущества подключения</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-skynet-blue rounded-full p-1 text-white mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Подключение в течение 24 часов после заявки</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-skynet-blue rounded-full p-1 text-white mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Бесплатная настройка оборудования</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-skynet-blue rounded-full p-1 text-white mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Скидка 50% на первую неделю</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-skynet-blue rounded-full p-1 text-white mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Гарантия скорости или возврат денег</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold">Контактная информация</h3>
              
              <div className="flex items-start">
                <div className="bg-skynet-blue/10 rounded-full p-2 text-skynet-blue mr-4">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Телефон поддержки:</p>
                  <a href="tel:+78001234567" className="text-lg font-medium text-gray-900 hover:text-skynet-blue">
                    8 (800) 123-45-67
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-skynet-blue/10 rounded-full p-2 text-skynet-blue mr-4">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Электронная почта:</p>
                  <a href="mailto:info@skynet.ru" className="text-lg font-medium text-gray-900 hover:text-skynet-blue">
                    info@skynet.ru
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-skynet-blue/10 rounded-full p-2 text-skynet-blue mr-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Головной офис:</p>
                  <p className="text-lg font-medium text-gray-900">
                    г. Москва, ул. Технологическая, 10
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
