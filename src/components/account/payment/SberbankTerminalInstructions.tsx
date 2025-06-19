
interface SberbankTerminalInstructionsProps {
  contractNumber: string;
  onBack: () => void;
}

const SberbankTerminalInstructions = ({ contractNumber, onBack }: SberbankTerminalInstructionsProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Сбербанк Онлайн - терминал</h1>
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
                5. Затем в поле «Номер договора» вводите Ваш номер договора ({contractNumber}) и нажимаете «Далее»:
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
};

export default SberbankTerminalInstructions;
