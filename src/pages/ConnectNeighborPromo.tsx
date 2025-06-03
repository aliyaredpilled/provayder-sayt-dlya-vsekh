
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, Gift, Calendar, Phone } from 'lucide-react';

const ConnectNeighborPromo = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-skynet-blue to-skynet-blue-light text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Gift className="h-4 w-4 mr-2" />
              Специальная акция
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Подключи соседа
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Для всех абонентов предоставим 2 месяца бесплатного Интернета Вам, либо по 1 месяцу Вам и Вашему соседу.
            </p>
            <div className="flex justify-center">
              <span className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white text-lg font-medium px-6 py-3 rounded-full">
                <Calendar className="h-5 w-5 mr-2" />
                Акция действует постоянно
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Как работает акция</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-skynet-gray-light/30 rounded-2xl p-8">
                <div className="text-center">
                  <div className="bg-skynet-blue text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Вариант 1</h3>
                  <p className="text-gray-700">
                    Вы получаете <strong>2 месяца бесплатного интернета</strong>, а сосед подключается по обычным условиям
                  </p>
                </div>
              </div>
              
              <div className="bg-skynet-orange/10 rounded-2xl p-8">
                <div className="text-center">
                  <div className="bg-skynet-orange text-white rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Вариант 2</h3>
                  <p className="text-gray-700">
                    И Вы, и Ваш сосед получаете по <strong>1 месяцу бесплатного интернета</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Условия участия</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-skynet-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Для действующих абонентов</h4>
                    <p className="text-gray-700">Акция доступна всем текущим клиентам SKYNET без исключений</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-skynet-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Новый абонент</h4>
                    <p className="text-gray-700">Сосед должен быть новым клиентом, ранее не пользовавшимся услугами SKYNET</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-skynet-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Территориальная близость</h4>
                    <p className="text-gray-700">Новый абонент должен проживать в том же доме или соседнем доме</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-skynet-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Любой тариф</h4>
                    <p className="text-gray-700">Акция действует при подключении к любому тарифному плану</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-skynet-blue text-white rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-center">Дополнительные преимущества</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Users className="h-12 w-12 text-skynet-orange mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Неограниченное количество</h4>
                  <p className="text-white/90">Приводите столько соседей, сколько хотите</p>
                </div>
                
                <div className="text-center">
                  <Gift className="h-12 w-12 text-skynet-orange mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Накопительная система</h4>
                  <p className="text-white/90">Бонусы суммируются при приглашении нескольких соседей</p>
                </div>
                
                <div className="text-center">
                  <CheckCircle2 className="h-12 w-12 text-skynet-orange mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Постоянная акция</h4>
                  <p className="text-white/90">Предложение действует без ограничения по времени</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Готовы участвовать в акции?</h3>
              <p className="text-gray-700 mb-8">
                Свяжитесь с нами любым удобным способом, и мы поможем оформить подключение для вашего соседа
              </p>
              <div className="flex justify-center">
                <Button className="bg-skynet-orange hover:bg-skynet-orange-bright text-white py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
                  <Phone className="h-5 w-5 mr-2" />
                  Позвонить сейчас
                </Button>
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

export default ConnectNeighborPromo;
