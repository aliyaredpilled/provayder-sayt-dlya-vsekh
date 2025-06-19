
import { Video } from 'lucide-react';

interface Camera {
  id: string;
  name: string;
  type: string;
  status: string;
  preview?: string;
}

interface SurveillanceTabProps {
  userData: {
    cameras: Camera[];
  };
}

const SurveillanceTab = ({ userData }: SurveillanceTabProps) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Видеонаблюдение</h1>
        <div className="flex gap-3">
          <button className="bg-skynet-orange hover:bg-skynet-orange-bright text-white px-4 py-2 rounded-lg transition-colors shadow-sm">
            ➕ Добавить камеру
          </button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            📂 Смотреть архив
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex">
            <button className="px-6 py-4 font-medium text-skynet-blue border-b-2 border-skynet-blue">
              ПРИВАТНЫЕ
            </button>
            <button className="px-6 py-4 font-medium text-gray-500 hover:text-gray-700">
              ПУБЛИЧНЫЕ
            </button>
          </nav>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userData.cameras.filter(camera => camera.type === 'private').map(camera => (
              <div key={camera.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <div className="aspect-video bg-gray-100 flex items-center justify-center">
                  <Video className="h-12 w-12 text-gray-400" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2">{camera.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      camera.status === 'online' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {camera.status === 'online' ? '🟢 Онлайн' : '🔴 Офлайн'}
                    </span>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <button className="flex-1 bg-skynet-blue hover:bg-skynet-blue-dark text-white px-3 py-2 rounded text-sm transition-colors">
                      Смотреть
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-3 py-2 rounded hover:bg-gray-50 text-sm transition-colors">
                      Настройки
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {userData.cameras.filter(camera => camera.type === 'private').length === 0 && (
            <div className="text-center py-12">
              <Video className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h2 className="text-xl font-medium text-gray-900 mb-2">Нет камер</h2>
              <p className="text-gray-600 mb-4">У вас пока нет подключенных камер видеонаблюдения</p>
              <button className="bg-skynet-orange hover:bg-skynet-orange-bright text-white px-6 py-3 rounded-lg shadow-sm transition-colors">
                Подключить камеру
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SurveillanceTab;
