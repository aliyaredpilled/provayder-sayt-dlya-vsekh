
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
    color: '#FF9500',
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
    id: 'standard',
    name: 'Стандарт',
    speed: '100 Мбит/с',
    price: '499 ₽',
    period: 'месяц',
    color: '#8E8E93',
    features: [
      'Безлимитный интернет',
      'Базовая техподдержка',
      'Wi-Fi роутер (аренда)',
      'До 2 устройств HD-стриминг'
    ],
    isPopular: false
  },
  {
    id: 'fast',
    name: 'Быстрый',
    speed: '1 Гбит/с',
    price: '999 ₽',
    period: 'месяц',
    color: '#FF9500',
    features: [
      'Безлимитный интернет',
      'Приоритетная техподдержка',
      'Wi-Fi 6 роутер (аренда)',
      'До 8 устройств 4K-стриминг',
      'Бесплатное подключение'
    ],
    isPopular: true
  },
  {
    id: 'ultrafast',
    name: 'Сверхскоростной',
    speed: '10 Гбит/с',
    price: '2499 ₽',
    period: 'месяц',
    color: '#0A84FF',
    features: [
      'Безлимитный интернет',
      'Круглосуточная премиум поддержка',
      'Wi-Fi 6E роутер (в подарок)',
      'Неограниченный 4K/8K-стриминг',
      'Приоритетная установка',
      'Статический IP-адрес'
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
