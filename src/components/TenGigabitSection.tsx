
import { Zap, Wifi, Download, ArrowRight, Shield, Globe, Clock, Gamepad2, Home, Users } from 'lucide-react';
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
    <section id="10g-internet" className="py-8 relative overflow-hidden bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 rounded-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-gradient-to-tr from-pink-400 to-red-500 opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white text-base font-medium px-4 py-2 rounded-full mb-6">
                <Zap className="h-5 w-5 mr-2" />
                Революционная технология
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Скайнет запускает интернет будущего!
              </h2>
              <h3 className="text-2xl md:text-3xl text-white mb-6">
                До 10 Гбит/с по технологии XGS-PON
              </h3>
              
              <div className="text-xl text-white/90 mb-8">
                <p className="mb-4 text-xl">Друзья, мы с гордостью объявляем о настоящем технологическом прорыве!</p>
                <p className="text-lg">
                  «Скайнет» начинает внедрение революционной технологии XGS-PON, которая позволит вам пользоваться интернетом на симметричной скорости до 10 Гбит/с.
                </p>
                <p className="text-lg mt-4 font-medium">
                  Это не просто обновление — это совершенно новый уровень цифровых возможностей для вашего дома и бизнеса.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Что это значит для вас?</h3>
              <p className="text-white/90 text-lg text-center mb-8">
                Мы перевели технические термины на язык реальных преимуществ:
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="flex items-start mb-4">
                    <Zap className="h-8 w-8 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-3 text-lg">🚀 Симметричная скорость</h4>
                      <p className="text-white/90 text-base">
                        Забудьте, когда загрузка была быстрой, а отдача — медленной. Теперь скорость одинакова в обе стороны. 
                        Проводите стримы в 4K, мгновенно загружайте гигабайты файлов в облако и проводите видеоконференции без единого "зависания".
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="flex items-start mb-4">
                    <Gamepad2 className="h-8 w-8 text-green-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-3 text-lg">🎮 Гейминг и развлечения без компромиссов</h4>
                      <p className="text-white/90 text-base">
                        Минимальная задержка (пинг) и высочайшая стабильность соединения — ваше главное преимущество в онлайн-играх. 
                        Смотрите фильмы и сериалы в формате 8K без буферизации, погружайтесь в миры VR — ваш интернет готов ко всему.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="flex items-start mb-4">
                    <Home className="h-8 w-8 text-blue-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-3 text-lg">🏠 Надежность для всей семьи и бизнеса</h4>
                      <p className="text-white/90 text-base">
                        Мощности хватит на все устройства одновременно. Работайте с "тяжелыми" облачными сервисами, 
                        пока дети смотрят мультфильмы, а умный дом управляет десятками гаджетов. Соединение останется стабильным.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8 border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Как это работает и как подключиться?</h3>
              
              <div className="space-y-6 mb-8">
                <p className="text-white/90 text-lg">
                  <strong className="text-white">XGS-PON</strong> — это следующее поколение оптоволоконных сетей (эволюция GPON). 
                  Мы будем внедрять технологию поэтапно, начиная с районов с самой высокой потребностью в сверхскоростях.
                </p>
                
                <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-lg p-6 border border-yellow-400/30">
                  <p className="text-white text-lg">
                    <strong>Хорошая новость для наших действующих клиентов на оптике:</strong> переход на новый стандарт 
                    потребует минимальных изменений в оборудовании и не доставит хлопот.
                  </p>
                </div>
                
                <p className="text-white/90 text-lg">
                  Мы уже готовим новые тарифные планы, чтобы каждый — от домашнего пользователя до крупной компании — 
                  смог выбрать для себя оптимальную скорость.
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-white/90 text-xl mb-6">
                Следите за новостями и проверяйте доступность подключения по вашему адресу!
              </p>
              <p className="text-white font-semibold text-2xl mb-8">
                С технологией XGS-PON от «Скайнет» будущее становится реальностью.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all text-lg font-semibold"
                >
                  Узнать о подключении
                </Button>
                <Link to="/tariffs" className="inline-flex items-center text-white hover:text-white/80 font-medium py-2 text-lg">
                  Все тарифы <ArrowRight className="ml-2 h-4 w-4" />
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
