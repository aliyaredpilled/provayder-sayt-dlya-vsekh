
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import { Sparkles, Zap, Heart, Rocket } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Красивый дизайн",
      description: "Современные градиенты и анимации создают приятный пользовательский опыт",
      gradient: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Быстрая загрузка",
      description: "Оптимизированный код обеспечивает мгновенную загрузку всех элементов",
      gradient: "bg-gradient-to-r from-yellow-500 to-orange-500"
    },
    {
      icon: Heart,
      title: "Адаптивность",
      description: "Идеально отображается на всех устройствах - от телефонов до десктопов",
      gradient: "bg-gradient-to-r from-red-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: "Простота",
      description: "Минималистичный интерфейс без лишних элементов - только самое необходимое",
      gradient: "bg-gradient-to-r from-blue-500 to-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Особенности нашего сайта
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Простой тестовый проект с современными технологиями и красивым дизайном
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={feature.gradient}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-blue-400 mr-3" />
            <span className="text-2xl font-bold">Тестовый Сайт</span>
          </div>
          <p className="text-gray-400 mb-4">
            Создано с ❤️ для тестирования возможностей Lovable
          </p>
          <div className="text-sm text-gray-500">
            © 2024 Тестовый проект. Простой и красивый дизайн.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
