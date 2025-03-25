
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen pt-24 overflow-hidden bg-gradient-to-b from-white to-blue-50">
      {/* Background decorations */}
      <div className="absolute top-0 inset-0 bg-gradient-radial from-blue-50/50 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-skynet-blue/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-skynet-blue/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 pt-10 pb-16 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* Text content */}
        <div className="flex-1 space-y-6 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
          <span className="inline-block px-3 py-1 rounded-full bg-skynet-blue/10 text-skynet-blue text-sm font-medium animate-fade-in">
            Для частных лиц
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Интернет на скорости <span className="text-skynet-blue">10 Гбит/с</span> для вашего дома
          </h1>
          
          <p className="text-lg text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Откройте новые возможности с самым быстрым интернетом в Казани. 
            Мгновенная загрузка, отсутствие задержек и плавный стриминг на всех устройствах одновременно.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a 
              href="#pricing" 
              className="button-primary group flex items-center justify-center sm:justify-start"
            >
              Подключить сейчас
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            
            <a href="#speed-comparison" className="button-secondary">
              Сравнить скорости
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 pt-6 justify-center lg:justify-start text-sm animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center">
              <div className="bg-green-500 rounded-full w-2 h-2 mr-2"></div>
              <span>Подключение за 24 часа</span>
            </div>
            <div className="flex items-center">
              <div className="bg-green-500 rounded-full w-2 h-2 mr-2"></div>
              <span>Техподдержка 24/7</span>
            </div>
            <div className="flex items-center">
              <div className="bg-green-500 rounded-full w-2 h-2 mr-2"></div>
              <span>Бесплатная настройка</span>
            </div>
          </div>
        </div>
        
        {/* Hero image */}
        <div className="flex-1 rounded-3xl overflow-hidden shadow-xl animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="relative bg-gradient-to-r from-skynet-blue-dark to-skynet-blue p-4 rounded-t-3xl">
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik01MTIgMEMyMjkuMjMgMCAwIDIyOS4yMyAwIDUxMmMwIDI4Mi43NyAyMjkuMjMgNTEyIDUxMiA1MTIgMjgyLjc3IDAgNTEyLTIyOS4yMyA1MTItNTEyQzEwMjQgMjI5LjIzIDc5NC43NyAwIDUxMiAwem0wIDk2MEM0MjkuODMgOTYwIDM1Mi44MjQgOTQwLjQzIDI4My4yIDkwNS43MzhsMTY3LjU1Mi0xNjcuNTUyYzE4LjQ5NiA2LjE2NyAzOS43NSA5LjU2OCA2MS4yNDggOS41NjggODcuOTA0IDAgMTU5LjA0LTcxLjEzNiAxNTkuMDQtMTU5LjA0cy03MS4xMzYtMTU5LjA0LTE1OS4wNC0xNTkuMDRjLTg3LjkwMyAwLTE1OS4wNCAxNDIuMjcyLTE1OS4wNCAyNTQuNDY0IDAgMjEuNSAzLjQgNDIuNzUzIDkuNTY4IDYxLjI1TDE5NC45NzYgOTEyLjk0QzEyMi4xMTMgODI5Ljk1MiA3My44NTcgNzE4LjIwOCA2NCAxNTkuMDRjMC03OS43NDQgNjQuMTctMTQ0LjcwNCAxNDMuMjU2LTE0Ny4yIDAgMCAxMzUuNjggNDY5LjM0NCAxNzYuMTI4IDQ2OS4zNDQgNDAuNDQ4IDAgODMuNDU2LTc3LjgyNCA4My40NTYtNzcuODI0bDI1Ni0xODEuNzYgMTcwLjQ5NiAyMzguMzM2YzI0LjA2NCA1MS43MTIgMTE2Ljk5MyAyNTIuNDggMTMwLjU2IDMxOC45NzZDODQ2LjQ4OCA5MDMuNDI0IDY4NC40OCAxMTUyIDUxMiAxMTUyeiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==')]"></div>
            <div className="flex justify-between items-center mb-2">
              <div className="text-white font-medium">SKYNET Для Дома</div>
              <div className="bg-white/20 px-2 py-0.5 rounded text-white text-xs">Премиум</div>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Интернет, ТВ и телефония для всей семьи</h3>
            <p className="text-white/80 text-sm">Современные технологии для комфорта</p>
          </div>
          
          <div className="relative bg-white p-6 rounded-b-3xl">
            <img 
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjQwMCIgeT0iMzAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5Y2EzYWYiPtCY0LfQvtCx0YDQsNC20LXQvdC40LUg0YHRh9Cw0YHRgtC70LjQstC+0Lkg0YHQtdC80YzQuDwvdGV4dD48L3N2Zz4=" 
              alt="Счастливая семья с высокоскоростным интернетом"
              className="w-full h-auto rounded-lg shadow-sm"
            />
            
            <div className="mt-6 bg-skynet-gray-light rounded-xl p-4">
              <div className="flex justify-between items-center mb-3">
                <div className="text-lg font-bold">Преимущества для дома</div>
                <div className="text-xs bg-skynet-blue/10 text-skynet-blue rounded-full px-2 py-1">Для всей семьи</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-start">
                  <div className="bg-skynet-blue rounded-full p-1 mr-2 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Высокоскоростной интернет</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-skynet-blue rounded-full p-1 mr-2 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>200+ каналов ТВ в HD качестве</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-skynet-blue rounded-full p-1 mr-2 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Выгодные тарифы на телефонию</span>
                </div>
                <div className="flex items-start">
                  <div className="bg-skynet-blue rounded-full p-1 mr-2 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Круглосуточная поддержка</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L60,218.7C120,213,240,203,360,202.7C480,203,600,213,720,224C840,235,960,245,1080,224C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
