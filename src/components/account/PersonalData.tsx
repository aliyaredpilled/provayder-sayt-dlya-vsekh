
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface PersonalDataProps {
  userData: {
    userType: 'individual' | 'company';
    personalData: any;
  };
}

const PersonalData = ({ userData }: PersonalDataProps) => {
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [showPasswords, setShowPasswords] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const isCompany = userData.userType === 'company';

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be the password change logic
    console.log('Password change submitted', passwordData);
    // Reset form and hide it
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    setShowPasswordForm(false);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Личные данные</h1>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        {isCompany ? (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Данные юридического лица</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-base font-medium text-gray-700">Название организации</label>
                <div className="mt-1 text-lg text-gray-900 font-medium">ООО "НАБИНВЕСТ"</div>
              </div>
              <div>
                <label className="block text-base font-medium text-gray-700">Имя руководителя</label>
                <div className="mt-1 text-lg text-gray-900 font-medium">Иванов Иван Иванович</div>
              </div>
              <div>
                <label className="block text-base font-medium text-gray-700">Должность</label>
                <div className="mt-1 text-lg text-gray-900 font-medium">Генеральный директор</div>
              </div>
              <div>
                <label className="block text-base font-medium text-gray-700">ИНН</label>
                <div className="mt-1 text-lg text-gray-900 font-medium">1234567890</div>
              </div>
              <div>
                <label className="block text-base font-medium text-gray-700">КПП</label>
                <div className="mt-1 text-lg text-gray-900 font-medium">123456789</div>
              </div>
              <div>
                <label className="block text-base font-medium text-gray-700">ОГРН</label>
                <div className="mt-1 text-lg text-gray-900 font-medium">1234567890123</div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-base font-medium text-gray-700">Юридический адрес</label>
                <div className="mt-1 text-lg text-gray-900 font-medium">г. Казань, ул. Баумана, д. 58, оф. 301</div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-base font-medium text-gray-700">Почтовый адрес</label>
                <div className="mt-1 text-lg text-gray-900 font-medium">г. Казань, ул. Баумана, д. 58, оф. 301</div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6 mt-6">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Банковские реквизиты</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-base font-medium text-gray-700">Наименование банка</label>
                  <div className="mt-1 text-lg text-gray-900 font-medium">ПАО "Сбербанк России"</div>
                </div>
                <div>
                  <label className="block text-base font-medium text-gray-700">БИК</label>
                  <div className="mt-1 text-lg text-gray-900 font-medium">123456789</div>
                </div>
                <div>
                  <label className="block text-base font-medium text-gray-700">Расчетный счет</label>
                  <div className="mt-1 text-lg text-gray-900 font-medium">40702810123456789012</div>
                </div>
                <div>
                  <label className="block text-base font-medium text-gray-700">Корреспондентский счет</label>
                  <div className="mt-1 text-lg text-gray-900 font-medium">30101810123456789012</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-base font-medium text-gray-700">ФИО</label>
                <div className="mt-1 text-lg text-gray-900 font-medium">{userData.personalData.fullName}</div>
              </div>
              <div>
                <label className="block text-base font-medium text-gray-700">Телефон</label>
                <div className="mt-1 text-lg text-gray-900 font-medium">{userData.personalData.phone}</div>
              </div>
              <div>
                <label className="block text-base font-medium text-gray-700">E-Mail</label>
                <div className="mt-1 text-lg text-gray-900 font-medium">{userData.personalData.email}</div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-base font-medium text-gray-700">Адрес</label>
                <div className="mt-1 text-lg text-gray-900 font-medium">{userData.personalData.address}</div>
              </div>
            </div>
          </div>
        )}
        
        <div className="border-t border-gray-200 pt-6 mt-6">
          <button 
            onClick={() => setShowPasswordForm(!showPasswordForm)}
            className="bg-skynet-blue hover:bg-skynet-blue-dark text-white px-6 py-2 rounded-lg transition-colors text-base"
          >
            {showPasswordForm ? 'Отменить' : 'Изменить пароль'}
          </button>
        </div>

        {showPasswordForm && (
          <div className="border-t border-gray-200 pt-6 mt-6">
            <h3 className="text-xl font-medium text-gray-900 mb-4">Изменение пароля</h3>
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div>
                <label className="block text-base font-medium text-gray-700 mb-2">Текущий пароль</label>
                <div className="relative">
                  <input
                    type={showPasswords ? 'text' : 'password'}
                    value={passwordData.currentPassword}
                    onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue text-base"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasswords(!showPasswords)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    {showPasswords ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-base font-medium text-gray-700 mb-2">Новый пароль</label>
                <div className="relative">
                  <input
                    type={showPasswords ? 'text' : 'password'}
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue text-base"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasswords(!showPasswords)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    {showPasswords ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-base font-medium text-gray-700 mb-2">Подтверждение нового пароля</label>
                <div className="relative">
                  <input
                    type={showPasswords ? 'text' : 'password'}
                    value={passwordData.confirmPassword}
                    onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue text-base"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasswords(!showPasswords)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    {showPasswords ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="bg-skynet-blue hover:bg-skynet-blue-dark text-white px-6 py-2 rounded-lg transition-colors text-base"
                >
                  Сохранить
                </button>
                <button
                  type="button"
                  onClick={() => setShowPasswordForm(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-2 rounded-lg transition-colors text-base"
                >
                  Отмена
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalData;
