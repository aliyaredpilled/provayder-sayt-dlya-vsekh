
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import { speedData } from '@/lib/speedData';

const SpeedComparison = () => {
  return (
    <section id="speed-comparison" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-skynet-blue/10 text-skynet-blue text-sm font-medium mb-3">
            Почувствуйте разницу
          </span>
          <h2 className="heading-lg mb-4 text-gray-900">
            Скорость, которая меняет <span className="text-skynet-blue">всё</span>
          </h2>
          <p className="text-gray-600">
            Сравните различные варианты скорости интернета и выберите подходящий для ваших нужд. 
            С SkyNet 10G вы получаете непревзойденную производительность для всех ваших цифровых потребностей.
          </p>
        </div>

        {/* Speed comparison chart */}
        <div className="h-[400px] w-full mb-10 px-4 animate-fade-in-up">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={speedData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 30,
              }}
              barSize={60}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="name" 
                scale="point" 
                padding={{ left: 50, right: 50 }} 
                tick={{ fill: '#333', fontSize: 14 }}
              />
              <YAxis 
                hide 
                domain={[0, 11000]}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  border: 'none',
                  padding: '12px',
                }}
                formatter={(value: number) => [`${value} Мбит/с`, 'Скорость']}
                labelStyle={{ fontWeight: 'bold', marginBottom: '8px' }}
              />
              <Bar 
                dataKey="value" 
                isAnimationActive={true}
                animationDuration={1000}
              >
                {
                  speedData.map((entry, index) => (
                    <rect key={`bar-${index}`} fill={entry.color} rx={4} ry={4} />
                  ))
                }
                <LabelList 
                  dataKey="description" 
                  position="top" 
                  fill="#555" 
                  fontSize={14}
                  offset={10}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Speed details cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {speedData.map((speed, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl animate-fade-in-up`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                borderTop: `4px solid ${speed.color}`
              }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{speed.name}</h3>
                    <span className="text-sm text-gray-500">{speed.description}</span>
                  </div>
                  <div 
                    className="text-white text-xs rounded-full px-3 py-1 font-medium"
                    style={{ backgroundColor: speed.color }}
                  >
                    {index === 2 ? 'Топ' : index === 1 ? 'Популярный' : 'Базовый'}
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm text-gray-500 mb-1">Время загрузки фильма 4K (100 ГБ):</div>
                    <div className="font-semibold">{speed.downloadTime4K}</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm text-gray-500 mb-1">Время загрузки игры (50 ГБ):</div>
                    <div className="font-semibold">{speed.downloadTimeGame}</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm text-gray-500 mb-1">Одновременный HD/4K стриминг:</div>
                    <div className="font-semibold">{speed.streamingCapacity}</div>
                  </div>
                </div>

                <div 
                  className="w-full h-1 mb-3"
                  style={{ backgroundColor: speed.color }}
                ></div>
                
                <a 
                  href="#pricing" 
                  className="block text-center py-2 font-medium text-sm"
                  style={{ color: speed.color }}
                >
                  Посмотреть тарифы
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeedComparison;
