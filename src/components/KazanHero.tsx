import { useEffect, useState } from 'react';

const KazanHero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Параллакс эффект
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Анимация появления
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToTenGigabit = () => {
    const element = document.getElementById('internet-hero');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Кастомные стили для анимаций */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
      `}</style>

      <section className="relative h-[100svh] w-full overflow-hidden">
        {/* Фоновое изображение с параллакс эффектом */}
        <picture className="absolute inset-0 w-full h-full">
          <source srcSet="/lovable-uploads/beautiful_kazan.webp" type="image/webp" />
          <source srcSet="/lovable-uploads/beautiful_kazan-optimized.png" type="image/png" />
          <img 
            src="/lovable-uploads/beautiful_kazan-optimized.png" 
            alt="Красивый вид на город Казань" 
            className="w-full h-full object-cover object-center rounded-b-3xl"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          />
        </picture>
        
        {/* Многослойный градиентный оверлей */}
        <div className="absolute inset-0 rounded-b-3xl">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-skynet-orange/10 via-transparent to-blue-500/10"></div>
        </div>

        {/* Контент */}
        <div 
          className="relative z-10 flex flex-col justify-center h-full pb-32 md:pb-40 cursor-pointer px-2"
          onClick={scrollToTenGigabit}
        >
          <div className={`text-center text-white max-w-4xl mx-auto transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Основной слоган с улучшенной анимацией */}
            <h1 className="text-[26px] leading-tight md:text-5xl lg:text-6xl font-bold mb-2 drop-shadow-2xl text-white">
              <span
                className="inline-block px-4 md:px-6 py-3 bg-gradient-to-r from-skynet-orange/70 to-skynet-orange/50 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-skynet-orange/30"
              >
                <span className="animate-fade-in-up">Связь,</span>{' '}
                <span className="animate-fade-in-up animation-delay-200">достойная столицы.</span>
              </span>
            </h1>

            {/* Подзаголовок с анимацией */}
            <p className={`text-xl md:text-2xl lg:text-3xl font-semibold drop-shadow-lg text-white leading-relaxed max-w-3xl mx-auto mb-4 transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              20 лет мы обеспечиваем Казань надёжным интернетом
            </p>

            {/* Дополнительный акцент */}
            <div className={`mt-10 transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 md:px-8 py-3 md:py-4 border border-white/20">
                <div className="w-2.5 md:w-3 h-2.5 md:h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-[17px] md:text-lg font-semibold">Скорость до 10 Гбит/с</span>
              </div>
            </div>
          </div>
        </div>

        {/* Улучшенная анимированная стрелка */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer group"
          onClick={scrollToTenGigabit}
        >
          <div className="relative">
            {/* Основная стрелка */}
            <svg 
              className="w-8 h-8 opacity-80 hover:opacity-100 transition-all duration-300 group-hover:scale-110 animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
          
          {/* Подсказка при наведении */}
          <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
              Узнать больше
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KazanHero;
