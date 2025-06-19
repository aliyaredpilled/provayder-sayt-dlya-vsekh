
import { Star, User, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const reviews = [
  {
    id: 1,
    name: "Ольга Канаева",
    text: "Несколько месяцев назад перешли к вам с Летай, небо и земля, подключение стабильное, в поддержке всегда отвечают адекватные менеджеры. За год пользования Таттелекомом столько уже натерпелись, постоянные отключения, в поддержку не дозвонишься. В общем в Шигалях Скайнет это лучший вариант пока что, посмотрим как со временем будет.",
    rating: 5,
    date: "4 января 2025"
  },
  {
    id: 2,
    name: "Руслан Каримов",
    text: "Подключили интернет в Краснооктябрьске. 1200р/месяц за стабильные 100мб/с, скорость и пинг соответствуют заявленной. Работает пока довольно стабильно, все довольны. Белый ip-адрес не предоставляют по-умолчанию, как и при пользовании 4g-модемом у провайдеров, но особо и не нужен. Главное - стабильная работа. В дом заводят оптику (GPON), ставят свою ONU-установку, от неё патч-корд 1Гб/с заводится в ваш роутер. Единственные, кто за 20 лет решились завести проводной интернет к нам в посёлок. Респект.",
    rating: 5,
    date: "15 февраля 2025"
  },
  {
    id: 3,
    name: "Азат Гайфуллин",
    text: "Подключили оперативно интернет в частный дом. Аккуратно все завели, согласовать точку входа в дом. Скорость как и обещано 100 Мбит.",
    rating: 5,
    date: "17 февраля 2025"
  },
  {
    id: 4,
    name: "Полина Князева",
    text: "Всё отлично работает! Монтажник Дмитрий сделал всё качественно и быстро, объяснил, показал! Мы довольны)",
    rating: 5,
    date: "18 февраля 2025"
  },
  {
    id: 5,
    name: "Раиф Миннехайров",
    text: "Благодарим единственного провайдера, который смог провести интернет для жителей жм Краснооктябрьский Московского района г. Казани и п. Новониколаевский Зеленодольского района Осиновского сельского поселения. Пока стабильный сигнал и заявленные скорость. Далее посмотрим. Спасибо.",
    rating: 5,
    date: "20 февраля 2025"
  },
  {
    id: 6,
    name: "Вадим Муравьев",
    text: "Интернет бомба. Провели за 20 минут. Пока всё классно!!! Пос. Краснооктябрьский тарифный план 100м/б. Надеюсь сеть не просядет когда подключится больше абонентов, а пока все отлично. Позже добавлю отзыв.",
    rating: 5,
    date: "20 февраля 2025"
  },
  {
    id: 7,
    name: "Аделя Мусина",
    text: "На сегодняшний день единственная компания, которая провела интернет в почти заброшенный посёлок Новониколаевский 🎉 Полгода были с Летаем, а по настоящему летать начали только месяц назад со Скайнетом! Всё супер, заявленные 100мб, нас всё устраивает👍 Монтажник классный, помог оплатить, быстро провел в дом кабель и всё объяснил) Побольше довольных клиентов, процветания и успехов!😉",
    rating: 5,
    date: "25 февраля 2025"
  },
  {
    id: 8,
    name: "Булат Хаиров",
    text: "Оперативно подключили, по всем вопросам проконсультировали и помогли выбрать оптимальный вариант места ввода и месторасположения роутера. Скорость соответствует выбранному тарифу. Все отлично, почти счастлив!))",
    rating: 5,
    date: "26 февраля 2025"
  },
  {
    id: 9,
    name: "Илья Мелентьев",
    text: "Провели интернет быстро и качественно. Говорили, что ждать подключения больше месяца, но провели буквально через неделю после подачи заявки! Мастер все подсказал, все настроил! Скорость в speedtest 120 мбит/с, живу в частном доме!",
    rating: 5,
    date: "6 марта 2025"
  },
  {
    id: 10,
    name: "Кристина Казанцева",
    text: "Подключали интернет в КП Удачном, все отлично работает, ребята молодцы. Сделали все быстро! Особая благодарность, менеджеру Александру, всегда на связи😊",
    rating: 5,
    date: "10 марта 2025"
  },
  {
    id: 11,
    name: "Лейсан Гиматдинова",
    text: "Провели в дом интернет. О боги свершилось чудо теперь у меня дома есть стабильный, проводной инет. А не от мобильника, который вечно тормозил. Спасибо большое вам SKYNET",
    rating: 5,
    date: "13 марта 2025"
  },
  {
    id: 12,
    name: "Ильдар Галиуллин",
    text: "Добрый день. Все отлично работает молодцы. Начали прорабатывать вопрос проведения в наш поселок еще зимой. Полностью собрали списки и провели интернет всему поселку это примерно 50 домов, хотя оставляли очень много заявок в Таттелеком, дом.ру и т.д., но никто не брался за работу, так как работа объёмная. Хотелось бы конечно что бы можно было вопрос решать комплексно, что бы тариф включал в себя и сотовую связь тогда было бы вообще хорошо. В принципе скорость интернета устраивает.",
    rating: 5,
    date: "16 марта 2025"
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
            Смотреть все отзывы <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
