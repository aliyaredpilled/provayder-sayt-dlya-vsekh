import { useRef } from 'react';
import { Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import { Textarea } from "@/components/ui/textarea";

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
    <section id="contact" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">Готовы подключиться?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 flex flex-col h-full justify-between">
            <div className="bg-white rounded-xl p-4 border border-gray-100 backdrop-blur-sm flex-grow">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-skynet-blue text-white rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Телефон</h3>
                  <p className="text-base text-gray-600 mb-2">
                    Подключение:&nbsp;
                    <a href="tel:+78432909294" className="text-skynet-blue hover:text-skynet-blue-dark transition-colors inline-block font-medium text-base">
                      +7&nbsp;(843)&nbsp;290-92-94
                    </a>
                  </p>
                  <p className="text-base text-gray-600 mb-1">
                    Тех. поддержка:&nbsp;
                    <a href="tel:+78435777775" className="text-skynet-blue hover:text-skynet-blue-dark transition-colors inline-block font-medium text-base">
                      +7&nbsp;(843)&nbsp;5-777-775
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-4 border border-gray-100 backdrop-blur-sm flex-grow">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-skynet-orange text-white rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-base text-gray-600 mb-2">
                    Для запросов:&nbsp;
                                <a href="mailto:sales@skynet-kazan.com" className="text-skynet-blue hover:text-skynet-blue-dark transition-colors inline-block font-medium text-base">
              sales@skynet-kazan.com
                    </a>
                  </p>
                  <p className="text-base text-gray-600 mb-1">
                    Техподдержка:&nbsp;
                                <a href="mailto:noc@skynet-kazan.com" className="text-skynet-blue hover:text-skynet-blue-dark transition-colors inline-block font-medium text-base">
              noc@skynet-kazan.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-4 border border-gray-100 backdrop-blur-sm flex-grow">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-green-500 text-white rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Режим работы</h3>
                  <p className="text-base text-gray-600">Офис:</p>
                  <p className="text-base text-gray-600">ПН-ПТ: 8:00-18:00</p>
                  <p className="text-base text-gray-600">СБ: 8:00-13:00</p>
                  <p className="text-base text-gray-600 mt-1">Техподдержка: Круглосуточно</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-100 backdrop-blur-sm flex-grow">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-blue-500 text-white rounded-lg flex items-center justify-center">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Telegram-боты</h3>
                  <p className="text-base text-gray-600 mb-2">
                    Техподдержка:&nbsp;
                    <a href="https://t.me/skynet_kazan_supportbot" target="_blank" rel="noopener noreferrer" className="text-skynet-blue hover:text-skynet-blue-dark transition-colors inline-block font-medium text-base">
                      @skynet_kazan_supportbot
                    </a>
                  </p>
                  <p className="text-base text-gray-600 mb-1">
                    Документы:&nbsp;
                    <a href="https://t.me/SkyNet_document_bot" target="_blank" rel="noopener noreferrer" className="text-skynet-blue hover:text-skynet-blue-dark transition-colors inline-block font-medium text-base">
                      @SkyNet_document_bot
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-gray-100 backdrop-blur-sm flex-grow">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-green-500 text-white rounded-lg flex items-center justify-center">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">Проблемы с тех. поддержкой?</h3>
                  <p className="text-base text-gray-600 mb-2 leading-snug">Что-то не так с монтажом и монтажником/работой техподдержки или у вас другие жалобы и предложения?<br/>Пишите напрямую руководству «Скайнет Стрим»!</p>
                  <div className="space-y-1">
                    <a href="tel:+79867205872" className="text-base text-gray-600 hover:text-skynet-blue transition-colors block font-medium">
                      +7 986 720 58 72
                    </a>
                    <a href="https://wa.me/79867205872?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!" target="_blank" rel="noopener noreferrer" className="text-base text-skynet-blue hover:text-skynet-blue-dark transition-colors block font-medium">
                      Написать в WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Оставить заявку на подключение</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Ваше имя *
                  </label>
                  <input 
                    type="text"
                    id="name"
                    ref={nameRef}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent"
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
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent"
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
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent"
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
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent resize-none"
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
                  className="w-full bg-gradient-to-r from-skynet-orange to-skynet-orange-bright hover:from-skynet-orange-bright hover:to-skynet-orange text-white font-medium py-3 rounded-lg shadow-md hover:shadow-orange-glow transition-all transform hover:-translate-y-1"
                >
                  Подключиться
                </button>
              </form>
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
  );
};

export default ContactSection;
