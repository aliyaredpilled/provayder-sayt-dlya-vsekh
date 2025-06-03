
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const ConnectNeighborPromo = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
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
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <section className="pt-40 pb-16 bg-gradient-to-b from-skynet-blue to-skynet-blue-light text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Акция: Подключи соседа
            </h1>
            
            <div className="bg-white/10 border border-white/20 rounded-lg p-6 mb-8 inline-block">
              <h2 className="text-xl font-semibold mb-3">
                Акция: Подключи соседа
              </h2>
              <p className="text-lg">
                Для всех абонентов частного сектора предоставим 2 месяца бесплатного Интернета Вам, либо по 1 месяцу Вам и Вашему соседу.
              </p>
            </div>
            
            <div className="bg-white/10 border border-white/20 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg">
                Акция действует только для частного сектора
              </p>
            </div>
            
            <p className="text-xl mb-8 leading-relaxed">
              Приведи друга или соседа и получи <span className="font-bold text-skynet-orange">скидку 50%</span> на абонентскую плату на 3 месяца!
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
              Как работает акция
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="bg-skynet-blue text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Расскажите соседу</h3>
                <p className="text-gray-600">
                  Поделитесь информацией о наших услугах с друзьями или соседями
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-skynet-blue text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Сосед подключается</h3>
                <p className="text-gray-600">
                  Ваш сосед оформляет подключение к интернету SKYNET
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-skynet-orange text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Получаете скидку</h3>
                <p className="text-gray-600">
                  Вы оба получаете скидку 50% на 3 месяца
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Условия акции
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="text-green-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-700">Акция распространяется только на частный сектор</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-green-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-700">Скидка применяется к базовой абонентской плате</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-green-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-700">Минимальный тарифный план - "Стартовый"</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="text-green-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-700">Новый абонент должен пользоваться услугами не менее 6 месяцев</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-green-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-700">Скидка начисляется после активации нового подключения</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-green-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-700">Акция не суммируется с другими скидками</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decoration elements */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-skynet-blue/5 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-skynet-orange/5 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
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
                      className="w-full bg-skynet-orange hover:bg-skynet-orange-bright text-white font-medium py-3 rounded-lg shadow-md hover:shadow-orange-glow transition-all transform hover:-translate-y-1 animate-pulse"
                    >
                      Подключить
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ConnectNeighborPromo;
