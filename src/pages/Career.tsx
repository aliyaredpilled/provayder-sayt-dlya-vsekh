import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Briefcase, MapPin, Clock, CheckCircle2, ArrowRight, Heart, Users, Star, Award, Rocket } from 'lucide-react';
import { useState } from 'react';

const jobOpenings = [
  {
    id: 1,
    title: 'Технический специалист',
    location: 'Казань',
    type: 'Полный день',
    department: 'Отдел обслуживания клиентов',
    description: 'Подключение и настройка оборудования, консультирование клиентов, устранение технических неисправностей.',
    responsibilities: [
      'Подключение новых клиентов к услугам компании',
      'Настройка сетевого, телевизионного и телефонного оборудования',
      'Диагностика и устранение неисправностей',
      'Консультация клиентов по вопросам работы оборудования'
    ],
    requirements: [
      'Техническое образование',
      'Знание основ сетевых технологий',
      'Опыт работы с сетевым оборудованием от 1 года',
      'Водительские права категории B'
    ],
    benefits: [
      'Официальное трудоустройство',
      'Стабильная заработная плата + премии',
      'Корпоративное обучение',
      'Возможность карьерного роста'
    ]
  },
  {
    id: 2,
    title: 'Менеджер по продажам',
    location: 'Казань',
    type: 'Полный день',
    department: 'Отдел продаж',
    description: 'Привлечение новых клиентов, презентация услуг компании, заключение договоров, выполнение планов продаж.',
    responsibilities: [
      'Активный поиск и привлечение новых клиентов',
      'Проведение презентаций и консультаций по услугам компании',
      'Заключение договоров на подключение услуг',
      'Выполнение индивидуальных и групповых планов продаж'
    ],
    requirements: [
      'Высшее образование',
      'Опыт работы в продажах от 1 года',
      'Грамотная речь и умение вести переговоры',
      'Уверенный пользователь ПК',
      'Целеустремленность и ориентация на результат'
    ],
    benefits: [
      'Официальное трудоустройство',
      'Фиксированный оклад + высокий % от продаж',
      'Корпоративное обучение и тренинги',
      'Возможность карьерного роста'
    ]
  },
  {
    id: 3,
    title: 'Специалист технической поддержки',
    location: 'Казань',
    type: 'Сменный график',
    department: 'Отдел технической поддержки',
    description: 'Дистанционная поддержка клиентов, решение технических вопросов, обработка заявок на подключение и ремонт.',
    responsibilities: [
      'Прием и обработка входящих звонков от клиентов',
      'Дистанционная диагностика и устранение неисправностей',
      'Консультирование по вопросам работы услуг и оборудования',
      'Оформление заявок на подключение и ремонт'
    ],
    requirements: [
      'Техническое образование',
      'Знание основ сетевых технологий',
      'Опыт работы в технической поддержке приветствуется',
      'Грамотная речь и стрессоустойчивость',
      'Готовность к работе в сменном графике'
    ],
    benefits: [
      'Официальное трудоустройство',
      'Стабильная заработная плата + премии',
      'Бесплатное обучение',
      'Комфортный офис и дружный коллектив'
    ]
  },
  {
    id: 4,
    title: 'Сетевой инженер',
    location: 'Казань',
    type: 'Полный день',
    department: 'Технический отдел',
    description: 'Проектирование, настройка и поддержка сетевой инфраструктуры компании, мониторинг работоспособности сети.',
    responsibilities: [
      'Проектирование и развитие сетевой инфраструктуры',
      'Настройка коммутационного и маршрутизирующего оборудования',
      'Мониторинг работоспособности сети',
      'Устранение сетевых сбоев и инцидентов'
    ],
    requirements: [
      'Высшее техническое образование',
      'Опыт работы сетевым инженером от 3 лет',
      'Глубокие знания сетевых протоколов (TCP/IP, DHCP, DNS)',
      'Опыт работы с оборудованием Cisco, Juniper, Huawei',
      'Сертификаты CCNA/CCNP будут преимуществом'
    ],
    benefits: [
      'Официальное трудоустройство',
      'Конкурентная заработная плата',
      'Профессиональное развитие и сертификация',
      'Современный офис и гибкий график'
    ]
  }
];

