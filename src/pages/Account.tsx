
import { useState } from 'react';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Wifi } from 'lucide-react';
import AccountSidebar from "@/components/account/AccountSidebar";
import DashboardTab from "@/components/account/DashboardTab";
import SurveillanceTab from "@/components/account/SurveillanceTab";
import ServicesTab from "@/components/account/ServicesTab";
import PaymentsTab from "@/components/account/PaymentsTab";
import NotificationsTab from "@/components/account/NotificationsTab";
import SettingsTab from "@/components/account/SettingsTab";

const Account = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [openAddresses, setOpenAddresses] = useState<{[key: string]: boolean}>({});
  const [openServiceDetails, setOpenServiceDetails] = useState<{[key: string]: boolean}>({});
  
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

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <DashboardTab
            userData={userData}
            openAddresses={openAddresses}
            openServiceDetails={openServiceDetails}
            toggleAddress={toggleAddress}
            toggleServiceDetails={toggleServiceDetails}
            getTotalMonthlyPayment={getTotalMonthlyPayment}
          />
        );
      case 'surveillance':
        return <SurveillanceTab userData={userData} />;
      case 'services':
        return <ServicesTab userData={userData} />;
      case 'payments':
        return <PaymentsTab userData={userData} getTotalMonthlyPayment={getTotalMonthlyPayment} />;
      case 'notifications':
        return <NotificationsTab userData={userData} />;
      case 'settings':
        return <SettingsTab />;
      default:
        return <div>История операций - В разработке</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <AccountSidebar
                userData={userData}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              
              <div className="flex-1 p-6">
                {renderTabContent()}
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
