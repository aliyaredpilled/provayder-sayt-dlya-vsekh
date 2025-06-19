
import { QrCode } from 'lucide-react';

interface QRPaymentInstructionsProps {
  contractNumber: string;
  onBack: () => void;
}

const QRPaymentInstructions = ({ contractNumber, onBack }: QRPaymentInstructionsProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Оплата через QR код</h1>
        <button
          onClick={onBack}
          className="text-gray-500 hover:text-gray-700"
        >
          ← Назад к способам оплаты
        </button>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Это ваш QR код для оплаты</h3>
          <p className="text-gray-600 mb-6">QR код на 0 руб с реквизитами:</p>
          
          <div className="bg-gray-50 rounded-lg p-8 mb-6 inline-block">
            <div className="w-48 h-48 bg-white rounded-lg border-2 border-gray-200 flex items-center justify-center">
              <QrCode className="w-32 h-32 text-gray-400" />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Уважаемый клиент!
          </h3>
          <p className="text-gray-700 mb-6">
            Способы оплаты через ПАО Сбербанк путем считывания штрих кода
          </p>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-md font-semibold text-gray-900 mb-4">
                1. Оплата в Мобильном приложении Сбербанк онлайн
              </h4>
              
              <div className="space-y-4 text-gray-700">
                <p>• Входим в Мобильное приложение Сбербанк онлайн</p>
                <p>• Из главной страницы переходим в Платежи (внизу экрана)</p>
                
                <div className="bg-gray-100 rounded-lg p-4 my-4">
                  <img 
                    src="/lovable-uploads/f1792798-9a1a-487d-91cb-6410a91cfd19.png" 
                    alt="Переход в Платежи в мобильном приложении Сбербанк" 
                    className="w-full max-w-xs mx-auto rounded-lg"
                  />
                </div>
                
                <p>• Выбираем меню «Оплата по QR или штрихкоду»</p>
                <p>• Сканируем штрихкод</p>
                <p>• Проверяем данные (номер договора, ФИО, сумма рассчитана для оплаты на текущую дату)</p>
                <p>• Оплатить</p>
                
                <div className="bg-gray-100 rounded-lg p-4 my-4">
                  <img 
                    src="/lovable-uploads/33a0b279-976e-4410-93cd-940af10c3703.png" 
                    alt="Оплата по QR коду в Сбербанк онлайн" 
                    className="w-full max-w-xs mx-auto rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-md font-semibold text-gray-900 mb-4">
                2. Можно оплатить на терминалах СБЕРБАНКа:
              </h4>
              
              <div className="space-y-4 text-gray-700">
                <p><strong>• Без наличных (с карты Сбербанка):</strong></p>
                <p><strong>• Наличными:</strong> На главной странице выбираем «Платежи» - «Оплата по штрих-коду».</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="bg-gray-100 rounded-lg p-4">
                    <img 
                      src="/lovable-uploads/b49adebe-a212-450e-a5f7-506bcd31571a.png" 
                      alt="Главная страница терминала Сбербанк" 
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4">
                    <img 
                      src="/lovable-uploads/73a7a257-b140-4dd4-b037-bf1c97fd1ccb.png" 
                      alt="Выбор способа оплаты в терминале" 
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRPaymentInstructions;
