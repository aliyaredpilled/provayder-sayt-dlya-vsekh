import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Calendar, User, Clock, ChevronRight, Search } from 'lucide-react';
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: 'Как выбрать оптимальный тариф интернета для дома',
    excerpt: 'Разбираемся, какая скорость интернета нужна для разных сценариев использования и как не переплачивать за лишние мегабиты.',
    category: 'Советы',
    date: '15.06.2023',
    author: 'Александр Петров',
    readTime: '7 мин',
    image: 'https://images.unsplash.com/photo-1562907550-096d3bf9b25c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 2,
    title: 'Новое поколение Wi-Fi: что такое Wi-Fi 6 и зачем он вам нужен',
    excerpt: 'Разбираемся в особенностях нового стандарта Wi-Fi 6, его преимуществах и реальной пользе для домашней сети.',
    category: 'Технологии',
    date: '02.06.2023',
    author: 'Евгений Соколов',
    readTime: '10 мин',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 3,
    title: 'Цифровое телевидение: преимущества и особенности современного ТВ',
    excerpt: 'Рассказываем, чем цифровое ТВ отличается от аналогового, какие функции доступны пользователям и как выбрать оптимальный пакет каналов.',
    category: 'Обзоры',
    date: '25.05.2023',
    author: 'Мария Иванова',
    readTime: '8 мин',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 4,
    title: 'Безопасность домашней сети: 10 шагов для защиты от киберугроз',
    excerpt: 'Практические советы по обеспечению безопасности вашей домашней сети и защите персональных данных от киберугроз.',
    category: 'Безопасность',
    date: '18.05.2023',
    author: 'Дмитрий Кузнецов',
    readTime: '12 мин',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 5,
    title: 'Как настроить Smart TV для максимального комфорта',
    excerpt: 'Подробная инструкция по настройке Smart TV, подключению к интернету, установке приложений и оптимизации качества изображения.',
    category: 'Инструкции',
    date: '10.05.2023',
    author: 'Анна Сергеева',
    readTime: '9 мин',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 6,
    title: 'Умный дом: с чего начать и как управлять им через интернет',
    excerpt: 'Основы создания системы умного дома, обзор доступных устройств и советы по их интеграции с домашней сетью.',
    category: 'Технологии',
    date: '03.05.2023',
    author: 'Игорь Волков',
    readTime: '15 мин',
    image: 'https://images.unsplash.com/photo-1558002038-10058d7d491d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }
];

const categories = [
  { id: 'all', name: 'Все статьи' },
  { id: 'tech', name: 'Технологии' },
  { id: 'reviews', name: 'Обзоры' },
  { id: 'tips', name: 'Советы' },
  { id: 'security', name: 'Безопасность' },
  { id: 'instructions', name: 'Инструкции' }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <section className="pt-32 pb-20 bg-skynet-gray-light/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="inline-block px-3 py-1 rounded-full bg-skynet-blue/10 text-skynet-blue text-sm font-medium mb-3">
              Блог
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Наши публикации и статьи
            </h1>
            <p className="text-lg text-gray-600">
              Полезная информация, советы по настройке оборудования, обзоры технологий и новости компании
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative max-w-xl mx-auto mb-8">
              <input 
                type="text" 
                className="block w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent shadow-sm" 
                placeholder="Поиск по статьям..." 
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto hide-scrollbar space-x-4 pb-6 mb-8">
            {categories.map((category) => (
              <button 
                key={category.id}
                className={`px-6 py-3 rounded-full transition-all whitespace-nowrap ${
                  category.id === 'all'
                    ? 'bg-skynet-blue text-white' 
                    : 'bg-white border border-gray-200 text-gray-800 hover:border-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10 mb-16">
            <div className="lg:col-span-2">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Революция интернет-технологий: что ждёт нас в будущем" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-skynet-orange text-white text-sm font-medium mb-3 max-w-fit">
                    Технологии будущего
                  </span>
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                    Революция интернет-технологий: что ждёт нас в будущем
                  </h2>
                  <div className="flex flex-wrap items-center text-white/80 text-sm gap-4 mb-6">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      <span>Екатерина Морозова</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>20.06.2023</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>15 мин чтения</span>
                    </div>
                  </div>
                  <p className="text-white/90 text-lg mb-6">
                    Разбираемся в новейших трендах развития интернет-технологий и их влиянии на повседневную жизнь. От 10G-соединений до виртуальной реальности – какие инновации изменят наше взаимодействие с цифровым миром?
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center bg-white text-skynet-blue px-6 py-3 rounded-full font-medium transition-all transform hover:shadow-lg hover:-translate-y-1"
                  >
                    Читать статью <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
            
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="h-full w-full object-cover object-center max-h-60 md:max-h-full"
                    />
                  </div>
                  <div className="p-6 md:w-3/5">
                    <span className="inline-block px-3 py-1 rounded-full bg-skynet-blue/10 text-skynet-blue text-xs font-medium mb-3">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center text-gray-500 text-sm gap-x-4 gap-y-2 mb-4">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <a 
                      href="#" 
                      className="inline-flex items-center text-skynet-blue hover:text-skynet-blue-dark font-medium"
                    >
                      Читать далее <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-white border border-skynet-blue text-skynet-blue font-medium px-8 py-3 rounded-full hover:bg-skynet-blue/5 transition-colors">
              Загрузить больше статей
            </button>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-skynet-blue/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Подпишитесь на нашу рассылку</h2>
            <p className="text-lg text-gray-600 mb-8">
              Получайте свежие статьи, полезные советы и новости компании прямо на вашу почту
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent" 
                required
              />
              <button 
                type="submit" 
                className="bg-skynet-orange hover:bg-skynet-orange-bright text-white font-medium px-6 py-3 rounded-lg shadow-md transition-all whitespace-nowrap"
              >
                Подписаться
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              Нажимая на кнопку, вы соглашаетесь с нашей{' '}
              <a href="#" className="text-skynet-blue hover:underline">
                политикой конфиденциальности
              </a>
            </p>
          </div>
        </div>
      </section>
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Blog;
