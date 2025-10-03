# 🎨 Space News Design System

## 🎨 Цветовая палитра

### Основные цвета
- **Dark** `#0A0E27` - Темный фон, основной цвет страницы
- **Blue** `#1E3A8A` - Синий градиент, акценты
- **Blue Accent** `#3B82F6` - Основной акцентный цвет (кнопки, ссылки)
- **Light Blue** `#3B82F6` - Светлый акцент
- **White** `#FFFFFF` - Белый для текста и контраста

### CSS переменные (HSL)
```css
--background: 220 30% 8%;        /* #0A0E27 */
--foreground: 210 100% 96%;      /* Белый текст */
--primary: 210 100% 68%;         /* #60A5FA - главный акцент */
--secondary: 217 91% 60%;        /* #3B82F6 */
--card: 221 39% 11%;             /* Темные карточки */
--border: 217 20% 25%;           /* Границы */
--muted-foreground: 210 40% 70%; /* Приглушенный текст */
```

## 📝 Типографика

### Шрифты
- **Заголовки**: `Orbitron` (400, 700, 900)
  - Logo, H1-H6
  - Футуристичный, космический стиль
  
- **Текст**: `System UI / -apple-system / sans-serif`
  - Body text, UI элементы
  - Читаемость и нативность

### Иерархия
```
Logo: font-orbitron text-2xl font-bold
H1: font-orbitron text-4xl font-bold
H2: font-orbitron text-2xl font-semibold  
H3: font-orbitron text-xl font-semibold
H4: font-orbitron text-lg font-semibold
Body: text-sm / text-base
Caption: text-xs
```

## 🧩 Компоненты

### Кнопки

#### Primary (filled)
- Фон: `bg-primary` (#60A5FA)
- Текст: `text-primary-foreground` (темный)
- Скругление: `rounded-full` (полностью скругленные)
- Padding: `px-8 py-3`
- Состояния: `hover:bg-primary/90`

#### Secondary (outline)
- Граница: `border-primary/50` 
- Текст: `text-foreground`
- Скругление: `rounded-full`
- Hover: `hover:bg-primary/20 hover:text-primary`

### Карточки новостей

#### Структура
```
Card (bg-card/80 backdrop-blur-sm)
├── Image (aspect-video)
│   └── Category badge (top-right)
├── CardHeader
│   ├── Title (font-orbitron hover:text-primary)
│   └── Date (text-xs with Calendar icon)
└── CardContent
    ├── Description (text-sm line-clamp-3)
    └── Button (Read more)
```

#### Особенности
- Полупрозрачный фон: `bg-card/80`
- Эффект размытия: `backdrop-blur-sm`
- Границы: `border-primary/20`
- Hover: 
  - `hover:border-primary/50`
  - `hover:shadow-lg hover:shadow-primary/20`
  - Масштаб изображения: `group-hover:scale-110`

### Навигация

#### Header
- Липкий: `sticky top-0 z-50`
- Фон: `bg-card/50 backdrop-blur-sm`
- Граница: `border-b border-primary/20`
- Высота: `py-4`

#### Sidebar (desktop only)
- Ширина: `w-64`
- Скрыто на мобильных: `hidden lg:block`
- Sticky: `sticky top-24`
- Кнопки категорий:
  - Active: `bg-primary text-primary-foreground font-semibold`
  - Default: `hover:bg-accent/50 text-foreground`

## 🎭 Иконки

### Использование
```tsx
import Icon from '@/components/ui/icon';

<Icon name="Satellite" size={32} />
<Icon name="Search" size={20} />
```

### Космические иконки
- `Satellite` - логотип, космическая тема
- `Rocket` - запуски, миссии
- `Calendar` - даты публикаций
- `Search` - поиск
- `User` - профиль
- `Menu` - навигация
- `ArrowRight` - кнопки "далее"

## 🌊 Анимации

### Fade In
```css
@keyframes fade-in {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}
```
Применение: `animate-fade-in`

### Glow (свечение)
```css
@keyframes glow {
  0%, 100% { box-shadow: 0 0 20px rgba(96, 165, 250, 0.3); }
  50% { box-shadow: 0 0 30px rgba(96, 165, 250, 0.6); }
}
```
Применение: `animate-glow` (для логотипа)

### Hover эффекты
- Карточки: `transition-all duration-300`
- Изображения: `group-hover:scale-110 transition-transform duration-300`
- Кнопки: стандартные transition от shadcn/ui

## 📐 Сетка и отступы

### Container
```tsx
container mx-auto px-6 py-8
```

### Grid новостей
- Mobile: 1 колонка
- Tablet: `md:grid-cols-2`
- Desktop: `xl:grid-cols-3`
- Gap: `gap-6`

### Spacing
- Section padding: `py-8`
- Card padding: стандартные от shadcn
- Header/Footer: `py-4` / `py-8`

## 🎯 UI Patterns

### Поиск
```tsx
<Input 
  placeholder="Поиск новостей..."
  className="pl-10 bg-card/80 border-primary/30 focus:border-primary"
/>
```
- Иконка слева: `absolute left-3`
- Полупрозрачный фон
- Акцентная граница при фокусе

### Бейджи категорий
```tsx
<span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
  {category}
</span>
```

### Footer links
```tsx
<a className="hover:text-primary transition-colors">
```

## 🌌 Фоновые градиенты

### Основной градиент страницы
```tsx
bg-gradient-to-b from-[#0A0E27] via-[#1E3A8A] to-[#0A0E27]
```
- Темный → Синий → Темный
- Создает космическую атмосферу

## 📱 Адаптивность

### Breakpoints
- Mobile first подход
- `md:` - планшеты (768px+)
- `lg:` - десктоп (1024px+) - показ sidebar
- `xl:` - большие экраны (1280px+) - 3 колонки

### Скрытие элементов
- Поиск в header: `hidden md:block`
- Sidebar: `hidden lg:block`
- Мобильный поиск: `md:hidden`

## 🎨 Визуальная иерархия

### Приоритеты
1. **Логотип** - `text-primary animate-glow` - максимальное внимание
2. **Заголовки карточек** - `font-orbitron group-hover:text-primary`
3. **CTA кнопки** - яркие, контрастные
4. **Вспомогательный текст** - `text-muted-foreground`

### Контраст
- Светлый текст на темном фоне
- Яркие акценты (#60A5FA) для важных элементов
- Полупрозрачность для глубины (backdrop-blur)

## 🔧 Технические детали

### Стек
- React + TypeScript
- Tailwind CSS
- shadcn/ui компоненты
- Lucide React иконки

### Оптимизация
- CSS переменные для легкой смены темы
- Утилитные классы Tailwind
- Компонентный подход
- Lazy loading изображений (встроено в браузер)
