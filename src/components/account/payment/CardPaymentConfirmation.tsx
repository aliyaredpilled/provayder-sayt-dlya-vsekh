
import { useState } from 'react';

interface CardPaymentConfirmationProps {
  amount: string;
  onConfirm: () => void;
  onBack: () => void;
}

const CardPaymentConfirmation = ({ amount: initialAmount, onConfirm, onBack }: CardPaymentConfirmationProps) => {
  const [amount, setAmount] = useState(initialAmount);

  const handleConfirm = () => {
    if (!amount || parseFloat(amount) <= 0) return;
    onConfirm();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Оплата через VISA / MasterCard</h1>
        <button
          onClick={onBack}
          className="text-gray-500 hover:text-gray-700"
        >
          ← Назад
        </button>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="space-y-6">
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
          
          <div className="text-center space-y-4">
            <p className="text-gray-600">
              Проверьте сумму и нажмите Подтвердить. После нажатия, вы перейдете на сервис, с помощью которого будет осуществлен перевод.
            </p>
            
            <button
              onClick={handleConfirm}
              disabled={!amount || parseFloat(amount) <= 0}
              className="bg-skynet-orange hover:bg-skynet-orange-bright disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium px-8 py-3 rounded-lg shadow-md transition-all"
            >
              Подтвердить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPaymentConfirmation;
