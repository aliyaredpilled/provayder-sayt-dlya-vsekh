
import { useState } from 'react';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { ChevronUp, ChevronDown, Search, WifiIcon, Tv, Phone, Settings, HelpCircle, Shield } from 'lucide-react';

// Создаем структуру для категорий FAQ
const faqCategories = [
  {
    id: 'connection',
    name: 'Подключение',
    icon: WifiIcon,
    color: 'bg-skynet-blue',
    iconColor: 'text-skynet-blue'
  },
  {
    id: 'internet',
    name: 'Интернет',
    icon: WifiIcon,
    color: 'bg-skynet-orange',
    iconColor: 'text-skynet-orange'
  },
  {
    id: 'tv',
    name: 'Телевидение',
    icon: Tv,
    color: 'bg-green-500',
    iconColor: 'text-green-500'
  },
  {
    id: 'phone',
    name: 'Телефония',
    icon: Phone,
    color: 'bg-purple-600',
    iconColor: 'text-purple-600'
  },
  {
    id: 'settings',
    name: 'Настройка оборудования',
    icon: Settings,
    color: 'bg-amber-500',
    iconColor: 'text-amber-500'
  },
  {
    id: 'payment',
    name: 'Оплата и счета',
    icon: HelpCircle,
    color: 'bg-red-500',
    iconColor: 'text-red-500'
  },
  {
    id: 'security',
    name: 'Безопасность',
    icon: Shield,
    color: 'bg-indigo-500',
    iconColor: 'text-indigo-500'
  }
];

