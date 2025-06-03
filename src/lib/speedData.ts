
export const speedData = [
  {
    name: '100 Мбит/с',
    value: 100,
    color: '#8E8E93',
    description: 'Стандартный',
    downloadTime4K: '~7 минут',
    downloadTimeGame: '~60 минут',
    streamingCapacity: '1-2 устройства'
  },
  {
    name: '1 Гбит/с',
    value: 1000,
    color: '#E04400',
    description: 'Быстрый',
    downloadTime4K: '40-45 секунд',
    downloadTimeGame: '~6 минут',
    streamingCapacity: '5-8 устройств'
  },
  {
    name: '10 Гбит/с',
    value: 10000,
    color: '#0A84FF',
    description: 'Сверхскоростной',
    downloadTime4K: '4-5 секунд',
    downloadTimeGame: '35-40 секунд',
    streamingCapacity: '20+ устройств'
  }
];

export const pricingPlans = [
  {
    id: 'home-50',
    name: 'Домашний 50',
    speed: '50 Мбит/с',
    price: '1000 ₽',
    period: 'месяц',
    color: '#8E8E93',
    features: [
      'Безлимитный интернет',
      'Подключение по XG-Pon',
      'Базовая техподдержка',
      'Wi-Fi роутер (аренда 150₽/мес)'
    ],
    isPopular: false
  },
  {
    id: 'home-100',
    name: 'Домашний 100',
    speed: '100 Мбит/с',
    price: '1200 ₽',
    period: 'месяц',
    color: '#8E8E93',
    features: [
      'Безлимитный интернет',
      'Подключение по XG-Pon',
      'Базовая техподдержка',
      'Wi-Fi роутер (аренда 150₽/мес)'
    ],
    isPopular: false
  },
  {
    id: 'home-500',
    name: 'Домашний 500',
    speed: '500 Мбит/с',
    price: '2000 ₽',
    period: 'месяц',
    color: '#E04400',
    features: [
      'Безлимитный интернет',
      'Подключение по XG-Pon',
      'Приоритетная техподдержка',
      'Wi-Fi роутер (аренда 150₽/мес)',
      'HD/4K стриминг без задержек'
    ],
    isPopular: true
  },
  {
    id: 'home-900',
    name: 'Домашний 900',
    speed: '900 Мбит/с',
    price: '2400 ₽',
    period: 'месяц',
    color: '#E04400',
    features: [
      'Безлимитный интернет',
      'Подключение по XG-Pon',
      'Приоритетная техподдержка',
      'Wi-Fi роутер (аренда 150₽/мес)',
      'HD/4K стриминг без задержек',
      'Игры онлайн на высоких скоростях'
    ],
    isPopular: false
  },
  {
    id: 'home-2000',
    name: 'Домашний 2 Гбит',
    speed: '2 Гбит/с',
    price: '3500 ₽',
    period: 'месяц',
    color: '#0A84FF',
    features: [
      'Безлимитный интернет',
      'Подключение по XG-Pon',
      'Премиум поддержка 24/7',
      'Wi-Fi роутер (аренда 150₽/мес)',
      'HD/4K/8K стриминг без задержек',
      'Игры онлайн на максимальных скоростях',
      'Мгновенная загрузка и передача файлов'
    ],
    isPopular: false
  }
];

export const benefits = [
  {
    id: 'speed',
    title: 'Сверхскоростной доступ',
    description: 'Скорость до 10 Гбит/с для мгновенной загрузки и передачи данных без задержек',
    icon: 'zap'
  },
  {
    id: 'reliability',
    title: 'Надежное соединение',
    description: 'Стабильный интернет 24/7 с гарантированным временем безотказной работы 99.9%',
    icon: 'shield-check'
  },
  {
    id: 'coverage',
    title: 'Широкое покрытие',
    description: 'Доступно во всех крупных городах России с постоянным расширением сети',
    icon: 'globe'
  },
  {
    id: 'support',
    title: 'Премиум поддержка',
    description: 'Круглосуточная техническая поддержка с быстрым временем отклика',
    icon: 'headphones'
  }
];
