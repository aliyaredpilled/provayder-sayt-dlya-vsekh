
interface PaymentsTabProps {
  userData: {
    balance: number;
  };
  getTotalMonthlyPayment: () => number;
}

const PaymentsTab = ({ userData, getTotalMonthlyPayment }: PaymentsTabProps) => {
  return (
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
  );
};

export default PaymentsTab;
