
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
          className="w-full h-full object-cover object-center rounded-b-3xl"
        />
      </picture>
      
      {/* Градиентный оверлей для лучшей читаемости текста */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 rounded-b-3xl"></div>

      {/* Контент */}
      <div 
        className="relative z-10 flex flex-col justify-center h-full pb-40 cursor-pointer px-4"
        onClick={scrollToTenGigabit}
      >
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="relative inline-block text-3xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-2xl">
            <span
              aria-hidden="true"
              className="absolute left-0 bottom-0 h-full w-full bg-skynet-orange/80 rounded-2xl"
            />
            <span className="relative z-10 px-8 py-4 block">20 лет вместе с Казанью</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-medium drop-shadow-lg opacity-95 leading-relaxed">
            Надёжный интернет в каждый дом и бизнес 
            <br className="hidden md:block" />
            столицы Татарстана
          </p>
        </div>
      </div>

      {/* Анимированная стрелка вниз */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer"
        onClick={scrollToTenGigabit}
      >
        <svg 
          className="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity" 
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
