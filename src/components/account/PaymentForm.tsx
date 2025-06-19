import { useState } from 'react';

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

  if (showSberbankTerminalInstructions) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Сбербанк Онлайн (терминал)</h1>
          <button
            onClick={() => setShowSberbankTerminalInstructions(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ← Назад к способам оплаты
          </button>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
          <p className="text-orange-800 font-medium">
            ⚠️ Обращаем внимание, что зачисление средств может занять до двух банковских дней.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Оплата услуг интернета через терминал «Сбербанк»</h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-gray-700 mb-3">
                  1. При оплате услуг интернета через терминал сбербанка, на стартовой странице выбираем раздел «Платежи и переводы»:
                </p>
                <div className="bg-gray-100 rounded-lg p-4">
                  <img 
                    src="/lovable-uploads/36844a76-1dd5-4a3a-b777-a4c1c43d40f4.png" 
                    alt="Стартовая страница терминала Сбербанк - Платежи и переводы" 
                    className="w-full max-w-md mx-auto rounded-lg"
                  />
                </div>
              </div>

              <div>
                <p className="text-gray-700 mb-3">
                  2. Выходит следующее окошко (как на рисунке снизу). Здесь необходимо выбрать «Поиск услуг и организаций»:
                </p>
                <div className="bg-gray-100 rounded-lg p-4">
                  <img 
                    src="/lovable-uploads/2e17a457-b2ba-41bc-87aa-3657aeef5ccc.png" 
                    alt="Поиск услуг и организаций в терминале Сбербанк" 
                    className="w-full max-w-md mx-auto rounded-lg"
                  />
                </div>
              </div>

              <div>
                <p className="text-gray-700 mb-3">
                  3. Затем, в поле «Поиск» вводим наименование организации «Скайнет» (русскими буквами):
                </p>
                <div className="bg-gray-100 rounded-lg p-4">
                  <img 
                    src="/lovable-uploads/b43584e1-4fd4-4b26-9940-a6c9b36b1499.png" 
                    alt="Ввод наименования Скайнет в поиске" 
                    className="w-full max-w-md mx-auto rounded-lg"
                  />
                </div>
              </div>

              <div>
                <p className="text-gray-700 mb-3">
                  4. Далее выходит список организаций, как показано на рисунке ниже. Выбираем «Скайнет (г. Казань)»:
                </p>
                <div className="bg-gray-100 rounded-lg p-4">
                  <img 
                    src="/lovable-uploads/f2b004ce-1414-4755-939b-dda27e1d3475.png" 
                    alt="Выбор Скайнет (г. Казань) из списка организаций" 
                    className="w-full max-w-md mx-auto rounded-lg"
                  />
                </div>
              </div>

              <div>
                <p className="text-gray-700 mb-3">
                  5. Затем в поле «Номер договора» вводите Ваш номер договора ({userData.contractNumber}) и нажимаете «Далее»:
                </p>
                <div className="bg-gray-100 rounded-lg p-4">
                  <img 
                    src="/lovable-uploads/e2f2ce81-b335-4ae2-9029-0d512a6df3cc.png" 
                    alt="Ввод номера договора в терминале" 
                    className="w-full max-w-md mx-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showSberbankInstructions) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Сбербанк Онлайн</h1>
          <button
            onClick={() => setShowSberbankInstructions(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ← Назад к способам оплаты
          </button>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
          <p className="text-orange-800 font-medium">
            ⚠️ Обращаем внимание, что зачисление средств может занять до двух банковских дней.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Инструкция по оплате</h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-gray-700 mb-3">
                  1. В приложении «Сбербанк Онлайн» нужно выбрать раздел «Платежи». В данном разделе нужно выбрать подраздел «Остальное», как показано на картинке ниже:
                </p>
                <div className="bg-gray-100 rounded-lg p-4">
                  <img 
                    src="/lovable-uploads/e5c6f924-2fc6-45c1-b017-027b19d385af.png" 
                    alt="Скриншот раздела Остальное в Сбербанк Онлайн" 
                    className="w-full max-w-md mx-auto rounded-lg"
                  />
                </div>
              </div>

              <div>
                <p className="text-gray-700 mb-3">
                  2. В поисковой строке необходимо ввести наименование организации «скайнет» (русскими, строчными буквами) и нажать кнопку «Поиск»:
                </p>
                <div className="bg-gray-100 rounded-lg p-4">
                  <img 
                    src="/lovable-uploads/2a95448f-2bf7-4f29-a7e7-553fc3bf1cfc.png" 
                    alt="Скриншот поиска скайнет в Сбербанк Онлайн" 
                    className="w-full max-w-md mx-auto rounded-lg"
                  />
                </div>
              </div>

              <div>
                <p className="text-gray-700 mb-3">
                  3. Далее в списке организаций нужно выбрать «Скайнет (г. Казань)», как показано на рисунке ниже:
                </p>
                <div className="bg-gray-100 rounded-lg p-4">
                  <img 
                    src="/lovable-uploads/1addae5d-5c1e-4083-939c-8c88130bebe6.png" 
                    alt="Скриншот выбора Скайнет (г. Казань)" 
                    className="w-full max-w-md mx-auto rounded-lg"
                  />
                </div>
              </div>

              <div>
                <p className="text-gray-700 mb-3">
                  4. В поле «Номер договора» нужно ввести Ваш номер договора ({userData.contractNumber}) и нажать кнопку «Продолжить».
                </p>
                <div className="bg-gray-100 rounded-lg p-4">
                  <img 
                    src="/lovable-uploads/0d434773-eaf9-4767-806a-80d398eb158c.png" 
                    alt="Скриншот ввода номера договора" 
                    className="w-full max-w-md mx-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showConfirmation) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Оплата через VISA / MasterCard</h1>
          <button
            onClick={() => setShowConfirmation(false)}
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
              onClick={confirmCardPayment}
              className="bg-skynet-orange hover:bg-skynet-orange-bright text-white font-medium px-8 py-3 rounded-lg shadow-md transition-all"
            >
              Подтвердить
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Оплата</h1>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <form className="space-y-6">
          {paymentMethod === 'card' && (
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
          )}
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Способ оплаты
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {paymentMethods.map((method) => (
                <div 
                  key={method.id} 
                  className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-skynet-blue transition-colors"
                  onClick={() => handlePaymentMethodClick(method.id)}
                >
                  <div className="flex items-center">
                    <div className="flex items-center text-sm font-medium text-gray-700">
                      <span className="text-2xl mr-3">{method.icon}</span>
                      <div>
                        <div>{method.label}</div>
                        <div className="text-xs text-gray-500">{method.description}</div>
                      </div>
                    </div>
                  </div>
                </div>
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

      {/* Модальное окно для выставления счета */}
      {showInvoiceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Выставление счета на оплату</h3>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="invoice-amount" className="block text-sm font-medium text-gray-700 mb-1">
                  Сумма:
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="invoice-amount"
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
              
              <div className="flex space-x-3">
                <button
                  onClick={() => {
                    setShowInvoiceModal(false);
                    setAmount('');
                  }}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Отмена
                </button>
                <button
                  onClick={generateInvoice}
                  disabled={!amount || parseFloat(amount) <= 0}
                  className="flex-1 bg-skynet-orange hover:bg-skynet-orange-bright disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Выставить счет
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
