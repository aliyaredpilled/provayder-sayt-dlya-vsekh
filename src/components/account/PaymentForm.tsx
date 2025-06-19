
import { useState } from 'react';

interface PaymentFormProps {
  userData: {
    userType: 'individual' | 'company';
  };
}

const PaymentForm = ({ userData }: PaymentFormProps) => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');

  const paymentMethods = [
    ...(userData.userType === 'company' ? [{ id: 'invoice', label: 'Выставить счет', icon: '📄' }] : []),
    { id: 'card', label: 'Visa/Mastercard', icon: '💳' },
    { id: 'sbp', label: 'СБП (Система быстрых платежей)', icon: '⚡' },
    { id: 'sberbank', label: 'Сбербанк Онлайн', icon: '🏦' },
    { id: 'unitpay', label: 'UnitPay', icon: '💰' },
    { id: 'terminals', label: 'Терминалы Элекснет', icon: '🏧' }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Оплата</h1>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <form className="space-y-6">
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
              Сумма пополнения
            </label>
            <div className="relative">
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="block w-full pr-12 border-gray-300 rounded-md focus:ring-skynet-blue focus:border-skynet-blue"
                placeholder="0.00"
                min="1"
                step="0.01"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500">₽</span>
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Способ оплаты
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {paymentMethods.map((method) => (
                <div key={method.id} className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-skynet-blue transition-colors">
                  <div className="flex items-center">
                    <input
                      id={method.id}
                      name="payment-method"
                      type="radio"
                      value={method.id}
                      checked={paymentMethod === method.id}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="h-4 w-4 text-skynet-blue focus:ring-skynet-blue border-gray-300"
                    />
                    <label htmlFor={method.id} className="ml-3 flex items-center text-sm font-medium text-gray-700">
                      <span className="text-2xl mr-2">{method.icon}</span>
                      {method.label}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <div className="bg-blue-50 rounded-lg p-4 mb-4">
              <h3 className="text-sm font-medium text-blue-800 mb-2">Пополнить IP телефонию</h3>
              <p className="text-sm text-blue-600">
                Отдельный баланс для услуги IP телефонии
              </p>
              <button
                type="button"
                className="mt-2 text-sm text-blue-700 hover:text-blue-800 font-medium"
              >
                Пополнить →
              </button>
            </div>
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!amount || parseFloat(amount) <= 0}
              className="bg-skynet-orange hover:bg-skynet-orange-bright disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium px-8 py-3 rounded-lg shadow-md transition-all"
            >
              Оплатить {amount && parseFloat(amount) > 0 ? `${parseFloat(amount).toLocaleString('ru-RU', { minimumFractionDigits: 2 })} ₽` : ''}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
