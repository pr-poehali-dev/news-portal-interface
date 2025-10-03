import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function UIKit() {
  const [inputValue, setInputValue] = useState('');

  const colors = [
    { name: 'Dark', hex: '#0A0E27', var: '--background' },
    { name: 'Blue', hex: '#1E3A8A', var: '--secondary' },
    { name: 'Blue Accent', hex: '#3B82F6', var: '--primary' },
    { name: 'Light Blue', hex: '#60A5FA', var: '--accent' },
    { name: 'White', hex: '#FFFFFF', var: '--foreground' },
  ];

  const icons = [
    'Satellite', 'Rocket', 'Calendar', 'Search', 'User', 'Menu',
    'ArrowRight', 'Mail', 'Globe', 'Twitter', 'Facebook', 'Youtube',
    'Home', 'Settings', 'Bell', 'Heart', 'Star', 'CheckCircle'
  ];

  const categories = ['Технологии', 'Запуски', 'Открытия', 'Миссии', 'Наука'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0E27] via-[#1E3A8A] to-[#0A0E27]">
      <header className="border-b border-primary/20 backdrop-blur-sm bg-card/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Palette" size={32} className="text-primary" />
              <h1 className="text-2xl font-orbitron font-bold text-primary">UI KIT</h1>
            </div>
            <Button variant="outline" className="border-primary/50" asChild>
              <a href="/">
                <Icon name="Home" size={20} className="mr-2" />
                На главную
              </a>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <Tabs defaultValue="colors" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 mb-8 bg-card/50">
            <TabsTrigger value="colors">Цвета</TabsTrigger>
            <TabsTrigger value="typography">Типографика</TabsTrigger>
            <TabsTrigger value="buttons">Кнопки</TabsTrigger>
            <TabsTrigger value="cards">Карточки</TabsTrigger>
            <TabsTrigger value="icons">Иконки</TabsTrigger>
            <TabsTrigger value="inputs">Инпуты</TabsTrigger>
          </TabsList>

          <TabsContent value="colors" className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="font-orbitron">Цветовая палитра</CardTitle>
                <CardDescription>Основные цвета дизайн-системы Space News</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {colors.map((color) => (
                    <div key={color.name} className="space-y-2">
                      <div
                        className="h-24 rounded-lg border border-primary/20"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div>
                        <p className="font-orbitron font-semibold">{color.name}</p>
                        <p className="text-sm text-muted-foreground">{color.hex}</p>
                        <p className="text-xs text-muted-foreground">{color.var}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="font-orbitron">Градиенты</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="h-24 rounded-lg bg-gradient-to-b from-[#0A0E27] via-[#1E3A8A] to-[#0A0E27]" />
                  <p className="text-sm text-muted-foreground">
                    bg-gradient-to-b from-[#0A0E27] via-[#1E3A8A] to-[#0A0E27]
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="typography" className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="font-orbitron">Шрифты</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Заголовки - Orbitron</p>
                  <h1 className="text-4xl font-orbitron font-bold mb-2">H1 - Space News</h1>
                  <h2 className="text-3xl font-orbitron font-bold mb-2">H2 - Space News</h2>
                  <h3 className="text-2xl font-orbitron font-semibold mb-2">H3 - Space News</h3>
                  <h4 className="text-xl font-orbitron font-semibold mb-2">H4 - Space News</h4>
                  <h5 className="text-lg font-orbitron font-semibold mb-2">H5 - Space News</h5>
                  <h6 className="text-base font-orbitron font-semibold">H6 - Space News</h6>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Текст - System UI</p>
                  <p className="text-base mb-2">Body text - Обычный текст интерфейса</p>
                  <p className="text-sm mb-2">Small text - Описания и подписи</p>
                  <p className="text-xs">Caption - Мелкий текст и метаданные</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="font-orbitron">Цвета текста</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-foreground">Foreground - основной текст</p>
                <p className="text-muted-foreground">Muted foreground - второстепенный текст</p>
                <p className="text-primary">Primary - акцентный текст</p>
                <p className="text-destructive">Destructive - ошибки и удаление</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="buttons" className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="font-orbitron">Варианты кнопок</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-3">Default</p>
                    <div className="flex flex-wrap gap-3">
                      <Button>Кнопка</Button>
                      <Button size="sm">Маленькая</Button>
                      <Button size="lg">Большая</Button>
                      <Button disabled>Отключена</Button>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-3">Outline</p>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="outline">Outline</Button>
                      <Button variant="outline" className="border-primary/50 hover:bg-primary/20">
                        Custom
                      </Button>
                      <Button variant="outline" size="sm">Маленькая</Button>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-3">Ghost</p>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="ghost" size="icon">
                        <Icon name="Settings" size={20} />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-3">С иконками</p>
                    <div className="flex flex-wrap gap-3">
                      <Button>
                        <Icon name="Rocket" size={20} className="mr-2" />
                        Запустить
                      </Button>
                      <Button variant="outline">
                        Читать далее
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                      </Button>
                      <Button variant="ghost">
                        <Icon name="Heart" size={20} className="mr-2" />
                        Сохранить
                      </Button>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-3">Rounded (космический стиль)</p>
                    <div className="flex flex-wrap gap-3">
                      <Button className="rounded-full">Скругленная</Button>
                      <Button variant="outline" className="rounded-full border-primary/50">
                        Outline rounded
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cards" className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="font-orbitron">Карточка новости</CardTitle>
                <CardDescription>Пример карточки с изображением</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 group overflow-hidden">
                    <div className="relative overflow-hidden aspect-video bg-muted">
                      <img
                        src="/img/61ed9892-b26a-4cef-84b8-7f79f3d09cac.jpg"
                        alt="Space"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-primary/90 text-primary-foreground">Технологии</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="font-orbitron text-lg group-hover:text-primary transition-colors">
                        Заголовок новости
                      </CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <Icon name="Calendar" size={14} />
                        15 сентября 2024
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/80 line-clamp-3 mb-4">
                        Краткое описание новости, которое помещается в несколько строк текста для предпросмотра.
                      </p>
                      <Button variant="outline" className="w-full border-primary/50 hover:bg-primary hover:text-primary-foreground">
                        Читать далее
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
                    <CardHeader>
                      <CardTitle className="font-orbitron flex items-center gap-2">
                        <Icon name="Rocket" size={20} />
                        Простая карточка
                      </CardTitle>
                      <CardDescription>Без изображения</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Текстовый контент карточки с описанием или информацией.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="font-orbitron">Бейджи категорий</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Badge key={category} className="bg-primary/90 text-primary-foreground px-3 py-1">
                      {category}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="icons" className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="font-orbitron">Набор иконок</CardTitle>
                <CardDescription>Lucide React Icons через компонент Icon</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-6">
                  {icons.map((icon) => (
                    <div key={icon} className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-accent/20 transition-colors">
                      <Icon name={icon} size={32} className="text-primary" />
                      <p className="text-xs text-center text-muted-foreground">{icon}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-4">
                  <h4 className="font-orbitron font-semibold">Размеры иконок</h4>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <Icon name="Satellite" size={16} className="text-primary mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">16px</p>
                    </div>
                    <div className="text-center">
                      <Icon name="Satellite" size={20} className="text-primary mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">20px</p>
                    </div>
                    <div className="text-center">
                      <Icon name="Satellite" size={24} className="text-primary mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">24px</p>
                    </div>
                    <div className="text-center">
                      <Icon name="Satellite" size={32} className="text-primary mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">32px</p>
                    </div>
                    <div className="text-center">
                      <Icon name="Satellite" size={48} className="text-primary mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">48px</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-muted/20 rounded-lg">
                  <code className="text-sm">
                    {`import Icon from '@/components/ui/icon';`}
                    <br />
                    {`<Icon name="Satellite" size={32} />`}
                  </code>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inputs" className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="font-orbitron">Поля ввода</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Обычный инпут</label>
                  <Input placeholder="Введите текст..." />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">С иконкой поиска</label>
                  <div className="relative">
                    <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Поиск новостей..."
                      className="pl-10"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Космический стиль</label>
                  <Input
                    placeholder="Поиск..."
                    className="bg-card/80 border-primary/30 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="email@example.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Disabled</label>
                  <Input placeholder="Отключено" disabled />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="font-orbitron">Анимации</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-card/50 rounded-lg animate-fade-in">
                  <p className="text-sm">Fade In - animate-fade-in</p>
                </div>

                <div className="p-4 bg-card/50 rounded-lg">
                  <Icon name="Satellite" size={32} className="text-primary animate-glow mx-auto" />
                  <p className="text-sm text-center mt-2">Glow - animate-glow</p>
                </div>

                <div className="p-4 bg-card/50 rounded-lg transition-all hover:scale-105">
                  <p className="text-sm">Hover Scale - hover:scale-105</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <footer className="mt-16 border-t border-primary/20 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Icon name="Palette" size={28} className="text-primary" />
              <h3 className="text-xl font-orbitron font-bold text-primary">SPACE NEWS UI KIT</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Дизайн-система для космических новостей
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
