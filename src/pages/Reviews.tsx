import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Star, User, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

// Обновленные отзывы с актуальными датами
const reviews = [
  {
    id: 1,
    name: "Ольга Канаева",
    date: "4 января 2025",
    text: "Несколько месяцев назад перешли к вам с Летай, небо и земля, подключение стабильное, в поддержке всегда отвечают адекватные менеджеры. За год пользования Таттелекомом столько уже натерпелись, постоянные отключения, в поддержку не дозвонишься. В общем в Шигалях Скайнет это лучший вариант пока что, посмотрим как со временем будет.",
    rating: 5
  },
  {
    id: 2,
    name: "Руслан Каримов",
    date: "15 февраля 2025",
    text: "Подключили интернет в Краснооктябрьске. 1200р/месяц за стабильные 100мб/с, скорость и пинг соответствуют заявленной. Работает пока довольно стабильно, все довольны. Белый ip-адрес не предоставляют по-умолчанию, как и при пользовании 4g-модемом у провайдеров, но особо и не нужен. Главное - стабильная работа. В дом заводят оптику (GPON), ставят свою ONU-установку, от неё патч-корд 1Гб/с заводится в ваш роутер. Единственные, кто за 20 лет решились завести проводной интернет к нам в посёлок. Респект.",
    rating: 5
  },
  {
    id: 3,
    name: "Азат Гайфуллин",
    date: "17 февраля 2025",
    text: "Подключили оперативно интернет в частный дом. Аккуратно все завели, согласовать точку входа в дом. Скорость как и обещано 100 Мбит.",
    rating: 5
  },
  {
    id: 4,
    name: "Полина Князева",
    date: "18 февраля 2025",
    text: "Всё отлично работает! Монтажник Дмитрий сделал всё качественно и быстро, объяснил, показал! Мы довольны)",
    rating: 5
  },
  {
    id: 5,
    name: "Раиф Миннехайров",
    date: "20 февраля 2025",
    text: "Благодарим единственного провайдера, который смог провести интернет для жителей жм Краснооктябрьский Московского района г. Казани и п. Новониколаевский Зеленодольского района Осиновского сельского поселения. Пока стабильный сигнал и заявленные скорость. Далее посмотрим. Спасибо.",
    rating: 5
  },
  {
    id: 6,
    name: "Вадим Муравьев",
    date: "20 февраля 2025",
    text: "Интернет бомба. Провели за 20 минут. Пока всё классно!!! Пос. Краснооктябрьский тарифный план 100м/б. Надеюсь сеть не просядет когда подключится больше абонентов, а пока все отлично. Позже добавлю отзыв.",
    rating: 5
  },
  {
    id: 7,
    name: "Аделя Мусина",
    date: "25 февраля 2025",
    text: "На сегодняшний день единственная компания, которая провела интернет в почти заброшенный посёлок Новониколаевский 🎉 Полгода были с Летаем, а по настоящему летать начали только месяц назад со Скайнетом! Всё супер, заявленные 100мб, нас всё устраивает👍 Монтажник классный, помог оплатить, быстро провел в дом кабель и всё объяснил) Побольше довольных клиентов, процветания и успехов!😉",
    rating: 5
  },
  {
    id: 8,
    name: "Булат Хаиров",
    date: "26 февраля 2025",
    text: "Оперативно подключили, по всем вопросам проконсультировали и помогли выбрать оптимальный вариант места ввода и месторасположения роутера. Скорость соответствует выбранному тарифу. Все отлично, почти счастлив!))",
    rating: 5
  },
  {
    id: 9,
    name: "Илья Мелентьев",
    date: "6 марта 2025",
    text: "Провели интернет быстро и качественно. Говорили, что ждать подключения больше месяца, но провели буквально через неделю после подачи заявки! Мастер все подсказал, все настроил! Скорость в speedtest 120 мбит/с, живу в частном доме!",
    rating: 5
  },
  {
    id: 10,
    name: "Кристина Казанцева",
    date: "10 марта 2025",
    text: "Подключали интернет в КП Удачном, все отлично работает, ребята молодцы. Сделали все быстро! Особая благодарность, менеджеру Александру, всегда на связи😊",
    rating: 5
  },
  {
    id: 11,
    name: "Лейсан Гиматдинова",
    date: "13 марта 2025",
    text: "Провели в дом интернет. О боги свершилось чудо теперь у меня дома есть стабильный, проводной инет. А не от мобильника, который вечно тормозил. Спасибо большое вам SKYNET",
    rating: 5
  },
  {
    id: 12,
    name: "Ильдар Галиуллин",
    date: "16 марта 2025",
    text: "Добрый день. Все отлично работает молодцы. Начали прорабатывать вопрос проведения в наш поселок еще зимой. Полностью собрали списки и провели интернет всему поселку это примерно 50 домов, хотя оставляли очень много заявок в Таттелеком, дом.ру и т.д., но никто не брался за работу, так как работа объёмная. Хотелось бы конечно что бы можно было вопрос решать комплексно, что бы тариф включал в себя и сотовую связь тогда было бы вообще хорошо. В принципе скорость интернета устраивает.",
    rating: 5
  },
  {
    id: 13,
    name: "Айдар Хайдаров",
    date: "17 марта 2025",
    text: "Подключил интернет от скайнет, красота, скорость хорошая, оптоволокно прямо домой завели на даче, так же удобно что платить можно через приложение, и смотреть за балансом на счёту.",
    rating: 5
  },
  {
    id: 14,
    name: "Её Величество Юсупова",
    date: "3 апреля 2025",
    text: "Добрый день! компания работает хорошо, естественно есть куда расти и развиваться, могут подключить оптоволокно и радио. Отдельный привет Вергазу и Антону Туманскому.",
    rating: 5
  },
  {
    id: 15,
    name: "Евгения Моряхина",
    date: "14 апреля 2025",
    text: "Хотим выразить благодарность Абдуллину Алмазу и всем сотрудникам за быстрое подключение интернета. Нам в кратчайшие сроки завели в КП. Летай нас морозил с сентября 2024 года, а ребята завели нам в течение 2х недель. Спасибо вам БОЛЬШОЕ. Все работает стабильно и скорость даже больше заявленных 100мбс.",
    rating: 5
  },
  {
    id: 16,
    name: "Шамиль Халилов",
    date: "11 июня 2025",
    text: "Пользуемся услугами этого провайдера уже не первый год. Очень довольны. Высокая скорость, качественная поддержка. Оперативно реагируют на все запросы, быстро подключают новые объекты. г. Казань: ул. Островского 102, ул. Достоевского 44/6; г. Зеленодольск: ул. Ленина 32. Отдельная благодарность Вергазу, инженеру Фаилю, Денису, а так же техническому директору Антону Туманскому.",
    rating: 5
  }
];

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => {
  const [expanded, setExpanded] = useState(false);
  
  // Проверяем, является ли текст длинным для показа кнопки раскрытия
  const isLongText = review.text.length > 200;
  
  // Генерируем инициалы из имени
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className="bg-skynet-blue rounded-full w-12 h-12 flex items-center justify-center mr-4 text-white font-semibold text-sm">
            {getInitials(review.name)}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{review.name}</h3>
            <p className="text-sm text-gray-500">{review.date}</p>
          </div>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      <div className="text-gray-600 mb-3">
        {isLongText && !expanded ? (
          <>
            <p>{review.text.substring(0, 200)}...</p>
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

const Reviews = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    text: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleRatingChange = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Отзыв успешно отправлен! После модерации он появится на сайте.');
    setShowForm(false);
    setFormData({
      name: '',
      rating: 5,
      text: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <section className="pt-32 pb-20 bg-skynet-gray-light/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-skynet-orange/10 text-skynet-orange text-sm font-medium mb-3">
              Отзывы
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Что говорят наши клиенты
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Ознакомьтесь с реальными отзывами наших клиентов о качестве сервиса и поделитесь своим опытом
            </p>
            <button 
              onClick={() => setShowForm(!showForm)}
              className="bg-skynet-orange hover:bg-skynet-orange-bright text-white font-medium px-8 py-3 rounded-full shadow-md hover:shadow-orange-glow transition-all transform hover:-translate-y-1"
            >
              {showForm ? 'Отменить' : 'Оставить отзыв'}
            </button>
          </div>
          
          {showForm && (
            <div className="max-w-3xl mx-auto mt-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ваш отзыв</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Ваше имя *
                  </label>
                  <input 
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent"
                    placeholder="Введите ваше имя"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Ваша оценка *
                  </label>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => handleRatingChange(rating)}
                        className="mr-2"
                      >
                        <Star 
                          className={`h-8 w-8 ${
                            rating <= formData.rating 
                              ? 'text-amber-400 fill-amber-400' 
                              : 'text-gray-300'
                          }`} 
                        />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="text" className="block text-sm font-medium text-gray-700 mb-1">
                    Текст отзыва *
                  </label>
                  <textarea 
                    id="text"
                    name="text"
                    rows={6}
                    required
                    value={formData.text}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent"
                    placeholder="Поделитесь своими впечатлениями о нашем сервисе"
                  ></textarea>
                </div>
                
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Отмена
                  </button>
                  <button
                    type="submit"
                    className="bg-skynet-orange hover:bg-skynet-orange-bright text-white font-medium px-6 py-3 rounded-lg shadow-md transition-all"
                  >
                    Отправить отзыв
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Все отзывы</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-skynet-blue/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Наши клиенты выбирают нас за
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              По результатам опроса клиентов, вот что ценят пользователи SKYNET больше всего
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all">
              <div className="bg-skynet-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-skynet-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Скорость</h3>
              <p className="text-gray-600">Стабильно высокая скорость соединения без обрывов и задержек</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all">
              <div className="bg-skynet-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-skynet-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Выгодные тарифы</h3>
              <p className="text-gray-600">Оптимальное соотношение цены и качества для любых потребностей</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all">
              <div className="bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Надежность</h3>
              <p className="text-gray-600">Минимальное время простоя с гарантией бесперебойной работы</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all">
              <div className="bg-purple-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Поддержка 24/7</h3>
              <p className="text-gray-600">Оперативная помощь и решение технических вопросов в любое время</p>
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Reviews;
