import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqItems = [
  {
    question: 'Как подключить интернет в квартиру?',
    answer: 'Для подключения интернета оставьте заявку на нашем сайте или позвоните по номеру +7(843) 290-92-94. Наш специалист свяжется с вами для уточнения деталей и согласования удобного времени для проведения работ. Подключение обычно занимает не более 1-2 рабочих дней.'
  },
  {
    question: 'Какая скорость интернета доступна в моем районе?',
    answer: 'Доступная скорость зависит от технической возможности подключения в вашем доме. В большинстве районов Казани доступны скорости до 1 Гбит/с, а в новых домах — до 10 Гбит/с. Чтобы узнать точную информацию о доступных скоростях, проверьте техническую возможность подключения на нашем сайте или свяжитесь с нашими консультантами.'
  },
  {
    question: 'Что делать, если интернет перестал работать?',
    answer: '• Проверьте, горят ли индикаторы на роутере. Если нет — убедитесь, что роутер подключен к сети.\n• Убедитесь, что кабели подключены правильно и плотно.\n• Перезагрузите роутер: отключите питание на 30-40 секунд и включите обратно.\n• Проверьте настройки подключения на вашем компьютере или телефоне.\n\nЕсли это не помогает, обратитесь в нашу техническую поддержку по номеру\n+7 (843) 5-777-775'
  },
  {
    question: 'Как оплатить услуги интернета и ТВ?',
    answer: 'Оплатить услуги можно несколькими способами: через личный кабинет на нашем сайте, мобильное приложение, банковской картой, через терминалы оплаты или в офисах компании. Также доступна функция автоплатежа, которая автоматически списывает средства с привязанной карты.'
  },
  {
    question: 'Могу ли я временно приостановить услуги?',
    answer: 'Да, вы можете воспользоваться услугой "Добровольная блокировка" и приостановить обслуживание. Активировать услугу можно через личный кабинет или по телефону поддержки. В период блокировки абонентская плата не взимается.'
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter(item => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <section className="bg-skynet-gray-light/50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-block px-3 py-1 rounded-full bg-skynet-blue/10 text-skynet-blue text-sm font-medium mb-3">
            Помощь
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Часто задаваемые вопросы
          </h2>
        </div>
        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqItems.map((item, index) => (
            <div key={index} className="py-5">
              <button
                onClick={() => toggleItem(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
                <span className="ml-6 flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-skynet-blue" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </span>
              </button>
              
              <div className={`mt-3 transition-all duration-300 overflow-hidden ${
                openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <p className="text-gray-600 whitespace-pre-line">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
        

      </div>
    </section>
  );
};

export default FAQ;
