import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import { MessageSquare } from 'lucide-react';

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      {/* Complaints Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-3">
              Поддержка и обратная связь
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Есть вопросы или предложения?
            </h2>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 transform hover:scale-[1.01] transition-transform duration-300">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left Column: Text & Button */}
                <div className="text-center md:text-left">
                  <div className="text-lg text-gray-700 mb-6 space-y-3">
                    <p>Что-то не так с <strong>монтажом</strong>, <strong>скоростью интернета</strong> или есть другие вопросы?</p>
                    <p className="text-2xl lg:text-3xl font-bold text-skynet-blue leading-tight">
                      Пишите напрямую руководству —<br /> разберёмся в любой ситуации!
                    </p>
                  </div>
                  <a 
                    href="https://wa.me/79867205872" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <MessageSquare className="h-6 w-6 mr-3" />
                    Написать в WhatsApp
                  </a>
                </div>

                {/* Right Column: QR Code */}
                <div className="flex justify-center md:justify-end">
                  <div className="text-center bg-gray-50/50 p-6 rounded-2xl shadow-inner border border-gray-200/50">
                    <div className="p-4 bg-white rounded-xl inline-block shadow-md">
                      <img 
                        src="/lovable-uploads/4f8a3072-12ec-4476-85d8-2e58e0e9897c.png" 
                        alt="QR код для WhatsApp" 
                        className="w-40 h-40"
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-4 font-medium">
                      Наведите камеру, чтобы <br/>начать чат в WhatsApp
                    </p>
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