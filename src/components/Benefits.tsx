import { Zap, ShieldCheck, Globe, Headphones } from 'lucide-react';
import { benefits } from '@/lib/speedData';

const iconComponents = {
  'zap': Zap,
  'shield-check': ShieldCheck,
  'globe': Globe,
  'headphones': Headphones
};

const Benefits = () => {
  return (
    <section className="py-8 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-skynet-blue/10 text-skynet-blue text-sm font-medium mb-3">
            Преимущества
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают <span className="text-skynet-blue">SkyNet</span>
          </h2>
          <p className="text-gray-600">
            Мы не просто предоставляем доступ в интернет. Мы создаем безупречный опыт 
            подключения с лучшими технологиями и сервисом.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = iconComponents[benefit.icon as keyof typeof iconComponents];
            
            return (
              <div 
                key={benefit.id}
                className="bg-white rounded-xl p-6 shadow-card hover:shadow-lg transition-all card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-skynet-blue/10 rounded-full w-12 h-12 flex items-center justify-center mb-5">
                  <IconComponent className="h-6 w-6 text-skynet-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-skynet-blue to-skynet-blue-light rounded-2xl overflow-hidden shadow-glow">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Испытайте скорость 10 Гбит/с прямо сейчас!
              </h3>
              <p className="text-white/80 mb-6">
                Специальное предложение для новых клиентов. Подключитесь сейчас и получите первый месяц обслуживания бесплатно.
              </p>
              <a 
                href="#contact" 
                className="inline-block bg-white text-skynet-blue font-medium rounded-full px-6 py-3 hover:bg-opacity-90 transition-all"
              >
                Подключиться со скидкой
              </a>
            </div>
            <div className="hidden md:block relative p-10">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-l-2xl"></div>
              <div className="relative z-10">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium">
                      Первая неделя
                    </div>
                  </div>
                  <div className="text-6xl font-bold text-white mb-2">50%</div>
                  <div className="text-white/80 text-lg">скидка на тариф</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
