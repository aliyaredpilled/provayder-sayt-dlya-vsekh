
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Gift, Calendar, Phone } from 'lucide-react';

const ConnectNeighborPromo = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <section className="pt-20 pb-8 bg-gradient-to-b from-skynet-blue to-skynet-blue-light text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-3 py-1 rounded-full mb-3">
              <Gift className="h-4 w-4 mr-2" />
              Специальная акция
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Подключи соседа
            </h1>
            <p className="text-lg text-white/90 mb-4">
              Для всех абонентов предоставим 2 месяца бесплатного Интернета Вам, либо по 1 месяцу Вам и Вашему соседу.
            </p>
            <p className="text-sm text-white/80 mb-4">
              Акция действует только для частного сектора
            </p>
            <div className="flex justify-center">
              <span className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white text-base font-medium px-4 py-1.5 rounded-full">
                <Calendar className="h-4 w-4 mr-2" />
                Акция действует постоянно
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Как работает акция</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-skynet-gray-light/30 rounded-2xl p-4">
                <div className="text-center">
                  <div className="bg-skynet-blue text-white rounded-full p-2 w-10 h-10 mx-auto mb-2 flex items-center justify-center">
                    <span className="text-base font-bold">1</span>
                  </div>
                  <h3 className="text-base font-semibold mb-2">Вариант 1</h3>
                  <p className="text-gray-700 text-sm">
                    Вы получаете <strong>2 месяца бесплатного интернета</strong>, а сосед подключается по обычным условиям
                  </p>
                </div>
              </div>
              
              <div className="bg-skynet-orange/20 rounded-2xl p-4">
                <div className="text-center">
                  <div className="bg-skynet-orange text-white rounded-full p-2 w-10 h-10 mx-auto mb-2 flex items-center justify-center">
                    <span className="text-base font-bold">2</span>
                  </div>
                  <h3 className="text-base font-semibold mb-2">Вариант 2</h3>
                  <p className="text-gray-700 text-sm">
                    И Вы, и Ваш сосед получаете по <strong>1 месяцу бесплатного интернета</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-5 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Условия участия</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-skynet-blue mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Для действующих абонентов</h4>
                    <p className="text-gray-700 text-xs">Акция доступна всем текущим клиентам SKYNET без исключений</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-skynet-blue mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Новый абонент</h4>
                    <p className="text-gray-700 text-xs">Сосед должен быть новым клиентом, ранее не пользовавшимся услугами SKYNET</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-skynet-blue mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Территориальная близость</h4>
                    <p className="text-gray-700 text-xs">Новый абонент должен быть соседом из того же частного сектора</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-skynet-blue mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm">Любой тариф</h4>
                    <p className="text-gray-700 text-xs">Акция действует при подключении к любому тарифному плану</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Готовы участвовать в акции?</h3>
              <p className="text-gray-700 mb-4 text-sm">
                Свяжитесь с нами любым удобным способом, и мы поможем оформить подключение для вашего соседа
              </p>
              <div className="flex justify-center">
                <Button className="bg-skynet-orange hover:bg-skynet-orange-bright text-white py-3 px-5 rounded-full shadow-lg hover:shadow-xl transition-all">
                  <Phone className="h-4 w-4 mr-2" />
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
