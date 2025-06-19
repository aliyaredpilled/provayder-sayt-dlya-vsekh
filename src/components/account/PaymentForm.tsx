import { useState } from 'react';
import { FileText, CreditCard, Building2, Monitor, Terminal, QrCode, Zap } from 'lucide-react';
import PaymentMethodCard from './payment/PaymentMethodCard';
import CardPaymentConfirmation from './payment/CardPaymentConfirmation';
import SBPPaymentConfirmation from './payment/SBPPaymentConfirmation';
import InvoiceModal from './payment/InvoiceModal';
import SberbankInstructions from './payment/SberbankInstructions';
import SberbankTerminalInstructions from './payment/SberbankTerminalInstructions';
import SberbankWebInstructions from './payment/SberbankWebInstructions';
import QRPaymentInstructions from './payment/QRPaymentInstructions';

interface PaymentFormProps {
  userData: {
    userType: 'individual' | 'company';
    contractNumber: string;
  };
}

const PaymentForm = ({ userData }: PaymentFormProps) => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('sbp');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSBPConfirmation, setShowSBPConfirmation] = useState(false);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [showSberbankInstructions, setShowSberbankInstructions] = useState(false);
  const [showSberbankTerminalInstructions, setShowSberbankTerminalInstructions] = useState(false);
  const [showSberbankWebInstructions, setShowSberbankWebInstructions] = useState(false);
  const [showQRInstructions, setShowQRInstructions] = useState(false);

  const paymentMethods = [
    { 
      id: 'sbp', 
      label: 'СБП', 
      icon: Zap,
      description: 'Система быстрых платежей'
    },
    ...(userData.userType === 'company' ? [{ 
      id: 'invoice', 
      label: 'Выставить счет', 
      icon: FileText,
      description: 'Для юридических лиц'
    }] : []),
    { 
      id: 'qr', 
      label: 'Оплата по QR коду', 
      icon: QrCode,
      description: 'Сканируйте QR код в приложении'
    },
    { 
      id: 'card', 
      label: 'VISA / MasterCard', 
      icon: CreditCard,
      description: 'Банковские карты'
    },
    { 
      id: 'sberbank', 
      label: 'Сбербанк Онлайн - терминал', 
      icon: Terminal,
      description: 'Через терминал Сбербанк'
    },
    { 
      id: 'sberbank-web', 
      label: 'Сбербанк Онлайн - сайт', 
      icon: Monitor,
      description: 'Через веб сайт Сбербанк'
    },
    { 
      id: 'sberbank-terminal', 
      label: 'Сбербанк Онлайн - банкомат', 
      icon: Building2,
      description: 'Через банкомат Сбербанк'
    }
  ];

  const handlePaymentMethodClick = (methodId: string) => {
    if (methodId === 'sbp') {
      setAmount('1000');
      setShowSBPConfirmation(true);
    } else if (methodId === 'invoice') {
      setShowInvoiceModal(true);
    } else if (methodId === 'sberbank') {
      setShowSberbankInstructions(true);
    } else if (methodId === 'sberbank-web') {
      setShowSberbankWebInstructions(true);
    } else if (methodId === 'sberbank-terminal') {
      setShowSberbankTerminalInstructions(true);
    } else if (methodId === 'qr') {
      setShowQRInstructions(true);
    } else if (methodId === 'card') {
      setAmount('1000');
      setShowConfirmation(true);
    }
  };

  const confirmSBPPayment = () => {
    // Здесь будет переход на СБП
    alert(`Переход в приложение банка для оплаты ${parseFloat(amount).toLocaleString('ru-RU', { minimumFractionDigits: 2 })} ₽ через СБП`);
    setShowSBPConfirmation(false);
    setAmount('');
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

  if (showQRInstructions) {
    return (
      <QRPaymentInstructions 
        contractNumber={userData.contractNumber}
        onBack={() => setShowQRInstructions(false)}
      />
    );
  }

  if (showSberbankWebInstructions) {
    return (
      <SberbankWebInstructions 
        contractNumber={userData.contractNumber}
        onBack={() => setShowSberbankWebInstructions(false)}
      />
    );
  }

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

  if (showSBPConfirmation) {
    return (
      <SBPPaymentConfirmation
        amount={amount}
        onConfirm={confirmSBPPayment}
        onBack={() => setShowSBPConfirmation(false)}
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
      <h1 className="text-2xl font-bold text-gray-900 font-inter">Оплата</h1>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4 font-inter">
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
