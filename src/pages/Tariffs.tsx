import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PricingPlans from "@/components/PricingPlans";
import ContactSection from "@/components/ContactSection";
import { CheckCircle2, ArrowDown } from 'lucide-react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

const Tariffs = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <section className="pt-32 pb-20 bg-skynet-gray-light/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-skynet-blue/10 text-skynet-blue text-sm font-medium mb-3">
              Прозрачно и выгодно
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Тарифы для каждого
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Выберите идеальный тарифный план, который соответствует вашим потребностям в скорости и бюджете.
            </p>
            <div className="flex justify-center">
              <button className="flex items-center text-skynet-blue font-medium animate-bounce">
                Смотреть тарифы <ArrowDown className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <PricingPlans />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Сравнение тарифных планов</h2>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-skynet-gray-light">
                    <TableHead className="text-gray-900 font-semibold">Характеристики</TableHead>
                    <TableHead className="text-center text-gray-900 font-semibold">300 Мбит/с</TableHead>
                    <TableHead className="text-center text-gray-900 font-semibold">600 Мбит/с</TableHead>
                    <TableHead className="text-center text-gray-900 font-semibold">900 Мбит/с</TableHead>
                    <TableHead className="text-center text-gray-900 font-semibold">2 Гбит/с</TableHead>
                    <TableHead className="text-center text-gray-900 font-semibold">3 Гбит/с</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-gray-700">Скорость</TableCell>
                    <TableCell className="text-center text-gray-900">300 Мбит/с</TableCell>
                    <TableCell className="text-center text-gray-900">600 Мбит/с</TableCell>
                    <TableCell className="text-center text-gray-900">900 Мбит/с</TableCell>
                    <TableCell className="text-center text-gray-900">2 Гбит/с</TableCell>
                    <TableCell className="text-center text-gray-900">3 Гбит/с</TableCell>
                  </TableRow>
                  <TableRow className="bg-gray-50">
                    <TableCell className="text-gray-700">Ежемесячная плата</TableCell>
                    <TableCell className="text-center text-gray-900">900 ₽</TableCell>
                    <TableCell className="text-center text-gray-900">1100 ₽</TableCell>
                    <TableCell className="text-center text-gray-900">2000 ₽</TableCell>
                    <TableCell className="text-center text-gray-900">3500 ₽</TableCell>
                    <TableCell className="text-center text-gray-900">4500 ₽</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-gray-700">Wi-Fi роутер</TableCell>
                    <TableCell className="text-center text-gray-900">Аренда 150₽/мес или покупка 3500₽</TableCell>
                    <TableCell className="text-center text-gray-900">Аренда 150₽/мес или покупка 3500₽</TableCell>
                    <TableCell className="text-center text-gray-900">Аренда 150₽/мес или покупка 3500₽</TableCell>
                    <TableCell className="text-center text-gray-900">Аренда 150₽/мес или покупка 3500₽</TableCell>
                    <TableCell className="text-center text-gray-900">Аренда 150₽/мес или покупка 3500₽</TableCell>
                  </TableRow>
                  <TableRow className="bg-gray-50">
                    <TableCell className="text-gray-700">Техническая поддержка</TableCell>
                    <TableCell className="text-center text-gray-900">Базовая</TableCell>
                    <TableCell className="text-center text-gray-900">Базовая</TableCell>
                    <TableCell className="text-center text-gray-900">Приоритетная</TableCell>
                    <TableCell className="text-center text-gray-900">Премиум 24/7</TableCell>
                    <TableCell className="text-center text-gray-900">Премиум 24/7</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-gray-700">Подключение</TableCell>
                    <TableCell className="text-center text-gray-900">5000 ₽</TableCell>
                    <TableCell className="text-center text-gray-900">5000 ₽</TableCell>
                    <TableCell className="text-center text-gray-900">5000 ₽</TableCell>
                    <TableCell className="text-center text-gray-900">5000 ₽</TableCell>
                    <TableCell className="text-center text-gray-900">5000 ₽</TableCell>
                  </TableRow>
                  <TableRow className="bg-gray-50">
                    <TableCell className="text-gray-700">Технология</TableCell>
                    <TableCell className="text-center text-gray-900">Оптоволокно</TableCell>
                    <TableCell className="text-center text-gray-900">Оптоволокно</TableCell>
                    <TableCell className="text-center text-gray-900">Оптоволокно</TableCell>
                    <TableCell className="text-center text-gray-900">XG-PON</TableCell>
                    <TableCell className="text-center text-gray-900">XG-PON</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Часто задаваемые вопросы о тарифах</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Что такое технология XG-PON?</h3>
                <p className="text-gray-700">XG-PON (10-Gigabit-capable Passive Optical Network) - это технология пассивной оптической сети, обеспечивающая скорость передачи данных до 10 Гбит/с. Это более современный стандарт, чем GPON, который позволяет достигать высоких скоростей интернета для домашнего использования.</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Могу ли я менять тарифный план?</h3>
                <p className="text-gray-700">Да, вы можете изменить свой тарифный план в любое время через личный кабинет или обратившись в нашу службу поддержки. Изменение тарифа происходит с начала следующего расчетного периода.</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Как заказать дополнительные услуги?</h3>
                <p className="text-gray-700">Дополнительные услуги, такие как статический IP-адрес, антивирус или родительский контроль, можно заказать через личный кабинет в разделе "Дополнительные услуги" или связавшись с нашими операторами по телефону.</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Есть ли скидки для новых клиентов?</h3>
                <p className="text-gray-700">Да, для новых клиентов действуют специальные акции и скидки. Актуальные предложения вы всегда можете увидеть на нашем сайте или уточнить у операторов при подключении.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-skynet-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Преимущества наших тарифов</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <CheckCircle2 className="h-12 w-12 text-skynet-orange mb-4" />
                <h3 className="text-xl font-semibold mb-2">Без скрытых платежей</h3>
                <p className="text-white/80">Прозрачные условия без дополнительных комиссий</p>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle2 className="h-12 w-12 text-skynet-orange mb-4" />
                <h3 className="text-xl font-semibold mb-2">Smart-TV в подарок</h3>
                <p className="text-white/80">120 телеканалов в цифровом качестве бесплатно</p>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle2 className="h-12 w-12 text-skynet-orange mb-4" />
                <h3 className="text-xl font-semibold mb-2">Безлимитный трафик</h3>
                <p className="text-white/80">Пользуйтесь интернетом без ограничений</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Tariffs;
