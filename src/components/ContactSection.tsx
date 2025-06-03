import { useRef } from 'react';
import { Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here would be an API call to submit the form data
    // For now, we'll just log the form data and show an alert
    
    console.log({
      name: nameRef.current?.value,
      phone: phoneRef.current?.value,
      address: addressRef.current?.value,
      message: messageRef.current?.value
    });
    
    alert('Заявка успешно отправлена! Наш менеджер свяжется с вами в ближайшее время.');
    
    // Reset form
    if (nameRef.current) nameRef.current.value = '';
    if (phoneRef.current) phoneRef.current.value = '';
    if (addressRef.current) addressRef.current.value = '';
    if (messageRef.current) messageRef.current.value = '';
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-skynet-blue/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-skynet-orange/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-skynet-orange/10 text-skynet-orange text-sm font-medium mb-3">
              Оставить заявку
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Подключиться просто
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Оставьте заявку, и наш специалист свяжется с вами для уточнения деталей и подключения
            </p>
          </div>
          
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
                    <p className="text-gray-800">Пн-Пт: 8:00-18:00</p>
                    <p className="text-gray-800">Сб: 8:00-13:00</p>
                    <p className="text-gray-600 mt-2 mb-1">Отвечаем по телефону:</p>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Оставить заявку на подключение</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Ваше имя *
                    </label>
                    <input 
                      type="text"
                      id="name"
                      ref={nameRef}
                      required
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
                      ref={phoneRef}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Адрес подключения *
                    </label>
                    <input 
                      type="text"
                      id="address"
                      ref={addressRef}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent"
                      placeholder="Казань, ул. ..."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Комментарий
                    </label>
                    <textarea 
                      id="message"
                      ref={messageRef}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent"
                      placeholder="Дополнительная информация или пожелания"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="policy"
                        name="policy"
                        type="checkbox"
                        required
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
                    className="w-full bg-skynet-orange hover:bg-skynet-orange-bright text-white font-medium py-3 rounded-lg shadow-md hover:shadow-orange-glow transition-all transform hover:-translate-y-1"
                  >
                    Оставить заявку
                  </button>
                </form>
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
                  style={{border: 0}} 
                  allowFullScreen 
                  loading="lazy" 
                  title="Карта расположения офиса SKYNET"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
