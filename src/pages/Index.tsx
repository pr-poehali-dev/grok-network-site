import { useState, useCallback, useMemo, memo } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

// AI модели с российским акцентом
const AI_MODELS = [
  { 
    id: 'gpt4', 
    name: 'ChatGPT-4', 
    company: 'OpenAI', 
    speed: '2.1с', 
    quality: '98%',
    desc: 'Лучшая языковая модель',
    available: true,
    price: '₽120/1K токенов'
  },
  { 
    id: 'gpt35', 
    name: 'ChatGPT-3.5', 
    company: 'OpenAI', 
    speed: '0.8с', 
    quality: '95%',
    desc: 'Быстрая и доступная',
    available: true,
    price: '₽25/1K токенов'
  },
  { 
    id: 'claude', 
    name: 'Claude-3', 
    company: 'Anthropic', 
    speed: '1.5с', 
    quality: '97%',
    desc: 'Умный помощник',
    available: true,
    price: '₽85/1K токенов'
  },
  { 
    id: 'gemini', 
    name: 'Gemini Pro', 
    company: 'Google', 
    speed: '1.2с', 
    quality: '96%',
    desc: 'Мультимодальный AI',
    available: true,
    price: '₽45/1K токенов'
  },
  { 
    id: 'yandex', 
    name: 'YandexGPT', 
    company: 'Яндекс', 
    speed: '0.9с', 
    quality: '94%',
    desc: 'Понимает русский контекст',
    available: true,
    price: '₽30/1K токенов'
  },
  { 
    id: 'gigachat', 
    name: 'GigaChat', 
    company: 'Сбер', 
    speed: '1.1с', 
    quality: '93%',
    desc: 'Российская нейросеть',
    available: true,
    price: '₽35/1K токенов'
  }
];

const FEATURES = [
  { icon: 'MessageSquare', title: 'Чат с AI', desc: 'Общение в реальном времени' },
  { icon: 'FileText', title: 'Генерация текстов', desc: 'Статьи, посты, документы' },
  { icon: 'Code', title: 'Помощь с кодом', desc: 'Программирование на любых языках' },
  { icon: 'Languages', title: 'Переводы', desc: 'Качественный перевод текстов' },
  { icon: 'BookOpen', title: 'Обучение', desc: 'Объяснения сложных тем' },
  { icon: 'Lightbulb', title: 'Идеи', desc: 'Креативное мышление' }
];

const STATS = [
  { value: '6', label: 'AI моделей', icon: 'Brain' },
  { value: '50K+', label: 'Пользователей', icon: 'Users' },
  { value: '1.5М+', label: 'Запросов в день', icon: 'MessageCircle' },
  { value: '99.9%', label: 'Время работы', icon: 'Zap' }
];

