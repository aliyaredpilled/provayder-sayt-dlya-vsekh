import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Определяем страницы с темным фоном, где нужен светлый навбар
  const isDarkBackgroundPage = location.pathname === '/promo/connect-neighbor';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  // Функция для скролла к секции на странице Услуги
  const handleServiceLinkClick = (hash: string) => {
    navigate(`/services${hash}`);
    setTimeout(() => {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        const headerHeight = 80; // Высота шапки
        const elementPosition = element.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 100); // Небольшая задержка, чтобы страница успела отрендериться
  };

  // Функция для скролла к секции "Подключиться" на странице Контакты
  const scrollToContact = () => {
    navigate('/contacts', { state: { scrollToForm: true } });
  };

  // Функция для скролла к секции "Подключиться просто"
  const scrollToContact_OLD = () => {
    // Если мы не на главной странице, переходим на главную и скроллим
    if (location.pathname !== '/') {
      window.location.href = '/#contact';
      return;
    }

    // Если на главной странице, ищем секцию contact
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Если секции нет, скроллим на верх
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Определяем стиль навбара в зависимости от страницы
  const getNavbarStyle = () => {
    if (isDarkBackgroundPage) {
      return isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-md py-2" 
        : "bg-white/90 backdrop-blur-sm py-3";
    } else {
      return isScrolled 
        ? "bg-white/90 backdrop-blur-md shadow-sm py-2" 
        : "bg-transparent py-3";
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
        <a href="/" onClick={handleLogoClick} className="flex items-center">
          <img 
            src="/lovable-uploads/696510d7-9903-4f21-967c-1a7892efc8ac.png" 
            alt="SKYNET" 
            className="h-12"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu delayDuration={100}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Услуги</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <button onClick={() => handleServiceLinkClick('#internet')} className="text-left block px-4 py-2 text-sm text-gray-700 hover:bg-skynet-gray-light rounded-md">Интернет для дома</button>
                    <button onClick={() => handleServiceLinkClick('#tv')} className="text-left block px-4 py-2 text-sm text-gray-700 hover:bg-skynet-gray-light rounded-md">Телевидение</button>
                    <button onClick={() => handleServiceLinkClick('#telephony')} className="text-left block px-4 py-2 text-sm text-gray-700 hover:bg-skynet-gray-light rounded-md">Телефония</button>
                    <button onClick={() => handleServiceLinkClick('#surveillance')} className="text-left block px-4 py-2 text-sm text-gray-700 hover:bg-skynet-gray-light rounded-md">Видеонаблюдение</button>
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
                <Link to="/support" className={navigationMenuTriggerStyle()}>Поддержка</Link>
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
              <button onClick={() => handleServiceLinkClick('#internet')} className="text-left block w-full pl-3 py-2 text-gray-600 hover:text-skynet-orange">Интернет для дома</button>
              <button onClick={() => handleServiceLinkClick('#tv')} className="text-left block w-full pl-3 py-2 text-gray-600 hover:text-skynet-orange">Телевидение</button>
              <button onClick={() => handleServiceLinkClick('#telephony')} className="text-left block w-full pl-3 py-2 text-gray-600 hover:text-skynet-orange">Телефония</button>
              <button onClick={() => handleServiceLinkClick('#surveillance')} className="text-left block w-full pl-3 py-2 text-gray-600 hover:text-skynet-orange">Видеонаблюдение</button>
            </div>
            <Link to="/tariffs" className="block py-2 text-gray-800 hover:text-skynet-orange">Тарифы</Link>
            
            <div className="py-2">
              <p className="font-medium text-gray-800 mb-1">О компании</p>
              <Link to="/about" className="block pl-3 py-2 text-gray-600 hover:text-skynet-orange">О компании</Link>
              <Link to="/blog" className="block pl-3 py-2 text-gray-600 hover:text-skynet-orange">Новости</Link>
              <Link to="/career" className="block pl-3 py-2 text-gray-600 hover:text-skynet-orange">Вакансии</Link>
              <Link to="/reviews" className="block pl-3 py-2 text-gray-600 hover:text-skynet-orange">Отзывы</Link>
            </div>
            
            <Link to="/support" className="block py-2 text-gray-800 hover:text-skynet-orange">Поддержка</Link>
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
