
import { useState } from 'react';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    policy: false
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Имитация отправки формы
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        policy: false
      });
      
      // Сбросить статус через некоторое время
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <section className="pt-32 pb-20 bg-skynet-gray-light/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-skynet-blue/10 text-skynet-blue text-sm font-medium mb-3">
              Свяжитесь с нами
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Контактная информация
            </h1>
            <p className="text-lg text-gray-600">
              Мы всегда готовы ответить на ваши вопросы и помочь с подключением услуг
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Наши контакты</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-skynet-blue/10 p-3 rounded-lg mr-5">
                    <Phone className="h-6 w-6 text-skynet-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Телефоны</h3>
                    <p className="text-gray-600 mb-2">Работаем без выходных с 9:00 до 21:00</p>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Подключение:</p>
                      <a href="tel:+78432909294" className="text-skynet-blue hover:text-skynet-blue-dark font-medium">
                        +7 (843) 290-92-94
                      </a>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500 mb-1">Техническая поддержка (круглосуточно):</p>
                      <a href="tel:+78435777775" className="text-skynet-blue hover:text-skynet-blue-dark font-medium">
                        +7 (843) 5-777-775
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-skynet-orange/10 p-3 rounded-lg mr-5">
                    <Mail className="h-6 w-6 text-skynet-orange" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Электронная почта</h3>
                    <p className="text-gray-600 mb-2">Пишите нам по любым вопросам</p>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Общие вопросы:</p>
                      <a href="mailto:info@skynet.ru" className="text-skynet-blue hover:text-skynet-blue-dark font-medium">
                        info@skynet.ru
                      </a>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500 mb-1">Техническая поддержка:</p>
                      <a href="mailto:support@skynet.ru" className="text-skynet-blue hover:text-skynet-blue-dark font-medium">
                        support@skynet.ru
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-500/10 p-3 rounded-lg mr-5">
                    <MapPin className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Адрес офиса</h3>
                    <p className="text-gray-600 mb-2">Время работы: Пн-Пт с 9:00 до 19:00, Сб с 10:00 до 17:00</p>
                    <address className="not-italic text-gray-700">
                      г. Казань, ул. Восход д. 23А
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Следите за нами в социальных сетях</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                    <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                    <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                    <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.915 3.035H4.085C2.376 3.035 1 4.411 1 6.12v12.76c0 1.71 1.376 3.085 3.085 3.085h15.83c1.71 0 3.085-1.376 3.085-3.085V6.12c0-1.709-1.376-3.085-3.085-3.085zm-5.788 10.252l-3.136 4.698-2.783-5.388-5.209-.008 7.443-7.445 3.249 5.434 4.564-.118-4.128 2.827z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors">
                    <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.04 3.684c-.78.346-1.62.58-2.5.685A4.368 4.368 0 0021.448 2a8.664 8.664 0 01-2.765 1.056 4.355 4.355 0 00-7.412 3.968A12.36 12.36 0 013.113 1.46a4.355 4.355 0 001.347 5.807 4.338 4.338 0 01-1.97-.543v.055a4.356 4.356 0 003.489 4.27 4.363 4.363 0 01-1.965.075 4.358 4.358 0 004.063 3.021 8.736 8.736 0 01-5.41 1.867c-.35 0-.7-.02-1.04-.06a12.318 12.318 0 006.672 1.955c8.006 0 12.387-6.63 12.387-12.387 0-.187-.004-.375-.012-.562a8.819 8.819 0 002.172-2.25" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Напишите нам</h2>
              
              {formStatus === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Сообщение отправлено!</h3>
                  <p className="text-gray-600">
                    Спасибо за обращение! Мы свяжемся с вами в ближайшее время.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Ваше имя *
                    </label>
                    <input 
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Телефон *
                    </label>
                    <input 
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input 
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent"
                      placeholder="example@mail.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Сообщение
                    </label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent"
                      placeholder="Напишите ваш вопрос или сообщение"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="policy"
                        name="policy"
                        type="checkbox"
                        required
                        checked={formData.policy}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-skynet-blue focus:ring-skynet-blue border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="policy" className="text-gray-600">
                        Я согласен на обработку моих персональных данных в соответствии с{' '}
                        <a href="#" className="text-skynet-blue hover:underline">
                          политикой конфиденциальности
                        </a>
                      </label>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className={`w-full bg-skynet-orange hover:bg-skynet-orange-bright text-white font-medium py-3 rounded-lg shadow-md transition-all ${
                      formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {formStatus === 'submitting' ? 'Отправка...' : 'Отправить сообщение'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Мы на карте</h2>
          <div className="h-[400px] rounded-xl overflow-hidden shadow-lg">
            <div style={{position:"relative", overflow:"hidden", height:"100%"}}>
              <a href="https://yandex.ru/maps/org/skaynet/20535149244/?utm_medium=mapframe&utm_source=maps" style={{color:"#eee", fontSize:"12px", position:"absolute", top:"0px"}}>Скайнет</a>
              <a href="https://yandex.ru/maps/43/kazan/category/internet_service_provider/184105748/?utm_medium=mapframe&utm_source=maps" style={{color:"#eee", fontSize:"12px", position:"absolute", top:"14px"}}>Интернет-провайдер в Казани</a>
              <a href="https://yandex.ru/maps/43/kazan/category/ip_telephony/184105732/?utm_medium=mapframe&utm_source=maps" style={{color:"#eee", fontSize:"12px", position:"absolute", top:"28px"}}>IP-телефония в Казани</a>
              <iframe 
                src="https://yandex.ru/map-widget/v1/?ll=49.200050%2C55.812355&mode=search&oid=20535149244&ol=biz&sctx=ZAAAAAgBEAAaKAoSCZ5eKcsQz0JAEdOgaB7A4EtAEhIJQnxgx38B9T8RARQjS%2BZY4T8iBgABAgMEBSgKOABArosGSAFqAnJ1nQHNzMw9oAEAqAEAvQGLmWMKwgEFvIX2v0yCAhvRgdC60LDQudC90LXRgiDQstC%2B0YHRhdC%2B0LSKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=49.200050%2C55.812355&sspn=0.500944%2C0.206545&text=%D1%81%D0%BA%D0%B0%D0%B9%D0%BD%D0%B5%D1%82%20%D0%B2%D0%BE%D1%81%D1%85%D0%BE%D0%B4&z=11.39" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                title="Карта расположения офиса SKYNET"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contacts;
