
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
      <section className="pt-32 pb-16 bg-gradient-to-b from-sky-100 via-sky-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-sky-200 text-sky-700 text-sm font-medium mb-6 shadow-sm">
              Поддержка и обратная связь
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Есть вопросы или предложения?
            </h2>
            
            {/* Main WhatsApp Card */}
            <div className="relative mb-12">
              <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-sky-100 hover:shadow-md transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                  {/* Left Column: Content */}
                  <div className="text-center md:text-left space-y-6">
                    <div className="space-y-4">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Что-то не так с <span className="font-semibold text-gray-900">монтажом</span>, 
                        <span className="font-semibold text-skynet-orange"> скоростью интернета</span> или есть другие вопросы?
                      </p>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                        Пишите напрямую руководству —<br /> 
                        <span className="text-skynet-orange">разберёмся в любой ситуации!</span>
                      </h3>
                    </div>
                    
                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
                      <div className="flex items-center justify-center md:justify-start space-x-2">
                        <Clock className="h-5 w-5 text-sky-600" />
                        <span className="text-sm text-gray-600 font-medium">24/7 поддержка</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start space-x-2">
                        <Phone className="h-5 w-5 text-skynet-orange" />
                        <span className="text-sm text-gray-600 font-medium">Быстрый ответ</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start space-x-2">
                        <Users className="h-5 w-5 text-sky-600" />
                        <span className="text-sm text-gray-600 font-medium">Личный подход</span>
                      </div>
                    </div>
                    
                    {/* WhatsApp Button */}
                    <div className="pt-4">
                      <a 
                        href="https://wa.me/79867205872" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-skynet-orange hover:bg-skynet-orange-bright text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                      >
                        <MessageSquare className="h-6 w-6 mr-3" />
                        <span>Написать в WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: QR Code */}
                  <div className="flex justify-center md:justify-end">
                    <div className="bg-sky-50 p-8 rounded-2xl border border-sky-100 hover:border-sky-200 transition-all duration-300">
                      <div className="bg-white p-6 rounded-xl shadow-sm">
                        <img 
                          src="/lovable-uploads/4f8a3072-12ec-4476-85d8-2e58e0e9897c.png" 
                          alt="QR код для WhatsApp" 
                          className="w-40 h-40"
                        />
                      </div>
                      <div className="text-center mt-6">
                        <p className="text-sm text-gray-700 font-medium mb-1">
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
      </section>

      <FAQ />
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default SupportPage;
