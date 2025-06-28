import { useState } from 'react';

interface Payment {
  id: number;
  date: string;
  amount: number;
  type: string;
  description: string;
}

interface PaymentsHistoryProps {
  userData: {
    payments: Payment[];
  };
}

const PaymentsHistory = ({ userData }: PaymentsHistoryProps) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl lg:text-2xl font-bold text-gray-900">Платежи</h1>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Mobile view */}
        <div className="lg:hidden">
          <div className="divide-y divide-gray-200">
            {userData.payments.map((payment) => (
              <div key={payment.id} className="p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900">{payment.type}</div>
                    <div className="text-base text-gray-500">{payment.description}</div>
                  </div>
                  <div className="ml-4 text-right flex-shrink-0">
                    <div className={`font-medium text-lg ${
                      payment.amount > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {payment.amount > 0 ? '+' : ''}{payment.amount.toLocaleString('ru-RU', { minimumFractionDigits: 2 })} ₽
                    </div>
                  </div>
                </div>
                <div className="text-base text-gray-500">
                  {payment.date}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop view */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Дата и время
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Сумма
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Описание операции
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {userData.payments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-base text-gray-900">
                    {payment.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-base font-medium">
                    <span className={`${
                      payment.amount > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {payment.amount > 0 ? '+' : ''}{payment.amount.toLocaleString('ru-RU', { minimumFractionDigits: 2 })} ₽
                    </span>
                  </td>
                  <td className="px-6 py-4 text-base text-gray-900">
                    <div>
                      <div className="font-medium">{payment.type}</div>
                      <div className="text-gray-500">{payment.description}</div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentsHistory;
