
import { LucideIcon } from 'lucide-react';
import { ReactElement } from 'react';

interface PaymentMethod {
  id: string;
  label: string;
  icon: LucideIcon | (() => ReactElement);
  description: string;
}

interface PaymentMethodCardProps {
  method: PaymentMethod;
  onClick: (methodId: string) => void;
}

const PaymentMethodCard = ({ method, onClick }: PaymentMethodCardProps) => {
  const renderIcon = () => {
    // Check if it's a function that returns JSX (like our image functions)
    if (typeof method.icon === 'function') {
      // Check if it has React component properties (displayName, etc.)
      if ('displayName' in method.icon || method.icon.toString().includes('createElement')) {
        // It's a LucideIcon component, render as JSX element
        const IconComponent = method.icon as LucideIcon;
        return <IconComponent className="w-16 h-16 text-skynet-blue" />;
      } else {
        // It's a regular function that returns JSX (image functions)
        return method.icon();
      }
    }
    
    // Fallback: treat as LucideIcon component
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
            <div className="font-semibold text-xl">{method.label}</div>
            <div className="text-base text-gray-500">{method.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodCard;
