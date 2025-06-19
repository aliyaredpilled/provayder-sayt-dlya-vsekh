
import { useState } from 'react';

interface SBPPaymentConfirmationProps {
  onConfirm: (amount: string) => void;
  onBack: () => void;
}

const SBPPaymentConfirmation = ({ onConfirm, onBack }: SBPPaymentConfirmationProps) => {
  const [amount, setAmount] = useState('');

  const handleConfirm = () => {
    if (amount && parseFloat(amount) > 0) {
      onConfirm(amount);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900 font-inter">Оплата через СБП</h1>
        <button
          onClick={onBack}
          className="text-sm text-gray-500 hover:text-gray-700 font-inter"
        >
          ← Назад к способам оплаты
        </button>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="text-center space-y-6">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/0f42383b-75d5-4944-872b-6ca28d4a2563.png" 
              alt="Логотип СБП" 
              className="h-20 w-auto"
            />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 font-inter">Введите сумму для оплаты</h3>
            
            <div className="mb-4">
              <div className="relative">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="block w-full pr-12 text-base border-gray-300 rounded-md focus:ring-skynet-blue focus:border-skynet-blue font-inter"
                  placeholder="0.00"
                  min="1"
                  step="0.01"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 text-base font-inter">₽</span>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-500 mb-6 font-inter">
              После нажатия кнопки "Оплатить" вы получите ссылку для оплаты через Систему быстрых платежей.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <button
              onClick={onBack}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors text-base font-inter"
            >
              Отмена
            </button>
            <button
              onClick={handleConfirm}
              disabled={!amount || parseFloat(amount) <= 0}
              className="flex-1 bg-skynet-orange hover:bg-skynet-orange-bright disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-colors text-base font-inter"
            >
              Оплатить через СБП
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SBPPaymentConfirmation;