// Мемоизированные компоненты
const ModelCard = memo(({ 
  model, 
  isSelected, 
  onSelect 
}: { 
  model: typeof AI_MODELS[0], 
  isSelected: boolean, 
  onSelect: (id: string) => void 
}) => (
  <Card 
    className={`p-6 cursor-pointer transition-all duration-200 ${
      isSelected 
        ? 'border-blue-500 bg-blue-50 shadow-lg scale-105' 
        : 'border-gray-200 hover:border-blue-300 hover:shadow-md'
    }`}
    onClick={() => onSelect(model.id)}
  >
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
          isSelected ? 'bg-blue-500' : 'bg-gray-100'
        }`}>
          <Icon name="Brain" size={24} className={isSelected ? 'text-white' : 'text-gray-600'} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">{model.name}</h3>
          <p className="text-sm text-gray-500">{model.company}</p>
        </div>
      </div>
      {model.available ? (
        <Badge className="bg-green-100 text-green-700 border-green-200">
          Доступно
        </Badge>
      ) : (
        <Badge variant="secondary">Скоро</Badge>
      )}
    </div>
    
    <p className="text-gray-600 text-sm mb-4">{model.desc}</p>
    
    <div className="grid grid-cols-2 gap-3 text-xs mb-4">
      <div className="bg-gray-50 p-2 rounded">
        <div className="text-gray-500">Скорость</div>
        <div className="font-mono font-medium">{model.speed}</div>
      </div>
      <div className="bg-gray-50 p-2 rounded">
        <div className="text-gray-500">Качество</div>
        <div className="font-mono font-medium">{model.quality}</div>
      </div>
    </div>

    <div className="text-sm">
      <div className="text-gray-500">Стоимость</div>
      <div className="font-medium text-gray-900">{model.price}</div>
    </div>

    {isSelected && (
      <div className="mt-4 p-3 bg-blue-100 rounded-lg flex items-center justify-center">
        <Icon name="Check" size={16} className="text-blue-600 mr-2" />
        <span className="text-blue-700 font-medium">Выбрано</span>
      </div>
    )}
  </Card>
));

const FeatureCard = memo(({ feature }: { feature: typeof FEATURES[0] }) => (
  <div className="text-center p-6">
    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
      <Icon name={feature.icon as any} size={28} className="text-white" />
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
    <p className="text-gray-600 text-sm">{feature.desc}</p>
  </div>
));

const StatCard = memo(({ stat }: { stat: typeof STATS[0] }) => (
  <div className="text-center p-6 bg-white rounded-xl shadow-sm">
    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
      <Icon name={stat.icon as any} size={24} className="text-blue-600" />
    </div>
    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
    <div className="text-sm text-gray-500">{stat.label}</div>
  </div>
));

export default function Index() {
  const [selectedModel, setSelectedModel] = useState('gpt4');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { 
      type: 'ai', 
      content: '👋 Привет! Я ваш AI-помощник. Выберите модель и задайте любой вопрос!',
      model: 'system'
    }
  ]);

  const handleSendMessage = useCallback(() => {
    if (!message.trim()) return;
    
    const model = AI_MODELS.find(m => m.id === selectedModel);
    
    setMessages(prev => [
      ...prev,
      { type: 'user', content: message, model: 'user' },
      { 
        type: 'ai', 
        content: `[${model?.name}] Обрабатываю ваш запрос... Это демо-версия, поэтому я не могу дать реальный ответ, но в продакшене здесь будет полноценный ответ от выбранной модели.`,
        model: selectedModel
      }
    ]);
    setMessage('');
  }, [message, selectedModel]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  }, [handleSendMessage]);

  const currentModel = useMemo(() => 
    AI_MODELS.find(m => m.id === selectedModel), 
    [selectedModel]
  );

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Icon name="Brain" size={24} className="text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">NeuroChat.ru</span>
                <div className="text-xs text-gray-500">Лучшие AI модели России</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Badge className="bg-red-100 text-red-700 border-red-200">
                <Icon name="MapPin" size={12} className="mr-1" />
                🇷🇺 Россия
              </Badge>
              <Button variant="outline" size="sm">
                <Icon name="User" size={16} className="mr-2" />
                Войти
              </Button>
              <Button size="sm" className="bg-blue-600">
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-200 px-4 py-2">
            <Icon name="Sparkles" size={16} className="mr-2" />
            🚀 Новое поколение российского AI
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Нейросети для
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}каждого{' '}
            </span>
            россиянина
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            ChatGPT-4, Claude, Gemini, YandexGPT и GigaChat в одном месте. 
            Выбирайте лучшую модель для решения ваших задач.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 px-8">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Начать чат бесплатно
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300">
              <Icon name="PlayCircle" size={20} className="mr-2" />
              Посмотреть демо
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {STATS.map((stat, i) => (
              <StatCard key={i} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Models Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Выберите свою AI модель
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              От быстрого ChatGPT-3.5 до мощного GPT-4. Включая российские модели YandexGPT и GigaChat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AI_MODELS.map((model) => (
              <ModelCard 
                key={model.id}
                model={model}
                isSelected={selectedModel === model.id}
                onSelect={setSelectedModel}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Возможности платформы
            </h2>
            <p className="text-xl text-gray-600">
              Универсальный помощник для работы, учебы и творчества
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, i) => (
              <FeatureCard key={i} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Live Chat Demo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Попробуйте прямо сейчас
            </h2>
            <p className="text-xl text-gray-600">
              Демо-чат с выбранной AI моделью
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-6">
              
              {/* Model Info */}
              <div className="space-y-4">
                <Card className="p-4">
                  <h3 className="font-bold mb-3 flex items-center text-gray-900">
                    <Icon name="Settings" size={16} className="mr-2 text-blue-600" />
                    Текущая модель
                  </h3>
                  
                  {currentModel && (
                    <div className="space-y-3">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="font-bold text-gray-900">{currentModel.name}</div>
                        <div className="text-sm text-gray-600">{currentModel.company}</div>
                        <div className="text-xs text-blue-600 mt-1">{currentModel.price}</div>
                      </div>
                      
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Скорость:</span>
                          <span className="font-mono">{currentModel.speed}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Качество:</span>
                          <span className="font-mono">{currentModel.quality}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>

                <Card className="p-4">
                  <h3 className="font-bold mb-3 flex items-center text-gray-900">
                    <Icon name="BarChart" size={16} className="mr-2 text-green-600" />
                    Статистика сессии
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Сообщений:</span>
                      <span className="font-mono">{messages.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Токенов:</span>
                      <span className="font-mono">~{messages.length * 20}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Стоимость:</span>
                      <span className="font-mono">₽{(messages.length * 0.5).toFixed(1)}</span>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Chat Interface */}
              <div className="lg:col-span-3">
                <Card className="p-6">
                  <div className="h-96 overflow-y-auto mb-6 space-y-4 p-4 bg-gray-50 rounded-lg">
                    {messages.map((msg, i) => (
                      <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-sm px-4 py-3 rounded-xl ${
                          msg.type === 'user' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-white text-gray-900 border border-gray-200'
                        }`}>
                          {msg.content}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Напишите ваш вопрос..."
                      onKeyPress={handleKeyPress}
                      className="bg-white border-gray-300 focus:border-blue-500"
                    />
                    <Button 
                      onClick={handleSendMessage}
                      className="bg-blue-600 hover:bg-blue-700"
                      disabled={!message.trim()}
                    >
                      <Icon name="Send" size={16} />
                    </Button>
                  </div>

                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Нажмите Enter для отправки • Это демо-версия
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Russian Focus CTA */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              🇷🇺 Сделано для России
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Поддержка русского языка, российские модели, рублевые цены и соответствие местному законодательству
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="text-4xl mb-3">🏛️</div>
                <h3 className="font-bold text-gray-900 mb-2">Соответствие 152-ФЗ</h3>
                <p className="text-sm text-gray-600">Персональные данные в России</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="font-bold text-gray-900 mb-2">Оплата в рублях</h3>
                <p className="text-sm text-gray-600">Российские карты, НДС включен</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🤝</div>
                <h3 className="font-bold text-gray-900 mb-2">Техподдержка 24/7</h3>
                <p className="text-sm text-gray-600">На русском языке</p>
              </div>
            </div>

            <Button size="lg" className="bg-gradient-to-r from-red-600 to-blue-600 px-10">
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать использовать бесплатно
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Icon name="Brain" size={16} className="text-white" />
                </div>
                <span className="text-xl font-bold">NeuroChat.ru</span>
              </div>
              <p className="text-gray-400 text-sm">
                Российская платформа для работы с лучшими AI моделями мира
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-3">AI Модели</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div>ChatGPT-4</div>
                <div>Claude-3</div>
                <div>YandexGPT</div>
                <div>GigaChat</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-3">Поддержка</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Документация</div>
                <div>API</div>
                <div>Telegram бот</div>
                <div>Техподдержка</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-3">Компания</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div>О нас</div>
                <div>Блог</div>
                <div>Вакансии</div>
                <div>Контакты</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 NeuroChat.ru. Все права защищены.
            </div>
            <div className="flex gap-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-white">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}