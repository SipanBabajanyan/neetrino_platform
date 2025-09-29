# 🛒 WooCommerce Import Integration

## 📋 Описание

Полноценная интеграция с WooCommerce для автоматического импорта товаров в Neetrino Platform. Позволяет синхронизировать продукты из WordPress WooCommerce магазина с демо-каталогом платформы.

## ✨ Возможности

### 🔌 Подключение к WooCommerce
- **REST API интеграция** - прямое подключение к WooCommerce API
- **Безопасная аутентификация** - Consumer Key/Secret
- **Тестирование подключения** - проверка доступности магазина
- **Гибкие настройки** - фильтрация по статусу, featured, изображениям

### 📊 Анализ и сравнение
- **Автоматический анализ** - сравнение с существующими демо
- **Умная категоризация** - определение новых, существующих и обновляемых товаров
- **Визуальный интерфейс** - удобный просмотр и выбор товаров
- **Массовые операции** - выбор всех/отмена выбора

### 🔄 Синхронизация данных
- **Импорт новых товаров** - создание демо из WooCommerce продуктов
- **Обновление существующих** - синхронизация изменений
- **Сохранение метаданных** - цены, категории, теги, изображения
- **Отслеживание изменений** - время последней синхронизации

## 🚀 Быстрый старт

### 1. Настройка WooCommerce

1. **Включите REST API** в WooCommerce:
   - Перейдите в `WooCommerce > Settings > Advanced > REST API`
   - Нажмите "Add Key"
   - Создайте новую пару ключей с правами "Read/Write"

2. **Получите данные подключения**:
   - **Store URL**: `https://yourstore.com`
   - **Consumer Key**: `ck_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
   - **Consumer Secret**: `cs_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### 2. Использование в админ-панели

1. **Откройте админ-панель**: `/admin?tab=woocommerce`

2. **Настройте подключение**:
   ```
   Store URL: https://yourstore.com
   Consumer Key: ck_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   Consumer Secret: cs_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   Vendor ID: [UUID вашего вендора]
   ```

3. **Настройте фильтры**:
   - ✅ Only Published Products - только опубликованные товары
   - ✅ Only Featured Products - только рекомендуемые товары
   - ✅ Only Products with Images - только товары с изображениями

4. **Тестируйте подключение**:
   - Нажмите "Test Connection"
   - Убедитесь, что появилось сообщение "✓ Connection successful!"

5. **Получите список товаров**:
   - Нажмите "Fetch Products"
   - Дождитесь загрузки и анализа товаров

6. **Выберите товары для импорта**:
   - Просмотрите список товаров
   - Выберите нужные товары (или "Select All")
   - Нажмите "Sync X Products"

## 🔧 API Endpoints

### Тестирование подключения
```http
POST /api/import/woocommerce/test-connection
Content-Type: application/json

{
  "storeUrl": "https://yourstore.com",
  "consumerKey": "ck_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "consumerSecret": "cs_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "vendorId": "vendor-uuid"
}
```

### Получение списка товаров
```http
POST /api/import/woocommerce/diff
Content-Type: application/json

{
  "storeUrl": "https://yourstore.com",
  "consumerKey": "ck_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "consumerSecret": "cs_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "vendorId": "vendor-uuid",
  "onlyPublished": true,
  "onlyFeatured": false,
  "onlyWithImages": true
}
```

### Синхронизация товаров
```http
POST /api/import/woocommerce/sync
Content-Type: application/json

{
  "config": {
    "storeUrl": "https://yourstore.com",
    "consumerKey": "ck_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "consumerSecret": "cs_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "vendorId": "vendor-uuid"
  },
  "selectedItems": [
    {
      "woocommerceId": 123,
      "status": "new"
    },
    {
      "woocommerceId": 456,
      "status": "update"
    }
  ]
}
```

### Получение категорий
```http
POST /api/import/woocommerce/categories
Content-Type: application/json

{
  "storeUrl": "https://yourstore.com",
  "consumerKey": "ck_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "consumerSecret": "cs_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
}
```

## 📊 Структура данных

### WooCommerce Product → Demo Mapping

| WooCommerce | Demo | Описание |
|-------------|------|----------|
| `id` | `metadata.woocommerceId` | ID товара в WooCommerce |
| `name` | `title` | Название товара |
| `description` | `description` | Описание товара |
| `permalink` | `url` | URL товара |
| `images[0].src` | `imageUrl` | Главное изображение |
| `categories[0].name` | `category` | Основная категория |
| `price` | `metadata.price` | Цена товара |
| `tags` | `metadata.tags` | Теги товара |
| `date_modified` | `metadata.lastSyncAt` | Время синхронизации |

### Статусы товаров

- **`new`** - новый товар, будет создан как демо
- **`existing`** - товар уже существует, обновятся только метаданные
- **`update`** - товар существует, но изменился (название, описание, изображение)

## ⚙️ Настройки и конфигурация

### Фильтры импорта

```typescript
interface WooCommerceImportConfig {
  storeUrl: string;           // URL магазина
  consumerKey: string;        // Consumer Key
  consumerSecret: string;     // Consumer Secret
  vendorId: string;           // ID вендора в системе
  onlyPublished?: boolean;    // Только опубликованные (default: true)
  onlyFeatured?: boolean;     // Только рекомендуемые (default: false)
  onlyWithImages?: boolean;   // Только с изображениями (default: true)
  categoryMapping?: Record<string, string>;  // Маппинг категорий
  priceRangeMapping?: Record<string, string>; // Маппинг ценовых диапазонов
}
```

### Логирование

Все операции логируются с подробной информацией:
- Подключение к WooCommerce
- Загрузка товаров
- Анализ изменений
- Процесс синхронизации
- Ошибки и предупреждения

## 🔒 Безопасность

- **HTTPS только** - все подключения через защищенный протокол
- **Валидация данных** - проверка всех входящих данных
- **Ограничение доступа** - только для администраторов
- **Логирование операций** - отслеживание всех действий

## 🐛 Устранение неполадок

### Ошибка подключения
```
Failed to connect to WooCommerce store
```
**Решение:**
1. Проверьте URL магазина
2. Убедитесь, что REST API включен
3. Проверьте правильность Consumer Key/Secret
4. Убедитесь, что магазин доступен

### Ошибка аутентификации
```
401 Unauthorized
```
**Решение:**
1. Проверьте Consumer Key и Secret
2. Убедитесь, что ключи имеют права Read/Write
3. Проверьте, что ключи не истекли

### Медленная загрузка
**Решение:**
1. Уменьшите количество товаров в запросе
2. Используйте фильтры для ограничения выборки
3. Проверьте производительность WooCommerce магазина

## 📈 Производительность

- **Пакетная загрузка** - до 100 товаров за запрос
- **Кэширование** - повторные запросы выполняются быстрее
- **Асинхронная обработка** - не блокирует интерфейс
- **Прогресс-индикаторы** - визуальная обратная связь

## 🔄 Автоматическая синхронизация

В будущих версиях планируется:
- **Cron задачи** - автоматическая синхронизация по расписанию
- **Webhook интеграция** - мгновенное обновление при изменениях
- **Уведомления** - email/SMS о результатах синхронизации
- **Отчеты** - детальная статистика импорта

## 📞 Поддержка

При возникновении проблем:
1. Проверьте логи в консоли браузера
2. Убедитесь в правильности настроек WooCommerce
3. Проверьте доступность API endpoints
4. Обратитесь к документации WooCommerce REST API

---

**Готово к использованию!** 🎉

Теперь вы можете легко импортировать товары из WooCommerce в Neetrino Platform через удобный веб-интерфейс.
