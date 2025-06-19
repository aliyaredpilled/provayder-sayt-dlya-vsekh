
import { User, Home, CreditCard, Receipt, FileText, Video, LogOut } from 'lucide-react';

interface UserData {
  name: string;
  userType: 'individual' | 'company';
  contractNumber: string;
  login: string;
}

interface AccountSidebarProps {
  userData: UserData;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const AccountSidebar = ({ userData, activeTab, setActiveTab }: AccountSidebarProps) => {
  const menuItems = [
    { id: 'main', icon: Home, label: 'Главная' },
    { id: 'payments-history', icon: Receipt, label: 'Платежи' },
    { id: 'payment', icon: CreditCard, label: 'Оплата' },
    { id: 'personal-data', icon: User, label: 'Личные данные' },
    { id: 'surveillance', icon: Video, label: 'Видеонаблюдение' },
    { id: 'documents', icon: FileText, label: 'Документы' }
  ];

  return (
    <div className="w-80 bg-skynet-blue text-white flex flex-col h-full min-h-full">
      {/* Блок информации о пользователе */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-start">
          <div className="bg-white/10 rounded-full p-3 mr-4 flex-shrink-0">
            <User className="h-6 w-6" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-medium text-lg leading-tight break-words">{userData.name}</p>
            <p className="text-sm text-white/70 mt-1">
              Договор: {userData.contractNumber}
            </p>
            <p className="text-sm text-white/70">
              Логин: {userData.login}
            </p>
          </div>
        </div>
      </div>
      
      {/* Меню навигации */}
      <nav className="p-4 flex-1">
        <ul className="space-y-1">
          {menuItems.map(item => (
            <li key={item.id}>
              <button 
                onClick={() => setActiveTab(item.id)} 
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors text-left ${
                  activeTab === item.id 
                    ? 'bg-white/10 text-white' 
                    : 'hover:bg-white/5 text-white/90'
                }`}
              >
                <item.icon className="h-5 w-5 mr-3 flex-shrink-0" />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Кнопка выхода */}
      <div className="p-4 border-t border-white/10">
        <button className="w-full flex items-center px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-colors">
          <LogOut className="h-5 w-5 mr-3" />
          <span>Выход</span>
        </button>
      </div>
    </div>
  );
};

export default AccountSidebar;
