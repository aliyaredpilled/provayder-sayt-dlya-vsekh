import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const SettingsTab = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Настройки профиля</h1>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Личные данные</h2>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-base font-medium text-gray-700 mb-1">
                Имя
              </label>
              <input 
                type="text" 
                id="first-name" 
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent text-base" 
                defaultValue="Иван"
              />
            </div>
            
            <div>
              <label htmlFor="last-name" className="block text-base font-medium text-gray-700 mb-1">
                Фамилия
              </label>
              <input 
                type="text" 
                id="last-name" 
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent text-base" 
                defaultValue="Иванов"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-1">
              Email
            </label>
            <input 
              type="email" 
              id="email" 
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent text-base" 
              defaultValue="ivan.ivanov@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-base font-medium text-gray-700 mb-1">
              Телефон
            </label>
            <input 
              type="tel" 
              id="phone" 
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent text-base" 
              defaultValue="+7 (999) 123-45-67"
            />
          </div>
          
          <div>
            <label htmlFor="address" className="block text-base font-medium text-gray-700 mb-1">
              Основной адрес
            </label>
            <input 
              type="text" 
              id="address" 
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent text-base" 
              defaultValue="г. Казань, ул. Пушкина, д. 3"
            />
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-skynet-blue hover:bg-skynet-blue-dark text-white font-medium px-6 py-2 rounded-lg shadow-md transition-all text-base"
            >
              Сохранить изменения
            </button>
          </div>
        </form>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Изменить пароль</h2>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="current-password" className="block text-base font-medium text-gray-700 mb-1">
              Текущий пароль
            </label>
            <div className="relative">
              <input 
                type={showPassword ? 'text' : 'password'} 
                id="current-password" 
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent text-base" 
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
            <label htmlFor="new-password" className="block text-base font-medium text-gray-700 mb-1">
              Новый пароль
            </label>
            <div className="relative">
              <input 
                type={showPassword ? 'text' : 'password'} 
                id="new-password" 
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent text-base" 
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
            <label htmlFor="confirm-password" className="block text-base font-medium text-gray-700 mb-1">
              Подтверждение пароля
            </label>
            <div className="relative">
              <input 
                type={showPassword ? 'text' : 'password'} 
                id="confirm-password" 
                className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-skynet-blue focus:border-transparent text-base" 
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
              className="bg-skynet-blue hover:bg-skynet-blue-dark text-white font-medium px-6 py-2 rounded-lg shadow-md transition-all text-base"
            >
              Изменить пароль
            </button>
          </div>
        </form>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Настройки уведомлений</h2>
        
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
              <div className="ml-3 text-base">
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
              <div className="ml-3 text-base">
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
              <div className="ml-3 text-base">
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
              <div className="ml-3 text-base">
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
              className="bg-skynet-blue hover:bg-skynet-blue-dark text-white font-medium px-6 py-2 rounded-lg shadow-md transition-all text-base"
            >
              Сохранить настройки
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsTab;
