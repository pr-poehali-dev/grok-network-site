import { useState, useCallback, useMemo, memo } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

// Статичные данные вынесены наружу чтобы не пересоздавались при каждом рендере
const AI_MODELS = [
  { id: 'grok', name: 'Grok', desc: 'X AI', speed: '15ms', acc: '98%' },
  { id: 'gpt4', name: 'GPT-4', desc: 'OpenAI', speed: '20ms', acc: '97%' },
  { id: 'claude', name: 'Claude', desc: 'Anthropic', speed: '18ms', acc: '96%' },
  { id: 'gemini', name: 'Gemini', desc: 'Google', speed: '22ms', acc: '95%' },
  { id: 'llama', name: 'LLaMA', desc: 'Meta', speed: '25ms', acc: '94%' },
  { id: 'mistral', name: 'Mistral', desc: 'EU AI', speed: '30ms', acc: '93%' }
];

const ASSISTANTS = [
  { id: 'universal', name: 'Универсальный', icon: 'Brain', desc: 'Любые вопросы' },
  { id: 'coder', name: 'Программист', icon: 'Code', desc: 'Код и отладка' },
  { id: 'designer', name: 'Дизайнер', icon: 'Palette', desc: 'UI/UX дизайн' },
  { id: 'writer', name: 'Копирайтер', icon: 'PenTool', desc: 'Тексты' },
  { id: 'analyst', name: 'Аналитик', icon: 'BarChart', desc: 'Данные' },
  { id: 'teacher', name: 'Преподаватель', icon: 'GraduationCap', desc: 'Обучение' }
];

const STATS = [
  { value: '6', label: 'AI моделей' },
  { value: '100K+', label: 'Пользователей' },
  { value: '15ms', label: 'Скорость' },
  { value: '24/7', label: 'Доступность' }
];

// Мемоизированные компоненты
const StatCard = memo(({ stat }: { stat: typeof STATS[0] }) => (
  <div className="text-center">
    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
    <div className="text-sm text-muted-foreground">{stat.label}</div>
  </div>
));

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
    className={`p-4 cursor-pointer transition-colors ${
      isSelected ? 'border-primary bg-primary/5' : 'border-primary/10 hover:border-primary/30'
    }`}
    onClick={() => onSelect(model.id)}
  >
    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-3 mx-auto">
      <Icon name="Brain" size={24} className="text-white" />
    </div>
    
    <h3 className="text-lg font-bold text-center mb-1">{model.name}</h3>
    <p className="text-muted-foreground text-center text-sm mb-3">{model.desc}</p>
    
    <div className="space-y-1 text-xs">
      <div className="flex justify-between">
        <span>Скорость</span>
        <span className="font-mono">{model.speed}</span>
      </div>
      <div className="flex justify-between">
        <span>Точность</span>
        <span className="font-mono">{model.acc}</span>
      </div>
    </div>

    {isSelected && (
      <div className="mt-3 p-2 bg-primary/10 rounded-lg text-center">
        <span className="text-primary font-medium text-sm">✓ Выбрано</span>
      </div>
    )}
  </Card>
));

const AssistantCard = memo(({ 
  assistant, 
  isSelected, 
  onSelect 
}: { 
  assistant: typeof ASSISTANTS[0], 
  isSelected: boolean, 
  onSelect: (id: string) => void 
}) => (
  <Card 
    className={`p-4 cursor-pointer transition-colors ${
      isSelected ? 'border-secondary bg-secondary/5' : 'border-primary/10 hover:border-secondary/30'
    }`}
    onClick={() => onSelect(assistant.id)}
  >
    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-secondary to-accent flex items-center justify-center mb-3">
      <Icon name={assistant.icon as any} size={20} className="text-white" />
    </div>
    
    <h3 className="font-bold mb-1">{assistant.name}</h3>
    <p className="text-muted-foreground text-sm">{assistant.desc}</p>
    
    {isSelected && (
      <div className="mt-2 text-secondary font-medium text-sm">✓ Активен</div>
    )}
  </Card>
));

