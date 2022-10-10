# Развертывание приложения React* на страницах GitHub

## 1. Создайте пустой репозиторий на GitHub 

> Для сайта проекта вы можете ввести любое имя. Для пользовательского сайта GitHub требует , чтобы имя репозитория имело следующий формат: {username}.github.io(например gitname.github.io)

## 2. Удалим некоторые зависимости 

> npm uninstall @testing-library/jest-dom @testing-library/react @testing-library/user-event web-vitals

## 3. Установите gh-pagesпакет npm

> npm install gh-pages --save-dev / or -D

## 4. Добавьте homepage свойство в package.jsonфайл

Добавьте homepageсвойство в этом формате*:https://{username}.github.io/{repo-name}

<pre>
{
  "name": "my-app",
  "version": "0.1.0",
    <span class="pl-mi1">
    <span class="pl-mi1">+</span> "homepage": "https://gitname.github.io/react-gh-pages",</span>
  "private": true,
  </pre>