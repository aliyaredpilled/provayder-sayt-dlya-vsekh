
import { Home, ChevronDown, ChevronUp, MoreHorizontal } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface Service {
  id: number;
  name: string;
  price: number;
  speed?: string;
  networkName?: string;
  status: string;
  icon: any;
  type: string;
  connectionType?: string;
  ipAddress?: string;
  subnetMask?: string;
  gateway?: string;
  dns?: string;
  uptime?: string;
}

interface Address {
  id: string;
  address: string;
  services: Service[];
}

interface DashboardTabProps {
  userData: {
    balance: number;
    addresses: Address[];
  };
  openAddresses: { [key: string]: boolean };
  openServiceDetails: { [key: string]: boolean };
  toggleAddress: (addressId: string) => void;
  toggleServiceDetails: (serviceId: string) => void;
  getTotalMonthlyPayment: () => number;
}

const DashboardTab = ({ 
  userData, 
  openAddresses, 
  openServiceDetails, 
  toggleAddress, 
  toggleServiceDetails, 
  getTotalMonthlyPayment 
}: DashboardTabProps) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Личный кабинет</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <p className="text-sm text-gray-500 mb-1">Текущий баланс</p>
          <p className="text-3xl font-bold text-gray-900">{userData.balance} ₽</p>
          <button className="mt-4 w-full bg-skynet-orange hover:bg-skynet-orange-bright text-white font-medium py-2 rounded-lg shadow-sm transition-all">
            Пополнить счет
          </button>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <p className="text-sm text-gray-500 mb-1">Следующее списание</p>
          <p className="text-3xl font-bold text-gray-900">{getTotalMonthlyPayment()} ₽</p>
          <p className="mt-2 text-sm text-gray-500">01.07.2023</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <p className="text-sm text-gray-500 mb-1">Количество адресов</p>
          <p className="text-3xl font-bold text-gray-900">{userData.addresses.length}</p>
          <p className="mt-2 text-sm text-gray-500">подключений</p>
        </div>
      </div>
      
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Мои адреса и услуги</h2>
      
      <div className="space-y-4">
        {userData.addresses.map(address => (
          <div key={address.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <Collapsible
              open={openAddresses[address.id] !== false}
              onOpenChange={() => toggleAddress(address.id)}
            >
              <CollapsibleTrigger className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="flex items-center">
                  <Home className="h-5 w-5 text-skynet-blue mr-3" />
                  <span className="font-medium text-gray-900">{address.address}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 mr-2">
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
                      <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center flex-1">
                          <div className={`p-2 rounded-lg mr-4 ${
                            service.type === 'internet' ? 'bg-skynet-blue/10 text-skynet-blue' :
                            service.type === 'wifi' ? 'bg-skynet-orange/10 text-skynet-orange' :
                            'bg-green-500/10 text-green-500'
                          }`}>
                            <service.icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{service.name}</p>
                            <p className="text-sm text-gray-500">
                              {service.speed ? `Скорость: ${service.speed}` : 
                               service.networkName ? `Сеть: ${service.networkName}` : ''}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="text-right mr-4">
                            <p className="font-medium text-gray-900">{service.price} ₽/мес</p>
                            <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                              Активно
                            </span>
                          </div>
                          {service.type === 'internet' && (
                            <button
                              onClick={() => toggleServiceDetails(service.id.toString())}
                              className="flex items-center text-skynet-blue hover:text-skynet-blue-dark text-sm font-medium"
                            >
                              Подробнее
                              <MoreHorizontal className="h-4 w-4 ml-1" />
                            </button>
                          )}
                        </div>
                      </div>
                      
                      {service.type === 'internet' && openServiceDetails[service.id.toString()] && (
                        <div className="px-4 pb-4 bg-gray-50">
                          <div className="bg-white rounded-lg p-4 border border-gray-200">
                            <h4 className="font-medium text-gray-900 mb-3">Детали подключения</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                              <div>
                                <p className="text-gray-500">Тип подключения:</p>
                                <p className="font-medium">{service.connectionType}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">IP-адрес:</p>
                                <p className="font-medium">{service.ipAddress}</p>
                              </div>
                              {service.subnetMask && (
                                <>
                                  <div>
                                    <p className="text-gray-500">Маска подсети:</p>
                                    <p className="font-medium">{service.subnetMask}</p>
                                  </div>
                                  <div>
                                    <p className="text-gray-500">Основной шлюз:</p>
                                    <p className="font-medium">{service.gateway}</p>
                                  </div>
                                  <div>
                                    <p className="text-gray-500">DNS серверы:</p>
                                    <p className="font-medium">{service.dns}</p>
                                  </div>
                                </>
                              )}
                              <div>
                                <p className="text-gray-500">Статус линии:</p>
                                <p className="font-medium flex items-center">
                                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                  Онлайн (Uptime: {service.uptime})
                                </p>
                              </div>
                            </div>
                            <div className="mt-4 flex gap-2">
                              <button className="bg-skynet-blue hover:bg-skynet-blue-dark text-white px-4 py-2 rounded-lg text-sm transition-colors">
                                Статистика трафика
                              </button>
                              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 text-sm transition-colors">
                                Настройки
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  
                  <div className="p-4 bg-gray-50 border-t border-gray-100">
                    <button className="bg-skynet-blue hover:bg-skynet-blue-dark text-white px-4 py-2 rounded-lg transition-colors shadow-sm">
                      Управлять услугами по адресу
                    </button>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardTab;