export default function Index() {
  const [message, setMessage] = useState('');
  const [selectedModel, setSelectedModel] = useState('grok');
  const [selectedAssistant, setSelectedAssistant] = useState('universal');
  const [messages, setMessages] = useState([
    { type: 'ai', content: 'Привет! Выберите модель и ассистента для работы!' }
  ]);

  // Мемоизированные обработчики
  const handleSendMessage = useCallback(() => {
    if (!message.trim()) return;
    
    const model = AI_MODELS.find(m => m.id === selectedModel);
    const assistant = ASSISTANTS.find(a => a.id === selectedAssistant);
    
    setMessages(prev => [
      ...prev,
      { type: 'user', content: message },
      { type: 'ai', content: `${model?.name} (${assistant?.name}): Обрабатываю запрос...` }
    ]);
    setMessage('');
  }, [message, selectedModel, selectedAssistant]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSendMessage();
  }, [handleSendMessage]);

  // Мемоизированные данные
  const currentModel = useMemo(() => 
    AI_MODELS.find(m => m.id === selectedModel), 
    [selectedModel]
  );
  
  const currentAssistant = useMemo(() => 
    ASSISTANTS.find(a => a.id === selectedAssistant), 
    [selectedAssistant]
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      
      {/* Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold">AI HUB</span>
                <div className="text-xs text-muted-foreground">Мультимодельная платформа</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline">
                <Icon name="Cpu" size={12} className="mr-1" />
                6 моделей
              </Badge>
              <Button variant="outline" size="sm">
                <Icon name="User" size={16} className="mr-2" />
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-6 py-16 text-center">
        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
          <Icon name="Sparkles" size={12} className="mr-1" />
          Новое поколение AI
        </Badge>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Все лучшие 
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {' '}AI модели{' '}
          </span>
          в одном месте
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          GPT-4, Claude, Gemini, Grok и другие передовые нейросети. 
          Выбирайте лучшую модель для каждой задачи.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
            <Icon name="Rocket" size={20} className="mr-2" />
            Попробовать бесплатно
          </Button>
          <Button size="lg" variant="outline">
            <Icon name="Play" size={20} className="mr-2" />
            Смотреть демо
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {STATS.map((stat, i) => (
            <StatCard key={i} stat={stat} />
          ))}
        </div>
      </section>

      {/* AI Models */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Выберите AI модель</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Каждая модель оптимизирована для разных задач
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {AI_MODELS.map((model) => (
            <ModelCard 
              key={model.id}
              model={model}
              isSelected={selectedModel === model.id}
              onSelect={setSelectedModel}
            />
          ))}
        </div>
      </section>

      {/* Assistants */}
      <section className="bg-muted/20 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Специализированные ассистенты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Каждый настроен для определенных задач
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ASSISTANTS.map((assistant) => (
              <AssistantCard 
                key={assistant.id}
                assistant={assistant}
                isSelected={selectedAssistant === assistant.id}
                onSelect={setSelectedAssistant}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Chat Demo */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Попробуйте AI в действии</h2>
        
        <div className="max-w-4xl mx-auto grid lg:grid-cols-4 gap-6">
          {/* Settings */}
          <div className="space-y-4">
            <Card className="p-4">
              <h3 className="font-bold mb-3 flex items-center">
                <Icon name="Settings" size={16} className="mr-2" />
                Настройки
              </h3>
              
              {currentModel && (
                <div className="mb-3">
                  <div className="text-sm font-medium mb-1">Модель</div>
                  <div className="text-sm p-2 bg-primary/10 rounded">
                    <div className="font-medium">{currentModel.name}</div>
                    <div className="text-muted-foreground">{currentModel.desc}</div>
                  </div>
                </div>
              )}
              
              {currentAssistant && (
                <div>
                  <div className="text-sm font-medium mb-1">Ассистент</div>
                  <div className="text-sm p-2 bg-secondary/10 rounded">
                    <div className="font-medium">{currentAssistant.name}</div>
                    <div className="text-muted-foreground">{currentAssistant.desc}</div>
                  </div>
                </div>
              )}
            </Card>

            <Card className="p-4">
              <h3 className="font-bold mb-3 flex items-center">
                <Icon name="BarChart" size={16} className="mr-2" />
                Статистика
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Запросов</span>
                  <span className="font-mono">1,247</span>
                </div>
                <div className="flex justify-between">
                  <span>Время</span>
                  <span className="font-mono">18ms</span>
                </div>
                <div className="flex justify-between">
                  <span>Успешно</span>
                  <span className="font-mono">98.7%</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Chat */}
          <div className="lg:col-span-3">
            <Card className="p-4">
              <div className="h-80 overflow-y-auto mb-4 space-y-3 p-3 bg-muted/10 rounded">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-sm px-3 py-2 rounded-xl ${
                      msg.type === 'user' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-foreground'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Напишите вопрос..."
                  onKeyPress={handleKeyPress}
                  className="bg-background"
                />
                <Button onClick={handleSendMessage}>
                  <Icon name="Send" size={16} />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Website Generator CTA */}
      <section className="bg-muted/20 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Создание сайтов с помощью AI
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Опишите идею — получите готовый сайт за 15 секунд
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center mx-auto mb-3">
                <Icon name="MessageSquare" size={24} className="text-white" />
              </div>
              <h3 className="font-bold mb-1">1. Опишите</h3>
              <p className="text-sm text-muted-foreground">Расскажите что нужно</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-secondary to-accent flex items-center justify-center mx-auto mb-3">
                <Icon name="Cpu" size={24} className="text-white" />
              </div>
              <h3 className="font-bold mb-1">2. AI создает</h3>
              <p className="text-sm text-muted-foreground">Генерация структуры</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-accent to-primary flex items-center justify-center mx-auto mb-3">
                <Icon name="Globe" size={24} className="text-white" />
              </div>
              <h3 className="font-bold mb-1">3. Готово</h3>
              <p className="text-sm text-muted-foreground">Рабочий сайт</p>
            </div>
          </div>

          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
            <Icon name="Sparkles" size={20} className="mr-2" />
            Создать сайт сейчас
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <Icon name="Zap" size={16} className="text-white" />
              </div>
              <span className="text-xl font-bold">AI HUB</span>
            </div>
            
            <div className="flex gap-6 text-muted-foreground text-sm">
              <a href="#" className="hover:text-primary">Модели</a>
              <a href="#" className="hover:text-primary">API</a>
              <a href="#" className="hover:text-primary">Поддержка</a>
              <a href="#" className="hover:text-primary">Условия</a>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t text-center text-muted-foreground text-sm">
            <p>&copy; 2025 AI HUB. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}