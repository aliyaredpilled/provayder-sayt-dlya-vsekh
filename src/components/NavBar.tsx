import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Определяем страницы с темным фоном, где нужен светлый навбар
  const isDarkBackgroundPage = location.pathname === '/promo/connect-neighbor';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Функция для скролла к секции "Подключиться просто"
  const scrollToContact = () => {
    // Check if user is at bottom of page and needs to go to top of current section
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const currentScroll = window.pageYOffset;
    
    // If user is near the bottom (within 200px), scroll to top of page
    if (currentScroll + windowHeight >= documentHeight - 200) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    // Otherwise, scroll to contact section as usual
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Определяем стиль навбара в зависимости от страницы
  const getNavbarStyle = () => {
    if (isDarkBackgroundPage) {
      return isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-md py-1" 
        : "bg-white/90 backdrop-blur-sm py-2";
    } else {
      return isScrolled 
        ? "bg-white/90 backdrop-blur-md shadow-sm py-1" 
        : "bg-transparent py-2";
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        getNavbarStyle()
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/696510d7-9903-4f21-967c-1a7892efc8ac.png" 
            alt="SKYNET" 
            className="h-10"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Услуги</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <Link to="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-skynet-gray-light rounded-md">Интернет для дома</Link>
                    <Link to="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-skynet-gray-light rounded-md">Телевидение</Link>
                    <Link to="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-skynet-gray-light rounded-md">Телефония</Link>
                    <Link to="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-skynet-gray-light rounded-md">Wi-Fi роутеры</Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/tariffs" className={navigationMenuTriggerStyle()}>Тарифы</Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>О компании</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <Link to="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-skynet-gray-light rounded-md">О компании</Link>
                    <Link to="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-skynet-gray-light rounded-md">Новости</Link>
                    <Link to="/career" className="block px-4 py-2 text-sm text-gray-700 hover:bg-skynet-gray-light rounded-md">Вакансии</Link>
                    <Link to="/reviews" className="block px-4 py-2 text-sm text-gray-700 hover:bg-skynet-gray-light rounded-md">Отзывы</Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/faq" className={navigationMenuTriggerStyle()}>Поддержка</Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/contacts" className={navigationMenuTriggerStyle()}>Контакты</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="text-skynet-blue hover:text-skynet-blue-dark font-medium">
            Личный кабинет
          </Link>
          <button 
            onClick={scrollToContact}
            className="bg-skynet-orange hover:bg-skynet-orange-dark text-white rounded-full px-5 py-2 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Подключиться
          </button>
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
            
            <div className="py-2">
              <p className="font-medium text-gray-800 mb-1">О компании</p>
              <Link to="/about" className="block pl-3 py-2 text-gray-600 hover:text-skynet-orange">О компании</Link>
              <Link to="/blog" className="block pl-3 py-2 text-gray-600 hover:text-skynet-orange">Новости</Link>
              <Link to="/career" className="block pl-3 py-2 text-gray-600 hover:text-skynet-orange">Вакансии</Link>
              <Link to="/reviews" className="block pl-3 py-2 text-gray-600 hover:text-skynet-orange">Отзывы</Link>
            </div>
            
            <Link to="/faq" className="block py-2 text-gray-800 hover:text-skynet-orange">Поддержка</Link>
            <Link to="/contacts" className="block py-2 text-gray-800 hover:text-skynet-orange">Контакты</Link>
            <Link to="/login" className="block py-2 text-skynet-blue font-medium">Личный кабинет</Link>
            <button 
              onClick={scrollToContact}
              className="block bg-skynet-orange text-white rounded-lg px-4 py-3 text-center mt-4 shadow-md w-full"
            >
              Подключиться
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
