
interface SberbankInstructionsProps {
  contractNumber: string;
  onBack: () => void;
}

const SberbankInstructions = ({ contractNumber, onBack }: SberbankInstructionsProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Сбербанк Онлайн</h1>
        <button
          onClick={onBack}
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
                4. В поле «Номер договора» нужно ввести Ваш номер договора ({contractNumber}) и нажать кнопку «Продолжить».
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
};

export default SberbankInstructions;
