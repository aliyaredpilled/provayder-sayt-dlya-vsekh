
import { useState } from 'react';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Phone, Mail, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-skynet-gray-light/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-skynet-blue text-white rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Телефон</h3>
                    <p className="text-gray-600 mb-1">Для подключения:</p>
                    <a href="tel:+78432909294" className="text-skynet-blue hover:text-skynet-blue-dark transition-colors">
                      +7 (843) 290-92-94
                    </a>
                    <p className="text-gray-600 mt-2 mb-1">Техническая поддержка:</p>
                    <a href="tel:+78435777775" className="text-skynet-blue hover:text-skynet-blue-dark transition-colors">
                      +7 (843) 5-777-775
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-skynet-gray-light/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-skynet-orange text-white rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600 mb-1">Для запросов и предложений:</p>
                    <a href="mailto:info@skynet.ru" className="text-skynet-blue hover:text-skynet-blue-dark transition-colors">
                      info@skynet.ru
                    </a>
                    <p className="text-gray-600 mt-2 mb-1">Техническая поддержка:</p>
                    <a href="mailto:support@skynet.ru" className="text-skynet-blue hover:text-skynet-blue-dark transition-colors">
                      support@skynet.ru
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-skynet-gray-light/30 rounded-xl p-6 backdrop-blur-sm">
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
                    <p className="text-gray-600 mt-2 mb-1">Техническая поддержка:</p>
                    <p className="text-gray-800">Круглосуточно</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <Link 
                  to="/contacts" 
                  className="inline-flex items-center text-skynet-blue hover:text-skynet-blue-dark mt-2"
                >
                  Все контакты <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
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
                      className={`w-full bg-gradient-to-r from-skynet-orange to-skynet-orange-bright hover:from-skynet-orange-bright hover:to-skynet-orange text-white font-medium py-3 rounded-lg shadow-md hover:shadow-orange-glow transition-all transform hover:-translate-y-1 ${
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
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Мы на карте</h3>
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
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
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contacts;
