import { useState } from 'react';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { User, Home, ClipboardList, CreditCard, Settings, LogOut, Bell, Eye, EyeOff, Wifi, Tv, Phone, Video, ChevronDown, ChevronUp, MoreHorizontal } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Account = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [openAddresses, setOpenAddresses] = useState<{[key: string]: boolean}>({});
  const [openServiceDetails, setOpenServiceDetails] = useState<{[key: string]: boolean}>({});
  
  // Расширенные данные пользователя с несколькими адресами
  const userData = {
    name: 'Иванов Иван',
    balance: 1250.75,
    accountNumber: '2987465',
    addresses: [
      {
        id: 'addr1',
        address: 'г. Казань, ул. Пушкина, д. 3',
        services: [
          { 
            id: 1, 
            name: 'Интернет "Профсоюзная"', 
            price: 750.50, 
            speed: '30/30 Мбит/с', 
            status: 'active', 
            icon: Wifi,
            type: 'internet',
            connectionType: 'Статический IP',
            ipAddress: '91.123.45.67',
            subnetMask: '255.255.255.0',
            gateway: '91.123.45.1',
            dns: '8.8.8.8, 1.1.1.1',
            uptime: '3 д 14 ч'
          },
          { 
            id: 2, 
            name: 'Wi-Fi Social Links', 
            price: 578, 
            networkName: 'nabinvest_pushkina_3', 
            status: 'active', 
            icon: Wifi,
            type: 'wifi'
          }
        ]
      },
      {
        id: 'addr2',
        address: 'г. Казань, ул. Калинина, д. 62',
        services: [
          { 
            id: 3, 
            name: 'Интернет "Калинина-1"', 
            price: 5775.00, 
            speed: '30/30 Мбит/с', 
            status: 'active', 
            icon: Wifi,
            type: 'internet',
            connectionType: 'Динамический IP',
            ipAddress: '95.100.200.30',
            uptime: '1 д 8 ч'
          },
          { 
            id: 4, 
            name: 'Интернет "Калинина-2"', 
            price: 8085.00, 
            speed: '50/50 Мбит/с', 
            status: 'active', 
            icon: Wifi,
            type: 'internet',
            connectionType: 'Статический IP',
            ipAddress: '91.145.78.123',
            subnetMask: '255.255.255.0',
            gateway: '91.145.78.1',
            dns: '8.8.8.8, 1.1.1.1',
            uptime: '7 д 2 ч'
          }
        ]
      }
    ],
    payments: [
      { id: 101, date: '15.06.2023', amount: 1650, method: 'Банковская карта' },
      { id: 102, date: '15.05.2023', amount: 1650, method: 'Банковская карта' },
      { id: 103, date: '15.04.2023', amount: 1650, method: 'Банковская карта' }
    ],
    notifications: [
      { id: 201, date: '20.06.2023', title: 'Профилактические работы', message: 'Уважаемые абоненты! 25 июня с 02:00 до 04:00 будут проводиться технические работы. Возможны кратковременные перерывы в предоставлении услуг.', isRead: false },
      { id: 202, date: '10.06.2023', title: 'Изменение тарифов', message: 'С 1 июля 2023 года изменяются условия тарифного плана "Быстрый". Подробности в личном кабинете.', isRead: true }
    ],
    cameras: [
      { id: 'cam1', name: 'Подъезд 1, этаж 3', type: 'private', status: 'online', preview: '/lovable-uploads/camera1.jpg' },
      { id: 'cam2', name: 'Парковка, место 42', type: 'private', status: 'offline', preview: '/lovable-uploads/camera2.jpg' },
      { id: 'cam3', name: 'Двор, детская площадка', type: 'public', status: 'online', preview: '/lovable-uploads/camera3.jpg' }
    ]
  };

  const toggleAddress = (addressId: string) => {
    setOpenAddresses(prev => ({
      ...prev,
      [addressId]: !prev[addressId]
    }));
  };

  const toggleServiceDetails = (serviceId: string) => {
    setOpenServiceDetails(prev => ({
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
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="md:flex">
              {/* Боковое меню */}
              <div className="md:w-64 bg-skynet-blue text-white">
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-center">
                    <div className="bg-white/10 rounded-full p-3 mr-3">
                      <User className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium">{userData.name}</p>
                      <p className="text-sm text-white/70">Лицевой счёт: {userData.accountNumber}</p>
                    </div>
                  </div>
                </div>
                
                <nav className="p-4">
                  <ul className="space-y-1">
                    <li>
                      <button 
                        onClick={() => setActiveTab('dashboard')} 
                        className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                          activeTab === 'dashboard' 
                            ? 'bg-white/10' 
                            : 'hover:bg-white/5'
                        }`}
                      >
                        <Home className="h-5 w-5 mr-3" />
                        <span>Главная</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('services')} 
                        className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                          activeTab === 'services' 
                            ? 'bg-white/10' 
                            : 'hover:bg-white/5'
                        }`}
                      >
                        <Wifi className="h-5 w-5 mr-3" />
                        <span>Мои услуги</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('payments')} 
                        className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                          activeTab === 'payments' 
                            ? 'bg-white/10' 
                            : 'hover:bg-white/5'
                        }`}
                      >
                        <CreditCard className="h-5 w-5 mr-3" />
                        <span>Платежи</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('surveillance')} 
                        className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                          activeTab === 'surveillance' 
                            ? 'bg-white/10' 
                            : 'hover:bg-white/5'
                        }`}
                      >
                        <Video className="h-5 w-5 mr-3" />
                        <span>Видеонаблюдение</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('notifications')} 
                        className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                          activeTab === 'notifications' 
                            ? 'bg-white/10' 
                            : 'hover:bg-white/5'
                        }`}
                      >
                        <Bell className="h-5 w-5 mr-3" />
                        <span>Уведомления</span>
                        {userData.notifications.some(n => !n.isRead) && (
                          <span className="ml-auto bg-skynet-orange text-white text-xs px-2 py-1 rounded-full">
                            {userData.notifications.filter(n => !n.isRead).length}
                          </span>
                        )}
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('history')} 
                        className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                          activeTab === 'history' 
                            ? 'bg-white/10' 
                            : 'hover:bg-white/5'
                        }`}
                      >
                        <ClipboardList className="h-5 w-5 mr-3" />
                        <span>История операций</span>
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setActiveTab('settings')} 
                        className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                          activeTab === 'settings' 
                            ? 'bg-white/10' 
                            : 'hover:bg-white/5'
                        }`}
                      >
                        <Settings className="h-5 w-5 mr-3" />
                        <span>Настройки</span>
                      </button>
                    </li>
                  </ul>
                  
                  <div className="pt-4 mt-6 border-t border-white/10">
                    <button className="w-full flex items-center px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-colors">
                      <LogOut className="h-5 w-5 mr-3" />
                      <span>Выйти</span>
                    </button>
                  </div>
                </nav>
              </div>
              
              {/* Основное содержимое */}
              <div className="flex-1 p-6">
                {activeTab === 'dashboard' && (
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
                                    
                                    {/* Детальная информация для интернет-услуг */}
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
                )}

                {activeTab === 'surveillance' && (
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h1 className="text-2xl font-bold text-gray-900">Видеонаблюдение</h1>
                      <div className="flex gap-3">
                        <button className="bg-skynet-orange hover:bg-skynet-orange-bright text-white px-4 py-2 rounded-lg transition-colors shadow-sm">
                          ➕ Добавить камеру
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                          📂 Смотреть архив
                        </button>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                      <div className="border-b border-gray-200">
                        <nav className="flex">
                          <button className="px-6 py-4 font-medium text-skynet-blue border-b-2 border-skynet-blue">
                            ПРИВАТНЫЕ
                          </button>
                          <button className="px-6 py-4 font-medium text-gray-500 hover:text-gray-700">
                            ПУБЛИЧНЫЕ
                          </button>
                        </nav>
                      </div>
                      
                      <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {userData.cameras.filter(camera => camera.type === 'private').map(camera => (
                            <div key={camera.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                                <Video className="h-12 w-12 text-gray-400" />
                              </div>
                              <div className="p-4">
                                <h3 className="font-medium text-gray-900 mb-2">{camera.name}</h3>
                                <div className="flex items-center justify-between">
                                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                    camera.status === 'online' 
                                      ? 'bg-green-100 text-green-800' 
                                      : 'bg-red-100 text-red-800'
                                  }`}>
                                    {camera.status === 'online' ? '🟢 Онлайн' : '🔴 Офлайн'}
                                  </span>
                                </div>
                                <div className="mt-4 flex gap-2">
                                  <button className="flex-1 bg-skynet-blue hover:bg-skynet-blue-dark text-white px-3 py-2 rounded text-sm transition-colors">
                                    Смотреть
                                  </button>
                                  <button className="border border-gray-300 text-gray-700 px-3 py-2 rounded hover:bg-gray-50 text-sm transition-colors">
                                    Настройки
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        {userData.cameras.filter(camera => camera.type === 'private').length === 0 && (
                          <div className="text-center py-12">
                            <Video className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                            <h2 className="text-xl font-medium text-gray-900 mb-2">Нет камер</h2>
                            <p className="text-gray-600 mb-4">У вас пока нет подключенных камер видеонаблюдения</p>
                            <button className="bg-skynet-orange hover:bg-skynet-orange-bright text-white px-6 py-3 rounded-lg shadow-sm transition-colors">
                              Подключить камеру
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'services' && (
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
                )}
                
                {activeTab === 'payments' && (
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-6">Оплата услуг</h1>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                        <p className="text-sm text-gray-500 mb-1">Текущий баланс</p>
                        <p className="text-3xl font-bold text-gray-900">{userData.balance} ₽</p>
                        <div className="mt-2 flex items-center text-sm">
                          <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                            userData.balance > 0 ? 'bg-green-500' : 'bg-red-500'
                          }`}></span>
                          <span className={userData.balance > 0 ? 'text-green-700' : 'text-red-700'}>
                            {userData.balance > 0 ? 'Положительный баланс' : 'Отрицательный баланс'}
                          </span>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                        <p className="text-sm text-gray-500 mb-1">Рекомендуемый платеж</p>
                        <p className="text-3xl font-bold text-gray-900">{getTotalMonthlyPayment()} ₽</p>
                        <p className="mt-2 text-sm text-gray-500">Списание произойдет 01.07.2023</p>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                      <h2 className="text-xl font-semibold text-gray-900 mb-4">Пополнить счет</h2>
                      
                      <form className="space-y-6">
                        <div>
                          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                            Сумма пополнения
                          </label>
                          <div className="mt-1 relative rounded-md shadow-sm">
                            <input 
                              type="number" 
                              name="amount" 
                              id="amount" 
                              className="block w-full pr-12 sm:text-sm border-gray-300 rounded-md focus:ring-skynet-blue focus:border-skynet-blue" 
                              placeholder="0.00"
                              defaultValue={getTotalMonthlyPayment()}
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                              <span className="text-gray-500 sm:text-sm">₽</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Способ оплаты
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-skynet-blue transition-colors">
                              <div className="flex items-center">
                                <input 
                                  id="card" 
                                  name="payment-method" 
                                  type="radio" 
                                  defaultChecked
                                  className="h-4 w-4 text-skynet-blue focus:ring-skynet-blue border-gray-300" 
                                />
                                <label htmlFor="card" className="ml-3 block text-sm font-medium text-gray-700">
                                  Банковская карта
                                </label>
                              </div>
                            </div>
                            
                            <div className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-skynet-blue transition-colors">
                              <div className="flex items-center">
                                <input 
                                  id="online" 
                                  name="payment-method" 
                                  type="radio" 
                                  className="h-4 w-4 text-skynet-blue focus:ring-skynet-blue border-gray-300" 
                                />
                                <label htmlFor="online" className="ml-3 block text-sm font-medium text-gray-700">
                                  Онлайн-банкинг
                                </label>
                              </div>
                            </div>
                            
                            <div className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-skynet-blue transition-colors">
                              <div className="flex items-center">
                                <input 
                                  id="wallet" 
                                  name="payment-method" 
                                  type="radio" 
                                  className="h-4 w-4 text-skynet-blue focus:ring-skynet-blue border-gray-300" 
                                />
                                <label htmlFor="wallet" className="ml-3 block text-sm font-medium text-gray-700">
                                  Электронный кошелек
                                </label>
                              </div>
                            </div>
                            
                            <div className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-skynet-blue transition-colors">
                              <div className="flex items-center">
                                <input 
                                  id="terminal" 
                                  name="payment-method" 
                                  type="radio" 
                                  className="h-4 w-4 text-skynet-blue focus:ring-skynet-blue border-gray-300" 
                                />
                                <label htmlFor="terminal" className="ml-3 block text-sm font-medium text-gray-700">
                                  Терминал оплаты
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="save-card"
                              name="save-card"
                              type="checkbox"
                              className="h-4 w-4 text-skynet-blue focus:ring-skynet-blue border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="save-card" className="text-gray-600">
                              Сохранить карту для будущих платежей
                            </label>
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <button
                            type="submit"
                            className="bg-skynet-orange hover:bg-skynet-orange-bright text-white font-medium px-8 py-3 rounded-lg shadow-md transition-all"
                          >
                            Оплатить
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
                
                {activeTab === 'notifications' && (
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-6">Уведомления</h1>
                    
                    <div className="space-y-4">
                      {userData.notifications.map(notification => (
                        <div 
                          key={notification.id} 
                          className={`bg-white rounded-xl shadow-sm border p-6 ${
                            notification.isRead ? 'border-gray-100' : 'border-skynet-blue'
                          }`}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h2 className={`text-lg font-semibold ${
                                notification.isRead ? 'text-gray-900' : 'text-skynet-blue'
                              }`}>
                                {notification.title}
                              </h2>
                              <p className="text-sm text-gray-500 mt-1">{notification.date}</p>
                            </div>
                            {!notification.isRead && (
                              <span className="bg-skynet-blue text-white text-xs px-2 py-1 rounded-full">
                                Новое
                              </span>
                            )}
                          </div>
                          <p className="mt-4 text-gray-600">{notification.message}</p>
                        </div>
                      ))}
                    </div>
                    
                    {userData.notifications.length === 0 && (
                      <div className="text-center py-12">
                        <Bell className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                        <h2 className="text-xl font-medium text-gray-900 mb-2">Нет новых уведомлений</h2>
                        <p className="text-gray-600">У вас пока нет непрочитанных уведомлений</p>
                      </div>
                    )}
                  </div>
                )}
                
                {activeTab === 'settings' && (
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-6">Настройки профиля</h1>
                    
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                      <h2 className="text-xl font-semibold text-gray-900 mb-6">Личные данные</h2>
                      
                      <form className="space-y-6">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                          <div>
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                              Имя
                            </label>
                            <input 
                              type="text" 
                              id="first-name" 
                              className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent" 
                              defaultValue="Иван"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                              Фамилия
                            </label>
                            <input 
                              type="text" 
                              id="last-name" 
                              className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent" 
                              defaultValue="Иванов"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                          </label>
                          <input 
                            type="email" 
                            id="email" 
                            className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent" 
                            defaultValue="ivan.ivanov@example.com"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Телефон
                          </label>
                          <input 
                            type="tel" 
                            id="phone" 
                            className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent" 
                            defaultValue="+7 (999) 123-45-67"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                            Основной адрес
                          </label>
                          <input 
                            type="text" 
                            id="address" 
                            className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent" 
                            defaultValue="г. Казань, ул. Пушкина, д. 3"
                          />
                        </div>
                        
                        <div className="flex justify-end">
                          <button
                            type="submit"
                            className="bg-skynet-blue hover:bg-skynet-blue-dark text-white font-medium px-6 py-2 rounded-lg shadow-md transition-all"
                          >
                            Сохранить изменения
                          </button>
                        </div>
                      </form>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                      <h2 className="text-xl font-semibold text-gray-900 mb-6">Изменить пароль</h2>
                      
                      <form className="space-y-6">
                        <div>
                          <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 mb-1">
                            Текущий пароль
                          </label>
                          <div className="relative">
                            <input 
                              type={showPassword ? 'text' : 'password'} 
                              id="current-password" 
                              className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent" 
                              placeholder="••••••••"
                            />
                            <button
                              type="button"
                              className="absolute inset-y-0 right-0 pr-3 flex items-center"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff className="h-5 w-5 text-gray-400" />
                              ) : (
                                <Eye className="h-5 w-5 text-gray-400" />
                              )}
                            </button>
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">
                            Новый пароль
                          </label>
                          <div className="relative">
                            <input 
                              type={showPassword ? 'text' : 'password'} 
                              id="new-password" 
                              className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent" 
                              placeholder="••••••••"
                            />
                            <button
                              type="button"
                              className="absolute inset-y-0 right-0 pr-3 flex items-center"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff className="h-5 w-5 text-gray-400" />
                              ) : (
                                <Eye className="h-5 w-5 text-gray-400" />
                              )}
                            </button>
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                            Подтверждение пароля
                          </label>
                          <div className="relative">
                            <input 
                              type={showPassword ? 'text' : 'password'} 
                              id="confirm-password" 
                              className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent" 
                              placeholder="••••••••"
                            />
                            <button
                              type="button"
                              className="absolute inset-y-0 right-0 pr-3 flex items-center"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <EyeOff className="h-5 w-5 text-gray-400" />
                              ) : (
                                <Eye className="h-5 w-5 text-gray-400" />
                              )}
                            </button>
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <button
                            type="submit"
                            className="bg-skynet-blue hover:bg-skynet-blue-dark text-white font-medium px-6 py-2 rounded-lg shadow-md transition-all"
                          >
                            Изменить пароль
                          </button>
                        </div>
                      </form>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                      <h2 className="text-xl font-semibold text-gray-900 mb-6">Настройки уведомлений</h2>
                      
                      <form className="space-y-6">
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="email-notifications"
                                name="email-notifications"
                                type="checkbox"
                                defaultChecked
                                className="h-4 w-4 text-skynet-blue focus:ring-skynet-blue border-gray-300 rounded"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="email-notifications" className="font-medium text-gray-700">
                                Email-уведомления
                              </label>
                              <p className="text-gray-500">Получать уведомления на электронную почту</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="sms-notifications"
                                name="sms-notifications"
                                type="checkbox"
                                defaultChecked
                                className="h-4 w-4 text-skynet-blue focus:ring-skynet-blue border-gray-300 rounded"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="sms-notifications" className="font-medium text-gray-700">
                                SMS-уведомления
                              </label>
                              <p className="text-gray-500">Получать уведомления по SMS</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="payment-notifications"
                                name="payment-notifications"
                                type="checkbox"
                                defaultChecked
                                className="h-4 w-4 text-skynet-blue focus:ring-skynet-blue border-gray-300 rounded"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="payment-notifications" className="font-medium text-gray-700">
                                Платежные уведомления
                              </label>
                              <p className="text-gray-500">Уведомления о платежах и списаниях</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="promo-notifications"
                                name="promo-notifications"
                                type="checkbox"
                                className="h-4 w-4 text-skynet-blue focus:ring-skynet-blue border-gray-300 rounded"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label htmlFor="promo-notifications" className="font-medium text-gray-700">
                                Рекламные уведомления
                              </label>
                              <p className="text-gray-500">Акции, спецпредложения и новости компании</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <button
                            type="submit"
                            className="bg-skynet-blue hover:bg-skynet-blue-dark text-white font-medium px-6 py-2 rounded-lg shadow-md transition-all"
                          >
                            Сохранить настройки
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Account;
