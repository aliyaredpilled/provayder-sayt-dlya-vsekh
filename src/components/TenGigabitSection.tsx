
import { Zap, Wifi, Download, ArrowRight, Shield, Globe, Clock } from 'lucide-react';
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
    <section id="10g-internet" className="py-8 relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-skynet-blue to-skynet-blue-light rounded-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-skynet-orange opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-skynet-orange opacity-20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white text-base font-medium px-4 py-2 rounded-full mb-6">
                <Zap className="h-5 w-5 mr-2" />
                XGS-PON — интернет нового поколения
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                XGS-PON — интернет нового поколения
              </h2>
              <h3 className="text-2xl md:text-3xl text-white mb-6">
                со скоростью до 10 Гбит/с
              </h3>
              
              <div className="text-xl text-white/90 mb-8">
                <p className="mb-2 text-xl">Сверхбыстро. Симметрично. Готово к будущему.</p>
                <p className="text-lg">
                  «Скайнет» (Казань) внедряет технологию XGS-PON (10 Gigabit Symmetrical Passive Optical Network) — 
                  эволюцию классического GPON, открытую для частных и корпоративных клиентов.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-3xl font-bold text-white mb-8">Почему XGS-PON?</h3>
                
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <div className="flex items-start mb-3">
                      <Zap className="h-6 w-6 text-skynet-orange mr-3 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-3 text-lg">До 10 Гбит/с в обе стороны</h4>
                        <p className="text-white/90 text-base mb-2">загрузка и выгрузка данных занимают считаные секунды</p>
                        <p className="text-white/70 text-sm">Симметричный 10-гигабитный канал вместо привычных «нескольких сотен мегабит»</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <div className="flex items-start mb-3">
                      <Clock className="h-6 w-6 text-skynet-orange mr-3 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-3 text-lg">Минимальные задержки</h4>
                        <p className="text-white/90 text-base mb-2">онлайн-игры, видеоконференции и облачные сервисы работают без лагов</p>
                        <p className="text-white/70 text-sm">Оптическая линия без «узких» медных сегментов</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <div className="flex items-start mb-3">
                      <Shield className="h-6 w-6 text-skynet-orange mr-3 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-3 text-lg">Готовность к 8K-видео и AR/VR</h4>
                        <p className="text-white/90 text-base mb-2">потоковое вещание самого высокого качества</p>
                        <p className="text-white/70 text-sm">Увеличенная пропускная способность и устойчивость сигнала</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <div className="flex items-start mb-3">
                      <Globe className="h-6 w-6 text-skynet-orange mr-3 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-3 text-lg">Быстрый апгрейд существующих линий</h4>
                        <p className="text-white/90 text-base">Новое оборудование совместимо с действующей PON-инфраструктурой</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white mb-8">Кому это нужно</h3>
                
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4 text-lg">🏠 Домашним пользователям</h4>
                    <p className="text-white/90 text-base">
                      Смотреть фильмы в 8K, мгновенно загружать семейные архивы в облако, 
                      играть в сетевые шутеры без разрывов соединения.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4 text-lg">🏢 Бизнесу и креативным студиям</h4>
                    <p className="text-white/90 text-base">
                      Передавать терабайтные проекты, резервировать данные в реальном времени, 
                      держать безотказные VPN-каналы между офисами.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-4 text-lg">🏛️ Государственным и образовательным организациям</h4>
                    <p className="text-white/90 text-base">
                      Поддерживать сотни одновременных видеосессий, использовать облачные платформы, 
                      не опасаясь задержек.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Как подключиться</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-skynet-orange rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h4 className="text-white font-semibold mb-3 text-lg">Проверьте адрес</h4>
                  <p className="text-white/90 text-base">
                    мы начинаем с районов с высокой плотностью населения и постепенно расширяем покрытие
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-skynet-orange rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h4 className="text-white font-semibold mb-3 text-lg">Выберите тариф</h4>
                  <p className="text-white/90 text-base">
                    линейка от 1 Гбит/с до 10 Гбит/с, с приоритетными SLA для бизнеса
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-skynet-orange rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h4 className="text-white font-semibold mb-3 text-lg">Установите новое ONT-устройство</h4>
                  <p className="text-white/90 text-base">
                    замена занимает ~30 минут и не требует прокладки новых кабелей
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-white/90 text-xl mb-6">
                XGS-PON от «Скайнет» — это инвестиция в стабильность и скорость, которые останутся актуальными долгие годы.
              </p>
              <p className="text-white font-semibold text-2xl mb-8">
                Подключайтесь сегодня и ощутите разницу!
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  onClick={scrollToContact}
                  className="bg-skynet-orange hover:bg-skynet-orange-bright text-white py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
                >
                  Подключить XGS-PON
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
