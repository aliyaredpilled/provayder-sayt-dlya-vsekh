// XG-PON Section Component - обновлено для лучшей типографики и баланса
import { Zap, Wifi, Download, ArrowRight, Shield, Globe, Clock, Gamepad2, Home, Users, CheckCircle2, MapPin, Settings2, Sparkles, Check } from 'lucide-react';
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
        <div className="bg-gradient-to-br from-white to-sky-50 rounded-3xl overflow-hidden relative border border-sky-200/50">
          
          <div className="relative z-10 p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 rounded-full bg-skynet-blue/10 text-skynet-blue text-sm font-semibold mb-6">
                Революционная технология XG-PON
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in-up">
                <span className="text-skynet-blue">XG-PON:</span> <span className="text-skynet-orange">Скорость, меняющая правила</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
                Представьте интернет, который никогда не тормозит. Где загрузка гигабайтов занимает секунды, а стримы в 8K идут без единой задержки. Это не будущее. Это XG-PON.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-10 text-center">Ваши новые суперспособности</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Card 1: Upload Power */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-skynet-orange/10 rounded-xl p-3 mr-4">
                      <Zap className="h-7 w-7 text-skynet-orange" />
                    </div>
                    <h4 className="text-gray-900 font-semibold text-base md:text-lg">Мощный канал на отдачу</h4>
                  </div>
                  <p className="text-gray-700 text-sm md:text-base mb-4 leading-relaxed">
                    Ведите стримы в 4K, делитесь тяжелыми файлами и работайте с облаком так же быстро, как с локальным диском. Забудьте о долгих загрузках навсегда.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                      Стримы в реальном времени
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                      Мгновенная работа с облаком
                    </div>
                  </div>
                </div>

                {/* Card 2: Gaming */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-skynet-orange/10 rounded-xl p-3 mr-4">
                      <Gamepad2 className="h-7 w-7 text-skynet-orange" />
                    </div>
                    <h4 className="text-gray-900 font-semibold text-base md:text-lg">Игры на максималках</h4>
                  </div>
                  <p className="text-gray-700 text-sm md:text-base mb-4 leading-relaxed">
                    Получите нечестное преимущество. Сверхнизкий пинг и стабильность соединения XG-PON — ваш ключ к победе в любой онлайн-игре.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                      Минимальный пинг
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                      Максимальная стабильность
                    </div>
                  </div>
                </div>

                {/* Card 3: Entertainment */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-skynet-orange/10 rounded-xl p-3 mr-4">
                      <Globe className="h-7 w-7 text-skynet-orange" />
                    </div>
                    <h4 className="text-gray-900 font-semibold text-base md:text-lg">Развлечения в 8K и VR</h4>
                  </div>
                  <p className="text-gray-700 text-sm md:text-base mb-4 leading-relaxed">
                    Погружайтесь в контент нового поколения. Смотрите фильмы в максимальном качестве и исследуйте миры виртуальной реальности без буферизации.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                      Фильмы и сериалы в 8K
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                      VR без задержек
                    </div>
                  </div>
                </div>

                {/* Card 4: Family */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-skynet-orange/10 rounded-xl p-3 mr-4">
                      <Users className="h-7 w-7 text-skynet-orange" />
                    </div>
                    <h4 className="text-gray-900 font-semibold text-base md:text-lg">Хватит на всю семью</h4>
                  </div>
                  <p className="text-gray-700 text-sm md:text-base mb-4 leading-relaxed">
                    Подключайте всё и сразу: компьютеры, смартфоны, игровые консоли, телевизоры и десятки умных устройств. Скорости хватит на всех без потери качества.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                      Десятки устройств одновременно
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle2 className="h-4 w-4 mr-2 text-green-500 flex-shrink-0" />
                      Без потери скорости
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-gray-200/50">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-8">Как стать обладателем суперскорости?</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                  <div className="bg-skynet-blue/10 rounded-2xl w-20 h-20 flex items-center justify-center mb-6">
                    <MapPin className="h-10 w-10 text-skynet-blue" />
                  </div>
                  <h4 className="font-semibold text-lg md:text-xl mb-3 text-gray-900">Поэтапное внедрение</h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">Начинаем с районов с самой высокой потребностью в сверхскоростях.</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="bg-skynet-blue/10 rounded-2xl w-20 h-20 flex items-center justify-center mb-6">
                    <Settings2 className="h-10 w-10 text-skynet-blue" />
                  </div>
                  <h4 className="font-semibold text-lg md:text-xl mb-3 text-gray-900">Простое обновление</h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">Для действующих клиентов на оптике — переход потребует минимальных изменений.</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="bg-skynet-blue/10 rounded-2xl w-20 h-20 flex items-center justify-center mb-6">
                    <Sparkles className="h-10 w-10 text-skynet-blue" />
                  </div>
                  <h4 className="font-semibold text-lg md:text-xl mb-3 text-gray-900">Новые тарифы</h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">Мы уже готовим новые тарифные планы, чтобы каждый выбрал для себя оптимум.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-700 text-base md:text-lg lg:text-xl mb-4 font-medium">
                Следите за новостями и проверяйте доступность подключения по вашему адресу!
              </p>
              <p className="text-skynet-blue font-semibold text-lg md:text-xl lg:text-2xl mb-8">
                С технологией XG-PON от «Скайнет-Стрим» будущее становится реальностью.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-skynet-orange to-skynet-orange-dark hover:from-skynet-orange-dark hover:to-orange-600 text-white py-6 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-lg font-semibold"
                >
                  Узнать о подключении
                </Button>
                <Link to="/tariffs" className="inline-flex items-center text-skynet-blue hover:text-skynet-blue-dark font-semibold py-2 text-lg">
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
