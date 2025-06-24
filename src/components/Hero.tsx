
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollTo10G = () => {
    const element = document.getElementById('10g-internet');
    if (element) {
      const headerHeight = 80; // Примерная высота шапки
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="internet-hero" className="pt-16 pb-8 bg-transparent backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in-up">
              От домашнего комфорта <br />
              до <span className="text-skynet-orange">скорости 10 Гбит/с</span>
            </h2>
            <p className="text-gray-600 mb-6 text-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Технологии мирового уровня для жителей Казани. Стабильное подключение, 
              которому доверяют уже два десятилетия.
            </p>
            <div className="flex justify-start animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <button 
                onClick={scrollTo10G}
                className="bg-skynet-orange hover:bg-skynet-orange-bright text-white font-medium px-6 py-2.5 rounded-full shadow-lg hover:shadow-orange-glow transition-all transform hover:-translate-y-1 flex items-center"
              >
                Узнать подробнее <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/lovable-uploads/1b4d860d-bd94-43f4-af81-78eb4c5f70b8.png" 
                alt="Семья с ноутбуком" 
                className="w-full h-auto max-h-[500px] object-cover brightness-125 contrast-110 saturate-115"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-4">
                <div className="flex items-center bg-white/95 backdrop-blur-sm p-2.5 rounded-lg shadow-lg mb-3 max-w-fit">
                  <div className="bg-skynet-orange text-white p-1.5 rounded-full mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-medium">Скорость до</p>
                    <p className="text-lg font-bold text-gray-900">10 Гбит/с</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-skynet-blue/30 rounded-full filter blur-3xl"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-skynet-orange/20 rounded-full filter blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
