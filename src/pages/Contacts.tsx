import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <section className="pt-32 pb-8 bg-skynet-gray-light/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-skynet-blue/10 text-skynet-blue text-sm font-medium mb-3">
              Свяжитесь с нами
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Контактная информация
            </h1>
            <p className="text-lg text-gray-600">
              Мы всегда готовы ответить на ваши вопросы и помочь с подключением услуг
            </p>
          </div>
        </div>
      </section>
      
      <div className="bg-skynet-gray-light/50">
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
};

export default Contacts;
