
interface PersonalDataProps {
  userData: {
    userType: 'individual' | 'company';
    personalData: any;
  };
}

const PersonalData = ({ userData }: PersonalDataProps) => {
  const isCompany = userData.userType === 'company';

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
                <div className="mt-1 text-lg text-gray-900">ООО "НАБИНВЕСТ"</div>
              </div>
              <div>
                <label className="block text-base font-medium text-gray-700">Имя руководителя</label>
                <div className="mt-1 text-lg text-gray-900">Иванов Иван Иванович</div>
              </div>
              <div>
                <label className="block text-base font-medium text-gray-700">Должность</label>
                <div className="mt-1 text-lg text-gray-900">Генеральный директор</div>
              </div>
              <div>
                <label className="block text-base font-medium text-gray-700">ИНН</label>
                <div className="mt-1 text-lg text-gray-900">1234567890</div>
              </div>
              <div>
                <label className="block text-base font-medium text-gray-700">КПП</label>
                <div className="mt-1 text-lg text-gray-900">123456789</div>
              </div>
              <div>
                <label className="block text-base font-medium text-gray-700">ОГРН</label>
                <div className="mt-1 text-lg text-gray-900">1234567890123</div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-base font-medium text-gray-700">Юридический адрес</label>
                <div className="mt-1 text-lg text-gray-900">г. Казань, ул. Баумана, д. 58, оф. 301</div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-base font-medium text-gray-700">Почтовый адрес</label>
                <div className="mt-1 text-lg text-gray-900">г. Казань, ул. Баумана, д. 58, оф. 301</div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6 mt-6">
              <h3 className="text-xl font-medium text-gray-900 mb-4">Банковские реквизиты</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-base font-medium text-gray-700">Наименование банка</label>
                  <div className="mt-1 text-lg text-gray-900">ПАО "Сбербанк России"</div>
                </div>
                <div>
                  <label className="block text-base font-medium text-gray-700">БИК</label>
                  <div className="mt-1 text-lg text-gray-900">123456789</div>
                </div>
                <div>
                  <label className="block text-base font-medium text-gray-700">Расчетный счет</label>
                  <div className="mt-1 text-lg text-gray-900">40702810123456789012</div>
                </div>
                <div>
                  <label className="block text-base font-medium text-gray-700">Корреспондентский счет</label>
                  <div className="mt-1 text-lg text-gray-900">30101810123456789012</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Данные физического лица</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-base font-medium text-gray-700">ФИО</label>
                <div className="mt-1 text-lg text-gray-900">{userData.personalData.fullName}</div>
              </div>
              <div>
                <label className="block text-base font-medium text-gray-700">Телефон</label>
                <div className="mt-1 text-lg text-gray-900">{userData.personalData.phone}</div>
              </div>
              <div>
                <label className="block text-base font-medium text-gray-700">E-Mail</label>
                <div className="mt-1 text-lg text-gray-900">{userData.personalData.email}</div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-base font-medium text-gray-700">Адрес</label>
                <div className="mt-1 text-lg text-gray-900">{userData.personalData.address}</div>
              </div>
            </div>
          </div>
        )}
        
        <div className="border-t border-gray-200 pt-6 mt-6">
          <button className="bg-skynet-blue hover:bg-skynet-blue-dark text-white px-6 py-2 rounded-lg transition-colors text-base">
            Изменить пароль
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalData;
