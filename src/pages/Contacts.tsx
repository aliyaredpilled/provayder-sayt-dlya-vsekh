import { useState } from 'react';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';

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
      
      <section className="pt-24 pb-16 bg-skynet-gray-light/50">
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
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-10">
              <div className="md:col-span-2 space-y-4">
                <div className="bg-skynet-gray-light/30 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 bg-skynet-blue text-white rounded-lg flex items-center justify-center">
                        <Phone className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Телефон</h3>
                      <p className="text-gray-600 mb-1">Подключение:</p>
                      <a href="tel:+78432909294" className="text-skynet-blue hover:text-skynet-blue-dark transition-colors">
                        +7 (843) 290-92-94
                      </a>
                      <p className="text-gray-600 mt-1 mb-1">Поддержка:</p>
                      <a href="tel:+78435777775" className="text-skynet-blue hover:text-skynet-blue-dark transition-colors">
                        +7 (843) 5-777-775
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-skynet-gray-light/30 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 bg-skynet-orange text-white rounded-lg flex items-center justify-center">
                        <Mail className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600 mb-1">Для запросов:</p>
                      <a href="mailto:sales@skynet-kazan.com" className="text-skynet-blue hover:text-skynet-blue-dark transition-colors">
                        sales@skynet-kazan.com
                      </a>
                      <p className="text-gray-600 mt-1 mb-1">Техническая поддержка:</p>
                      <a href="mailto:noc@skynet-kazan.com" className="text-skynet-blue hover:text-skynet-blue-dark transition-colors">
                        noc@skynet-kazan.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-skynet-gray-light/30 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 bg-green-500 text-white rounded-lg flex items-center justify-center">
                        <Clock className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Режим работы</h3>
                      <p className="text-gray-600 mb-1">Офис:</p>
                      <p className="text-gray-800">ПН-ПТ: 8:00-18:00</p>
                      <p className="text-gray-800">СБ: 8:00-13:00</p>
                      <p className="text-gray-600 mt-1 mb-1">Техническая поддержка:</p>
                      <p className="text-gray-800">Круглосуточно</p>
                    </div>
                  </div>
                </div>

                <div className="bg-skynet-gray-light/30 rounded-xl p-4 backdrop-blur-sm">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 bg-blue-500 text-white rounded-lg flex items-center justify-center">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Telegram-боты</h3>
                      <p className="text-gray-600 mb-1">Техподдержка:</p>
                      <a href="https://t.me/skynet_kazan_supportbot" target="_blank" rel="noopener noreferrer" className="text-skynet-blue hover:text-skynet-blue-dark transition-colors">
                        @skynet_kazan_supportbot
                      </a>
                      <p className="text-gray-600 mt-1 mb-1">Документы:</p>
                      <a href="https://t.me/SkyNet_document_bot" target="_blank" rel="noopener noreferrer" className="text-skynet-blue hover:text-skynet-blue-dark transition-colors">
                        @SkyNet_document_bot
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-3 flex flex-col">
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Напишите нам</h3>
                  
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
                    <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
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
                        className="w-full bg-gradient-to-r from-skynet-orange to-skynet-orange-bright hover:from-skynet-orange-bright hover:to-skynet-orange text-white font-medium py-3 rounded-lg shadow-md hover:shadow-orange-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1"
                      >
                        {formStatus === 'submitting' ? 'Отправка...' : 'Отправить'}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Мы на карте</h3>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <div style={{position: 'relative', overflow: 'hidden'}}>
                <a href="https://yandex.ru/maps/org/skaynet/20535149244/?utm_medium=mapframe&utm_source=maps" style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '0px'}}>Скайнет</a>
                <a href="https://yandex.ru/maps/43/kazan/category/internet_service_provider/184105748/?utm_medium=mapframe&utm_source=maps" style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '14px'}}>Интернет-провайдер в Казани</a>
                <a href="https://yandex.ru/maps/43/kazan/category/ip_telephony/184105732/?utm_medium=mapframe&utm_source=maps" style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '28px'}}>IP-телефония в Казани</a>
                <iframe 
                  src="https://yandex.ru/map-widget/v1/?ll=49.071497%2C55.835924&mode=search&oid=20535149244&ol=biz&z=14.85" 
                  width="100%" 
                  height="400" 
                  frameBorder="1" 
                  allowFullScreen={true} 
                  style={{position: 'relative'}}
                  title="Карта офиса SkyNet"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contacts;
