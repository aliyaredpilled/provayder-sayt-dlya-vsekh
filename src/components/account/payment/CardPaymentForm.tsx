
import { useState } from 'react';

interface CardPaymentFormProps {
  amount: string;
  setAmount: (amount: string) => void;
  onConfirm: () => void;
}

const CardPaymentForm = ({ amount, setAmount, onConfirm }: CardPaymentFormProps) => {
  return (
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
      <p className="mt-2 text-sm text-gray-600">
        Введите сумму и нажмите Подтвердить. После нажатия, вы перейдете на сервис, с помощью которого будет осуществлен перевод.
      </p>
    </div>
  );
};

export default CardPaymentForm;
