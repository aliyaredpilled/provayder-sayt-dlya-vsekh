
const KazanHero = () => {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {/* Фоновое изображение */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/afacc5e4-7c6a-4adf-8e57-cb674bc93013.png)'
        }}
      >
        {/* Градиентный оверлей для лучшей читаемости текста */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
      </div>

      {/* Контент */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-2xl">
            Уже <span className="text-skynet-orange">20 лет</span> в Казани
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-medium drop-shadow-lg opacity-90">
            Надежный интернет-провайдер для вашего дома и бизнеса
          </p>
        </div>
      </div>

      {/* Анимированная стрелка вниз */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
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
