
import { Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactInfo = () => {
  return (
    <div className="md:col-span-2 space-y-6">
      <div className="bg-skynet-gray-light/30 rounded-xl p-6 backdrop-blur-sm">
        <div className="flex">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 bg-skynet-blue text-white rounded-lg flex items-center justify-center">
              <Phone className="h-6 w-6" />
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Телефон</h3>
            <p className="text-gray-600 mb-1">Для подключения:</p>
            <a href="tel:+78432909294" className="text-skynet-blue hover:text-skynet-blue-dark transition-colors">
              +7 (843) 290-92-94
            </a>
            <p className="text-gray-600 mt-2 mb-1">Техническая поддержка:</p>
            <a href="tel:+78435777775" className="text-skynet-blue hover:text-skynet-blue-dark transition-colors">
              +7 (843) 5-777-775
            </a>
          </div>
        </div>
      </div>
      
      <div className="bg-skynet-gray-light/30 rounded-xl p-6 backdrop-blur-sm">
        <div className="flex">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 bg-skynet-orange text-white rounded-lg flex items-center justify-center">
              <Mail className="h-6 w-6" />
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
            <p className="text-gray-600 mb-1">Для запросов и предложений:</p>
            <a href="mailto:info@skynet.ru" className="text-skynet-blue hover:text-skynet-blue-dark transition-colors">
              info@skynet.ru
            </a>
            <p className="text-gray-600 mt-2 mb-1">Техническая поддержка:</p>
            <a href="mailto:support@skynet.ru" className="text-skynet-blue hover:text-skynet-blue-dark transition-colors">
              support@skynet.ru
            </a>
          </div>
        </div>
      </div>
      
      <div className="bg-skynet-gray-light/30 rounded-xl p-6 backdrop-blur-sm">
        <div className="flex">
          <div className="flex-shrink-0">
            <div className="h-12 w-12 bg-green-500 text-white rounded-lg flex items-center justify-center">
              <Clock className="h-6 w-6" />
            </div>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Режим работы</h3>
            <p className="text-gray-600 mb-1">Офис:</p>
            <p className="text-gray-800">Пн-Пт: 8:00-18:00</p>
            <p className="text-gray-800">Сб: 8:00-13:00</p>
            <p className="text-gray-600 mt-2 mb-1">Отвечаем по телефону:</p>
            <p className="text-gray-800">Круглосуточно</p>
          </div>
        </div>
      </div>
      
      <div className="text-center md:text-left">
        <Link 
          to="/contacts" 
          className="inline-flex items-center text-skynet-blue hover:text-skynet-blue-dark mt-2"
        >
          Все контакты <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;
