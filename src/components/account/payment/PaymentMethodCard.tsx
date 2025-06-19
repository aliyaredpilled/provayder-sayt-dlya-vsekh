
import { LucideIcon } from 'lucide-react';

interface PaymentMethod {
  id: string;
  label: string;
  icon: LucideIcon;
  description: string;
}

interface PaymentMethodCardProps {
  method: PaymentMethod;
  onClick: (methodId: string) => void;
}

const PaymentMethodCard = ({ method, onClick }: PaymentMethodCardProps) => {
  const IconComponent = method.icon;
  
  return (
    <div 
      className="border border-gray-300 rounded-lg p-6 cursor-pointer hover:border-skynet-blue hover:shadow-md transition-all duration-200"
      onClick={() => onClick(method.id)}
    >
      <div className="flex items-center">
        <div className="flex items-center text-base font-medium text-gray-700">
          <IconComponent className="w-12 h-12 mr-4 text-skynet-blue" />
          <div>
            <div className="font-semibold text-lg">{method.label}</div>
            <div className="text-sm text-gray-500">{method.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodCard;
