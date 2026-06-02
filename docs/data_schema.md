IyBEYXRhIFNjaGVtYQp

## Пользователи

- `user_id` (UUID) – уникальный идентификатор
- `email` (string) – email пользователя
- `created_at` (timestamp) – дата регистрации

## Заказы

- `order_id` (UUID)
- `user_id` (UUID) – ссылка на Users
- `amount` (decimal)
- `status` (enum: pending, completed, cancelled)
- `created_at` (timestamp)

Ссылка на репозиторий: https://github.com/nikidav9/ai-saas