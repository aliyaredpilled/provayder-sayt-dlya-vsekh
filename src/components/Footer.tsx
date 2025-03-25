
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Логотип и информация о компании */}
          <div>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/704e9442-6bb2-4e95-a66d-a39c1b2f1222.png" 
                alt="SKYNET" 
                className="h-10 brightness-150 contrast-150 invert" 
              />
            </div>
            <p className="text-gray-400 mb-6">
              Ваш надежный провайдер современных телекоммуникационных услуг для дома и семьи в Казани.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Услуги */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Интернет для дома</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Цифровое ТВ</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Телефония</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Wi-Fi роутеры</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Все услуги</Link>
              </li>
            </ul>
          </div>
          
          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-skynet-blue" />
                <div>
                  <p className="text-gray-200">Подключение:</p>
                  <a href="tel:+78432909294" className="text-gray-400 hover:text-white transition-colors">
                    +7 (843) 290-92-94
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-skynet-blue" />
                <div>
                  <p className="text-gray-200">Поддержка:</p>
                  <a href="tel:+78435777775" className="text-gray-400 hover:text-white transition-colors">
                    +7 (843) 5-777-775
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-3 text-skynet-blue" />
                <p className="text-gray-400">Казань, ул. Восход д. 23А</p>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-skynet-blue" />
                <a href="mailto:info@skynet.ru" className="text-gray-400 hover:text-white transition-colors">
                  info@skynet.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ООО "Скайнет". Все права защищены.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
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
