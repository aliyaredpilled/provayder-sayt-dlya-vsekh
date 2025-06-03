
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-skynet-blue/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-skynet-orange/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Main section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Подключиться просто
            </h2>
            <p className="text-lg text-gray-600">
              Наш специалист свяжется с Вами в ближайшее время
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-10">
            <ContactInfo />
            <ContactForm />
          </div>
          
          <ContactMap />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
