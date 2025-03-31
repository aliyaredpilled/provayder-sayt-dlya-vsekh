
import { Users, Gift, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const ReferralPromo = () => {
  return (
    <section className="py-12 relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-skynet-blue to-skynet-blue-light rounded-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-skynet-orange opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-skynet-orange opacity-20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-4">
                <Gift className="h-4 w-4 mr-2" />
                Специальное предложение
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Месяц интернета и IP TV бесплатно для вас и вашего друга!
              </h2>
              
              <p className="text-white/90 text-lg mb-6">
                Пригласите друга подключиться к нашим услугам по вашей рекомендации, и вы оба получите месяц интернета и цифрового телевидения совершенно бесплатно.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-white/90">
                  <span className="bg-white/30 rounded-full p-1 mr-3 mt-1">
                    <Users className="h-4 w-4 text-white" />
                  </span>
                  <span>Действует для всех тарифных планов</span>
                </li>
                <li className="flex items-start text-white/90">
                  <span className="bg-white/30 rounded-full p-1 mr-3 mt-1">
                    <Users className="h-4 w-4 text-white" />
                  </span>
                  <span>Можно пригласить неограниченное количество друзей</span>
                </li>
                <li className="flex items-start text-white/90">
                  <span className="bg-white/30 rounded-full p-1 mr-3 mt-1">
                    <Users className="h-4 w-4 text-white" />
                  </span>
                  <span>Бонусы суммируются при приглашении нескольких друзей</span>
                </li>
              </ul>
              
              <div className="flex flex-wrap gap-4">
                <Button className="bg-skynet-orange hover:bg-skynet-orange-bright text-white py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
                  Пригласить друга
                </Button>
                <Link to="/tariffs" className="inline-flex items-center text-white hover:text-white/80 font-medium py-2">
                  Подробнее об акции <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-skynet-orange/30 to-skynet-orange-bright/30 rounded-full blur-3xl"></div>
                <img
                  src="/lovable-uploads/7b311004-ad44-4e56-9a36-e4cdcb849a5f.png"
                  alt="Подарок: интернет и телевидение"
                  className="relative z-10 rounded-2xl shadow-xl max-w-xs"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralPromo;
