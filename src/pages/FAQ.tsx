
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import { MessageSquare } from 'lucide-react';

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-skynet-purple/10 text-skynet-purple text-sm font-medium mb-3">
              Часто задаваемые вопросы
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Вопросы и ответы
            </h1>
            <p className="text-lg text-gray-600">
              Здесь собраны наиболее распространенные вопросы наших клиентов и подробные ответы на них
            </p>
          </div>
        </div>
      </section>

      {/* Complaints Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-3">
              Для жалоб
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Есть повод пожаловаться?
            </h2>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
              <div className="text-lg text-gray-700 mb-8 space-y-4">
                <p>Что-то не так с <strong>монтажом и монтажником</strong> / <strong>скоростью и работой интернета</strong> или есть другие вопросы?</p>
                <p className="text-xl font-semibold text-skynet-blue">
                  Пишите напрямую в WhatsApp руководству «Скайнет Стрим» — разберёмся!
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="text-center">
                  <div className="bg-green-50 p-6 rounded-xl inline-block mb-4">
                    <img 
                      src="/lovable-uploads/4f8a3072-12ec-4476-85d8-2e58e0e9897c.png" 
                      alt="QR код для WhatsApp" 
                      className="w-48 h-48 mx-auto"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Наведите на QR-код — и в чат
                  </p>
                </div>
                
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    <MessageSquare className="h-8 w-8 text-green-500 mr-3" />
                    <span className="text-2xl font-bold text-gray-900">WhatsApp</span>
                  </div>
                  <p className="text-gray-600 mb-6 max-w-md">
                    Свяжитесь с нами напрямую через WhatsApp для быстрого решения любых вопросов и проблем
                  </p>
                  <a 
                    href="https://wa.me/79867205872" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                  >
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Написать в WhatsApp
                  </a>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Быстрый ответ</h3>
                <p className="text-gray-600 text-sm">Отвечаем в течение нескольких минут в рабочее время</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Прямая связь</h3>
                <p className="text-gray-600 text-sm">Общение напрямую с руководством компании</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Решение вопросов</h3>
                <p className="text-gray-600 text-sm">Оперативно разбираем и решаем любые проблемы</p>
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

export default FAQPage;
