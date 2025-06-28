
interface SberbankWebInstructionsProps {
  contractNumber: string;
  onBack: () => void;
}

const SberbankWebInstructions = ({ contractNumber, onBack }: SberbankWebInstructionsProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Сбербанк Онлайн - сайт</h1>
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
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Оплата услуг интернета через веб приложение «Сбербанк Онлайн»</h3>
          
          <div className="space-y-6">
            <div>
              <p className="text-gray-700 mb-3">
                1. На главной странице «Сбербанк Онлайн» нужно выбрать раздел «Переводы и платежи»:
              </p>
              <div className="bg-gray-100 rounded-lg p-4">
                <img 
                  src="/lovable-uploads/02b561b7-12d4-4e45-b42f-8041a7f9637c.png" 
                  alt="Главная страница Сбербанк Онлайн - Переводы и платежи" 
                  className="w-full max-w-md mx-auto rounded-lg"
                />
              </div>
            </div>

            <div>
              <p className="text-gray-700 mb-3">
                2. В поисковой строке необходимо ввести наименование организации «Скайнет» (русскими, строчными буквами) и нажать кнопку «Поиск»:
              </p>
              <div className="bg-gray-100 rounded-lg p-4">
                <img 
                  src="/lovable-uploads/b53b7a37-eb1e-424f-9c55-8767091ef68d.png" 
                  alt="Поиск организации Скайнет в веб версии Сбербанк Онлайн" 
                  className="w-full max-w-md mx-auto rounded-lg"
                />
              </div>
            </div>

            <div>
              <p className="text-gray-700 mb-3">
                3. Далее в списке организаций нужно выбрать «Скайнет» (г. Казань), как показано на рисунке ниже:
              </p>
              <div className="bg-gray-100 rounded-lg p-4">
                <img 
                  src="/lovable-uploads/778feb61-da40-41e5-9361-e86632a23064.png" 
                  alt="Выбор Скайнет (г. Казань) в списке организаций" 
                  className="w-full max-w-md mx-auto rounded-lg"
                />
              </div>
            </div>

            <div>
              <p className="text-gray-700 mb-3">
                4. В поле «Номер договора» нужно ввести Ваш номер договора ({contractNumber}) и нажать кнопку «Продолжить»:
              </p>
              <div className="bg-gray-100 rounded-lg p-4">
                <img 
                  src="/lovable-uploads/17b39c45-b634-4f99-b0c5-0933b80e491b.png" 
                  alt="Ввод номера договора в веб версии Сбербанк Онлайн" 
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

export default SberbankWebInstructions;
