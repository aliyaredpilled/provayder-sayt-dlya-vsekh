import { Check, ArrowRight, Wifi } from 'lucide-react';
import { pricingPlans } from '@/lib/speedData';
import { Card, CardContent } from '@/components/ui/card';

const PricingPlans = () => {
  return (
    <section id="pricing" className="py-4 bg-skynet-gray-light/50">
      <div className="section-container">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-skynet-blue/10 text-skynet-blue text-sm font-medium mb-3">
              Наши тарифы
            </span>
            <h2 className="heading-lg mb-4 text-gray-900">
              Выберите идеальную скорость для ваших потребностей
            </h2>
            <p className="text-gray-600 mb-6">
              Мы предлагаем различные тарифные планы домашнего интернета, подключение по оптоволоконной сети XG-Pon.
              Все тарифы включают безлимитный трафик.
            </p>
            
            <Card className="bg-skynet-blue/5 border-skynet-blue/10 mx-auto max-w-2xl mb-8">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Wifi className="text-skynet-blue h-6 w-6" />
                  <h3 className="text-lg font-semibold">Информация о подключении</h3>
                </div>
                <ul className="space-y-2 text-left">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-skynet-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Подключение — <span className="font-semibold">5000₽</span> (разовый платёж)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-skynet-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Роутер (до 1 Гбит/с) — <span className="font-semibold">3500₽</span> (или аренда 150₽/мес)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-skynet-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span>Подключение по оптоволоконной сети XG-Pon</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={plan.id}
                className={`relative rounded-2xl bg-white transition-all duration-300 ${
                  plan.isPopular 
                    ? 'shadow-xl ring-2 ring-skynet-blue md:-my-4 md:py-6 scale-105' 
                    : 'shadow-lg hover:shadow-xl'
                } overflow-hidden animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-skynet-blue text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      ПОПУЛЯРНЫЙ
                    </div>
                  </div>
                )}
                
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{plan.name}</h3>
                    <div 
                      className="inline-block h-1 w-10 rounded"
                      style={{ backgroundColor: plan.color }}
                    ></div>
                  </div>
                  
                  <div className="mb-5">
                    <div className="flex items-end mb-2">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-gray-500 ml-2">/ {plan.period}</span>
                    </div>
                    <div 
                      className="text-sm font-medium py-1 px-3 rounded-full inline-block"
                      style={{ color: plan.color, backgroundColor: `${plan.color}15` }}
                    >
                      {plan.speed}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8 min-h-[200px]">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div 
                          className="mr-2 p-1 rounded-full text-white mt-0.5 flex-shrink-0"
                          style={{ backgroundColor: plan.color }}
                        >
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="#contact"
                    className={`w-full rounded-full py-3 px-4 text-center font-medium transition-all flex items-center justify-center ${
                      plan.isPopular 
                        ? 'bg-skynet-blue hover:bg-skynet-blue-dark text-white' 
                        : 'bg-white text-gray-800 border border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    Подключить
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm mb-4">
              * Стоимость подключения - 5000₽. Возможна аренда роутера за 150₽/месяц или покупка за 3500₽
            </p>
            <a href="/tariffs" className="text-skynet-blue font-medium inline-flex items-center hover:underline">
              Смотреть все тарифы и опции
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
