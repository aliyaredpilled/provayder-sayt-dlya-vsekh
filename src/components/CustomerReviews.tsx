import { Star, User, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const reviews = [
  {
    id: 16,
    name: "Шамиль Халилов",
    text: "Пользуемся услугами этого провайдера уже не первый год. Очень довольны. Высокая скорость, качественная поддержка. Оперативно реагируют на все запросы, быстро подключают новые объекты. г. Казань: ул. Островского 102, ул. Достоевского 44/6; г. Зеленодольск: ул. Ленина 32. Отдельная благодарность Вергазу, инженеру Фаилю, Денису, а так же техническому директору Антону Туманскому.",
    rating: 5,
    date: "11 июня 2025"
  },
  {
    id: 15,
    name: "Евгения Моряхина",
    text: "Хотим выразить благодарность Абдуллину Алмазу и всем сотрудникам за быстрое подключение интернета. Нам в кратчайшие сроки завели в КП. Летай нас морозил с сентября 2024 года, а ребята завели нам в течение 2х недель. Спасибо вам БОЛЬШОЕ. Все работает стабильно и скорость даже больше заявленных 100мбс.",
    rating: 5,
    date: "14 апреля 2025"
  },
  {
    id: 14,
    name: "Её Величество Юсупова",
    text: "Добрый день! компания работает хорошо, естественно есть куда расти и развиваться, могут подключить оптоволокно и радио. Отдельный привет Вергазу и Антону Туманскому.",
    rating: 5,
    date: "3 апреля 2025"
  },
  {
    id: 13,
    name: "Айдар Хайдаров",
    text: "Подключил интернет от скайнет, красота, скорость хорошая, оптоволокно прямо домой завели на даче, так же удобно что платить можно через приложение, и смотреть за балансом на счёту.",
    rating: 5,
    date: "17 марта 2025"
  },
  {
    id: 12,
    name: "Ильдар Галиуллин",
    text: "Добрый день. Все отлично работает молодцы. Начали прорабатывать вопрос проведения в наш поселок еще зимой. Полностью собрали списки и провели интернет всему поселку это примерно 50 домов, хотя оставляли очень много заявок в Таттелеком, дом.ру и т.д., но никто не брался за работу, так как работа объёмная. Хотелось бы конечно что бы можно было вопрос решать комплексно, что бы тариф включал в себя и сотовую связь тогда было бы вообще хорошо. В принципе скорость интернета устраивает.",
    rating: 5,
    date: "16 марта 2025"
  },
  {
    id: 11,
    name: "Лейсан Гиматдинова",
    text: "Провели в дом интернет. О боги свершилось чудо теперь у меня дома есть стабильный, проводной инет. А не от мобильника, который вечно тормозил. Спасибо большое вам SKYNET",
    rating: 5,
    date: "13 марта 2025"
  }
];

const ReviewCard = ({ review, index }: { review: typeof reviews[0], index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const isLongText = review.text.length > 200;
  
  // Генерируем инициалы из имени
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };
  
  return (
    <div 
      className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up border border-skynet-blue/10"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-skynet-blue rounded-full flex items-center justify-center text-white mr-3 font-semibold text-sm">
          {getInitials(review.name)}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{review.name}</h3>
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-sm text-gray-500">{review.date}</span>
          </div>
        </div>
      </div>
      <div className="text-gray-600">
        {isLongText && !expanded ? (
          <>
            <p className="line-clamp-5">{review.text.substring(0, 200)}...</p>
            <button 
              onClick={() => setExpanded(true)}
              className="text-skynet-blue flex items-center mt-2 text-sm font-medium hover:underline"
            >
              Показать полностью <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </>
        ) : (
          <>
            <p>{review.text}</p>
            {isLongText && expanded && (
              <button 
                onClick={() => setExpanded(false)}
                className="text-skynet-blue flex items-center mt-2 text-sm font-medium hover:underline"
              >
                Свернуть <ChevronUp className="ml-1 h-4 w-4" />
              </button>
            )}
          </>
        )}
      </div>
      <div className="mt-4 text-right">
        <span className="text-xs text-gray-400">Клиент SkyNet</span>
      </div>
    </div>
  );
};

const CustomerReviews = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-sky-100/70 to-white/80">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-skynet-blue/10 text-skynet-blue text-sm font-medium mb-3">
            Отзывы
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Что говорят наши клиенты
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Мы гордимся тем, что наши клиенты довольны качеством наших услуг и обслуживания
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard 
              key={review.id}
              review={review}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/reviews" 
            className="inline-flex items-center text-skynet-blue hover:text-skynet-blue-dark font-medium"
          >
            Все отзывы <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
