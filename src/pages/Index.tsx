import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [message, setMessage] = useState('');
  const [selectedModel, setSelectedModel] = useState('grok');
  const [selectedAssistant, setSelectedAssistant] = useState('universal');
  const [chatMessages, setChatMessages] = useState([
    { type: 'ai', content: 'Привет! Я — AI-платформа нового поколения. Выберите модель и ассистента для работы!' }
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;
    
    const modelName = aiModels.find(m => m.id === selectedModel)?.name || 'AI';
    const assistantName = assistants.find(a => a.id === selectedAssistant)?.name || 'Ассистент';
    
    setChatMessages(prev => [
      ...prev,
      { type: 'user', content: message },
      { type: 'ai', content: `${modelName} (${assistantName}): Анализирую ваш запрос... Обрабатываю с помощью нейросети!` }
    ]);
    setMessage('');
  };

  const aiModels = [
    { id: 'grok', name: 'Grok', description: 'Мощная модель от X', speed: '15ms', accuracy: '98%', color: 'from-blue-500 to-cyan-500' },
    { id: 'gpt4', name: 'GPT-4', description: 'OpenAI флагман', speed: '20ms', accuracy: '97%', color: 'from-green-500 to-emerald-500' },
    { id: 'claude', name: 'Claude', description: 'Anthropic AI', speed: '18ms', accuracy: '96%', color: 'from-purple-500 to-violet-500' },
    { id: 'gemini', name: 'Gemini', description: 'Google AI', speed: '22ms', accuracy: '95%', color: 'from-orange-500 to-red-500' },
    { id: 'llama', name: 'LLaMA', description: 'Meta открытая модель', speed: '25ms', accuracy: '94%', color: 'from-indigo-500 to-blue-500' },
    { id: 'mistral', name: 'Mistral', description: 'Европейский AI', speed: '30ms', accuracy: '93%', color: 'from-pink-500 to-rose-500' }
  ];

  const assistants = [
    { id: 'universal', name: 'Универсальный', icon: 'Brain', description: 'Отвечает на любые вопросы' },
    { id: 'coder', name: 'Программист', icon: 'Code', description: 'Создание и отладка кода' },
    { id: 'designer', name: 'Дизайнер', icon: 'Palette', description: 'UI/UX и веб-дизайн' },
    { id: 'writer', name: 'Копирайтер', icon: 'PenTool', description: 'Тексты и контент' },
    { id: 'analyst', name: 'Аналитик', icon: 'BarChart', description: 'Данные и аналитика' },
    { id: 'teacher', name: 'Преподаватель', icon: 'GraduationCap', description: 'Обучение и объяснения' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background text-foreground">
      
      {/* Header */}
      <header className="container mx-auto px-6 py-6 sticky top-0 bg-background/80 backdrop-blur-md z-50 border-b border-primary/10">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
              <Icon name="Zap" size={24} className="text-primary-foreground" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI HUB
              </span>
              <div className="text-xs text-muted-foreground">Мультимодельная платформа</div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="border-primary/20">
              <Icon name="Cpu" size={12} className="mr-1" />
              6 моделей
            </Badge>
            <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
              <Icon name="User" size={16} className="mr-2" />
              Войти
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <Badge className="mb-4 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border-primary/20">
              <Icon name="Sparkles" size={12} className="mr-1" />
              Новое поколение AI
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Все лучшие 
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {' '}AI модели{' '}
            </span>
            в одном месте
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Объединили GPT-4, Claude, Gemini, Grok и другие передовые нейросети. 
            Выбирайте лучшую модель для каждой задачи.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-4">
              <Icon name="Rocket" size={20} className="mr-2" />
              Попробовать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary/20 hover:bg-primary/10">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть демо
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">6</div>
              <div className="text-sm text-muted-foreground">AI моделей</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-1">100K+</div>
              <div className="text-sm text-muted-foreground">Пользователей</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">15ms</div>
              <div className="text-sm text-muted-foreground">Скорость</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Доступность</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Models Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Выберите AI модель
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Каждая модель оптимизирована для разных задач. Сравните и выберите подходящую.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiModels.map((model) => (
              <Card 
                key={model.id} 
                className={`p-6 cursor-pointer transition-all duration-300 hover:scale-105 border-2 ${
                  selectedModel === model.id 
                    ? 'border-primary bg-primary/5' 
                    : 'border-primary/10 hover:border-primary/30'
                }`}
                onClick={() => setSelectedModel(model.id)}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${model.color} flex items-center justify-center mb-4 mx-auto`}>
                  <Icon name="Brain" size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-center mb-2">{model.name}</h3>
                <p className="text-muted-foreground text-center mb-4">{model.description}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Скорость</span>
                    <Badge variant="secondary">{model.speed}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Точность</span>
                    <Badge variant="secondary">{model.accuracy}</Badge>
                  </div>
                </div>

                {selectedModel === model.id && (
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                    <div className="flex items-center justify-center text-primary font-medium">
                      <Icon name="Check" size={16} className="mr-2" />
                      Выбрано
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistants Section */}
      <section className="container mx-auto px-6 py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Специализированные ассистенты
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Каждый ассистент настроен для определенных задач и знает свою область лучше всего.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assistants.map((assistant) => (
              <Card 
                key={assistant.id} 
                className={`p-6 cursor-pointer transition-all duration-300 hover:scale-105 border-2 ${
                  selectedAssistant === assistant.id 
                    ? 'border-secondary bg-secondary/5' 
                    : 'border-primary/10 hover:border-secondary/30'
                }`}
                onClick={() => setSelectedAssistant(assistant.id)}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-secondary to-accent flex items-center justify-center mb-4">
                  <Icon name={assistant.icon as any} size={24} className="text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{assistant.name}</h3>
                <p className="text-muted-foreground mb-4">{assistant.description}</p>
                
                {selectedAssistant === assistant.id && (
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <div className="flex items-center text-secondary font-medium">
                      <Icon name="Check" size={16} className="mr-2" />
                      Активен
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Chat Demo */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Попробуйте AI в действии
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Model & Assistant Selection */}
            <div className="space-y-6">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10">
                <h3 className="font-bold mb-4 flex items-center">
                  <Icon name="Settings" size={18} className="mr-2 text-primary" />
                  Настройки
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Модель</label>
                    <div className="text-sm p-3 bg-primary/10 rounded-lg">
                      <div className="font-medium">{aiModels.find(m => m.id === selectedModel)?.name}</div>
                      <div className="text-muted-foreground">{aiModels.find(m => m.id === selectedModel)?.description}</div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Ассистент</label>
                    <div className="text-sm p-3 bg-secondary/10 rounded-lg">
                      <div className="font-medium">{assistants.find(a => a.id === selectedAssistant)?.name}</div>
                      <div className="text-muted-foreground">{assistants.find(a => a.id === selectedAssistant)?.description}</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10">
                <h3 className="font-bold mb-4 flex items-center">
                  <Icon name="BarChart" size={18} className="mr-2 text-accent" />
                  Статистика
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Запросов сегодня</span>
                    <span className="font-mono text-primary">1,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Среднее время</span>
                    <span className="font-mono text-secondary">18ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Успешных ответов</span>
                    <span className="font-mono text-accent">98.7%</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Chat Interface */}
            <div className="lg:col-span-2">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10">
                <div className="h-96 overflow-y-auto mb-4 space-y-4 p-4 bg-background/30 rounded-lg">
                  {chatMessages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                        msg.type === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-secondary/20 text-foreground border border-secondary/20'
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
                    placeholder="Напишите ваш вопрос..."
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                  <Button onClick={sendMessage} className="bg-gradient-to-r from-primary to-secondary px-6">
                    <Icon name="Send" size={16} />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Website Generator */}
      <section className="container mx-auto px-6 py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Создание сайтов с помощью AI
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Опишите идею — получите готовый сайт за 15 секунд
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageSquare" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Опишите идею</h3>
              <p className="text-muted-foreground">Расскажите что хотите создать</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-secondary to-accent flex items-center justify-center mx-auto mb-4">
                <Icon name="Cpu" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. AI генерирует</h3>
              <p className="text-muted-foreground">Нейросеть создает структуру и дизайн</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-accent to-primary flex items-center justify-center mx-auto mb-4">
                <Icon name="Globe" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Готовый сайт</h3>
              <p className="text-muted-foreground">Получаете рабочий сайт с кодом</p>
            </div>
          </div>

          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-12 py-4">
            <Icon name="Sparkles" size={20} className="mr-2" />
            Создать сайт сейчас
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/10 py-12 bg-card/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <Icon name="Zap" size={16} className="text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  AI HUB
                </span>
              </div>
              <p className="text-muted-foreground">
                Мультимодельная AI платформа для решения любых задач
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Модели</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>Grok</div>
                <div>GPT-4</div>
                <div>Claude</div>
                <div>Gemini</div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Ассистенты</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>Программист</div>
                <div>Дизайнер</div>
                <div>Копирайтер</div>
                <div>Аналитик</div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Поддержка</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>Документация</div>
                <div>API</div>
                <div>Контакты</div>
                <div>Условия</div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-primary/10 text-center text-muted-foreground">
            <p>&copy; 2025 AI HUB. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}