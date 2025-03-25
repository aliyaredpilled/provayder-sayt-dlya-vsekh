
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Star, ThumbsUp, MessageSquare, User } from 'lucide-react';
import { useState } from 'react';

const reviews = [
  {
    id: 1,
    name: 'Алексей Смирнов',
    date: '15.06.2023',
    rating: 5,
    service: 'Интернет 1 Гбит/с',
    text: 'Пользуюсь услугами Skynet уже более 3-х лет и очень доволен. Скорость всегда соответствует заявленной, а если возникают какие-то проблемы, служба поддержки решает их оперативно. Недавно обновил тариф до 1 Гбит/с – полет нормальный, все летает!',
    likes: 24,
    comments: 3
  },
  {
    id: 2,
    name: 'Елена Петрова',
    date: '02.06.2023',
    rating: 4,
    service: 'Интернет + ТВ',
    text: 'Подключила пакет Интернет + ТВ полгода назад. Интернет работает стабильно, ТВ-приставка удобная с хорошим интерфейсом. Не хватает некоторых каналов в базовом пакете, пришлось доплачивать за расширенный. В целом сервисом довольна, рекомендую.',
    likes: 15,
    comments: 1
  },
  {
    id: 3,
    name: 'Дмитрий Ковалев',
    date: '28.05.2023',
    rating: 5,
    service: 'Интернет 10 Гбит/с',
    text: 'Работаю в IT и для меня скорость интернета критически важна. Skynet предложил тариф на 10 Гбит/с – это просто космос! Все загрузки мгновенные, онлайн-игры без намека на лаги, стриминг видео в максимальном качестве без буферизации. Отдельное спасибо технарям за профессиональную настройку оборудования.',
    likes: 36,
    comments: 7
  },
  {
    id: 4,
    name: 'Ольга Николаева',
    date: '15.05.2023',
    rating: 3,
    service: 'Интернет 100 Мбит/с',
    text: 'В целом интернет работает нормально, но иногда бывают перебои вечером. Служба поддержки отвечает быстро, но не всегда удается решить проблему с первого раза. За свои деньги качество приемлемое, но хотелось бы большей стабильности.',
    likes: 7,
    comments: 5
  },
  {
    id: 5,
    name: 'Игорь Васильев',
    date: '05.05.2023',
    rating: 5,
    service: 'Интернет + ТВ + Телефония',
    text: 'Пользуюсь полным пакетом услуг почти год. Очень удобно иметь все в одном месте и платить по одному счету. Интернет быстрый и стабильный, ТВ с хорошим выбором каналов, телефонная связь четкая. При переезде на новую квартиру перенесли все оборудование и настроили в тот же день. Молодцы!',
    likes: 19,
    comments: 0
  }
];

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(review.likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className="bg-skynet-gray-light rounded-full w-12 h-12 flex items-center justify-center mr-4">
            <User className="h-6 w-6 text-gray-500" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{review.name}</h3>
            <p className="text-sm text-gray-500">{review.date}</p>
          </div>
        </div>
        <div className="bg-skynet-orange/10 px-3 py-1 rounded-full text-sm font-medium text-skynet-orange">
          {review.service}
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
      
      <p className="text-gray-600 mb-6">{review.text}</p>
      
      <div className="flex border-t border-gray-100 pt-4">
        <button 
          onClick={handleLike}
          className={`flex items-center mr-6 text-sm ${
            liked ? 'text-skynet-blue font-medium' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <ThumbsUp className={`h-4 w-4 mr-1 ${liked ? 'fill-skynet-blue' : ''}`} />
          <span>{likeCount}</span>
        </button>
        
        <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
          <MessageSquare className="h-4 w-4 mr-1" />
          <span>{review.comments}</span>
        </button>
      </div>
    </div>
  );
};

const Reviews = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    rating: 5,
    text: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleRatingChange = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Имитация отправки отзыва
    alert('Отзыв успешно отправлен! После модерации он появится на сайте.');
    setShowForm(false);
    setFormData({
      name: '',
      service: '',
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
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Услуга *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent"
                  >
                    <option value="">Выберите услугу</option>
                    <option value="Интернет 100 Мбит/с">Интернет 100 Мбит/с</option>
                    <option value="Интернет 1 Гбит/с">Интернет 1 Гбит/с</option>
                    <option value="Интернет 10 Гбит/с">Интернет 10 Гбит/с</option>
                    <option value="Интернет + ТВ">Интернет + ТВ</option>
                    <option value="Интернет + ТВ + Телефония">Интернет + ТВ + Телефония</option>
                    <option value="Цифровое ТВ">Цифровое ТВ</option>
                  </select>
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
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Последние отзывы</h2>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Сортировать:</span>
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                <option>По дате</option>
                <option>По рейтингу</option>
                <option>По популярности</option>
              </select>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-white border border-skynet-blue text-skynet-blue font-medium px-8 py-3 rounded-full hover:bg-skynet-blue/5 transition-colors">
              Загрузить больше отзывов
            </button>
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