// Вопросы и ответы для каждой категории
const faqItems = {
  connection: [
    {
      question: 'Как подключить интернет в квартиру?',
      answer: 'Для подключения интернета оставьте заявку на нашем сайте или позвоните по номеру +7(843) 290-92-94. Наш специалист свяжется с вами для уточнения деталей и согласования удобного времени для проведения работ. Подключение обычно занимает не более 1-2 рабочих дней.'
    },
    {
      question: 'Какие документы нужны для подключения?',
      answer: 'Для подключения необходим паспорт владельца квартиры. Если договор заключает не собственник, дополнительно потребуется доверенность или присутствие собственника при заключении договора.'
    },
    {
      question: 'Сколько стоит подключение?',
      answer: 'Стоимость подключения зависит от выбранного тарифного плана. При подключении к тарифам от 1 Гбит/с и заключении договора от 12 месяцев подключение бесплатное. Для других тарифов стоимость подключения составляет от 1500 рублей.'
    }
  ],
  internet: [
    {
      question: 'Какая максимальная скорость интернета доступна?',
      answer: 'В зависимости от технической возможности в вашем доме, мы предлагаем тарифы со скоростью до 10 Гбит/с. В большинстве районов Казани доступны скорости до 1 Гбит/с, а в новых домах с современной инфраструктурой — до 10 Гбит/с.'
    },
    {
      question: 'Что делать, если интернет перестал работать?',
      answer: 'Если интернет перестал работать, сначала проверьте подключение кабелей и перезагрузите роутер (отключите его от питания на 30 секунд, затем включите снова). Если это не помогает, обратитесь в нашу техническую поддержку по номеру +7(843) 5-777-775. Наши специалисты работают круглосуточно и помогут решить любые проблемы с подключением.'
    },
    {
      question: 'Можно ли приостановить услугу на время отпуска?',
      answer: 'Да, вы можете воспользоваться услугой "Добровольная блокировка" и приостановить обслуживание на срок от 7 до 90 дней. Активировать услугу можно через личный кабинет или по телефону поддержки. В период блокировки абонентская плата не взимается.'
    }
  ],
  tv: [
    {
      question: 'Сколько каналов доступно в пакетах ТВ?',
      answer: 'В зависимости от выбранного пакета, вам будет доступно от 100 до 200+ телеканалов, включая каналы в HD и 4K качестве. Подробное описание пакетов и список каналов вы можете посмотреть в разделе "Телевидение" на нашем сайте.'
    },
    {
      question: 'Как настроить телевизор для просмотра цифрового ТВ?',
      answer: 'Для просмотра нашего цифрового ТВ вам потребуется подключить ТВ-приставку к телевизору или установить наше приложение, если у вас Smart TV. Подробная инструкция по настройке предоставляется при подключении, также вы можете скачать её в личном кабинете или обратиться в службу поддержки.'
    }
  ],
  phone: [
    {
      question: 'Можно ли сохранить существующий номер при переходе к вам?',
      answer: 'Да, при переходе от другого оператора вы можете сохранить свой текущий номер. Для этого требуется заполнить специальную форму и предоставить документы от предыдущего оператора. Процесс переноса номера занимает обычно от 3 до 7 рабочих дней.'
    },
    {
      question: 'Какие тарифы на международные звонки?',
      answer: 'Тарифы на международные звонки зависят от направления вызова. Полный перечень стран и тарифов доступен в личном кабинете или по запросу в службу поддержки. Для постоянных международных звонков рекомендуем подключить специальные опции, которые значительно снижают стоимость.'
    }
  ],
  settings: [
    {
      question: 'Как настроить WiFi роутер?',
      answer: 'При подключении наш специалист настраивает роутер и показывает базовые принципы работы. Если вам нужно самостоятельно настроить роутер, подробные инструкции для разных моделей устройств вы найдете в личном кабинете в разделе "Поддержка" или можете обратиться в службу технической поддержки.'
    },
    {
      question: 'Как изменить пароль от WiFi?',
      answer: 'Для изменения пароля WiFi вам нужно войти в панель управления роутером. Обычно это делается через браузер, введя адрес 192.168.0.1 или 192.168.1.1. Далее нужно ввести логин и пароль администратора (обычно указаны на наклейке на роутере), перейти в раздел Wireless или WiFi Settings и изменить пароль. Подробная инструкция доступна в личном кабинете.'
    }
  ],
  payment: [
    {
      question: 'Какие способы оплаты доступны?',
      answer: 'Вы можете оплатить услуги несколькими способами: через личный кабинет на сайте или в мобильном приложении, банковской картой, через платежные терминалы, в отделениях банков, через электронные платежные системы. Также доступна функция автоплатежа, которая автоматически списывает средства с привязанной карты.'
    },
    {
      question: 'Когда нужно вносить оплату?',
      answer: 'Оплату необходимо вносить до начала расчетного периода. Для большинства тарифов расчетный период начинается с 1-го числа каждого месяца. Рекомендуем поддерживать положительный баланс лицевого счета для избежания приостановки услуг.'
    }
  ],
  security: [
    {
      question: 'Как защитить свою домашнюю сеть от взлома?',
      answer: 'Для защиты домашней сети рекомендуем: использовать сложные пароли для WiFi (комбинация букв, цифр и специальных символов), регулярно обновлять прошивку роутера, использовать современные протоколы шифрования (WPA2/WPA3), отключать удаленный доступ к роутеру, если он не используется. Также мы предлагаем дополнительные услуги по защите сети, которые можно подключить в личном кабинете.'
    },
    {
      question: 'Какие антивирусные программы вы рекомендуете?',
      answer: 'Мы рекомендуем использовать комплексные решения для защиты, такие как Kaspersky Internet Security, ESET NOD32, Dr.Web или Bitdefender. Для наших абонентов доступны специальные предложения на лицензии антивирусного ПО. Подробности вы можете узнать в личном кабинете или у операторов службы поддержки.'
    }
  ]
};

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('connection');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter(item => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  const filteredFaqItems = searchTerm
    ? Object.values(faqItems).flat().filter(item =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : faqItems[activeCategory as keyof typeof faqItems];

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <section className="pt-32 pb-20 bg-skynet-gray-light/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-skynet-blue/10 text-skynet-blue text-sm font-medium mb-3">
                Поддержка
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Часто задаваемые вопросы
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Найдите ответы на распространенные вопросы о наших услугах и сервисах
              </p>
            </div>
            
            <div className="relative mb-12">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input 
                type="text" 
                className="block w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent shadow-sm" 
                placeholder="Поиск по вопросам и ответам..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {!searchTerm && (
              <div className="flex overflow-x-auto hide-scrollbar space-x-4 pb-4 mb-8">
                {faqCategories.map((category) => (
                  <button 
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex flex-col items-center px-6 py-4 rounded-xl transition-all whitespace-nowrap ${
                      activeCategory === category.id 
                        ? `${category.color} text-white` 
                        : 'bg-white border border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <category.icon className={`h-6 w-6 mb-2 ${
                      activeCategory === category.id ? 'text-white' : category.iconColor
                    }`} />
                    <span className={`text-sm font-medium ${
                      activeCategory === category.id ? 'text-white' : 'text-gray-700'
                    }`}>
                      {category.name}
                    </span>
                  </button>
                ))}
              </div>
            )}
            
            <div className="bg-white rounded-xl shadow-md divide-y divide-gray-100">
              {filteredFaqItems.map((item, index) => (
                <div key={index} className="py-5 px-6">
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
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </div>
              ))}
              
              {filteredFaqItems.length === 0 && (
                <div className="py-12 px-6 text-center">
                  <HelpCircle className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Не нашли ответ на свой вопрос?</h3>
                  <p className="text-gray-600 mb-6">
                    Не беспокойтесь, наша команда поддержки готова вам помочь
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <a 
                      href="tel:+78435777775" 
                      className="inline-flex items-center justify-center bg-skynet-blue hover:bg-skynet-blue-dark text-white font-medium px-8 py-3 rounded-full shadow-md transition-all"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Позвонить в поддержку
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default FAQ;
