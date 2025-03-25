
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { WifiIcon, Tv, Phone, Cloud, Shield, Zap, Check, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <section className="pt-32 pb-20 bg-skynet-gray-light/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-skynet-blue/10 text-skynet-blue text-sm font-medium mb-3">
              Услуги для дома
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Полный спектр услуг для вашего комфорта
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Мы предлагаем современные телекоммуникационные решения высокого качества, 
              чтобы ваш дом был удобным, умным и технологичным.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-skynet-blue/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <WifiIcon className="h-8 w-8 text-skynet-blue" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Высокоскоростной интернет</h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы предлагаем стабильное и быстрое подключение к интернету со скоростью до 10 Гбит/с. 
                Наша сеть построена на современных технологиях, обеспечивая высокую надежность и 
                минимальные задержки.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-skynet-blue mt-1 mr-3 flex-shrink-0" />
                  <span>Скорость до 10 Гбит/с по оптоволоконным линиям</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-skynet-blue mt-1 mr-3 flex-shrink-0" />
                  <span>Стабильное соединение 24/7 с надежностью 99.9%</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-skynet-blue mt-1 mr-3 flex-shrink-0" />
                  <span>Безлимитный трафик без ограничений скорости</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-skynet-blue mt-1 mr-3 flex-shrink-0" />
                  <span>Современные Wi-Fi роутеры в комплекте</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-skynet-blue mt-1 mr-3 flex-shrink-0" />
                  <span>Бесплатное подключение при заключении договора от 12 месяцев</span>
                </li>
              </ul>
              
              <Link 
                to="/tariffs" 
                className="inline-flex items-center bg-skynet-orange hover:bg-skynet-orange-bright text-white font-medium px-8 py-3 rounded-full shadow-md hover:shadow-orange-glow transition-all transform hover:-translate-y-1"
              >
                Выбрать тариф <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="lg:order-first lg:order-last">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1600132394525-ede6f1c5d418?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                  alt="Высокоскоростной интернет" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-skynet-orange text-white p-4 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold">10 Гбит/с</div>
                  <div className="text-sm">Максимальная скорость</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-skynet-gray-light/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-skynet-orange/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Tv className="h-8 w-8 text-skynet-orange" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Цифровое телевидение</h2>
              <p className="text-lg text-gray-600 mb-6">
                Наше цифровое телевидение — это более 200 каналов в HD и 4K качестве, 
                удобный интерфейс и дополнительные функции для комфортного просмотра.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-skynet-orange mt-1 mr-3 flex-shrink-0" />
                  <span>Более 200 каналов, включая популярные и премиальные</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-skynet-orange mt-1 mr-3 flex-shrink-0" />
                  <span>Трансляция в HD и Ultra HD (4K) качестве</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-skynet-orange mt-1 mr-3 flex-shrink-0" />
                  <span>Архив передач до 7 дней</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-skynet-orange mt-1 mr-3 flex-shrink-0" />
                  <span>Функция "Пауза" и "Перемотка" для прямого эфира</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-skynet-orange mt-1 mr-3 flex-shrink-0" />
                  <span>Мультискрин: просмотр на разных устройствах</span>
                </li>
              </ul>
              
              <Link 
                to="/tariffs" 
                className="inline-flex items-center bg-skynet-orange hover:bg-skynet-orange-bright text-white font-medium px-8 py-3 rounded-full shadow-md hover:shadow-orange-glow transition-all transform hover:-translate-y-1"
              >
                Подключить ТВ <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522198734915-76c764a8454d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Цифровое телевидение" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-skynet-blue text-white p-4 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold">200+</div>
                  <div className="text-sm">ТВ каналов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-green-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Phone className="h-8 w-8 text-green-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Домашняя телефония</h2>
              <p className="text-lg text-gray-600 mb-6">
                Современная цифровая телефония с городским номером и выгодными тарифами 
                на междугородние и международные звонки.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Городской номер с безлимитными звонками на городские номера</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Низкие тарифы на междугородние и международные звонки</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Дополнительные функции: определитель номера, переадресация, конференц-связь</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Возможность сохранить существующий номер при переезде</span>
                </li>
              </ul>
              
              <Link 
                to="/tariffs" 
                className="inline-flex items-center bg-skynet-orange hover:bg-skynet-orange-bright text-white font-medium px-8 py-3 rounded-full shadow-md hover:shadow-orange-glow transition-all transform hover:-translate-y-1"
              >
                Подключить телефонию <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="lg:order-first lg:order-last">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Домашняя телефония" 
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-skynet-blue/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Дополнительные сервисы
            </h2>
            <p className="text-lg text-gray-600">
              Расширьте возможности своего подключения с дополнительными услугами
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-skynet-purple/10 w-14 h-14 rounded-lg flex items-center justify-center mb-5">
                <Cloud className="h-6 w-6 text-skynet-purple" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Облачное хранилище</h3>
              <p className="text-gray-600 mb-4">Безопасное хранение данных с доступом из любой точки мира и автоматическим резервным копированием.</p>
              <Link 
                to="/tariffs" 
                className="inline-flex items-center text-skynet-blue font-medium hover:text-skynet-blue-dark"
              >
                Подробнее <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-red-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-5">
                <Shield className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Антивирус и безопасность</h3>
              <p className="text-gray-600 mb-4">Комплексная защита всех устройств от вирусов, вредоносных программ и интернет-угроз.</p>
              <Link 
                to="/tariffs" 
                className="inline-flex items-center text-skynet-blue font-medium hover:text-skynet-blue-dark"
              >
                Подробнее <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-amber-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-5">
                <Zap className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Умный дом</h3>
              <p className="text-gray-600 mb-4">Управление домашними устройствами через единую платформу: освещение, климат, безопасность.</p>
              <Link 
                to="/tariffs" 
                className="inline-flex items-center text-skynet-blue font-medium hover:text-skynet-blue-dark"
              >
                Подробнее <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Services;
