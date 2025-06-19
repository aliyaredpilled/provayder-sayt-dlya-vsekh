
import { useState } from 'react';
import PaymentMethodCard from './payment/PaymentMethodCard';
import CardPaymentForm from './payment/CardPaymentForm';
import CardPaymentConfirmation from './payment/CardPaymentConfirmation';
import InvoiceModal from './payment/InvoiceModal';
import SberbankInstructions from './payment/SberbankInstructions';
import SberbankTerminalInstructions from './payment/SberbankTerminalInstructions';

interface PaymentFormProps {
  userData: {
    userType: 'individual' | 'company';
    contractNumber: string;
  };
}

const PaymentForm = ({ userData }: PaymentFormProps) => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [showSberbankInstructions, setShowSberbankInstructions] = useState(false);
  const [showSberbankTerminalInstructions, setShowSberbankTerminalInstructions] = useState(false);

  const paymentMethods = [
    ...(userData.userType === 'company' ? [{ 
      id: 'invoice', 
      label: 'Выставить счет', 
      icon: '📄',
      description: 'Для юридических лиц'
    }] : []),
    { 
      id: 'card', 
      label: 'VISA / MasterCard', 
      icon: '💳',
      description: 'Банковские карты'
    },
    { 
      id: 'sberbank', 
      label: 'Сбербанк Онлайн', 
      icon: '🏦',
      description: 'Через приложение Сбербанк'
    },
    { 
      id: 'sberbank-terminal', 
      label: 'Сбербанк Онлайн (терминал)', 
      icon: '🏧',
      description: 'Через терминал Сбербанк'
    }
  ];

  const handlePaymentMethodClick = (methodId: string) => {
    if (methodId === 'invoice') {
      setShowInvoiceModal(true);
    } else if (methodId === 'sberbank') {
      setShowSberbankInstructions(true);
    } else if (methodId === 'sberbank-terminal') {
      setShowSberbankTerminalInstructions(true);
    } else if (methodId === 'card') {
      setPaymentMethod(methodId);
    }
  };

  const handleCardPayment = () => {
    if (!amount || parseFloat(amount) <= 0) return;
    setShowConfirmation(true);
  };

  const confirmCardPayment = () => {
    // Здесь будет переход на платежный шлюз
    alert(`Переход на платежный шлюз для оплаты ${parseFloat(amount).toLocaleString('ru-RU', { minimumFractionDigits: 2 })} ₽`);
    setShowConfirmation(false);
    setAmount('');
  };

  const generateInvoice = () => {
    // Здесь будет генерация PDF счета
    alert(`Счет на сумму ${parseFloat(amount).toLocaleString('ru-RU', { minimumFractionDigits: 2 })} ₽ сгенерирован`);
    setShowInvoiceModal(false);
    setAmount('');
  };

  const handleInvoiceModalClose = () => {
    setShowInvoiceModal(false);
    setAmount('');
  };

  if (showSberbankTerminalInstructions) {
    return (
      <SberbankTerminalInstructions 
        contractNumber={userData.contractNumber}
        onBack={() => setShowSberbankTerminalInstructions(false)}
      />
    );
  }

  if (showSberbankInstructions) {
    return (
      <SberbankInstructions 
        contractNumber={userData.contractNumber}
        onBack={() => setShowSberbankInstructions(false)}
      />
    );
  }

  if (showConfirmation) {
    return (
      <CardPaymentConfirmation
        amount={amount}
        onConfirm={confirmCardPayment}
        onBack={() => setShowConfirmation(false)}
      />
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Оплата</h1>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <form className="space-y-6">
          {paymentMethod === 'card' && (
            <CardPaymentForm
              amount={amount}
              setAmount={setAmount}
              onConfirm={handleCardPayment}
            />
          )}
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Способ оплаты
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {paymentMethods.map((method) => (
                <PaymentMethodCard
                  key={method.id}
                  method={method}
                  onClick={handlePaymentMethodClick}
                />
              ))}
            </div>
          </div>
          
          {paymentMethod === 'card' && (
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleCardPayment}
                disabled={!amount || parseFloat(amount) <= 0}
                className="bg-skynet-orange hover:bg-skynet-orange-bright disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium px-8 py-3 rounded-lg shadow-md transition-all"
              >
                Подтвердить
              </button>
            </div>
          )}
        </form>
      </div>

      {showInvoiceModal && (
        <InvoiceModal
          amount={amount}
          setAmount={setAmount}
          onGenerate={generateInvoice}
          onClose={handleInvoiceModalClose}
        />
      )}
    </div>
  );
};

export default PaymentForm;
