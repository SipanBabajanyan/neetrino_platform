# Neetrino Platform - Карта проекта

## Обзор проекта
**Тип:** Монорепо с Turborepo  
**Стек:** Next.js 14 + NestJS + TypeScript  
**Цель:** Платформа для поиска и просмотра демо-сайтов с автоматическим импортом

## Структура проекта

```
neetrino_platform/
├── apps/
│   ├── web/                 # Next.js приложение (порт 3000)
│   │   ├── app/            # App Router страницы
│   │   ├── components/     # React компоненты
│   │   ├── lib/           # Утилиты
│   │   └── public/        # Статические файлы
│   └── api/                # NestJS API (порт 3001)
│       └── src/
│           ├── modules/    # Модули API
│           └── common/     # Общие компоненты
├── packages/
│   ├── ui/                 # UI компоненты (shadcn/ui)
│   └── types/              # TypeScript типы
├── package.json            # Корневой package.json
├── turbo.json             # Конфигурация Turborepo
└── tsconfig.json          # TypeScript конфигурация
```

## Технологический стек

### Frontend (apps/web)
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + shadcn/ui
- **Language:** TypeScript
- **Port:** 3000

### Backend (apps/api)
- **Framework:** NestJS
- **Language:** TypeScript
- **Documentation:** Swagger/OpenAPI
- **Port:** 3001

### Монорепо
- **Build System:** Turborepo
- **Package Manager:** npm
- **TypeScript:** Строгий режим

## Точки входа

### Веб-приложение
- **URL:** http://localhost:3000
- **Команда запуска:** `npm run dev` (из корня)
- **Прямой запуск:** `cd apps/web && npm run dev`

### API
- **URL:** http://localhost:3001
- **Swagger:** http://localhost:3001/api/docs
- **Команда запуска:** `npm run dev` (из корня)
- **Прямой запуск:** `cd apps/api && npm run dev`

## Конфигурация портов

### Принудительная настройка порта 3000
- **Next.js:** `"dev": "next dev -p 3000"` в apps/web/package.json
- **Next.js config:** Настроен в apps/web/next.config.js
- **API Proxy:** Настроен в next.config.js для проксирования /api/*

### Переменные окружения
- `PORT=3000` - порт веб-приложения
- `API_PORT=3001` - порт API
- `API_URL=http://localhost:3001` - URL API для проксирования

## Решения и предположения

1. **Монорепо структура:** Использован Turborepo для управления зависимостями
2. **Порт 3000:** Принудительно настроен для веб-приложения
3. **API проксирование:** Настроено через Next.js rewrites
4. **UI библиотека:** shadcn/ui для консистентного дизайна
5. **TypeScript:** Строгий режим для всех пакетов
6. **Package Manager:** npm (по умолчанию, можно заменить на pnpm/yarn)

## Готовность к разработке

✅ **Готово:**
- Структура монорепо
- Next.js приложение с App Router
- NestJS API с Swagger
- UI компоненты (shadcn/ui)
- TypeScript типы
- Конфигурация портов

🚧 **Требует настройки:**
- База данных (PostgreSQL)
- Redis (для очередей)
- Переменные окружения (.env)

## Следующие шаги

1. Установить зависимости: `npm install`
2. Создать .env файл из .env.example
3. Запустить: `npm run dev`
4. Открыть http://localhost:3000
