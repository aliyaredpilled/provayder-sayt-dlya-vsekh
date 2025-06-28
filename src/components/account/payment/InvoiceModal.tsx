
interface InvoiceModalProps {
  amount: string;
  setAmount: (amount: string) => void;
  onGenerate: () => void;
  onClose: () => void;
}

const InvoiceModal = ({ amount, setAmount, onGenerate, onClose }: InvoiceModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 font-inter">Выставление счета на оплату</h3>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="invoice-amount" className="block text-sm font-medium text-gray-700 mb-1 font-inter">
              Сумма:
            </label>
            <div className="relative">
              <input
                type="number"
                id="invoice-amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="block w-full pr-12 text-base border-gray-300 rounded-md focus:ring-skynet-blue focus:border-skynet-blue font-inter"
                placeholder="0.00"
                min="1"
                step="0.01"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 text-base font-inter">₽</span>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors text-base font-inter"
            >
              Отмена
            </button>
            <button
              onClick={onGenerate}
              disabled={!amount || parseFloat(amount) <= 0}
              className="flex-1 bg-skynet-orange hover:bg-skynet-orange-bright disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded-lg transition-colors text-base font-inter"
            >
              Выставить счет
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;
