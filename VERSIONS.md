# 📋 Версии зависимостей Neetrino Platform

## 🎯 Точные версии для синхронизации между компьютерами

**Дата создания:** $(date)  
**Node.js версия:** 18.20.4  
**NPM версия:** 9.0.0

---

## 🔧 Системные требования

- **Node.js:** 18.20.4 (обязательно)
- **NPM:** 9.0.0 (рекомендуется)
- **PostgreSQL:** 13+ (для базы данных)
- **Git:** 2.30+ (для версионного контроля)

---

## 📦 Корневые зависимости

```json
{
  "devDependencies": {
    "@turbo/gen": "^1.10.12",
    "cross-env": "^10.0.0",
    "prettier": "^3.0.0",
    "turbo": "^1.10.12",
    "typescript": "^5.0.0"
  },
  "packageManager": "npm@9.0.0",
  "engines": {
    "node": ">=18.0.0"
  }
}
```

---

## 🚀 API (apps/api) - NestJS

### Основные зависимости:
- **@nestjs/common:** ^10.0.0
- **@nestjs/core:** ^10.0.0
- **@nestjs/platform-express:** ^10.0.0
- **@nestjs/swagger:** ^7.0.0
- **@nestjs/typeorm:** ^10.0.0
- **typeorm:** ^0.3.17
- **pg:** ^8.11.0

### Dev зависимости:
- **@nestjs/cli:** ^10.0.0
- **@nestjs/schematics:** ^10.0.0
- **typescript:** ^5.1.3

---

## 🌐 Web (apps/web) - Next.js

### Основные зависимости:
- **next:** ^15.5.3
- **react:** ^19.1.1
- **react-dom:** ^19.1.1
- **framer-motion:** ^10.16.0
- **tailwindcss:** ^3.3.0

### Dev зависимости:
- **@types/react:** ^18.0.0
- **@types/react-dom:** ^18.0.0
- **typescript:** ^5.0.0

---

## 🎨 UI (packages/ui) - Компоненты

### Основные зависимости:
- **@radix-ui/react-slot:** ^1.0.2
- **class-variance-authority:** ^0.7.0
- **clsx:** ^2.0.0
- **lucide-react:** ^0.292.0
- **tailwind-merge:** ^2.0.0

### Peer зависимости:
- **react:** ^18.0.0
- **react-dom:** ^18.0.0

---

## 📝 Types (packages/types) - TypeScript типы

### Dev зависимости:
- **typescript:** ^5.0.0

---

## 🔄 Команды для синхронизации

### На первом компьютере (источник):
```bash
# Создать точный package-lock.json
npm install --package-lock-only

# Закоммитить изменения
git add package-lock.json .nvmrc env.example setup.sh VERSIONS.md
git commit -m "Добавлены файлы для синхронизации версий"
git push
```

### На втором компьютере (цель):
```bash
# Клонировать репозиторий
git clone <repository-url>
cd neetrino-platform

# Запустить скрипт настройки
chmod +x setup.sh
./setup.sh

# Или вручную:
nvm use  # если используется NVM
npm ci   # установка точных версий из package-lock.json
```

---

## ⚠️ Важные замечания

1. **Всегда используйте `npm ci`** вместо `npm install` для установки точных версий
2. **Проверяйте версию Node.js** перед установкой зависимостей
3. **Настройте переменные окружения** в файле `.env`
4. **Синхронизируйте package-lock.json** между компьютерами

---

## 🐛 Решение проблем

### Проблема: Разные версии Node.js
```bash
# Установить правильную версию через NVM
nvm install 18.20.4
nvm use 18.20.4
```

### Проблема: Конфликты зависимостей
```bash
# Очистить кэш и переустановить
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Проблема: Ошибки сборки
```bash
# Очистить и пересобрать
npm run clean
npm run build
```

---

**Последнее обновление:** $(date)  
**Автор:** Sipan Babajanyan
