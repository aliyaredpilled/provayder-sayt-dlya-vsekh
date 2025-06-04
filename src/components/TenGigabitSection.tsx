
import { Zap, Wifi, Download, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const TenGigabitSection = () => {
  return (
    <section id="10g-internet" className="py-12 relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-skynet-blue to-skynet-blue-light rounded-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-skynet-orange opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-skynet-orange opacity-20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-4">
                <Zap className="h-4 w-4 mr-2" />
                Революционная скорость
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Интернет 10 Гбит/с - будущее уже здесь!
              </h2>
              
              <p className="text-white/90 text-lg mb-6">
                Испытайте невероятную скорость загрузки и потоковой передачи данных с нашим революционным интернетом 10 Гбит/с. Идеально для больших семей, геймеров и профессионалов.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-white/90">
                  <span className="bg-white/30 rounded-full p-1 mr-3 mt-1">
                    <Download className="h-4 w-4 text-white" />
                  </span>
                  <span>Скачивание фильма 4K за 30 секунд</span>
                </li>
                <li className="flex items-start text-white/90">
                  <span className="bg-white/30 rounded-full p-1 mr-3 mt-1">
                    <Wifi className="h-4 w-4 text-white" />
                  </span>
                  <span>Одновременная работа 50+ устройств без потери скорости</span>
                </li>
                <li className="flex items-start text-white/90">
                  <span className="bg-white/30 rounded-full p-1 mr-3 mt-1">
                    <Zap className="h-4 w-4 text-white" />
                  </span>
                  <span>Стабильность соединения 99.9%</span>
                </li>
              </ul>
              
              <div className="flex flex-wrap gap-4">
                <Button className="bg-skynet-orange hover:bg-skynet-orange-bright text-white py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
                  Подключить 10G
                </Button>
                <Link to="/tariffs" className="inline-flex items-center text-white hover:text-white/80 font-medium py-2">
                  Все тарифы <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-skynet-orange/30 to-skynet-orange-bright/30 rounded-full blur-3xl"></div>
                <img
                  src="/lovable-uploads/c265ce47-f96f-432e-bfd3-90faca5428be.png"
                  alt="Сверхскоростной интернет 10G"
                  className="relative z-10 rounded-2xl shadow-xl max-w-xs"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenGigabitSection;
