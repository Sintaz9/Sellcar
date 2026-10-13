# TradeCenter (Sellcar)

Учебный сайт автопродаж. Клиент на React, сервер на Node.js + Express, база MySQL.

## Что реализовано
- Две страницы: главная и «Продать»
- Регистрация и вход: пароли хешируются (bcrypt), выдаётся JWT-токен
- Интерактивная 3D-модель на главной (Three.js)
- Тесты компонентов (Jest, React Testing Library)

## Как запустить
1. `npm i`
2. Скопируйте `.env.example` в `.env` и впишите свои данные подключения к MySQL
3. Создайте таблицу `users` (id, email, password)
4. В первом терминале: `node server.js`
5. Во втором: `npm start`
