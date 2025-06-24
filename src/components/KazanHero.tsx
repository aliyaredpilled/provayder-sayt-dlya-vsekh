const KazanHero = () => {
  const scrollToTenGigabit = () => {
    const element = document.getElementById('internet-hero');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Фоновое изображение с использованием <picture> для оптимизации */}
      <picture className="absolute inset-0 w-full h-full">
        <source srcSet="/lovable-uploads/beautiful_kazan.webp" type="image/webp" />
        <source srcSet="/lovable-uploads/beautiful_kazan-optimized.png" type="image/png" />
        <img 
          src="/lovable-uploads/beautiful_kazan-optimized.png" 
          alt="Красивый вид на город Казань" 
          className="w-full h-full object-cover object-center"
        />
      </picture>
      
      {/* Градиентный оверлей для лучшей читаемости текста */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>

      {/* Контент */}
      <div 
        className="relative z-10 flex flex-col justify-center h-full pb-60 cursor-pointer"
        onClick={scrollToTenGigabit}
      >
        <div className="text-center text-white px-4">
          <h1 className="relative inline-block text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-2xl px-12 py-2 rounded-2xl overflow-hidden">
            <span
              aria-hidden="true"
              className="absolute left-0 bottom-0 h-full w-full bg-skynet-orange/70"
            />
            <span className="relative z-10">Уже 20 лет в Казани</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-medium drop-shadow-lg opacity-90">
            Надежный интернет-провайдер для вашего дома и бизнеса
          </p>
        </div>
      </div>

      {/* Анимированная стрелка вниз */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <svg 
          className="w-8 h-8 opacity-70" 
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
    </section>
  );
};

export default KazanHero;
