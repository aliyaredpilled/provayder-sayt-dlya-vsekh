
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
    if (typeof method.icon === 'function') {
      // Try to determine if it's a LucideIcon or a function returning JSX
      try {
        // First, try calling it as a function that returns JSX (like our image functions)
        const result = method.icon();
        // If it returns a valid React element, use it
        if (result && typeof result === 'object' && 'type' in result) {
          return result;
        }
      } catch {
        // If calling as function fails, it's likely a LucideIcon component
      }
      
      // Treat as LucideIcon component and pass props
      const IconComponent = method.icon as LucideIcon;
      return <IconComponent className="w-16 h-16 text-skynet-blue" />;
    }
    
    // Fallback for LucideIcon component
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
