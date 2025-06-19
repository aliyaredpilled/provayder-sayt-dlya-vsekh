
interface Service {
  id: number;
  name: string;
  price: number;
  speed?: string;
  networkName?: string;
  status: string;
  icon: any;
  type: string;
}

interface Address {
  id: string;
  address: string;
  services: Service[];
}

interface ServicesTabProps {
  userData: {
    addresses: Address[];
  };
}

const ServicesTab = ({ userData }: ServicesTabProps) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Мои услуги</h1>
      <div className="space-y-6">
        {userData.addresses.map(address => (
          <div key={address.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">{address.address}</h2>
            <div className="space-y-4">
              {address.services.map(service => (
                <div key={service.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className={`p-3 rounded-lg mr-4 ${
                        service.type === 'internet' ? 'bg-skynet-blue/10 text-skynet-blue' :
                        service.type === 'wifi' ? 'bg-skynet-orange/10 text-skynet-orange' :
                        'bg-green-500/10 text-green-500'
                      }`}>
                        <service.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                        <p className="text-gray-500">
                          {service.speed ? `Скорость: ${service.speed}` : 
                          service.networkName ? `Сеть: ${service.networkName}` : ''}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">{service.price} ₽</p>
                      <p className="text-sm text-gray-500">ежемесячно</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 border-t border-gray-100 pt-6 flex flex-wrap gap-3">
                    <button className="bg-skynet-blue hover:bg-skynet-blue-dark text-white px-4 py-2 rounded-lg transition-colors shadow-sm">
                      Управление услугой
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                      Сменить тариф
                    </button>
                    <button className="border border-red-300 text-red-600 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors ml-auto">
                      Отключить
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesTab;
