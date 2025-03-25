
import { Facebook, Twitter, Instagram, Youtube, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="font-bold text-2xl tracking-tight">
                SKYNET
              </span>
              <span className="bg-skynet-blue text-white text-xs px-2 py-0.5 rounded-full font-medium">
                10G
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Ведущий провайдер высокоскоростного интернета в России. Мы предоставляем услуги связи для дома и бизнеса с 2005 года.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-skynet-blue transition-all p-2 rounded-full">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-skynet-blue transition-all p-2 rounded-full">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-skynet-blue transition-all p-2 rounded-full">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-skynet-blue transition-all p-2 rounded-full">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Услуги</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Интернет для дома
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Интернет для бизнеса
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Цифровое ТВ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  IP-телефония
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Облачные сервисы
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Компания</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Новости
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Карьера
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Партнеры
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Контакты
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Поддержка</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Техподдержка
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  База знаний
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Проверка скорости
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white flex items-center">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Оплата услуг
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              © 2023 SkyNet. Все права защищены.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-500 hover:text-white">
                Условия пользования
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-white">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-white">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
