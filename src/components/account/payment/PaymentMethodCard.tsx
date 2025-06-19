
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
    // Check if it's a LucideIcon by checking if it has a displayName property
    if (typeof method.icon === 'function' && 'displayName' in method.icon) {
      // It's a LucideIcon component, render as JSX element
      const IconComponent = method.icon as LucideIcon;
      return <IconComponent className="w-16 h-16 text-skynet-blue" />;
    } else if (typeof method.icon === 'function') {
      // It's a custom function that returns JSX
      return method.icon();
    }
    
    // Fallback case
    return null;
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
            <div className="font-semibold text-base font-inter">{method.label}</div>
            <div className="text-sm text-gray-500 font-inter">{method.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodCard;
