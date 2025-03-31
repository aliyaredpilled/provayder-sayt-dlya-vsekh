
import { ChartContainer } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import { speedData } from '@/lib/speedData';

const SpeedComparison = () => {
  return (
    <section id="speed-comparison" className="py-12 bg-gradient-to-b from-sky-50 to-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-10">
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
          <ChartContainer className="bg-gradient-to-br from-white to-sky-50 rounded-xl p-8 shadow-md" config={{
            'standard': { color: '#8E8E93' },
            'fast': { color: '#FF9500' },
            'ultrafast': { color: '#0A84FF' },
          }}>
            <BarChart
              data={speedData}
              margin={{
                top: 30,
                right: 30,
                left: 20,
                bottom: 30,
              }}
              barSize={80}
            >
              <defs>
                {speedData.map((entry, index) => (
                  <linearGradient 
                    key={`gradient-${index}`} 
                    id={`colorGradient${index}`} 
                    x1="0" 
                    y1="0" 
                    x2="0" 
                    y2="1"
                  >
                    <stop offset="0%" stopColor={entry.color} stopOpacity={0.95} />
                    <stop offset="95%" stopColor={entry.color} stopOpacity={0.7} />
                  </linearGradient>
                ))}
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" opacity={0.5} />
              <XAxis 
                dataKey="name" 
                scale="point" 
                padding={{ left: 60, right: 60 }} 
                tick={{ fill: '#555', fontSize: 15, fontWeight: 500 }}
                axisLine={{ stroke: '#e0e0e0' }}
                tickLine={false}
              />
              <YAxis 
                hide 
                domain={[0, 11000]}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: '16px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                  border: 'none',
                  padding: '16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                }}
                formatter={(value: number) => [`${value} Мбит/с`, 'Скорость']}
                labelStyle={{ fontWeight: 'bold', marginBottom: '10px', color: '#333', fontSize: '15px' }}
                cursor={{ fill: 'rgba(200, 200, 200, 0.1)' }}
              />
              <Bar 
                dataKey="value" 
                isAnimationActive={true}
                animationDuration={1500}
                animationBegin={300}
                animationEasing="ease-out"
                radius={[15, 15, 0, 0]}
              >
                {
                  speedData.map((entry, index) => (
                    <rect 
                      key={`bar-${index}`} 
                      fill={`url(#colorGradient${index})`}
                      className="drop-shadow-lg transition-all duration-300 hover:filter hover:brightness-110 cursor-pointer"
                    />
                  ))
                }
                <LabelList 
                  dataKey="description" 
                  position="top" 
                  fill="#555" 
                  fontSize={16}
                  fontWeight="600"
                  offset={20}
                  formatter={(value: string) => [`${value}`]}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </div>

        {/* Speed details cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {speedData.map((speed, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl animate-fade-in-up backdrop-blur-xs bg-white/95`}
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
                    className="text-white text-xs rounded-full px-3 py-1 font-medium shadow-sm"
                    style={{ 
                      background: `linear-gradient(135deg, ${speed.color}, ${speed.color}cc)` 
                    }}
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

                <div className="w-full h-1 mb-3 opacity-70 rounded-full" style={{ background: `linear-gradient(to right, ${speed.color}99, ${speed.color})` }}></div>
                
                <a 
                  href="#pricing" 
                  className="block text-center py-2 font-medium text-sm transition-all hover:underline"
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
