import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Phone, Users, UserPlus, MapPin, Wifi, Home, Heart, UserCheck, Zap } from 'lucide-react';
import { House } from 'lucide-react';

const ConnectNeighborPromo = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-skynet-blue to-skynet-blue-light text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                  Акция: Подключи соседа
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                  Для всех абонентов предоставим 2 месяца бесплатного Интернета Вам, либо по 1 месяцу Вам и Вашему соседу.
                </p>
                <div className="flex justify-center md:justify-start">
                  <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white text-base md:text-lg font-medium px-6 py-3 rounded-full border border-white/30">
                    <House className="h-5 w-5 mr-2" />
                    Акция действует только для частного сектора
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/family.png" 
                    alt="Счастливая семья" 
                    className="rounded-2xl shadow-2xl w-full max-w-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-skynet-blue/5 via-transparent to-skynet-orange/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-skynet-blue mb-6">
                Как работает акция
              </h2>
              <div className="w-24 h-1 bg-gray-300 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="group relative h-full">
                <div className="absolute inset-0 bg-skynet-blue/5 rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-skynet-blue/10 group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="bg-skynet-blue text-white rounded-full p-4 w-16 h-16 flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold">1</span>
                    </div>
                  </div>
                  <div className="text-center pt-6 flex-grow flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl font-bold mb-6 text-skynet-blue">
                      Вариант 1
                    </h3>
                    <div className="relative">
                      <div className="absolute inset-0 bg-skynet-blue/5 rounded-2xl transform rotate-1"></div>
                      <div className="relative bg-skynet-blue/5 rounded-2xl p-6 border border-skynet-blue/20">
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                          Вы получаете <strong className="text-skynet-blue font-bold text-lg md:text-xl">2 месяца бесплатного интернета</strong>, а сосед подключается по обычным условиям
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="group relative h-full">
                <div className="absolute inset-0 bg-skynet-blue/5 rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-skynet-blue/10 group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="bg-skynet-blue text-white rounded-full p-4 w-16 h-16 flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold">2</span>
                    </div>
                  </div>
                  <div className="text-center pt-6 flex-grow flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl font-bold mb-6 text-skynet-blue">
                      Вариант 2
                    </h3>
                    <div className="relative">
                      <div className="absolute inset-0 bg-skynet-blue/5 rounded-2xl transform -rotate-1"></div>
                      <div className="relative bg-skynet-blue/5 rounded-2xl p-6 border border-skynet-blue/20">
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                          И Вы, и Ваш сосед получаете по <strong className="text-skynet-blue font-bold text-lg md:text-xl">1 месяцу бесплатного интернета</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-skynet-blue/5 via-transparent to-skynet-orange/5 rounded-3xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-skynet-blue mb-4">
                    Условия участия
                  </h3>
                  <div className="w-32 h-1 bg-gray-300 mx-auto rounded-full"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="group relative h-full">
                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                      <div className="flex items-start flex-grow">
                        <div className="flex-shrink-0 mr-8">
                          <div className="bg-skynet-blue/10 text-skynet-blue rounded-2xl p-4 w-16 h-16 flex items-center justify-center">
                            <Home className="h-8 w-8 stroke-2" />
                          </div>
                        </div>
                        <div className="flex-grow flex flex-col justify-center">
                          <h4 className="text-lg md:text-xl font-bold text-skynet-blue mb-4">Для действующих абонентов</h4>
                          <p className="text-gray-700 text-base md:text-lg leading-relaxed">Акция доступна всем текущим клиентам Скайнет-Стрим без исключений</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group relative h-full">
                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                      <div className="flex items-start flex-grow">
                        <div className="flex-shrink-0 mr-8">
                          <div className="bg-emerald-500/10 text-emerald-600 rounded-2xl p-4 w-16 h-16 flex items-center justify-center">
                            <UserCheck className="h-8 w-8 stroke-2" />
                          </div>
                        </div>
                        <div className="flex-grow flex flex-col justify-center">
                          <h4 className="text-lg md:text-xl font-bold text-emerald-600 mb-4">Новый абонент</h4>
                          <p className="text-gray-700 text-base md:text-lg leading-relaxed">Сосед должен быть новым клиентом, ранее не пользовавшимся услугами Скайнет-Стрим</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group relative h-full">
                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                      <div className="flex items-start flex-grow">
                        <div className="flex-shrink-0 mr-8">
                          <div className="bg-violet-500/10 text-violet-600 rounded-2xl p-4 w-16 h-16 flex items-center justify-center">
                            <MapPin className="h-8 w-8 stroke-2" />
                          </div>
                        </div>
                        <div className="flex-grow flex flex-col justify-center">
                          <h4 className="text-lg md:text-xl font-bold text-violet-600 mb-4">Территориальная близость</h4>
                          <p className="text-gray-700 text-base md:text-lg leading-relaxed">Новый абонент должен быть соседом из того же частного сектора</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group relative h-full">
                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                      <div className="flex items-start flex-grow">
                        <div className="flex-shrink-0 mr-8">
                          <div className="bg-skynet-orange/10 text-skynet-orange rounded-2xl p-4 w-16 h-16 flex items-center justify-center">
                            <Wifi className="h-8 w-8 stroke-2" />
                          </div>
                        </div>
                        <div className="flex-grow flex flex-col justify-center">
                          <h4 className="text-lg md:text-xl font-bold text-skynet-orange mb-4">Любой тариф</h4>
                          <p className="text-gray-700 text-base md:text-lg leading-relaxed">Акция действует при подключении к любому тарифному плану</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-4">
              <div className="absolute inset-0 bg-gradient-to-r from-skynet-blue/5 via-skynet-blue/3 to-skynet-blue/5 rounded-3xl"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="mb-8">
                    <div className="bg-skynet-blue/10 text-skynet-blue rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                      <Phone className="h-8 w-8 stroke-2" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-skynet-blue mb-4">Готовы участвовать в акции?</h3>
                    <div className="w-32 h-1 bg-skynet-blue/20 mx-auto rounded-full mb-6"></div>
                  </div>
                  <p className="text-gray-700 mb-8 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                    Свяжитесь с нами любым удобным способом, и мы поможем оформить подключение для вашего соседа
                  </p>
                  <div className="flex justify-center">
                    <Button 
                      onClick={() => {
                        const contactSection = document.getElementById('contact');
                        if (contactSection) {
                          const yOffset = -80;
                          const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                          window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                      }}
                      className="group bg-skynet-blue hover:bg-skynet-blue text-white hover:text-white py-5 px-10 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 text-lg md:text-xl font-bold"
                    >
                      <Phone className="mr-3 stroke-2" style={{ width: '20px', height: '20px' }} />
                      Позвонить сейчас
                    </Button>
                  </div>
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
