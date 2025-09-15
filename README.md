# Neetrino Platform

Современная платформа для поиска и просмотра демо-сайтов с автоматическим импортом и проверкой доступности.

## 🚀 Особенности

- **Масштабируемость**: 50,000+ демо с перспективой до 100,000+
- **Автоматический импорт**: CSV импорт с DIFF-интерфейсом
- **Проверка доступности**: Автоматические проверки с автоудалением неработающих демо
- **Современный UI**: Минималистичный дизайн с адаптивностью
- **SEO-оптимизация**: Мета-теги, OG, JSON-LD
- **Монорепо**: Turborepo с Next.js и NestJS

## 🛠 Технологический стек

- **Frontend**: Next.js 14, Tailwind CSS, shadcn/ui
- **Backend**: NestJS (TypeScript)
- **База данных**: PostgreSQL
- **Очереди**: Redis + BullMQ
- **Мониторинг**: Sentry, Bull Board

## 📦 Установка

### Требования
- Node.js 18+
- Docker и Docker Compose
- PostgreSQL 15+
- Redis 7+

### Быстрый старт

```bash
# Клонирование репозитория
git clone https://github.com/SipanBabajanyan/neetrino_platform.git
cd neetrino_platform

# Копирование переменных окружения
cp env.example .env

# Запуск через Docker Compose
docker-compose up -d

# Или установка зависимостей локально
npm install
```

## 🏃‍♂️ Запуск

### Через Docker Compose (рекомендуется)

```bash
# Запуск всех сервисов
docker-compose up -d

# Просмотр логов
docker-compose logs -f

# Остановка
docker-compose down
```

### Локальная разработка

```bash
# Установка зависимостей
npm install

# Запуск базы данных
docker-compose up -d postgres redis

# Запуск API
cd apps/api
npm run start:dev

# Запуск веб-приложения (в новом терминале)
cd apps/web
npm run dev
```

## 🌐 Доступные сервисы

- **Frontend**: http://localhost:3000
- **API**: http://localhost:3001
- **API Docs**: http://localhost:3001/api/docs
- **PostgreSQL**: localhost:5432
- **Redis**: localhost:6379

## 📁 Структура проекта

```
neetrino_platform/
├── apps/
│   ├── web/          # Next.js приложение
│   └── api/          # NestJS API
├── packages/
│   ├── ui/           # Общие UI компоненты
│   └── types/        # TypeScript типы
├── jobs/             # Фоновые задачи
└── docker-compose.yml
```

## 🔧 Конфигурация

Основные переменные окружения в `.env`:

```env
# База данных
DATABASE_URL="postgresql://username:password@localhost:5432/neetrino_platform"

# Redis
REDIS_URL="redis://localhost:6379"

# Фича-флаги
PARSING_ENABLED=false
CHECKING_ENABLED=false

# API
API_URL="http://localhost:3001"
```

## 📋 Функциональность

### ✅ Реализовано (Core v3)
- Монорепо структура с Turborepo
- Базовые модели данных (Vendors, Themes, Demos)
- CSV импорт с DIFF-интерфейсом
- Публичная часть (каталог, PDP, viewer)
- Админка с CRUD операциями
- Фича-флаги для модулей

### 🚧 В разработке
- Аутентификация и RBAC
- Медиа-генерация (постеры/скрины)
- SEO и аналитика
- Мониторинг и логирование

### 📅 Планируется
- Parsing модуль (краулеры/коннекторы)
- Checking модуль (автопроверки доступности)
- Расширенная аналитика
- Многоязычность (RU/AM/EN)

## 🧪 Тестирование

```bash
# Запуск тестов
npm run test

# E2E тесты
npm run test:e2e

# Покрытие кода
npm run test:cov
```

## 📚 API Документация

Swagger документация доступна по адресу: http://localhost:3001/api/docs

## 🤝 Разработка

### Коммиты
- Используйте русский язык для сообщений коммитов
- Формат: "Добавлена валидация формы регистрации"
- Автокоммиты помечаются как "Autocommit"

### Стиль кода
- ESLint + Prettier для форматирования
- TypeScript строгий режим
- Следование принципам SOLID, DRY, KISS

## 📄 Лицензия

MIT License

## 👥 Команда

- **Разработка**: Sipan Babajanyn Rog
- **Архитектура**: Core-first подход с плагинами
