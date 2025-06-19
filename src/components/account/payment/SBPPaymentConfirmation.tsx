
interface SBPPaymentConfirmationProps {
  amount: string;
  onConfirm: () => void;
  onBack: () => void;
}

const SBPPaymentConfirmation = ({ amount, onConfirm, onBack }: SBPPaymentConfirmationProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Оплата через СБП</h1>
        <button
          onClick={onBack}
          className="text-gray-500 hover:text-gray-700"
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
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Подтверждение оплаты</h3>
            <p className="text-gray-600 mb-4">
              Сумма к оплате: <span className="font-bold text-2xl text-skynet-blue">{parseFloat(amount).toLocaleString('ru-RU', { minimumFractionDigits: 2 })} ₽</span>
            </p>
            <p className="text-sm text-gray-500 mb-6">
              После нажатия кнопки "Оплатить" вы будете перенаправлены в приложение вашего банка для подтверждения платежа через Систему быстрых платежей.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <button
              onClick={onBack}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Отмена
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 bg-skynet-orange hover:bg-skynet-orange-bright text-white font-medium py-3 px-6 rounded-lg transition-colors"
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
