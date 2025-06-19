import { Bell } from 'lucide-react';

interface Notification {
  id: number;
  date: string;
  title: string;
  message: string;
  isRead: boolean;
}

interface NotificationsTabProps {
  userData: {
    notifications: Notification[];
  };
}

const NotificationsTab = ({ userData }: NotificationsTabProps) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Уведомления</h1>
      
      <div className="space-y-4">
        {userData.notifications.map(notification => (
          <div 
            key={notification.id} 
            className={`bg-white rounded-xl shadow-sm border p-6 ${
              notification.isRead ? 'border-gray-100' : 'border-skynet-blue'
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className={`text-lg font-semibold ${
                  notification.isRead ? 'text-gray-900' : 'text-skynet-blue'
                }`}>
                  {notification.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">{notification.date}</p>
              </div>
              {!notification.isRead && (
                <span className="bg-skynet-blue text-white text-sm px-2 py-1 rounded-full">
                  Новое
                </span>
              )}
            </div>
            <p className="mt-4 text-base text-gray-600">{notification.message}</p>
          </div>
        ))}
      </div>
      
      {userData.notifications.length === 0 && (
        <div className="text-center py-12">
          <Bell className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <h2 className="text-lg font-medium text-gray-900 mb-2">Нет новых уведомлений</h2>
          <p className="text-base text-gray-600">У вас пока нет непрочитанных уведомлений</p>
        </div>
      )}
    </div>
  );
};

export default NotificationsTab;
