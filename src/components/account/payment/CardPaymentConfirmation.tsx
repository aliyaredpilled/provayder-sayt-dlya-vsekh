
interface CardPaymentConfirmationProps {
  amount: string;
  onConfirm: () => void;
  onBack: () => void;
}

const CardPaymentConfirmation = ({ amount, onConfirm, onBack }: CardPaymentConfirmationProps) => {
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
        <div className="text-center space-y-6">
          <p className="text-gray-600">
            Проверьте сумму и нажмите Подтвердить. После нажатия, вы перейдете на сервис, с помощью которого будет осуществлен перевод.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-lg font-semibold text-gray-900">
              Сумма: {parseFloat(amount).toLocaleString('ru-RU', { minimumFractionDigits: 2 })} ₽
            </p>
          </div>
          
          <button
            onClick={onConfirm}
            className="bg-skynet-orange hover:bg-skynet-orange-bright text-white font-medium px-8 py-3 rounded-lg shadow-md transition-all"
          >
            Подтвердить
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPaymentConfirmation;
