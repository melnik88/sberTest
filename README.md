# Тестовое задание СберТеха (с использованием bem-методологии и инструментов)
---

## Установка приложения

Для работы с приложением требуется node.js-сервер
http://nodejs.org/

После установки нужно выполнить в консоли
    
1. ›`git clone git@github.com:melnik88/sberTest.git`
2. ›`cd sberTest`
3. ›`npm install bem`
4. ›`./node_modules/bem/bin/bem server`

После установки приложение будет доступно по адресу: [http://localhost:8080/desktop.bundles/index/index.html]http://localhost:8080/desktop.bundles/index/index.html

### Первые впечатления

Я впервые сталкиваюсь с инструментами для генерации верстки (bem-tools) от Яндекса. В работе постарался максимально охватить все возможные "подводные камни": модификаторы блоков и элементов, рендеринг списков и таблиц, уровни переопределения и т.д. Единственным гнусным моментом, с которым я столкнулся и который пока мне не удалось побороть - это i-bem и его декларативный подход к написанию javascript'а.

Мне кажется, что разделение на Блоки, Элементы и Модификаторы может значительно облегчить жизнь разработчикам крупных порталов и сайтов.
Поэтому я бы предложил присмотреться к этой парадигме повнимательнее.
