
interface PaymentMethod {
  id: string;
  label: string;
  icon: string;
  description: string;
}

interface PaymentMethodCardProps {
  method: PaymentMethod;
  onClick: (methodId: string) => void;
}

const PaymentMethodCard = ({ method, onClick }: PaymentMethodCardProps) => {
  return (
    <div 
      className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-skynet-blue transition-colors"
      onClick={() => onClick(method.id)}
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
  );
};

export default PaymentMethodCard;
