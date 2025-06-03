import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-transparent backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in-up">
              Сверхскоростной интернет <br />
              <span className="text-skynet-orange">до 10 Гбит/с</span> для вашего дома
            </h2>
            <p className="text-lg text-gray-600 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Мы предлагаем надежные телекоммуникационные услуги для частных лиц с быстрым интернетом, цифровым ТВ и другими сервисами для вашего комфорта.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Link 
                to="/tariffs" 
                className="bg-skynet-orange hover:bg-skynet-orange-bright text-white font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-orange-glow transition-all transform hover:-translate-y-1"
              >
                Выбрать тариф
              </Link>
              <Link 
                to="/services" 
                className="bg-white/80 backdrop-blur-sm text-skynet-blue font-medium px-8 py-3 rounded-full hover:bg-skynet-blue/5 transition-all flex items-center justify-center border border-skynet-blue/20"
              >
                Наши услуги <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/lovable-uploads/1b4d860d-bd94-43f4-af81-78eb4c5f70b8.png" 
                alt="Семья с ноутбуком" 
                className="w-full h-auto max-h-[660px] object-cover brightness-125 contrast-110 saturate-115"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-lg mb-4 max-w-fit">
                  <div className="bg-skynet-orange text-white p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-medium">Скорость до</p>
                    <p className="text-xl font-bold text-gray-900">10 Гбит/с</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-skynet-blue/30 rounded-full filter blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-skynet-orange/20 rounded-full filter blur-3xl"></div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-skynet-blue/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-skynet-blue">99.9%</p>
              <p className="text-gray-600 mt-2">Надежность сети</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-skynet-blue">24/7</p>
              <p className="text-gray-600 mt-2">Техническая поддержка</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-skynet-blue">10+</p>
              <p className="text-gray-600 mt-2">Лет на рынке</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-skynet-blue">50K+</p>
              <p className="text-gray-600 mt-2">Довольных клиентов</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
