
import { Video, Archive, Camera } from 'lucide-react';
import { useState } from 'react';

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
  const [activeTab, setActiveTab] = useState('private');

  const filteredCameras = userData.cameras.filter(camera => camera.type === activeTab);

  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6 space-y-4 lg:space-y-0">
        <h1 className="text-xl lg:text-2xl font-bold text-gray-900">Видеонаблюдение</h1>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm lg:text-base">
            <Camera className="h-4 w-4" />
            Просмотр записей
          </button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-sm lg:text-base">
            <Archive className="h-4 w-4" />
            Смотреть архив
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex">
            <button 
              onClick={() => setActiveTab('private')}
              className={`flex-1 lg:flex-none px-4 lg:px-6 py-4 font-medium text-sm lg:text-base ${
                activeTab === 'private' 
                  ? 'text-skynet-blue border-b-2 border-skynet-blue' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              ПРИВАТНЫЕ
            </button>
            <button 
              onClick={() => setActiveTab('public')}
              className={`flex-1 lg:flex-none px-4 lg:px-6 py-4 font-medium text-sm lg:text-base ${
                activeTab === 'public' 
                  ? 'text-skynet-blue border-b-2 border-skynet-blue' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              ПУБЛИЧНЫЕ
            </button>
          </nav>
        </div>
        
        <div className="p-4 lg:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
            {filteredCameras.map(camera => (
              <div key={camera.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
                <div className="aspect-video bg-gray-100 flex items-center justify-center">
                  <Video className="h-8 lg:h-12 w-8 lg:w-12 text-gray-400" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2 text-sm lg:text-base">{camera.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      camera.status === 'online' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {camera.status === 'online' ? '🟢 Онлайн' : '🔴 Офлайн'}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <button className="flex-1 bg-skynet-blue hover:bg-skynet-blue-dark text-white px-3 py-2 rounded text-sm transition-colors">
                      Смотреть
                    </button>
                    <button className="flex-1 sm:flex-none border border-gray-300 text-gray-700 px-3 py-2 rounded hover:bg-gray-50 text-sm transition-colors">
                      Настройки
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredCameras.length === 0 && (
            <div className="text-center py-8 lg:py-12">
              <Video className="h-8 lg:h-12 w-8 lg:w-12 text-gray-300 mx-auto mb-4" />
              <h2 className="text-lg lg:text-xl font-medium text-gray-900 mb-2">
                {activeTab === 'private' ? 'Нет приватных камер' : 'Нет публичных камер'}
              </h2>
              <p className="text-sm lg:text-base text-gray-600 mb-4 px-4">
                {activeTab === 'private' 
                  ? 'У вас пока нет подключенных приватных камер видеонаблюдения'
                  : 'В данный момент нет доступных публичных камер'
                }
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SurveillanceTab;
