
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import { MessageSquare, Phone, Clock, Users } from 'lucide-react';

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      {/* Complaints Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-skynet-blue/5 via-white to-skynet-orange/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-skynet-blue/20 text-skynet-blue text-sm font-medium mb-6 shadow-lg">
              Поддержка и обратная связь
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Есть вопросы или предложения?
            </h2>
            
            {/* Main WhatsApp Card */}
            <div className="relative mb-12">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-skynet-blue to-skynet-orange rounded-3xl transform rotate-1 opacity-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-skynet-orange to-skynet-blue rounded-3xl transform -rotate-1 opacity-5"></div>
              
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                  {/* Left Column: Content */}
                  <div className="text-center md:text-left space-y-6">
                    <div className="space-y-4">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Что-то не так с <span className="font-bold text-skynet-blue">монтажом</span>, 
                        <span className="font-bold text-skynet-orange"> скоростью интернета</span> или есть другие вопросы?
                      </p>
                      <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-skynet-blue to-skynet-orange bg-clip-text text-transparent leading-tight">
                        Пишите напрямую руководству —<br /> разберёмся в любой ситуации!
                      </h3>
                    </div>
                    
                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
                      <div className="flex items-center justify-center md:justify-start space-x-2">
                        <Clock className="h-5 w-5 text-skynet-blue" />
                        <span className="text-sm text-gray-600 font-medium">24/7 поддержка</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start space-x-2">
                        <Phone className="h-5 w-5 text-skynet-orange" />
                        <span className="text-sm text-gray-600 font-medium">Быстрый ответ</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start space-x-2">
                        <Users className="h-5 w-5 text-skynet-blue" />
                        <span className="text-sm text-gray-600 font-medium">Личный подход</span>
                      </div>
                    </div>
                    
                    {/* WhatsApp Button */}
                    <div className="pt-4">
                      <a 
                        href="https://wa.me/79867205872" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center bg-gradient-to-r from-skynet-blue to-skynet-orange hover:from-skynet-blue/90 hover:to-skynet-orange-bright text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-skynet-blue/40 to-skynet-orange/40 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                        <MessageSquare className="relative h-6 w-6 mr-3 animate-pulse" />
                        <span className="relative">Написать в WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: QR Code */}
                  <div className="flex justify-center md:justify-end">
                    <div className="relative">
                      {/* Decorative rings */}
                      <div className="absolute inset-0 bg-gradient-to-r from-skynet-blue to-skynet-orange rounded-full animate-ping opacity-20"></div>
                      <div className="absolute inset-4 bg-gradient-to-r from-skynet-orange to-skynet-blue rounded-full animate-pulse opacity-10"></div>
                      
                      <div className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-inner border-2 border-gray-100 hover:border-skynet-blue/30 transition-all duration-300">
                        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                          <img 
                            src="/lovable-uploads/4f8a3072-12ec-4476-85d8-2e58e0e9897c.png" 
                            alt="QR код для WhatsApp" 
                            className="w-40 h-40"
                          />
                        </div>
                        <div className="text-center mt-6">
                          <p className="text-sm text-gray-700 font-semibold mb-1">
                            Наведите камеру телефона
                          </p>
                          <p className="text-xs text-gray-500">
                            для быстрого перехода в WhatsApp
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default SupportPage;
