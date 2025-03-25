
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const promos = [
  {
    id: 'promo1',
    title: 'Месяц интернета в подарок!',
    description: 'Подключитесь к любому тарифу и получите месяц пользования интернетом бесплатно.',
    bgImage: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    buttonText: 'Подключиться',
    expireDate: '31.12.2023',
    color: 'from-blue-500/80 to-skynet-blue/90'
  },
  {
    id: 'promo2',
    title: 'Роутер в подарок при подключении',
    description: 'Получите современный Wi-Fi 6 роутер в подарок при подключении к тарифам от 100 Мбит/с.',
    bgImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    buttonText: 'Узнать детали',
    expireDate: '15.12.2023',
    color: 'from-skynet-orange/80 to-amber-500/90'
  },
  {
    id: 'promo3',
    title: 'Пакет каналов Ultra HD в подарок',
    description: 'Подключите цифровое ТВ и получите пакет Ultra HD каналов на 3 месяца бесплатно.',
    bgImage: 'https://images.unsplash.com/photo-1504567961542-e24d9439a724?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80',
    buttonText: 'Подключить ТВ',
    expireDate: '01.12.2023',
    color: 'from-purple-600/80 to-indigo-700/90'
  }
];

const PromoBanners = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === promos.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? promos.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-skynet-gray-light/50">
      <div className="container mx-auto px-4">
        <div className="relative">
          {promos.map((promo, index) => (
            <div 
              key={promo.id}
              className={`relative overflow-hidden rounded-2xl h-[500px] transition-all duration-500 ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 absolute inset-0'
              }`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${promo.bgImage})` }}
              ></div>
              <div className={`absolute inset-0 bg-gradient-to-r ${promo.color}`}></div>
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-8 md:px-16">
                  <div className="max-w-2xl text-white">
                    <span className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                      <Calendar className="h-4 w-4 mr-2" />
                      До {promo.expireDate}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{promo.title}</h2>
                    <p className="text-lg md:text-xl mb-8 text-white/90">{promo.description}</p>
                    <Link 
                      to="/tariffs" 
                      className="inline-flex items-center justify-center bg-white text-skynet-blue font-medium px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1"
                    >
                      {promo.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white backdrop-blur-sm text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white backdrop-blur-sm text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
            {promos.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanners;
