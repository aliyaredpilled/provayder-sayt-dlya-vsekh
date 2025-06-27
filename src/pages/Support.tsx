import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import InfoCard from "@/components/InfoCard";        // новый реиспользуемый блок
import { MessageSquare } from "lucide-react";

const SupportPage = () => (
  <div className="min-h-screen bg-gradient-to-b from-sky-100 via-sky-50 to-white">
    <NavBar />

    {/* Hero / Заголовок */}
    <section className="pt-32 pb-20 text-center animate-fade-in-up">
      <span className="inline-block px-3 py-1 rounded-full bg-skynet-blue/10 text-skynet-blue text-sm font-medium">
        Поддержка и обратная связь
      </span>
      <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
        Всегда <span className="text-skynet-orange">на связи</span>
      </h1>
      <p className="mt-4 max-w-xl mx-auto text-gray-600">
        Любой вопрос решаем быстро — пишите, звоните или сканируйте QR-код, чтобы начать чат прямо сейчас.
      </p>
    </section>

    {/* Main Card */}
    <section className="pb-24">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-card hover:shadow-intense
                        transition-all duration-300 p-10 md:p-14 border border-gray-200/70
                        grid lg:grid-cols-3 gap-10 items-center animate-fade-in-up">
          {/* Текст и кнопка */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
              Пишите <span className="text-skynet-orange">напрямую руководству</span> — разберёмся в любой ситуации!
            </h2>
            <p className="text-gray-600">
              Есть вопросы по скорости, монтажу или счёту? Просто напишите нам в WhatsApp —
              ответим в течение <span className="font-semibold text-gray-900">15 минут</span>.
            </p>

            <div className="space-y-4">
              <a
                href="https://wa.me/79867205872?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3
                           bg-gradient-to-r from-emerald-400 to-emerald-500
                           hover:from-emerald-500 hover:to-emerald-400
                           text-white font-bold px-9 py-4 rounded-xl
                           shadow-lg hover:shadow-orange-glow
                           transition-all duration-3000 animate-bounce-slight"
              >
                <MessageSquare className="h-6 w-6" />
                Написать в WhatsApp
              </a>
              
              <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-emerald-400">
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-base">📱 Номер для WhatsApp:</span>
                  <span className="font-semibold text-emerald-600 text-lg">
                    +7 986 720 58 72
                  </span>
                </div>
                <p className="text-gray-600 mt-2">
                  Добавьте номер в контакты и напишите нам в WhatsApp
                </p>
              </div>
            </div>
          </div>

          {/* QR-код */}
          <div className="flex justify-center">
            <div className="text-center">
              <img
                src="/lovable-uploads/4f8a3072-12ec-4476-85d8-2e58e0e9897c.png"
                alt="QR-код для WhatsApp"
                className="w-48 h-48 border shadow-md transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <p className="mt-3 text-sm text-gray-600">Наведите камеру,<br/>чтобы начать чат</p>
            </div>
          </div>
        </div>

        {/* Быстрые контакты */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 animate-fade-in-up">
          <InfoCard
            icon="MessageCircle"
            title="Техподдержка в Telegram"
                          subtitle="@skynet_kazan_supportbot"
            bg="skynet-blue"
            href="https://t.me/skynet_kazan_supportbot"
          />
          <InfoCard
            icon="Phone"
            title="Позвоните нам"
            subtitle="+7 (843) 5-777-775"
            bg="skynet-orange"
          />
          <InfoCard
            icon="Mail"
            title="Напишите на почту"
                          subtitle="noc@skynet-kazan.com"
            bg="emerald-500"
          />
        </div>
      </div>
    </section>

    <FAQ />            {/* уже стилизован — просто оставляем */}
    <ContactSection /> {/* фирменная форма из Contacts */}
    <Footer />
  </div>
);

export default SupportPage;
