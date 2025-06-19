
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
  const [selectedPeriod, setSelectedPeriod] = useState('all');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Платежи</h1>
        
        <div className="flex items-center space-x-4">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 bg-white focus:ring-skynet-blue focus:border-skynet-blue"
          >
            <option value="all">Все операции</option>
            <option value="month">Текущий месяц</option>
            <option value="year">Текущий год</option>
            <option value="custom">Произвольный период</option>
          </select>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Дата и время
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Сумма
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Описание операции
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {userData.payments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {payment.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <span className={`${
                      payment.amount > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {payment.amount > 0 ? '+' : ''}{payment.amount.toLocaleString('ru-RU', { minimumFractionDigits: 2 })} ₽
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
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
