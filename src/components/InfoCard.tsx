
import { Phone, Users, Clock, Mail, MessageCircle } from "lucide-react";

const icons = { Phone, Users, Clock, Mail, MessageCircle };

export default function InfoCard({ icon, title, subtitle, bg, href }: {
  icon: keyof typeof icons;
  title: string;
  subtitle: string;
  bg: string;          // «skynet-blue», «emerald-500» и т.д.
  href?: string;       // добавляем опциональную ссылку
}) {
  const Icon = icons[icon];
  
  // Чтобы Tailwind мог корректно обработать динамические классы, 
  // создадим объект-карту для сопоставления пропса `bg` с реальными классами.
  // Это гарантирует, что все нужные стили будут сгенерированы.
  const bgVariants: { [key: string]: string } = {
    'skynet-blue': 'bg-skynet-blue',
    'skynet-purple': 'bg-skynet-purple',
    'emerald-500': 'bg-emerald-500',
    'skynet-orange': 'bg-skynet-orange',
  };

  const bgColorClass = bgVariants[bg] || 'bg-gray-500'; // Резервный цвет

  const content = (
    <div className="bg-white backdrop-blur-sm shadow-card border border-gray-200/80
                    rounded-2xl p-6 flex items-start gap-4 hover:shadow-lg transition">
      <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${bgColorClass} text-white`}>
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{subtitle}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
} 
