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
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-skynet-orange/10 via-transparent to-skynet-blue/10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-skynet-blue/15 via-transparent to-transparent"></div>
        </div>

        {/* Контент */}
        <div 
          className="relative z-10 flex flex-col justify-center h-full pb-32 md:pb-40 cursor-pointer px-2 pt-20 md:pt-0"
          onClick={scrollToTenGigabit}
        >
          <div className={`text-center text-white max-w-6xl mx-auto transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            
            {/* Декоративная линия сверху */}
            <div className="flex justify-center mb-5">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-skynet-orange"></div>
                <div className="w-3 h-3 bg-skynet-orange rounded-full shadow-lg shadow-skynet-orange/50"></div>
                <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-skynet-orange"></div>
              </div>
            </div>

            {/* Основной слоган с улучшенной анимацией */}
                          <h1 className="text-[28px] leading-tight md:text-4xl lg:text-5xl md:leading-tight lg:leading-tight font-bold mb-3 drop-shadow-2xl text-white max-w-[92%] mx-auto md:max-w-none">
              <span
                className="inline-block px-1.5 md:px-3 py-2 md:py-3 bg-gradient-to-r from-skynet-orange/75 via-orange-400/75 to-skynet-orange/75 md:from-skynet-orange/80 md:via-orange-400/80 md:to-skynet-orange/80 rounded-2xl transform transition-all duration-500 hover:scale-105 shadow-2xl shadow-skynet-orange/30 hover:shadow-3xl hover:shadow-skynet-orange/50 border border-orange-300/20"
              >
                <span>Интернет,</span>{' '}
                <span>достойный столицы Татарстана</span>
              </span>
            </h1>

            {/* Подзаголовок с glass-card эффектом */}
            <div className={`backdrop-blur-[2px] rounded-3xl px-1.5 py-2 md:px-3 md:py-3 mx-auto max-w-[92%] md:max-w-4xl transform transition-all duration-1000 delay-300 shadow-lg ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <p className="inline-block text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-relaxed border border-white/20 rounded-2xl px-3 py-1.5">
                Уже <span className="inline-block text-white text-xl md:text-2xl lg:text-3xl">20 лет</span> мы обеспечиваем Казань{' '}
                <br className="hidden md:block" />{' '}
                стабильной связью и высоким качеством сервиса
              </p>
            </div>

            {/* Статистические элементы */}
            <div className={`mt-24 flex flex-col sm:flex-row gap-3 justify-center items-center transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="glass-card backdrop-blur-[2px] rounded-full px-5 py-2.5 bg-black/5 hover:bg-black/10 transition-all duration-300 hover:-translate-y-1 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                  <span className="text-lg font-bold text-white">Скорость до 10 Гбит/с</span>
                </div>
              </div>
              
              <div className="glass-card backdrop-blur-[2px] rounded-full px-5 py-2.5 bg-black/5 hover:bg-black/10 transition-all duration-300 hover:-translate-y-1 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300 shadow-lg shadow-blue-400/50"></div>
                  <span className="text-lg font-bold text-white">Стабильность 99.9%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KazanHero;

