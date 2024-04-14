# Points — AI tool for meeting summarizing 👀

Это учебный проект для защиты выпускной квалификационной работы СПбГУ. \
В репозитории `meetingAI` лежит клиентская часть приложения.

Прод находится по адресу https://points-app.ru/ \
Storybook проекта опубликован на GitHub Pages по адресу https://nastyasulina.github.io/meetingAI/

**Points** — быстрый обзор ваших встреч. Приложение автоматически резюмирует ключевые моменты из ваших встреч, облегчая доступ к самой важной информации без необходимости просмотра всей записи встречи.

## Development ⚙️

`npm run build:dev` - Сборка проекта. Команда собирает приложение в директорию `dist`. \
Конфигурация webpack для сборки development и production версий находится в директории `./config`.

`npm start` - Запуск приложения локально.

## Storybook 🎀

`npm run build-storybook` - Сборка storybook в директорию dist-storybook.

`npm run storybook` - Запуск storybook локально.

## Deploy 🚀

Настроена автоматическая сборка проекта в GitHub Actions при публикации изменений в **main**-ветку. Сформированный Docker-образ приложения отправляется в настроенный реестр контейнеров в Yandex Cloud (Yandex Container Registry).

В спецификации Docker Compose для виртуальной машины указывается актуальная версия образа клиентской части приложения.
