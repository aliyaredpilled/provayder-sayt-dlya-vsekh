import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const latestNews = [
  {
    id: 1,
    title: 'Как выбрать оптимальный тариф интернета для дома',
    excerpt: 'Разбираемся, какая скорость интернета нужна для разных сценариев использования и как не переплачивать за лишние мегабиты.',
    category: 'Советы',
    date: '15.06.2023',
    image: 'https://images.unsplash.com/photo-1562907550-096d3bf9b25c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 2,
    title: 'Новое поколение Wi-Fi: что такое Wi-Fi 6 и зачем он вам нужен',
    excerpt: 'Разбираемся в особенностях нового стандарта Wi-Fi 6, его преимуществах и реальной пользе для домашней сети.',
    category: 'Технологии',
    date: '02.06.2023',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 3,
    title: 'Цифровое телевидение: преимущества и особенности современного ТВ',
    excerpt: 'Рассказываем, чем цифровое ТВ отличается от аналогового, какие функции доступны пользователям и как выбрать оптимальный пакет каналов.',
    category: 'Обзоры',
    date: '25.05.2023',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }
];

const LatestNews = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-sky-100 via-sky-50 to-white relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-skynet-blue/10 text-skynet-blue text-sm font-medium mb-3">
              Новости
            </span>
            <h2 className="text-3xl font-bold text-gray-900">Последние публикации</h2>
          </div>
          <Link 
            to="/blog" 
            className="inline-flex items-center text-skynet-blue hover:text-skynet-blue-dark font-medium"
          >
            Все новости <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestNews.map((post) => (
            <div 
              key={post.id}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
            >
              <img 
                src={post.image} 
                alt={post.title} 
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-skynet-blue/10 text-skynet-blue text-xs font-medium mb-3">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 h-14">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 h-18">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link 
                    to="/blog" 
                    className="inline-flex items-center text-skynet-blue hover:text-skynet-blue-dark font-medium text-sm"
                  >
                    Подробнее <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
