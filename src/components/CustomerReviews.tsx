
import { Star, User } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Ильдар Галиуллин",
    text: "Добрый день! Все отлично работает, молодцы. Начали прорабатывать вопрос проведения в наш поселок еще зимой. Полностью собрали списки и провели интернет всему поселку это примерно 50 домов, хотя оставляли очень много заявок в Таттелеком, дом.ру и т.д., но никто не брался за работу, так как работа объёмная. Хотелось бы конечно что бы можно было вопрос решать комплексно, что бы тариф включал в себя и сотовую связь тогда было бы вообще хорошо. В принципе скорость интернета устраивает.",
    rating: 5
  },
  {
    id: 2,
    name: "Лейсан Гиматдинова",
    text: "Провели в дом интернет. О боги свершилось чудо теперь у меня дома есть стабильный, проводной инет. А не от мобильника, который вечно тормозил. Спасибо большое вам SKYNET",
    rating: 5
  },
  {
    id: 3,
    name: "Кристина Казанцева",
    text: "Подключали интернет в КП Удачном, все отлично работает, ребята молодцы. Сделали все быстро! Особая благодарность, менеджеру Александру, всегда на связи🤗",
    rating: 5
  },
  {
    id: 4,
    name: "Илья Мелентьев",
    text: "Провели интернет быстро и качественно. Говорили, что ждать подключения больше месяца, но провели буквально через неделю после подачи заявки! Мастер все подсказал, все настроил! Скорость в speedtest 120 мбит/с, живу в частном доме!",
    rating: 5
  },
  {
    id: 5,
    name: "Аделя Мусина",
    text: "На сегодняшний день единственная компания, которая провела интернет в почти заброшенный посёлок Новониколаевский 🎉 Полгода были с Летаем, а по настоящему летать начали только месяц назад со Скайнетом! Всё супер, заявленные 100мб, нас всё устраивает👍🏼 Монтажник классный, помог оплатить, быстро провел в дом кабель и всё объяснил) Побольше довольных клиентов, процветания и успехов!😌",
    rating: 5
  },
  {
    id: 6,
    name: "Галина Козина",
    text: "Сегодня нам провели интернет по ул школьной в Краснооктябрьском поселке, телевидение работает отлично, компьютерные игры не тормозят. Установщик в доброжелательной форме все объяснил и ответил на возникшие вопросы. Спасибо!!!",
    rating: 5
  }
];

const CustomerReviews = () => {
  return (
    <section className="py-20 bg-skynet-gray-light/30">
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
            <div 
              key={review.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-skynet-blue rounded-full flex items-center justify-center text-white mr-3">
                  <User size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{review.name}</h3>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 line-clamp-5">{review.text}</p>
              <div className="mt-4 text-right">
                <span className="text-xs text-gray-400">Клиент SkyNet</span>
              </div>
            </div>
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
