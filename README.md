# Развертывание приложения React* на страницах GitHub

## 1. Создайте пустой репозиторий на GitHub 

> Для сайта проекта вы можете ввести любое имя. Для пользовательского сайта GitHub требует , чтобы имя репозитория имело следующий формат: {username}.github.io(например gitname.github.io)

## 2. Удалим некоторые зависимости 

> npm uninstall @testing-library/jest-dom @testing-library/react @testing-library/user-event web-vitals

## 3. Установите gh-pages пакет npm

> npm install gh-pages --save-dev / or -D

## 4. Добавьте homepage свойство в package.json файл

Добавьте homepageсвойство в этом формате*:https://{username}.github.io/{repo-name}

<pre>
{
  "name": "my-app",
  "version": "0.1.0",
  "homepage": "https://gitname.github.io/react-gh-pages",
  "private": true,
</pre>

## 5. Добавьте в script развертывания в package.json файл

<pre>
"scripts": {
    + "predeploy": "npm run build",
    + "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
</pre>

## 6. Добавьте «удаленный репозиторий» к себе в проект, указывающий на репозиторий GitHub

> 
- git init 
- git add .
- git commit -m "first commit"

After t you need add
> 
- git remote add origin https://github.com/{username}/{repo-name}.git
- git branch -M main
- git push -u origin main

## 7. Разверните приложение React на страницах GitHub

> 
- npm run deploy
- перейдем по ссылке которую указали в файле  package.json
- "homepage": "https://gitname.github.io/react-gh-pages"
