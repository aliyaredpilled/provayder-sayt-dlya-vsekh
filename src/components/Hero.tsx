
import { ArrowDown, Zap, Users, Shield, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Hero = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="internet-hero" className="relative py-20 pt-40 bg-gradient-to-b from-sky-100 via-sky-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="md:order-1">
            <h1 className="heading-xl text-gray-900 mb-4">
              Высокоскоростной интернет <br />
              для вашего дома и бизнеса
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Надёжное подключение, высокая скорость и доступные тарифы.
              Подключайтесь сейчас и получите максимум возможностей!
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-skynet-blue text-white hover:bg-skynet-blue-dark h-11 px-8"
              >
                Подключиться
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
              <button
                onClick={scrollToPricing}
                className="inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
              >
                Выбрать тариф
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <Card className="bg-white shadow-md">
                <CardContent className="flex items-center space-x-4 p-4">
                  <Zap className="text-skynet-blue h-6 w-6" />
                  <div>
                    <h3 className="text-xl font-semibold">До 10 Гбит/с</h3>
                    <p className="text-sm text-gray-500">Скорость интернета</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-md">
                <CardContent className="flex items-center space-x-4 p-4">
                  <Users className="text-skynet-blue h-6 w-6" />
                  <div>
                    <h3 className="text-xl font-semibold">99.9%</h3>
                    <p className="text-sm text-gray-500">Стабильность связи</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative md:order-2">
            <img
              src="/lovable-uploads/hero-internet-connection.webp"
              alt="Интернет соединение"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />

            {/* Badges */}
            <div className="absolute top-0 left-0 p-4">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                <Shield className="text-green-500 h-5 w-5" />
                <span className="text-sm font-medium text-gray-700">Безопасное соединение</span>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 p-4">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                <Award className="text-yellow-500 h-5 w-5" />
                <span className="text-sm font-medium text-gray-700">Лучший провайдер 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
