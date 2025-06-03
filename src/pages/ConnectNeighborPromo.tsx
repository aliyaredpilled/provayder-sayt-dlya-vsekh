
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone } from 'lucide-react';

const ConnectNeighborPromo = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-skynet-blue to-skynet-blue-light text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Акция: Подключи соседа
            </h1>
            
            <div className="bg-white/10 border border-white/20 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg">
                Акция действует только для частного сектора
              </p>
            </div>
            
            <p className="text-xl mb-8 leading-relaxed">
              Приведи друга или соседа и получи <span className="font-bold text-skynet-orange">скидку 50%</span> на абонентскую плату на 3 месяца!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
              Как работает акция
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="bg-skynet-blue text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Расскажите соседу</h3>
                <p className="text-gray-600">
                  Поделитесь информацией о наших услугах с друзьями или соседями
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-skynet-blue text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Сосед подключается</h3>
                <p className="text-gray-600">
                  Ваш сосед оформляет подключение к интернету SKYNET
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-skynet-orange text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Получаете скидку</h3>
                <p className="text-gray-600">
                  Вы оба получаете скидку 50% на 3 месяца
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Условия акции
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="text-green-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-700">Акция распространяется только на частный сектор</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-green-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-700">Скидка применяется к базовой абонентской плате</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-green-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-700">Минимальный тарифный план - "Стартовый"</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="text-green-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-700">Новый абонент должен пользоваться услугами не менее 6 месяцев</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-green-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-700">Скидка начисляется после активации нового подключения</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-green-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-700">Акция не суммируется с другими скидками</p>
                </div>
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
