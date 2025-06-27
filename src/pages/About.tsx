import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { User, Award, Users, MapPin, Calendar, GraduationCap, CheckCircle, Target } from 'lucide-react';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      <section className="pt-32 pb-20 bg-skynet-gray-light/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-skynet-blue/10 text-skynet-blue text-sm font-medium mb-3">
              О компании
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Мы соединяем людей будущего
            </h1>
            <p className="text-lg text-gray-600">
              Скайнет-Стрим — ведущий провайдер телекоммуникационных услуг в Казани и Республике Татарстан.
              Мы обеспечиваем надежным интернетом, телевидением и другими услугами более 50 000 домохозяйств.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">История компании</h2>
                <p className="text-gray-600 mb-4">
                  Компания Скайнет-Стрим была основана в 2005 году группой талантливых инженеров, увлеченных идеей создания по-настоящему современной инфраструктуры связи в родном городе. Начав с небольшой сети в одном из районов Казани, мы быстро завоевали доверие первых клиентов благодаря качественному сервису и внимательному отношению.
                </p>
                <p className="text-gray-600 mb-4">
                  За прошедшее десятилетие мы прошли путь от небольшого локального провайдера до одного из ведущих операторов связи в регионе. Мы постоянно развиваемся, внедряем новые технологии и расширяем зону покрытия, чтобы предоставлять нашим клиентам самые современные услуги связи.
                </p>
                <p className="text-gray-600">
                  Сегодня Скайнет-Стрим — это команда из более чем 200 профессионалов, собственная оптоволоконная сеть протяженностью свыше 1000 км и современный дата-центр. Мы гордимся тем, что обеспечиваем высокоскоростной доступ в интернет для десятков тысяч семей и сотен предприятий.
                </p>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                  alt="Офисные работники" 
                  className="rounded-2xl shadow-xl"
                />
                
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 flex items-center">
                  <Calendar className="h-8 w-8 text-skynet-orange mr-3" />
                  <div>
                    <div className="text-sm text-gray-500">Основано в</div>
                    <div className="text-xl font-bold">2005</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-skynet-gray-light/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Наша миссия и ценности</h2>
              <p className="text-lg text-gray-600">
                Мы стремимся делать современные технологии связи доступными для каждого, 
                обеспечивая высочайшее качество услуг и поддержки клиентов.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="bg-skynet-blue/10 w-14 h-14 rounded-lg flex items-center justify-center mb-5">
                  <Target className="h-6 w-6 text-skynet-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Миссия</h3>
                <p className="text-gray-600">
                  Наша миссия — делать современные технологии связи доступными для каждого, 
                  создавая надежную инфраструктуру для цифрового будущего нашего региона.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="bg-skynet-orange/10 w-14 h-14 rounded-lg flex items-center justify-center mb-5">
                  <CheckCircle className="h-6 w-6 text-skynet-orange" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Качество</h3>
                <p className="text-gray-600">
                  Мы не просто предоставляем услуги связи — мы создаем качественный продукт, 
                  который соответствует самым высоким стандартам надежности и производительности.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="bg-green-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-5">
                  <GraduationCap className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Инновации</h3>
                <p className="text-gray-600">
                  Мы постоянно следим за развитием технологий и внедряем самые передовые решения, 
                  чтобы наши клиенты всегда оставались на шаг впереди.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="bg-purple-600/10 w-14 h-14 rounded-lg flex items-center justify-center mb-5">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Клиентоориентированность</h3>
                <p className="text-gray-600">
                  Мы ценим каждого клиента и стремимся выстраивать долгосрочные отношения, 
                  основанные на взаимном уважении и доверии.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="bg-red-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-5">
                  <Award className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Профессионализм</h3>
                <p className="text-gray-600">
                  Наша команда состоит из квалифицированных специалистов с богатым опытом, 
                  которые готовы решать задачи любой сложности.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="bg-amber-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-5">
                  <MapPin className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Социальная ответственность</h3>
                <p className="text-gray-600">
                  Мы активно участвуем в жизни нашего города, поддерживаем социальные проекты 
                  и вносим вклад в развитие местного сообщества.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      
      <section className="py-16 bg-skynet-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Присоединяйтесь к нашей команде</h2>
            <p className="text-xl text-white/80 mb-8">
              Мы всегда в поиске талантливых и увлеченных специалистов, готовых развиваться вместе с нами
            </p>
            <Link 
              to="/career" 
              className="inline-flex items-center bg-white text-skynet-blue hover:bg-gray-100 font-medium px-8 py-3 rounded-full shadow-md transition-all transform hover:-translate-y-1"
            >
              Смотреть вакансии
            </Link>
          </div>
        </div>
      </section>
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default About;