```
```typescript
import { Check, ArrowRight, Wifi, Gift, Zap, Users } from 'lucide-react';
import { pricingPlans } from '@/lib/speedData';
import { Card, CardContent } from '@/components/ui/card';

const PricingPlans = () => {
  const basePlans = pricingPlans.filter(plan => plan.category === 'base');
  const ultraPlans = pricingPlans.filter(plan => plan.category === 'ultra');
  const exclusivePlans = pricingPlans.filter(plan => plan.category === 'exclusive');

  return (
    <section id="pricing" className="py-4 bg-skynet-gray-light/50">
      <div className="section-container">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-skynet-blue/10 text-skynet-blue text-sm font-medium mb-3">
              Наши тарифы
            </span>
            <h2 className="heading-lg mb-4 text-gray-900">
              Выберите свою скорость: от комфортной до космической
            </h2>
            <p className="text-gray-600 mb-6">
              Мы предлагаем гибкую линейку тарифов, чтобы каждый мог найти идеальное решение для своих задач — будь то общение в соцсетях, просмотр фильмов в 4К или профессиональный гейминг.
            </p>
            
            <Card className="bg-gradient-to-r from-skynet-orange/5 to-skynet-blue/5 border-skynet-orange/20 mx-auto max-w-2xl mb-8">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Gift className="text-skynet-orange h-6 w-6" />
                  <h3 className="text-lg font-semibold">Smart-TV в подарок!</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Превратите свой телевизор в центр развлечений! Получите доступ к 120 телеканалам в цифровом качестве абсолютно бесплатно при подключении любого тарифа.
                </p>
                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <Check className="h-4 w-4 text-skynet-orange mt-0.5 flex-shrink-0" />
                  <span><span className="font-semibold text-skynet-orange">Важно:</span> Стоимость установки и действующие акции могут сделать наше предложение ещё выгоднее!</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Надёжная база */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Users className="h-6 w-6 text-skynet-blue" />
                <h3 className="text-2xl font-bold text-gray-900">Надёжная база для любых задач</h3>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">до 1 Гбит/с</span>
              </div>
              <p className="text-gray-600">Идеальные решения для дома, семьи и работы</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {basePlans.map((plan, index) => (
                <div 
                  key={plan.id}
                  className={`relative rounded-2xl bg-white transition-all duration-300 ${
                    plan.isPopular 
                      ? 'shadow-xl ring-2 ring-skynet-orange scale-105' 
                      : 'shadow-lg hover:shadow-xl'
                  } overflow-hidden animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {plan.isPopular && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-skynet-orange text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                        ПОПУЛЯРНЫЙ
                      </div>
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold text-gray-900 mb-1">{plan.name}</h4>
                      <div 
                        className="inline-block h-1 w-10 rounded"
                        style={{ backgroundColor: plan.color }}
                      ></div>
                    </div>
                    
                    <div className="mb-5">
                      <div className="flex items-end mb-2">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        {plan.period && <span className="text-gray-500 ml-2">/ {plan.period}</span>}
                      </div>
                      <div 
                        className="text-sm font-medium py-1 px-3 rounded-full inline-block"
                        style={{ color: plan.color, backgroundColor: `${plan.color}15` }}
                      >
                        {plan.speed}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                    
                    <ul className="space-y-3 mb-8 min-h-[180px]">
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
                      href="#contacts"
                      className={`w-full rounded-full py-3 px-4 text-center font-medium transition-all flex items-center justify-center ${
                        plan.isPopular 
                          ? 'bg-skynet-orange hover:bg-skynet-orange/90 text-white' 
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
          </div>

          {/* Ультраскорость */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Zap className="h-6 w-6 text-skynet-blue" />
                <h3 className="text-2xl font-bold text-gray-900">Ультраскорость для тех, кому нужно всё</h3>
                <span className="px-3 py-1 bg-skynet-blue/10 text-skynet-blue rounded-full text-sm font-medium">XG-PON</span>
              </div>
              <p className="text-gray-600">Профессиональные решения на базе технологии XG-PON</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {ultraPlans.map((plan, index) => (
                <div 
                  key={plan.id}
                  className="relative rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${(basePlans.length + index) * 0.1}s` }}
                >
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold text-gray-900 mb-1">{plan.name}</h4>
                      <div 
                        className="inline-block h-1 w-10 rounded"
                        style={{ backgroundColor: plan.color }}
                      ></div>
                    </div>
                    
                    <div className="mb-5">
                      <div className="flex items-end mb-2">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        {plan.period && <span className="text-gray-500 ml-2">/ {plan.period}</span>}
                      </div>
                      <div 
                        className="text-sm font-medium py-1 px-3 rounded-full inline-block"
                        style={{ color: plan.color, backgroundColor: `${plan.color}15` }}
                      >
                        {plan.speed}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                    
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
                      href="#contacts"
                      className="w-full rounded-full py-3 px-4 text-center font-medium transition-all flex items-center justify-center bg-skynet-blue hover:bg-skynet-blue-dark text-white"
                    >
                      Подключить
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Эксклюзивные тарифы */}
          {exclusivePlans.map((plan) => (
            <div key={plan.id} className="mb-12">
              <div 
                className="relative rounded-2xl bg-gradient-to-r from-purple-50 to-blue-50 shadow-xl overflow-hidden animate-fade-in-up border border-purple-200"
                style={{ animationDelay: `${(basePlans.length + ultraPlans.length) * 0.1}s` }}
              >
                <div className="absolute top-0 right-0">
                  <div className="bg-purple-600 text-white text-xs font-bold px-4 py-2 rounded-bl-lg">
                    ЭКСКЛЮЗИВ
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="mb-4">
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                        <div 
                          className="inline-block h-1 w-16 rounded"
                          style={{ backgroundColor: plan.color }}
                        ></div>
                      </div>
                      
                      <div className="mb-5">
                        <div className="flex items-end mb-2">
                          <span className="text-5xl font-bold text-purple-600">{plan.price}</span>
                        </div>
                        <div 
                          className="text-lg font-medium py-2 px-4 rounded-full inline-block text-white"
                          style={{ backgroundColor: plan.color }}
                        >
                          {plan.speed}
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-6">{plan.description}</p>
                      
                      <a 
                        href="#contacts"
                        className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white rounded-full py-3 px-6 font-medium transition-all"
                      >
                        Обсудить условия
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                    
                    <div>
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <div 
                              className="mr-3 p-1 rounded-full text-white mt-0.5 flex-shrink-0"
                              style={{ backgroundColor: plan.color }}
                            >
                              <Check className="h-4 w-4" />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Дополнительные услуги */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Дополнительные услуги, чтобы было ещё лучше</h3>
              <p className="text-gray-600">Сделайте свой интернет-опыт максимально комфортным</p>
            </div>
            
            <Card className="bg-white border border-gray-200 max-w-2xl mx-auto">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Wifi className="text-skynet-blue h-6 w-6" />
                  <h4 className="text-lg font-semibold">Wi-Fi роутер (до 1 Гбит/с)</h4>
                </div>
                <p className="text-gray-600 mb-4">
                  Обеспечьте стабильное покрытие во всей квартире. Мощный роутер раскроет потенциал вашего тарифа.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-skynet-blue mr-2" />
                    <span><span className="font-semibold">Покупка:</span> 3500 ₽</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-skynet-blue mr-2" />
                    <span><span className="font-semibold">Аренда:</span> 150 ₽/мес</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
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
