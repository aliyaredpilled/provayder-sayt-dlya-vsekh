import { Zap, Wifi, Download, ArrowRight, Shield, Globe, Clock, Gamepad2, Home, Users, CheckCircle2, MapPin, Settings2, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const TenGigabitSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="10g-internet" className="py-8 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-sky-100 to-blue-100 rounded-2xl overflow-hidden relative border border-sky-200">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-gradient-to-br from-skynet-orange to-skynet-orange-dark opacity-30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-gradient-to-tr from-skynet-orange to-orange-500 opacity-30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-skynet-orange/20 to-skynet-blue/20 opacity-20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-skynet-orange/10 text-skynet-orange text-sm font-medium mb-4">
                Революционная технология XGS-PON
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-skynet-blue mb-4">
                Интернет будущего. <span className="text-skynet-orange">До 10 Гбит/с.</span>
              </h2>
              
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Это не просто обновление — это совершенно новый уровень цифровых возможностей для вашего дома и бизнеса, доступный уже сегодня.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-3xl font-bold text-skynet-blue mb-8 text-center">Что это значит для вас?</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                
                {/* Card 1: Symmetric Speed */}
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-skynet-orange/30 shadow-lg flex flex-col">
                  <div className="flex items-center mb-4">
                    <Zap className="h-8 w-8 text-skynet-orange mr-4 flex-shrink-0" />
                    <h4 className="text-skynet-blue font-semibold text-xl">Симметричная скорость</h4>
                  </div>
                  <div className="space-y-4 flex-grow flex flex-col justify-between">
                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                      <p className="font-semibold text-gray-800 text-sm">Забудьте, когда загрузка была быстрой, а отдача — медленной. Теперь скорость одинакова в обе стороны.</p>
                    </div>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />Стримы в 4K и 8K</li>
                      <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />Мгновенная загрузка в облако</li>
                      <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />Видеоконференции без «зависаний»</li>
                    </ul>
                  </div>
                </div>

                {/* Card 2: Gaming */}
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-skynet-orange/30 shadow-lg flex flex-col">
                  <div className="flex items-center mb-4">
                    <Gamepad2 className="h-8 w-8 text-skynet-orange mr-4 flex-shrink-0" />
                    <h4 className="text-skynet-blue font-semibold text-xl">Гейминг без компромиссов</h4>
                  </div>
                  <div className="space-y-4 flex-grow flex flex-col justify-between">
                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                      <p className="font-semibold text-gray-800 text-sm">Минимальный пинг и стабильность — ваше главное преимущество в онлайн-баталиях.</p>
                    </div>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />Фильмы и сериалы в 8K</li>
                      <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />Погружение в миры VR/AR</li>
                      <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />Ваш интернет готов ко всему</li>
                    </ul>
                  </div>
                </div>

                {/* Card 3: Reliability */}
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-skynet-orange/30 shadow-lg flex flex-col">
                  <div className="flex items-center mb-4">
                    <Home className="h-8 w-8 text-skynet-orange mr-4 flex-shrink-0" />
                    <h4 className="text-skynet-blue font-semibold text-xl">Надежность для всех</h4>
                  </div>
                   <div className="space-y-4 flex-grow flex flex-col justify-between">
                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                      <p className="font-semibold text-gray-800 text-sm">Мощности хватит на все устройства одновременно, соединение останется стабильным.</p>
                    </div>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />Работа с «тяжелыми» сервисами</li>
                      <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />Просмотр видео детьми</li>
                      <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />Управление десятками гаджетов</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 mb-8 border border-skynet-orange/30 shadow-lg">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-skynet-blue mb-8">Как подключиться?</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="bg-skynet-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <MapPin className="h-8 w-8 text-skynet-blue" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2 text-gray-900">Поэтапное внедрение</h4>
                  <p className="text-sm text-gray-600">Начинаем с районов с самой высокой потребностью в сверхскоростях.</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="bg-skynet-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Settings2 className="h-8 w-8 text-skynet-blue" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2 text-gray-900">Простое обновление</h4>
                  <p className="text-sm text-gray-600">Для действующих клиентов на оптике — переход потребует минимальных изменений.</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="bg-skynet-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Sparkles className="h-8 w-8 text-skynet-blue" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2 text-gray-900">Новые тарифы</h4>
                  <p className="text-sm text-gray-600">Мы уже готовим новые тарифные планы, чтобы каждый выбрал для себя оптимум.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-700 text-xl mb-6">
                Следите за новостями и проверяйте доступность подключения по вашему адресу!
              </p>
              <p className="text-skynet-blue font-semibold text-2xl mb-8">
                С технологией XGS-PON от «Скайнет» будущее становится реальностью.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-skynet-orange to-skynet-orange-dark hover:from-skynet-orange-dark hover:to-orange-600 text-white py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all text-lg font-semibold"
                >
                  Узнать о подключении
                </Button>
                <Link to="/tariffs" className="inline-flex items-center text-skynet-blue hover:text-skynet-blue-dark font-medium py-2 text-lg">
                  Все тарифы <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenGigabitSection;
