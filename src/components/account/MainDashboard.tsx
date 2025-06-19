import { useState } from 'react';
import { ChevronDown, ChevronUp, Settings } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Link } from 'react-router-dom';

interface Service {
  id: number;
  name: string;
  icon: string;
  speed?: string;
  hasStaticIP?: boolean;
  login?: string;
  price: number;
  status: string;
  ipAddress?: string;
  subnetMask?: string;
  gateway?: string;
  speedKbps?: string;
}

interface Address {
  id: string;
  address: string;
  services: Service[];
}

interface MainDashboardProps {
  userData: {
    balance: number;
    addresses: Address[];
  };
}

const MainDashboard = ({ userData }: MainDashboardProps) => {
  const [openAddresses, setOpenAddresses] = useState<{[key: string]: boolean}>({});
  const [openServiceSettings, setOpenServiceSettings] = useState<{[key: string]: boolean}>({});

  const toggleAddress = (addressId: string) => {
    setOpenAddresses(prev => ({
      ...prev,
      [addressId]: !prev[addressId]
    }));
  };

  const toggleServiceSettings = (serviceId: string) => {
    setOpenServiceSettings(prev => ({
      ...prev,
      [serviceId]: !prev[serviceId]
    }));
  };

  const getTotalMonthlyPayment = () => {
    return userData.addresses.reduce((total, address) => {
      return total + address.services.reduce((addressTotal, service) => addressTotal + service.price, 0);
    }, 0);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Главная</h1>
      
      {/* Верхние виджеты */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <div className="bg-white rounded-xl shadow-sm p-4 lg:p-6 border border-gray-100">
          <p className="text-sm text-gray-500 mb-1">Текущий баланс</p>
          <p className="text-2xl lg:text-3xl font-bold text-gray-900">{userData.balance.toLocaleString('ru-RU', { minimumFractionDigits: 2 })} ₽</p>
          <Link to="/account" onClick={() => {
            setTimeout(() => {
              const event = new CustomEvent('showPaymentTab');
              window.dispatchEvent(event);
            }, 100);
          }}>
            <button className="mt-4 w-full bg-skynet-orange hover:bg-skynet-orange-bright text-white font-medium py-2 lg:py-3 rounded-lg shadow-sm transition-all text-sm lg:text-base">
              Пополнить счет
            </button>
          </Link>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-4 lg:p-6 border border-gray-100">
          <p className="text-sm text-gray-500 mb-1">Следующее списание</p>
          <p className="text-2xl lg:text-3xl font-bold text-gray-900">{getTotalMonthlyPayment().toLocaleString('ru-RU', { minimumFractionDigits: 2 })} ₽</p>
          <p className="mt-2 text-sm text-gray-500">01.07.2025</p>
        </div>
      </div>
      
      {/* Мои услуги */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Мои услуги</h2>
        
        <div className="space-y-4">
          {userData.addresses.map(address => (
            <div key={address.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <Collapsible
                open={openAddresses[address.id] !== false}
                onOpenChange={() => toggleAddress(address.id)}
              >
                <CollapsibleTrigger className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex items-center text-left">
                    <div className="font-medium text-gray-900 break-words text-base">{address.address}</div>
                  </div>
                  <div className="flex items-center ml-4">
                    <span className="text-xs lg:text-sm text-gray-500 mr-2">
                      {address.services.length} услуг
                    </span>
                    {openAddresses[address.id] !== false ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <div className="border-t border-gray-100">
                    {address.services.map(service => (
                      <div key={service.id} className="border-b border-gray-50 last:border-b-0">
                        {/* Mobile layout */}
                        <div className="lg:hidden p-4 space-y-4">
                          <div className="flex items-start space-x-3">
                            <span className="text-2xl">{service.icon}</span>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-medium text-gray-900 text-base">{service.name}</h3>
                              {service.speed && <div className="text-sm text-gray-600">Скорость: {service.speed}</div>}
                              {service.hasStaticIP && <div className="text-sm text-blue-600">+1ip</div>}
                              {service.login && <div className="text-sm text-gray-600">Логин: {service.login}</div>}
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="font-medium text-gray-900 text-base">
                                {service.price.toLocaleString('ru-RU', { minimumFractionDigits: 2 })} ₽/мес
                              </div>
                              <div className="text-sm text-gray-600">{service.status}</div>
                            </div>
                            <button
                              onClick={() => toggleServiceSettings(service.id.toString())}
                              className="flex items-center text-skynet-blue hover:text-skynet-blue-dark text-sm font-medium"
                            >
                              <Settings className="h-4 w-4 mr-1" />
                              <ChevronDown className="h-4 w-4" />
                            </button>
                          </div>
                        </div>

                        {/* Desktop layout */}
                        <div className="hidden lg:block p-4 grid grid-cols-12 gap-4 items-center">
                          <div className="col-span-3 flex items-center">
                            <span className="text-2xl mr-3">{service.icon}</span>
                            <span className="font-medium text-gray-900 text-base">{service.name}</span>
                          </div>
                          
                          <div className="col-span-3 text-sm text-gray-600">
                            {service.speed && <div>Скорость: {service.speed}</div>}
                            {service.hasStaticIP && <div className="text-blue-600">+1ip</div>}
                            {service.login && <div>Логин: {service.login}</div>}
                          </div>
                          
                          <div className="col-span-2 text-right">
                            <div className="font-medium text-gray-900 text-base">
                              {service.price.toLocaleString('ru-RU', { minimumFractionDigits: 2 })} ₽/мес
                            </div>
                          </div>
                          
                          <div className="col-span-2 text-sm text-gray-600">
                            {service.status}
                          </div>
                          
                          <div className="col-span-2 text-right">
                            <button
                              onClick={() => toggleServiceSettings(service.id.toString())}
                              className="flex items-center text-skynet-blue hover:text-skynet-blue-dark text-sm font-medium"
                            >
                              <Settings className="h-4 w-4 mr-1" />
                              Настройки
                              <ChevronDown className="h-4 w-4 ml-1" />
                            </button>
                          </div>
                        </div>
                        
                        {/* Раскрываемый блок настроек */}
                        {openServiceSettings[service.id.toString()] && (
                          <div className="px-4 pb-4 bg-gray-50">
                            <div className="bg-white rounded-lg p-4 border border-gray-200">
                              <h4 className="font-medium text-gray-900 mb-3 text-base">
                                {service.hasStaticIP ? 'Технические параметры (Статический IP)' : 'Технические параметры'}
                              </h4>
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-base">
                                {service.hasStaticIP ? (
                                  <>
                                    <div>
                                      <p className="text-gray-500">IP-адрес:</p>
                                      <p className="font-medium break-all">{service.ipAddress}</p>
                                    </div>
                                    <div>
                                      <p className="text-gray-500">Маска подсети:</p>
                                      <p className="font-medium break-all">{service.subnetMask}</p>
                                    </div>
                                    <div>
                                      <p className="text-gray-500">Основной шлюз:</p>
                                      <p className="font-medium break-all">{service.gateway}</p>
                                    </div>
                                  </>
                                ) : (
                                  <div>
                                    <p className="text-gray-500">Тип подключения:</p>
                                    <p className="font-medium">Динамический IP</p>
                                  </div>
                                )}
                                {service.speedKbps && (
                                  <div>
                                    <p className="text-gray-500">Скорость (вход/исход):</p>
                                    <p className="font-medium">{service.speedKbps} Кбит/с</p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
