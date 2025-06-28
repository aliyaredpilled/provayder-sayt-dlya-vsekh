import { useState, useEffect } from 'react';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AccountSidebar from "@/components/account/AccountSidebar";
import MainDashboard from "@/components/account/MainDashboard";
import PaymentsHistory from "@/components/account/PaymentsHistory";
import PaymentForm from "@/components/account/PaymentForm";
import PersonalData from "@/components/account/PersonalData";
import SurveillanceTab from "@/components/account/SurveillanceTab";
import DocumentsTab from "@/components/account/DocumentsTab";
import { Menu, X } from 'lucide-react';

const Account = () => {
  const [activeTab, setActiveTab] = useState('main');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  useEffect(() => {
    const handleShowPaymentTab = () => {
      setActiveTab('payment');
    };
    
    window.addEventListener('showPaymentTab', handleShowPaymentTab);
    
    return () => {
      window.removeEventListener('showPaymentTab', handleShowPaymentTab);
    };
  }, []);
  
  const userData = {
    name: 'Хузяшева Дильбар',
    userType: 'individual' as const,
    contractNumber: '39421',
    login: 'TimurR',
    balance: 10750.00,
    addresses: [
      {
        id: 'addr1',
        address: 'г. Казань, ул. Маршала Чуйкова, д. 62',
        services: [
          {
            id: 1,
            name: 'Интернет',
            icon: '💻',
            speed: '100M/100M',
            hasStaticIP: true,
            login: 'user_xxl',
            price: 7507.50,
            status: 'Активен до 30.06.2025',
            ipAddress: '91.225.78.246',
            subnetMask: '255.255.252.0',
            gateway: '91.225.76.1',
            speedKbps: '102400/102400'
          },
          {
            id: 2,
            name: 'IP телефония',
            icon: '📞',
            login: 'phone_user',
            price: 577.50,
            status: 'Активен до 30.06.2025'
          }
        ]
      },
      {
        id: 'addr2',
        address: 'г. Казань, СНТ "Дружба-2", уч. 125',
        services: [
          {
            id: 3,
            name: 'Смотрёшка',
            icon: '📺',
            price: 0.00,
            status: 'Активен до 30.06.2025'
          }
        ]
      }
    ],
    payments: [
      { id: 1, date: '15.06.2023 14:30', amount: 1155.00, type: 'Пополнение', description: 'Пополнение через Сбербанк Онлайн' },
      { id: 2, date: '01.06.2023 00:01', amount: -8085.00, type: 'Списание', description: 'Списание за Интернет' },
      { id: 3, date: '01.06.2023 00:01', amount: -577.50, type: 'Списание', description: 'Списание за IP телефонию' }
    ],
    personalData: {
      fullName: 'Хузяшева Дильбар Тимуровна',
      phone: '+7 (843) 555-0123',
      email: 'dilbar@example.com',
      address: 'г. Казань, ул. Пушкина, д. 10, кв. 25'
    },
    cameras: [
      { 
        id: 'cam1', 
        name: 'Подъезд 1, этаж 3', 
        status: 'online',
        type: 'private'
      },
      { 
        id: 'cam2', 
        name: 'Парковка, место 42', 
        status: 'offline',
        type: 'private'
      },
      { 
        id: 'cam3', 
        name: 'Главный вход', 
        status: 'online',
        type: 'public'
      },
      { 
        id: 'cam4', 
        name: 'Детская площадка', 
        status: 'online',
        type: 'public'
      }
    ]
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'main':
        return <MainDashboard userData={userData} />;
      case 'payments-history':
        return <PaymentsHistory userData={userData} />;
      case 'payment':
        return <PaymentForm userData={userData} />;
      case 'personal-data':
        return <PersonalData userData={userData} />;
      case 'surveillance':
        return <SurveillanceTab userData={userData} />;
      case 'documents':
        return <DocumentsTab />;
      default:
        return <MainDashboard userData={userData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <NavBar />
      
      <div className="pt-24 lg:pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="flex min-h-[600px] relative">
              {/* Mobile menu button */}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden fixed top-28 left-4 z-50 bg-skynet-blue text-white p-3 rounded-lg shadow-lg"
              >
                {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>

              {/* Mobile overlay */}
              {sidebarOpen && (
                <div 
                  className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
                  onClick={() => setSidebarOpen(false)}
                />
              )}

              {/* Sidebar */}
              <div className={`
                fixed lg:relative top-0 lg:top-auto bottom-0 lg:bottom-auto left-0 z-40 lg:z-auto
                transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                lg:translate-x-0 transition-transform duration-300 ease-in-out
                lg:block w-80 lg:w-auto min-h-full lg:min-h-0
              `}>
                <AccountSidebar
                  userData={userData}
                  activeTab={activeTab}
                  setActiveTab={(tab) => {
                    setActiveTab(tab);
                    setSidebarOpen(false);
                  }}
                />
              </div>
              
              {/* Main content */}
              <div className="flex-1 p-4 lg:p-6 bg-gray-50 ml-0 lg:ml-0">
                {renderContent()}
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
