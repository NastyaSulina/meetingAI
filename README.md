# Points — AI tool for meeting summarizing

Это учебный проект для защиты выпускной квалификационной работы СПбГУ. \
В репозитории `meetingAI` лежит клиентская часть приложения.

Прод находится по адресу https://points-app.ru/.

**Points** — быстрый обзор ваших встреч. Приложение автоматически резюмирует ключевые моменты из ваших встреч, облегчая доступ к самой важной информации без необходимости просмотра всей записи встречи.

## Development

`npm run build:dev` - Сборка проекта \
Команда собирает приложение в директорию `dist`. \
Конфигурация webpack для сборки development и production версий находится в директории `./config`.

`npm start` - Запуск приложения локально

## Deploy
В проекте настроена автоматическая сборка docker-образа с номером версии и его пуш в реджистри Yandex Cloud при мерже в `main`-ветку. \
После этого необходимо заменить версию docker-образа на виртуальной машине.
