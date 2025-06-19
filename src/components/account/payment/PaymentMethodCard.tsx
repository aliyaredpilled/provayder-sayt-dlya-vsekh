
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
      // Check if it's a functional component (LucideIcon) or a function returning JSX
      try {
        const iconResult = method.icon();
        // If it returns a JSX element, render it directly
        if (iconResult && typeof iconResult === 'object' && 'type' in iconResult) {
          return iconResult;
        }
      } catch {
        // If calling as function fails, treat as LucideIcon component
        const IconComponent = method.icon as LucideIcon;
        return <IconComponent className="w-16 h-16 text-skynet-blue" />;
      }
      // If we get here, treat as LucideIcon component
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
