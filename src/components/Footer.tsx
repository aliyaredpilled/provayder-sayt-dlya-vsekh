
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Логотип и информация о компании */}
          <div>
            <div className="mb-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 inline-block">
                <img 
                  src="/lovable-uploads/696510d7-9903-4f21-967c-1a7892efc8ac.png" 
                  alt="SKYNET Строй" 
                  className="h-12" 
                />
              </div>
            </div>
            <p className="text-gray-400 mb-4 text-sm">
              Ваш надежный провайдер современных телекоммуникационных услуг для дома и семьи в Казани.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Услуги */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Интернет для дома</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Цифровое ТВ</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Телефония</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Wi-Fi роутеры</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Все услуги</Link>
              </li>
            </ul>
          </div>
          
          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Контакты</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-skynet-blue" />
                <div>
                  <p className="text-gray-200 text-xs">Подключение:</p>
                  <a href="tel:+78432909294" className="text-gray-400 hover:text-white transition-colors text-sm">
                    +7 (843) 290-92-94
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-skynet-blue" />
                <div>
                  <p className="text-gray-200 text-xs">Поддержка:</p>
                  <a href="tel:+78435777775" className="text-gray-400 hover:text-white transition-colors text-sm">
                    +7 (843) 5-777-775
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2 text-skynet-blue" />
                <p className="text-gray-400 text-sm">Казань, ул. Восход д. 23А</p>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-skynet-blue" />
                <a href="mailto:info@skynet.ru" className="text-gray-400 hover:text-white transition-colors text-sm">
                  info@skynet.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()} ООО "Скайнет". Все права защищены.
            </p>
            <div className="mt-2 md:mt-0">
              <ul className="flex space-x-4 text-xs">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Политика конфиденциальности
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Пользовательское соглашение
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
