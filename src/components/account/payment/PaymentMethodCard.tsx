
import { LucideIcon } from 'lucide-react';
import { ReactElement } from 'react';

interface PaymentMethod {
  id: string;
  label: string;
  icon: (() => ReactElement) | LucideIcon;
  description: string;
}

interface PaymentMethodCardProps {
  method: PaymentMethod;
  onClick: (methodId: string) => void;
}

const PaymentMethodCard = ({ method, onClick }: PaymentMethodCardProps) => {
  const renderIcon = () => {
    const IconComponent = method.icon as LucideIcon;
    return <IconComponent className="w-8 h-8 text-skynet-blue" />;
  };
  
  return (
    <div 
      className="border border-gray-300 rounded-lg p-6 cursor-pointer hover:border-skynet-blue hover:shadow-md transition-all duration-200"
      onClick={() => onClick(method.id)}
    >
      <div className="flex items-center">
        <div className="flex items-center text-lg font-medium text-gray-700">
          <div className="mr-6">
            {renderIcon()}
          </div>
          <div>
            <div className="font-semibold text-lg font-inter">{method.label}</div>
            <div className="text-base text-gray-500 font-inter">{method.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodCard;
