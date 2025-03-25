
import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const faqItems = [
  {
    question: "Как подключить интернет от SKYNET?",
    answer: "Подключение интернета от SKYNET очень простое. Оставьте заявку на нашем сайте, позвоните по номеру +7 (843) 290-92-94 или посетите наш офис. Наш специалист свяжется с вами для уточнения деталей и согласования удобного времени для подключения."
  },
  {
    question: "Сколько времени занимает подключение?",
    answer: "Стандартное подключение занимает не более 24 часов с момента оформления заявки. В большинстве случаев мы подключаем услуги в тот же день или на следующий."
  },
  {
    question: "Какие документы нужны для подключения?",
    answer: "Для подключения вам понадобится только паспорт гражданина РФ. Все остальные документы мы подготовим сами."
  },
  {
    question: "Что входит в стоимость подключения?",
    answer: "В стоимость подключения входит прокладка кабеля до вашей квартиры, настройка оборудования и подключение до 2-х устройств к интернету. Дополнительные услуги, такие как настройка Wi-Fi роутера или установка телевизионных приставок, могут оплачиваться отдельно."
  },
  {
    question: "Можно ли пользоваться своим роутером?",
    answer: "Да, вы можете использовать собственный роутер. Наши специалисты помогут настроить его для работы с нашими услугами. Также у нас есть широкий выбор современных Wi-Fi роутеров, которые вы можете приобрести или взять в аренду."
  },
  {
    question: "Как оплачивать услуги SKYNET?",
    answer: "Мы предлагаем различные способы оплаты: через личный кабинет на нашем сайте, мобильное приложение, банковские карты, терминалы оплаты, банковские переводы, электронные платежные системы и в наших офисах."
  }
];

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-skynet-blue/10 text-skynet-blue text-sm font-medium mb-3">
            Ответы на вопросы
          </span>
          <h2 className="heading-lg mb-4 text-gray-900">
            Часто задаваемые вопросы
          </h2>
          <p className="text-gray-600">
            Мы собрали ответы на самые популярные вопросы наших клиентов. Если вы не нашли ответ на свой вопрос, свяжитесь с нашей службой поддержки.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="border-b border-gray-200 py-5 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button 
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
                <div className="ml-4 flex-shrink-0">
                  {openItem === index ? (
                    <ChevronUp className="h-5 w-5 text-skynet-blue" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </button>
              <div 
                className={`mt-2 transition-all duration-300 overflow-hidden ${
                  openItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-gray-100 rounded-lg p-6 shadow-sm">
            <div className="mr-6">
              <p className="text-lg font-medium text-gray-900 mb-1">Не нашли ответ на свой вопрос?</p>
              <p className="text-gray-600">Наша служба поддержки работает 24/7</p>
            </div>
            <a 
              href="tel:+78435777775" 
              className="button-primary whitespace-nowrap"
            >
              Позвонить в поддержку
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
