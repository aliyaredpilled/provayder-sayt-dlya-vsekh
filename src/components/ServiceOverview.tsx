import { WifiIcon, Tv, Phone, Cloud, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'internet',
    title: 'Интернет',
    description: 'Высокоскоростной доступ в интернет со скоростью до 10 Гбит/с для домашнего использования.',
    icon: WifiIcon,
    color: 'bg-skynet-blue',
    url: '/services'
  },
  {
    id: 'tv',
    title: 'Цифровое ТВ',
    description: 'Более 200 каналов в HD и 4K качестве, интерактивные функции и архив программ.',
    icon: Tv,
    color: 'bg-skynet-orange',
    url: '/services'
  },
  {
    id: 'phone',
    title: 'Телефония',
    description: 'Городской номер с безлимитными звонками на фиксированные номера и выгодными тарифами.',
    icon: Phone,
    color: 'bg-green-500',
    url: '/services'
  },
  {
    id: 'cloud',
    title: 'Облачные сервисы',
    description: 'Безопасное хранение данных, резервное копирование и доступ к файлам с любого устройства.',
    icon: Cloud,
    color: 'bg-purple-600',
    url: '/services'
  },
  {
    id: 'security',
    title: 'Безопасность',
    description: 'Защита от вирусов, родительский контроль и безопасное соединение для всех устройств.',
    icon: Shield,
    color: 'bg-red-500',
    url: '/services'
  },
  {
    id: 'smart-home',
    title: 'Умный дом',
    description: 'Современные решения для автоматизации домашних процессов и повышения комфорта.',
    icon: Zap,
    color: 'bg-amber-500',
    url: '/services'
  }
];

const ServiceOverview = () => {
  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-skynet-orange/10 text-skynet-orange text-sm font-medium mb-3">
            Наши услуги
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Комплексные решения для вашего дома
          </h2>
          <p className="text-gray-600">
            Мы предлагаем полный спектр современных телекоммуникационных услуг, 
            чтобы сделать вашу жизнь более комфортной и технологичной.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${service.color} w-14 h-14 rounded-lg flex items-center justify-center text-white mb-5`}>
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                to={service.url} 
                className="inline-flex items-center text-skynet-blue font-medium hover:text-skynet-blue-dark"
              >
                Подробнее <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link 
            to="/services" 
            className="inline-flex items-center justify-center bg-skynet-orange hover:bg-skynet-orange-bright text-white font-medium px-8 py-3 rounded-full shadow-md hover:shadow-orange-glow transition-all transform hover:-translate-y-1"
          >
            Все услуги
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
