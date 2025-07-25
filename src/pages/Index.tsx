import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { type: 'ai', content: 'Привет! Я Grok AI. Готов помочь с любыми вопросами!' }
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;
    
    setChatMessages(prev => [
      ...prev,
      { type: 'user', content: message },
      { type: 'ai', content: 'Анализирую ваш запрос... Grok обрабатывает информацию в реальном времени!' }
    ]);
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background text-foreground">
      
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
              <Icon name="Brain" size={24} className="text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              GROK AI
            </span>
          </div>
          <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
            <Icon name="User" size={16} className="mr-2" />
            Войти
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Будущее 
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse">
              {' '}AI{' '}
            </span>
            уже здесь
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Grok — революционная нейросеть с продвинутыми возможностями анализа и генерации контента. 
            Испытайте мощь искусственного интеллекта нового поколения.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-4">
              <Icon name="Zap" size={20} className="mr-2" />
              Попробовать Grok
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary/20 hover:bg-primary/10">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть демо
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1M+</div>
              <div className="text-muted-foreground">Активных пользователей</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">99.9%</div>
              <div className="text-muted-foreground">Время работы</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-muted-foreground">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Generator Section */}
      <section className="container mx-auto px-6 py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Создавайте сайты 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {' '}одной фразой
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Опишите свою идею — Grok AI создаст полноценный сайт за секунды. 
              От лендингов до интернет-магазинов.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Website Generator Form */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/10">
              <h3 className="text-2xl font-bold mb-6 text-center">Генератор сайтов</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Тип сайта</label>
                  <select className="w-full p-3 rounded-lg bg-background/50 border border-primary/20 focus:border-primary focus:outline-none">
                    <option>Лендинг</option>
                    <option>Интернет-магазин</option>
                    <option>Корпоративный сайт</option>
                    <option>Блог</option>
                    <option>Портфолио</option>
                    <option>Ресторан</option>
                    <option>Стартап</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Опишите ваш проект</label>
                  <textarea 
                    className="w-full p-3 rounded-lg bg-background/50 border border-primary/20 focus:border-primary focus:outline-none h-32 resize-none"
                    placeholder="Например: Создай сайт для кофейни с онлайн заказом, меню, галереей и контактами. Стиль — уютный и современный..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Цветовая схема</label>
                    <select className="w-full p-3 rounded-lg bg-background/50 border border-primary/20 focus:border-primary focus:outline-none">
                      <option>Синяя</option>
                      <option>Зелёная</option>
                      <option>Фиолетовая</option>
                      <option>Красная</option>
                      <option>Минималистичная</option>
                      <option>Тёмная</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Стиль</label>
                    <select className="w-full p-3 rounded-lg bg-background/50 border border-primary/20 focus:border-primary focus:outline-none">
                      <option>Современный</option>
                      <option>Классический</option>
                      <option>Минимализм</option>
                      <option>Креативный</option>
                      <option>Корпоративный</option>
                    </select>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-4">
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Создать сайт с помощью AI
                </Button>
              </div>
            </Card>

            {/* Features & Examples */}
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Примеры созданных сайтов</h3>
                <p className="text-muted-foreground mb-6">
                  Более 50,000 сайтов уже создано с помощью Grok AI
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 bg-card/30 border-primary/10 hover:border-primary/30 transition-all cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-3 flex items-center justify-center">
                    <Icon name="Store" size={32} className="text-primary" />
                  </div>
                  <h4 className="font-semibold mb-1">Интернет-магазин</h4>
                  <p className="text-sm text-muted-foreground">Одежда и аксессуары</p>
                </Card>

                <Card className="p-4 bg-card/30 border-primary/10 hover:border-primary/30 transition-all cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-green-500/20 to-yellow-500/20 rounded-lg mb-3 flex items-center justify-center">
                    <Icon name="Coffee" size={32} className="text-secondary" />
                  </div>
                  <h4 className="font-semibold mb-1">Кафе</h4>
                  <p className="text-sm text-muted-foreground">Меню и заказы</p>
                </Card>

                <Card className="p-4 bg-card/30 border-primary/10 hover:border-primary/30 transition-all cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-3 flex items-center justify-center">
                    <Icon name="Briefcase" size={32} className="text-accent" />
                  </div>
                  <h4 className="font-semibold mb-1">Портфолио</h4>
                  <p className="text-sm text-muted-foreground">Дизайнер</p>
                </Card>

                <Card className="p-4 bg-card/30 border-primary/10 hover:border-primary/30 transition-all cursor-pointer">
                  <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg mb-3 flex items-center justify-center">
                    <Icon name="Building" size={32} className="text-primary" />
                  </div>
                  <h4 className="font-semibold mb-1">Стартап</h4>
                  <p className="text-sm text-muted-foreground">SaaS платформа</p>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6">
                <h4 className="font-bold mb-3 flex items-center">
                  <Icon name="Clock" size={20} className="mr-2 text-primary" />
                  Скорость создания
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Анализ запроса</span>
                    <span className="text-primary font-mono">2 сек</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Генерация структуры</span>
                    <span className="text-secondary font-mono">5 сек</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Создание дизайна</span>
                    <span className="text-accent font-mono">8 сек</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Готовый сайт</span>
                    <span className="text-primary font-mono">15 сек</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Chat Demo */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Попробуйте Grok в действии
          </h2>
          
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/10">
            <div className="h-96 overflow-y-auto mb-4 space-y-4">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
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
                placeholder="Задайте вопрос Grok AI..."
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                className="bg-background/50 border-primary/20 focus:border-primary"
              />
              <Button onClick={sendMessage} className="bg-gradient-to-r from-primary to-secondary">
                <Icon name="Send" size={16} />
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Возможности Grok AI
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                <Icon name="Brain" size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Глубокое обучение</h3>
              <p className="text-muted-foreground">
                Передовые алгоритмы машинного обучения для понимания контекста и генерации точных ответов.
              </p>
            </Card>

            <Card className="p-6 bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-secondary to-accent flex items-center justify-center mb-4">
                <Icon name="Zap" size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Молниеносная скорость</h3>
              <p className="text-muted-foreground">
                Обработка запросов за миллисекунды благодаря оптимизированной архитектуре нейросети.
              </p>
            </Card>

            <Card className="p-6 bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-accent to-primary flex items-center justify-center mb-4">
                <Icon name="Shield" size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Безопасность</h3>
              <p className="text-muted-foreground">
                Высочайший уровень защиты данных и конфиденциальности пользователей.
              </p>
            </Card>

            <Card className="p-6 bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4">
                <Icon name="Globe" size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Мультиязычность</h3>
              <p className="text-muted-foreground">
                Поддержка более 100 языков для глобального использования и локализации.
              </p>
            </Card>

            <Card className="p-6 bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-secondary to-accent flex items-center justify-center mb-4">
                <Icon name="Cpu" size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">API интеграция</h3>
              <p className="text-muted-foreground">
                Простая интеграция в любые проекты через RESTful API и SDK для разработчиков.
              </p>
            </Card>

            <Card className="p-6 bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-accent to-primary flex items-center justify-center mb-4">
                <Icon name="TrendingUp" size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Постоянное развитие</h3>
              <p className="text-muted-foreground">
                Регулярные обновления и улучшения модели для повышения качества ответов.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы начать работу с Grok AI?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Присоединяйтесь к миллионам пользователей, которые уже используют возможности ИИ нового поколения
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-12 py-4">
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-12 py-4 border-primary/20 hover:bg-primary/10">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/10 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <Icon name="Brain" size={16} className="text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                GROK AI
              </span>
            </div>
            
            <div className="flex space-x-6 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">О нас</a>
              <a href="#" className="hover:text-primary transition-colors">API</a>
              <a href="#" className="hover:text-primary transition-colors">Поддержка</a>
              <a href="#" className="hover:text-primary transition-colors">Условия</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-primary/10 text-center text-muted-foreground">
            <p>&copy; 2025 Grok AI. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}