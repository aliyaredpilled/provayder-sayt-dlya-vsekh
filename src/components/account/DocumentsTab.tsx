
const DocumentsTab = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Документы</h1>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📄</div>
          <h2 className="text-xl font-medium text-gray-900 mb-2">Раздел документов</h2>
          <p className="text-gray-600 mb-4">
            Здесь будут отображаться договоры, акты выполненных работ и другие документы
          </p>
          <button className="bg-skynet-blue hover:bg-skynet-blue-dark text-white px-6 py-2 rounded-lg transition-colors">
            Загрузить документ
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocumentsTab;