const Career = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    resume: null as File | null
  });
  
  const [showApplication, setShowApplication] = useState(false);
  
  const handleJobSelect = (id: number) => {
    setSelectedJob(id);
    setShowApplication(false);
  };
  
  const handleApply = () => {
    if (selectedJob) {
      setShowApplication(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setApplicationForm(prev => ({ ...prev, [name]: value }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setApplicationForm(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Имитация отправки формы
    alert('Ваше резюме успешно отправлено! Мы свяжемся с вами в ближайшее время.');
    setShowApplication(false);
    setApplicationForm({
      name: '',
      email: '',
      phone: '',
      message: '',
      resume: null
    });
  };
  
  const selectedJobDetails = selectedJob ? jobOpenings.find(job => job.id === selectedJob) : null;

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <section className="pt-32 pb-20 bg-skynet-gray-light/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-skynet-orange/10 text-skynet-orange text-sm font-medium mb-3">
              Карьера
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Присоединяйтесь к нашей команде
            </h1>
            <p className="text-lg text-gray-600">
              Мы всегда в поиске талантливых и энергичных специалистов, готовых расти вместе с нами
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-skynet-gray-light/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Открытые вакансии
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="divide-y divide-gray-100">
                    {jobOpenings.map(job => (
                      <button 
                        key={job.id}
                        onClick={() => handleJobSelect(job.id)}
                        className={`w-full flex items-center p-4 text-left transition-colors ${
                          selectedJob === job.id 
                            ? 'bg-skynet-blue text-white' 
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className={`p-2 rounded-lg mr-4 ${
                          selectedJob === job.id 
                            ? 'bg-white/10' 
                            : 'bg-skynet-blue/10'
                        }`}>
                          <Briefcase className={`h-5 w-5 ${
                            selectedJob === job.id 
                              ? 'text-white' 
                              : 'text-skynet-blue'
                          }`} />
                        </div>
                        <div>
                          <h3 className={`font-semibold ${
                            selectedJob === job.id 
                              ? 'text-white' 
                              : 'text-gray-900'
                          }`}>
                            {job.title}
                          </h3>
                          <div className={`flex flex-wrap gap-2 mt-1 text-xs ${
                            selectedJob === job.id 
                              ? 'text-white/80' 
                              : 'text-gray-500'
                          }`}>
                            <div className="flex items-center">
                              <MapPin className="h-3 w-3 mr-1" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              <span>{job.type}</span>
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                {selectedJobDetails ? (
                  <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {selectedJobDetails.title}
                      </h2>
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center text-gray-600 bg-gray-100 px-3 py-1 rounded-full text-sm">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{selectedJobDetails.location}</span>
                        </div>
                        <div className="flex items-center text-gray-600 bg-gray-100 px-3 py-1 rounded-full text-sm">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{selectedJobDetails.type}</span>
                        </div>
                        <div className="flex items-center text-gray-600 bg-gray-100 px-3 py-1 rounded-full text-sm">
                          <Briefcase className="h-4 w-4 mr-1" />
                          <span>{selectedJobDetails.department}</span>
                        </div>
                      </div>
                      <p className="text-gray-600">{selectedJobDetails.description}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Обязанности:</h3>
                      <ul className="space-y-2">
                        {selectedJobDetails.responsibilities.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-skynet-blue mt-0.5 mr-3 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Требования:</h3>
                      <ul className="space-y-2">
                        {selectedJobDetails.requirements.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-skynet-orange mt-0.5 mr-3 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Мы предлагаем:</h3>
                      <ul className="space-y-2">
                        {selectedJobDetails.benefits.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex justify-between items-center border-t border-gray-100 pt-6">
                      <p className="text-gray-500">
                        Отправьте заявку сегодня и станьте частью нашей команды!
                      </p>
                      <button 
                        onClick={handleApply}
                        className="bg-skynet-blue hover:bg-skynet-blue-dark text-white font-medium px-6 py-3 rounded-lg shadow-md transition-all flex items-center"
                      >
                        Откликнуться <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 text-center">
                    <Briefcase className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Открытые позиции</h3>
                    <p className="text-gray-600">
                      Здесь будет отображена подробная информация о выбранной вакансии
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {showApplication && selectedJobDetails && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Заявка на вакансию: {selectedJobDetails.title}
              </h2>
              <p className="text-gray-600 mb-8">
                Заполните форму ниже, чтобы подать заявку на эту позицию.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Ваше имя *
                  </label>
                  <input 
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={applicationForm.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent"
                    placeholder="Введите ваше полное имя"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input 
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={applicationForm.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent"
                      placeholder="example@mail.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Телефон *
                    </label>
                    <input 
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={applicationForm.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Сопроводительное письмо
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={4}
                    value={applicationForm.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent"
                    placeholder="Расскажите немного о себе и почему вы хотите присоединиться к нашей команде"
                  ></textarea>
                </div>
                
                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                    Загрузите резюме *
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                    <div className="space-y-1 text-center">
                      <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label htmlFor="resume" className="relative cursor-pointer bg-white rounded-md font-medium text-skynet-blue hover:text-skynet-blue-dark focus-within:outline-none">
                          <span>Загрузить файл</span>
                          <input 
                            id="resume" 
                            name="resume" 
                            type="file" 
                            className="sr-only" 
                            onChange={handleFileChange}
                            required
                          />
                        </label>
                        <p className="pl-1">или перетащите сюда</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PDF, DOC, DOCX до 10MB
                      </p>
                    </div>
                  </div>
                  {applicationForm.resume && (
                    <p className="mt-2 text-sm text-green-600">
                      Файл загружен: {applicationForm.resume.name}
                    </p>
                  )}
                </div>
                
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowApplication(false)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Отмена
                  </button>
                  <button
                    type="submit"
                    className="bg-skynet-blue hover:bg-skynet-blue-dark text-white font-medium px-6 py-3 rounded-lg shadow-md transition-all"
                  >
                    Отправить заявку
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Почему стоит работать с нами
              </h2>
              <p className="text-lg text-gray-600">
                В SKYNET мы ценим наших сотрудников и создаем условия для их профессионального и личностного роста
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all">
                <div className="bg-skynet-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-skynet-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Профессиональный рост</h3>
                <p className="text-gray-600">Возможности для обучения, развития и карьерного продвижения в динамично развивающейся компании</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all">
                <div className="bg-skynet-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-skynet-orange" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Забота о сотрудниках</h3>
                <p className="text-gray-600">Комфортные условия труда, социальный пакет, корпоративные мероприятия и спортивные активности</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all">
                <div className="bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Дружный коллектив</h3>
                <p className="text-gray-600">Команда единомышленников, готовых делиться опытом и поддерживать друг друга</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-all">
                <div className="bg-purple-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Инновационные проекты</h3>
                <p className="text-gray-600">Работа с современными технологиями и участие в развитии инновационных сервисов</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-skynet-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Не нашли подходящую вакансию?</h2>
            <p className="text-xl text-white/80 mb-8">
              Мы всегда в поиске талантливых специалистов. Отправьте своё резюме, и мы свяжемся с вами, когда появится подходящая позиция.
            </p>
            <a 
              href="mailto:hr@skynet.ru" 
              className="inline-flex items-center bg-white text-skynet-blue hover:bg-gray-100 font-medium px-8 py-3 rounded-full shadow-md transition-all transform hover:-translate-y-1"
            >
              Отправить резюме
            </a>
          </div>
        </div>
      </section>
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Career;
