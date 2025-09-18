# 🪟 Liquid Glass Design System

Полный редизайн Neetrino Platform в стиле Apple-like Liquid Glass / Glassmorphism.

## 🎨 Дизайн-токены

### Цвета
```css
/* Accent Colors */
--a1: #007AFF (Blue)
--a2: #AF52DE (Purple) 
--a3: #FF2D55 (Pink)
--a4: #FF9500 (Orange)

/* Dark Theme */
--bg: #0B0C0F
--bg-soft: #0F1116
--ink: #FFFFFF
--ink-weak: #C9CFD6

/* Light Theme */
--bg: #FFFFFF
--bg-soft: #F8F9FA
--ink: #1D1D1F
--ink-weak: #6E6E73
```

### Glass Effects
```css
/* Glass Components */
.glass {
  background: var(--glass-fill);
  backdrop-filter: blur(16px);
  border: 1px solid var(--glass-border);
  box-shadow: 0 8px 32px var(--glass-shadow);
}

.glass-strong {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(20px);
}

.glass-subtle {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(12px);
}
```

## 🧩 Компоненты

### Навигация с водяной каплей
- Активный пункт не меняет цвет при hover
- Капля плавно перемещается при наведении
- Возвращается к активному пункту при уходе курсора
- Поддержка клавиатурной навигации

### Hero секция
- Заголовок в две строки с переносом перед "Intelligence"
- Единый градиент a1→a2→a3→a4
- Вес шрифта 600 (font-semibold)

### Glassmorphism элементы
- Минимум 3 стеклянные зоны на главной
- Мягкие тени и размытие
- Внутренние блики для эффекта стекла

## 🌓 Поддержка тем

### Переключение тем
```tsx
import ThemeToggle from './components/ThemeToggle';

// Автоматически сохраняет предпочтение в localStorage
// Поддерживает prefers-color-scheme
```

### CSS переменные
Все цвета используют CSS переменные, которые автоматически переключаются между темами.

## 🎭 Анимации

### Motion
- Длительность: 280ms
- Easing: cubic-bezier(0.2, 0.8, 0.2, 1)
- Поддержка prefers-reduced-motion

### Компоненты
```css
.animate-fade-up {
  animation: fadeUp 280ms cubic-bezier(0.2, 0.8, 0.2, 1);
}

.animate-fade-in {
  animation: fadeIn 280ms cubic-bezier(0.2, 0.8, 0.2, 1);
}
```

## ♿ Доступность

### Focus States
```css
.focus-ring {
  @apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-a1 focus-visible:ring-opacity-60 focus-visible:ring-offset-2;
}
```

### Контраст
- Все тексты имеют контраст ≥ 4.5:1
- Видимые focus-кольца
- Поддержка screen readers

## 🚀 Производительность

### Оптимизации
- Максимум 2-3 стеклянных слоя с blur в viewport
- Никаких тяжелых фоновых изображений
- Оптимизированные анимации с will-change

### Lighthouse цели
- Performance ≥ 85
- Accessibility ≥ 95
- Best Practices ≥ 95
- CLS ≤ 0.1
- LCP < 2.5s

## 📱 Адаптивность

### Breakpoints
- Mobile: 360px
- Tablet: 768px
- Desktop: 1280px
- Large: 1536px

### Компоненты
- Все компоненты адаптивны
- Мобильное меню с анимацией
- Оптимизированные размеры для touch

## 🛠️ Использование

### Glass компоненты
```tsx
// Базовый glass эффект
<div className="glass p-6 rounded-3xl">
  Content
</div>

// Усиленный glass эффект
<div className="glass-strong p-6 rounded-3xl">
  Content
</div>

// Тонкий glass эффект
<div className="glass-subtle p-6 rounded-3xl">
  Content
</div>
```

### Градиентный текст
```tsx
<h1 className="text-hero-gradient text-5xl font-semibold">
  Future Technologies with Artificial<br/>
  Intelligence
</h1>
```

### Focus состояния
```tsx
<button className="glass px-6 py-3 rounded-full focus-ring">
  Button
</button>
```

## 📁 Структура файлов

```
apps/web/
├── _legacy_styles/          # Старые стили (исключены из сборки)
├── app/
│   ├── globals.css         # Новые Liquid Glass стили
│   └── layout.tsx          # Поддержка тем
├── components/
│   ├── NavDroplet.tsx      # Навигация с каплей
│   ├── ThemeToggle.tsx     # Переключение тем
│   ├── Hero.tsx            # Hero с правильным градиентом
│   └── ...                 # Остальные компоненты
└── tailwind.config.js      # Обновленная конфигурация
```

## 🔧 Миграция

### Изменения
1. ✅ Старые стили перенесены в `_legacy_styles/`
2. ✅ Созданы новые дизайн-токены
3. ✅ Обновлены все компоненты
4. ✅ Добавлена поддержка тем
5. ✅ Оптимизирована производительность

### Совместимость
- Сохранена вся логика и маршруты
- Изменен только визуальный слой
- Поддержка всех существующих функций

## 🎯 Результат

Современный дизайн в стиле Apple Liquid Glass с:
- ✨ Единым стилем по всему сайту
- 🌓 Поддержкой light/dark тем
- ♿ Полной доступностью
- 🚀 Оптимизированной производительностью
- 📱 Адаптивным дизайном
