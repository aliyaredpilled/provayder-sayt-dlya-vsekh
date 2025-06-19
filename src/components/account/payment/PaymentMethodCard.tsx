
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
    // Check if it's a function by checking if it has a displayName property (LucideIcons have this)
    // If it doesn't have displayName, it's likely our custom function
    if (typeof method.icon === 'function' && !('displayName' in method.icon)) {
      // It's a function that returns JSX (like image functions)
      return method.icon();
    }
    
    // It's a LucideIcon component, render as JSX element
    const IconComponent = method.icon as LucideIcon;
    return <IconComponent className="w-16 h-16 text-skynet-blue" />;
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
            <div className="font-semibold text-xl font-inter">{method.label}</div>
            <div className="text-base text-gray-500 font-inter">{method.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodCard;
