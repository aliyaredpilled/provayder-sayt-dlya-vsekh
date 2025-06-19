
import { User, Home, ClipboardList, CreditCard, Settings, LogOut, Bell, Wifi, Video } from 'lucide-react';

interface AccountSidebarProps {
  userData: {
    name: string;
    accountNumber: string;
    notifications: Array<{ isRead: boolean }>;
  };
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const AccountSidebar = ({ userData, activeTab, setActiveTab }: AccountSidebarProps) => {
  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Главная' },
    { id: 'services', icon: Wifi, label: 'Мои услуги' },
    { id: 'payments', icon: CreditCard, label: 'Платежи' },
    { id: 'surveillance', icon: Video, label: 'Видеонаблюдение' },
    { id: 'notifications', icon: Bell, label: 'Уведомления' },
    { id: 'history', icon: ClipboardList, label: 'История операций' },
    { id: 'settings', icon: Settings, label: 'Настройки' }
  ];

  return (
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
          {menuItems.map(item => (
            <li key={item.id}>
              <button 
                onClick={() => setActiveTab(item.id)} 
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                  activeTab === item.id 
                    ? 'bg-white/10' 
                    : 'hover:bg-white/5'
                }`}
              >
                <item.icon className="h-5 w-5 mr-3" />
                <span>{item.label}</span>
                {item.id === 'notifications' && userData.notifications.some(n => !n.isRead) && (
                  <span className="ml-auto bg-skynet-orange text-white text-xs px-2 py-1 rounded-full">
                    {userData.notifications.filter(n => !n.isRead).length}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
        
        <div className="pt-4 mt-6 border-t border-white/10">
          <button className="w-full flex items-center px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-colors">
            <LogOut className="h-5 w-5 mr-3" />
            <span>Выйти</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default AccountSidebar;
