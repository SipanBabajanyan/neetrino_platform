# 📋 Версии зависимостей Neetrino Platform

## 🎯 Точные версии для синхронизации между компьютерами

**Дата создания:** 15.09.2025  
**Node.js версия:** 24.4.1 (LTS)  
**NPM версия:** 11.4.2

---

## 🔧 Системные требования

- **Node.js:** 24.4.1 (LTS, обязательно)
- **NPM:** 11.4.2 (рекомендуется)
- **PostgreSQL:** 13+ (для базы данных)
- **Git:** 2.30+ (для версионного контроля)

---

## 📦 Корневые зависимости

```json
{
  "devDependencies": {
    "@turbo/gen": "^1.13.4",
    "cross-env": "^10.0.0",
    "prettier": "^3.6.2",
    "turbo": "^1.13.4",
    "typescript": "^5.9.2"
  },
  "packageManager": "npm@11.4.2",
  "engines": {
    "node": ">=24.0.0"
  }
}
```

---

## 🚀 API (apps/api) - NestJS

### Основные зависимости:
- **@nestjs/common:** ^10.4.20
- **@nestjs/core:** ^10.4.20
- **@nestjs/platform-express:** ^10.4.20
- **@nestjs/swagger:** ^7.4.2
- **@nestjs/typeorm:** ^10.0.2
- **typeorm:** ^0.3.26
- **pg:** ^8.16.3

### Dev зависимости:
- **@nestjs/cli:** ^10.4.9
- **@nestjs/schematics:** ^10.2.3
- **typescript:** ^5.9.2

---

## 🌐 Web (apps/web) - Next.js

### Основные зависимости:
- **next:** ^15.5.3
- **react:** ^19.1.1
- **react-dom:** ^19.1.1
- **framer-motion:** ^10.18.0
- **tailwindcss:** ^3.4.17

### Dev зависимости:
- **@types/react:** ^18.3.24
- **@types/react-dom:** ^18.3.7
- **typescript:** ^5.9.2

---

## 🎨 UI (packages/ui) - Компоненты

### Основные зависимости:
- **@radix-ui/react-slot:** ^1.2.3
- **class-variance-authority:** ^0.7.1
- **clsx:** ^2.1.1
- **lucide-react:** ^0.292.0
- **tailwind-merge:** ^2.6.0

### Peer зависимости:
- **react:** ^18.3.1
- **react-dom:** ^18.3.1

---

## 📝 Types (packages/types) - TypeScript типы

### Dev зависимости:
- **typescript:** ^5.9.2

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
nvm install 24.4.1
nvm use 24.4.1
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
