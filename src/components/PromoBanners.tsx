import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const promos = [
  {
    id: 'promo1',
    title: 'Акция: Подключи соседа',
    description: 'Для всех абонентов предоставим 2 месяца бесплатного Интернета Вам, либо по 1 месяцу Вам и Вашему соседу.',
    bgImage: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    buttonText: 'Подробнее об акции',
    buttonLink: '/promo/connect-neighbor',
    expireDate: 'Постоянно',
    color: 'from-skynet-blue/90 to-skynet-blue-light/90'
  },
  {
    id: 'promo2',
    title: 'Дарим 2000 ₽ на баланс при переходе от другого оператора',
    description: 'Переходите к нам от любого другого оптического интернет-провайдера и получайте денежный бонус на свой лицевой счет.',
    bgImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    buttonText: 'Условия акции',
    buttonLink: '/tariffs',
    expireDate: 'до 30.07.2025',
    color: 'from-green-600/90 to-emerald-500/90'
  },
  {
    id: 'promo3',
    title: 'Пакет каналов Ultra HD в подарок',
    description: 'Подключите цифровое ТВ и получите пакет Ultra HD каналов на 3 месяца бесплатно.',
    bgImage: 'https://images.unsplash.com/photo-1504567961542-e24d9439a724?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    buttonText: 'Подключить ТВ',
    buttonLink: '/tariffs',
    expireDate: 'до 31.08.2025',
    color: 'from-purple-600/90 to-indigo-700/90'
  }
];

const PromoBanners = () => {
  return (
    <section className="py-4 bg-transparent backdrop-blur-sm relative z-10">
      <div className="absolute inset-0 bg-sky-100/50 backdrop-blur-sm -z-10 rounded-3xl mx-4"></div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {promos.map((promo) => (
            <div 
              key={promo.id}
              className="relative overflow-hidden rounded-2xl h-[280px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${promo.bgImage})` }}
              ></div>
              <div className={`absolute inset-0 bg-gradient-to-r ${promo.color}`}></div>
              
              {/* Дата акции, закрепленная наверху */}
              <span className="absolute top-4 left-4 inline-flex items-center bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full z-10">
                <Calendar className="h-3 w-3 mr-1" />
                {promo.expireDate}
              </span>

              {/* Основной контент карточки, прижатый к низу */}
              <div className="relative h-full flex flex-col justify-end p-4">
                <h2 className="text-white text-lg font-bold mb-3 leading-tight">{promo.title}</h2>
                <p className="text-white/90 mb-4 flex-grow text-sm">{promo.description}</p>
                <Link 
                  to={promo.buttonLink} 
                  className="inline-flex items-center justify-center bg-white text-skynet-blue font-medium px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-gray-100 transition-all text-sm self-start"
                >
                  {promo.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoBanners;
