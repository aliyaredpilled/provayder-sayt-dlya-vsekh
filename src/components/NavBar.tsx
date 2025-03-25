
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/704e9442-6bb2-4e95-a66d-a39c1b2f1222.png" 
            alt="SKYNET" 
            className="h-10"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button className="flex items-center text-gray-800 hover:text-skynet-blue">
              Услуги <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 opacity-0 transform -translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
              <div className="bg-white rounded-lg shadow-lg p-3 ring-1 ring-black ring-opacity-5">
                <Link to="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-skynet-gray-light rounded-md">Интернет для дома</Link>
                <Link to="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-skynet-gray-light rounded-md">Телевидение</Link>
                <Link to="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-skynet-gray-light rounded-md">Телефония</Link>
                <Link to="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-skynet-gray-light rounded-md">Wi-Fi роутеры</Link>
              </div>
            </div>
          </div>
          <Link to="/tariffs" className="text-gray-800 hover:text-skynet-blue">Тарифы</Link>
          <Link to="/about" className="text-gray-800 hover:text-skynet-blue">О компании</Link>
          <Link to="/faq" className="text-gray-800 hover:text-skynet-blue">Поддержка</Link>
          <Link to="/contacts" className="text-gray-800 hover:text-skynet-blue">Контакты</Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/account" className="text-skynet-blue hover:text-skynet-blue-dark font-medium">
            Личный кабинет
          </Link>
          <Link 
            to="/contacts" 
            className="bg-skynet-orange hover:bg-skynet-orange-dark text-white rounded-full px-5 py-2 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Подключиться
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg animate-fade-in">
          <div className="px-4 py-3 space-y-1">
            <div className="py-2">
              <p className="font-medium text-gray-800 mb-1">Услуги</p>
              <Link to="/services" className="block pl-3 py-2 text-gray-600 hover:text-skynet-orange">Интернет для дома</Link>
              <Link to="/services" className="block pl-3 py-2 text-gray-600 hover:text-skynet-orange">Телевидение</Link>
              <Link to="/services" className="block pl-3 py-2 text-gray-600 hover:text-skynet-orange">Телефония</Link>
              <Link to="/services" className="block pl-3 py-2 text-gray-600 hover:text-skynet-orange">Wi-Fi роутеры</Link>
            </div>
            <Link to="/tariffs" className="block py-2 text-gray-800 hover:text-skynet-orange">Тарифы</Link>
            <Link to="/about" className="block py-2 text-gray-800 hover:text-skynet-orange">О компании</Link>
            <Link to="/faq" className="block py-2 text-gray-800 hover:text-skynet-orange">Поддержка</Link>
            <Link to="/contacts" className="block py-2 text-gray-800 hover:text-skynet-orange">Контакты</Link>
            <Link to="/account" className="block py-2 text-skynet-blue font-medium">Личный кабинет</Link>
            <Link 
              to="/contacts" 
              className="block bg-skynet-orange text-white rounded-lg px-4 py-3 text-center mt-4 shadow-md"
            >
              Подключиться
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
