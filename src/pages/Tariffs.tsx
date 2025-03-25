
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PricingPlans from "@/components/PricingPlans";
import SpeedComparison from "@/components/SpeedComparison";
import ContactSection from "@/components/ContactSection";
import { CheckCircle2, ArrowDown } from 'lucide-react';

const Tariffs = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <section className="pt-32 pb-20 bg-skynet-gray-light/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-skynet-blue/10 text-skynet-blue text-sm font-medium mb-3">
              Тарифы и пакеты
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Выгодные тарифы для любых потребностей
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Выберите оптимальный тарифный план для вашего дома. Все тарифы включают безлимитный интернет и бесплатное подключение.
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
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-skynet-gray-light">
                    <th className="py-4 px-6 text-left text-gray-900 font-semibold">Характеристики</th>
                    <th className="py-4 px-6 text-center text-gray-900 font-semibold">Стандарт</th>
                    <th className="py-4 px-6 text-center text-gray-900 font-semibold">Быстрый</th>
                    <th className="py-4 px-6 text-center text-gray-900 font-semibold">Сверхскоростной</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 text-gray-700">Скорость</td>
                    <td className="py-4 px-6 text-center text-gray-900">100 Мбит/с</td>
                    <td className="py-4 px-6 text-center text-gray-900">1 Гбит/с</td>
                    <td className="py-4 px-6 text-center text-gray-900">10 Гбит/с</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-4 px-6 text-gray-700">Ежемесячная плата</td>
                    <td className="py-4 px-6 text-center text-gray-900">499 ₽</td>
                    <td className="py-4 px-6 text-center text-gray-900">999 ₽</td>
                    <td className="py-4 px-6 text-center text-gray-900">2499 ₽</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 text-gray-700">Wi-Fi роутер</td>
                    <td className="py-4 px-6 text-center text-gray-900">Аренда</td>
                    <td className="py-4 px-6 text-center text-gray-900">Аренда Wi-Fi 6</td>
                    <td className="py-4 px-6 text-center text-gray-900">Wi-Fi 6E в подарок</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-4 px-6 text-gray-700">Техническая поддержка</td>
                    <td className="py-4 px-6 text-center text-gray-900">Базовая</td>
                    <td className="py-4 px-6 text-center text-gray-900">Приоритетная</td>
                    <td className="py-4 px-6 text-center text-gray-900">Премиум 24/7</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 text-gray-700">Статический IP</td>
                    <td className="py-4 px-6 text-center text-gray-900">Дополнительно</td>
                    <td className="py-4 px-6 text-center text-gray-900">Дополнительно</td>
                    <td className="py-4 px-6 text-center text-gray-900">Включено</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-4 px-6 text-gray-700">Подключение</td>
                    <td className="py-4 px-6 text-center text-gray-900">1500 ₽</td>
                    <td className="py-4 px-6 text-center text-gray-900">Бесплатно</td>
                    <td className="py-4 px-6 text-center text-gray-900">Бесплатно</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      
      <SpeedComparison />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Часто задаваемые вопросы о тарифах</h2>
            
            <div className="space-y-6">
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
                <h3 className="text-xl font-semibold mb-2">Бесплатное подключение</h3>
                <p className="text-white/80">На тарифах от 1 Гбит/с подключение бесплатно</p>
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
