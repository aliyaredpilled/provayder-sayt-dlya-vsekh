
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
      // Проверяем, возвращает ли функция JSX элемент (для изображений)
      const iconResult = method.icon();
      if (iconResult && typeof iconResult === 'object' && 'type' in iconResult) {
        return iconResult;
      }
      // Если это LucideIcon компонент
      const IconComponent = method.icon as LucideIcon;
      return <IconComponent className="w-12 h-12 text-skynet-blue" />;
    }
    // Если это LucideIcon компонент
    const IconComponent = method.icon as LucideIcon;
    return <IconComponent className="w-12 h-12 text-skynet-blue" />;
  };
  
  return (
    <div 
      className="border border-gray-300 rounded-lg p-6 cursor-pointer hover:border-skynet-blue hover:shadow-md transition-all duration-200"
      onClick={() => onClick(method.id)}
    >
      <div className="flex items-center">
        <div className="flex items-center text-base font-medium text-gray-700">
          <div className="mr-4">
            {renderIcon()}
          </div>
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
