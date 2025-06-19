import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Логотип и информация о компании */}
          <div>
            <div className="mb-4">
              <a href="/" onClick={handleLogoClick} className="bg-white backdrop-blur-sm rounded-xl p-3 inline-block cursor-pointer">
                <img 
                  src="/lovable-uploads/696510d7-9903-4f21-967c-1a7892efc8ac.png" 
                  alt="SKYNET Строй" 
                  className="h-12" 
                />
              </a>
            </div>
            <p className="text-gray-400 mb-4 text-sm">
              Ваш надежный провайдер современных телекоммуникационных услуг для дома и семьи в Казани.
            </p>
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
                <div>
                  <p className="text-gray-200 text-xs">Для запросов:</p>
                  <a href="mailto:sales@skynet-kazan.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                    sales@skynet-kazan.com
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-skynet-blue" />
                <div>
                  <p className="text-gray-200 text-xs">Техподдержка:</p>
                  <a href="mailto:noc@skynet-kazan.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                    noc@skynet-kazan.com
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <MessageSquare size={16} className="mr-2 text-green-500" />
                <div>
                  <p className="text-gray-200 text-xs">WhatsApp:</p>
                  <a href="https://api.whatsapp.com/send/?phone=79867205872&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm block">
                    Для жалоб
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 mr-2 text-skynet-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/>
                </svg>
                <div>
                  <p className="text-gray-200 text-xs">Telegram-боты:</p>
                  <a href="https://t.me/skynet_kazan_supportbot" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm block">
                    Техподдержка
                  </a>
                  <a href="https://t.me/SkyNet_document_bot" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm block">
                    Документы
                  </a>
                </div>
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
