import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const newsArticles = [
  {
    id: 1,
    title: 'Новая орбитальная станция начнет работу в 2025',
    description: 'Международный консорциум космических агентств объявил о планах запуска новой орбитальной станции для исследований в области астрофизики и материаловедения.',
    date: '15 сентября 2024',
    image: '/img/61ed9892-b26a-4cef-84b8-7f79f3d09cac.jpg',
    category: 'Технологии'
  },
  {
    id: 2,
    title: 'SpaceX успешно запустила новый спутник связи',
    description: 'Компания SpaceX провела успешный запуск нового поколения спутников связи Starlink, которые обеспечат интернет-покрытие в труднодоступных регионах.',
    date: '12 сентября 2024',
    image: '/img/d7eb4de9-4ee4-42b2-a61c-bd9b02d207d5.jpg',
    category: 'Запуски'
  },
  {
    id: 3,
    title: 'Обнаружена потенциально обитаемая экзопланета',
    description: 'Астрономы с помощью телескопа Джеймса Уэбба обнаружили экзопланету в зоне обитаемости звезды, находящейся на расстоянии 120 световых лет от Земли.',
    date: '10 сентября 2024',
    image: '/img/dede4769-20b4-436d-a191-e68c61d175f2.jpg',
    category: 'Открытия'
  },
  {
    id: 4,
    title: 'NASA планирует миссию к спутникам Юпитера',
    description: 'Агентство NASA объявило о подготовке миссии Europa Clipper, которая займется изучением ледяных лун Юпитера на предмет наличия жизни.',
    date: '8 сентября 2024',
    image: '/img/dede4769-20b4-436d-a191-e68c61d175f2.jpg',
    category: 'Миссии'
  },
  {
    id: 5,
    title: 'Китай запустил модуль лунной базы',
    description: 'Китайское космическое агентство успешно вывело на орбиту первый модуль будущей лунной базы, которая станет основой для долгосрочного присутствия человека на Луне.',
    date: '5 сентября 2024',
    image: '/img/61ed9892-b26a-4cef-84b8-7f79f3d09cac.jpg',
    category: 'Технологии'
  },
  {
    id: 6,
    title: 'Солнечная активность достигла пика цикла',
    description: 'Ученые зафиксировали максимальную солнечную активность текущего цикла, что может повлиять на работу спутников и радиосвязь на Земле.',
    date: '3 сентября 2024',
    image: '/img/d7eb4de9-4ee4-42b2-a61c-bd9b02d207d5.jpg',
    category: 'Наука'
  }
];

const categories = ['Все новости', 'Технологии', 'Запуски', 'Открытия', 'Миссии', 'Наука'];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('Все новости');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'Все новости' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0E27] via-[#1E3A8A] to-[#0A0E27]">
      <header className="border-b border-primary/20 backdrop-blur-sm bg-card/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Satellite" size={32} className="text-primary animate-glow" />
              <h1 className="text-2xl font-orbitron font-bold text-primary">SPACE NEWS</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Поиск новостей..."
                  className="pl-10 w-64 bg-card/80 border-primary/30 focus:border-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" className="border-primary/50 hover:bg-primary/20 hover:text-primary">
                <Icon name="User" size={20} className="mr-2" />
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="flex gap-8">
          <aside className="w-64 hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg font-orbitron flex items-center gap-2">
                    <Icon name="Menu" size={20} />
                    Навигация
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                        selectedCategory === category 
                          ? 'bg-primary text-primary-foreground font-semibold' 
                          : 'hover:bg-accent/50 text-foreground'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg font-orbitron flex items-center gap-2">
                    <Icon name="Rocket" size={20} />
                    О проекте
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Актуальные новости о космосе, спутниках и исследованиях Вселенной
                  </p>
                </CardContent>
              </Card>
            </div>
          </aside>

          <main className="flex-1">
            <div className="mb-8 md:hidden">
              <div className="relative">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Поиск новостей..."
                  className="pl-10 bg-card/80 border-primary/30 focus:border-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredArticles.map((article, index) => (
                <Card 
                  key={article.id} 
                  className="bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 animate-fade-in group overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="font-orbitron text-lg group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-xs text-muted-foreground flex items-center gap-1">
                      <Icon name="Calendar" size={14} />
                      {article.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/80 line-clamp-3 mb-4">
                      {article.description}
                    </p>
                    <Button variant="outline" className="w-full border-primary/50 hover:bg-primary hover:text-primary-foreground">
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-16">
                <Icon name="SearchX" size={64} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-orbitron text-muted-foreground">Новости не найдены</h3>
                <p className="text-sm text-muted-foreground mt-2">Попробуйте изменить параметры поиска</p>
              </div>
            )}
          </main>
        </div>
      </div>

      <footer className="mt-16 border-t border-primary/20 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Satellite" size={28} className="text-primary" />
                <h3 className="text-xl font-orbitron font-bold text-primary">SPACE NEWS</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Ваш источник последних новостей о космосе, спутниках и астрономических открытиях
              </p>
            </div>
            
            <div>
              <h4 className="font-orbitron font-bold mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Технологии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Запуски</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Открытия</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Миссии</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-orbitron font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@spacenews.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Globe" size={16} />
                  www.spacenews.ru
                </li>
              </ul>
              <div className="flex gap-4 mt-4">
                <Icon name="Twitter" size={20} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Facebook" size={20} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Youtube" size={20} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary/20 mt-8 pt-6 text-center text-sm text-muted-foreground">
            <p>© 2024 Space News. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
