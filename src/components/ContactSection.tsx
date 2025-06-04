
import { Phone, Mail, MessageSquare, Send, Clock } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Имитация отправки формы
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact-section" className="py-20 bg-gradient-to-r from-skynet-blue to-skynet-blue-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Подключиться просто
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Получите консультацию и оставьте заявку на подключение. Наши специалисты свяжутся с вами в течение часа.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <Phone className="h-6 w-6 text-skynet-orange mr-3" />
                <div>
                  <p className="font-medium">Подключение</p>
                  <a href="tel:+78432909294" className="text-white/90 hover:text-white">
                    +7 (843) 290-92-94
                  </a>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <Phone className="h-6 w-6 text-skynet-orange mr-3" />
                <div>
                  <p className="font-medium">Поддержка</p>
                  <a href="tel:+78435777775" className="text-white/90 hover:text-white">
                    +7 (843) 5-777-775
                  </a>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <Mail className="h-6 w-6 text-skynet-orange mr-3" />
                <div>
                  <p className="font-medium">Электронная почта</p>
                  <a href="mailto:sales@skynet-kazan.com" className="text-white/90 hover:text-white">
                    sales@skynet-kazan.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <Mail className="h-6 w-6 text-skynet-orange mr-3" />
                <div>
                  <p className="font-medium">Техническая поддержка</p>
                  <a href="mailto:noc@skynet-kazan.com" className="text-white/90 hover:text-white">
                    noc@skynet-kazan.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <MessageSquare className="h-6 w-6 text-skynet-orange mr-3" />
                <div>
                  <p className="font-medium">Поддержка через Телеграм</p>
                  <a href="https://t.me/skynet_kazan_supportbot" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white">
                    @skynet_kazan_supportbot
                  </a>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <Send className="h-6 w-6 text-skynet-orange mr-3" />
                <div>
                  <p className="font-medium">Документы через Телеграм</p>
                  <a href="https://t.me/SkyNet_document_bot" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white">
                    @SkyNet_document_bot
                  </a>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <Clock className="h-6 w-6 text-skynet-orange mr-3" />
                <div>
                  <p className="font-medium">Режим работы</p>
                  <p className="text-white/90">ПН-ПТ: 8:00-18:00, СБ: 8:00-13:00</p>
                  <p className="text-sm text-white/75">Техподдержка: круглосуточно</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-skynet-orange focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Номер телефона"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-skynet-orange focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email (необязательно)"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-skynet-orange focus:border-transparent"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Ваше сообщение"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-skynet-orange focus:border-transparent resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-skynet-orange hover:bg-skynet-orange-bright text-white font-medium py-3 rounded-lg transition-all shadow-md hover:shadow-orange-glow transform hover:-translate-y-1"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
