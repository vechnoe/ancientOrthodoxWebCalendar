ancientOrthodoxWebCalendar
==========================

О проекте «Древлеправославный календарь»
----------------------------------------

![ancientOrthodoxWebCalendar](/web-calendar-screen.png)

Демо: [http://calendar.drevle.com](http://calendar.drevle.com)

Древлеправославный старообрядческий календарь
вычисляет дни недели, гласы, посты, подвижные и неподвижные праздники,
дни поминовения усопших, приходные и исxодные поклоны на каждый день всего года,
Зрячую Пасхалию на любой год. А также есть возможность поиска
праздников или имен святых на текущий год.

В основу календаря положен старопечатный Часослов, текст о праздниках
и постах на каждый день взят оттуда. А также добавлены праздники из
календаря РПСЦ (в следущей версии будет возможно настроить свое
согласие, и отображать календарь в соответствии с ним).

За основу алгоритма расчета постов и поклонов взят Устав Арсения Уральского.
Однако, в случае разногласий с Церковным Оком предпочтение отдавалось
Церковному Оку. И всегда в сторону *большей строгости*; так как
правильнее *попустить, чем разрешить.*

Пасхальные алгоритмы, алгоритмы расчета дат Юлианского и Григорианского
календарей взяты из работы Клауса Тондеринга «Часто задаваемые вопросы о календарях»
[http://www.astronet.ru/db/msg/1182321/index.html](http://www.astronet.ru/db/msg/1182321/index.html)

Календарь ограничен периодом от 01.01.1900 по 31.12.2099. Это
ограничение можно снять, если будет такая необходимость
(пишите на почту).</p>

Календарь содержит ошибки и неточности, по мере их проявления они
устраняются, многие ошибки, а также спорные моменты я, возможно,
пропустил. Поэтому просьба писать на почту (а лучше приложить
скрин с ошибкой, но не обязательно).

Я готов к сотрудничеству над календарем, особенно важен вклад
программистов и людей, разбирающихся в Церковном Уставе. Также
нужен дизайнер, чтобы сделать хороший дизайн приложения.

Дорожная карта
--------------

Что хочу добавить в будущем:

* Отображение календаря по согласиям, настройку согласий
* Устав о поклонах на келейном правиле
* Псалтырь, Апостол, Евангелие на каждый день
* Генерация календаря в PDF на любой год
* Иконы на день
* Адаптивный дизайн на основе Google Material
* Поддержка i18n

Установка
---------

После установки node.js 
```
В директории проекта запускаем:
$ git clone git://github.com/vechnoe/ancientOrthodoxWebCalendar
$ cd ancientOrthodoxWebCalendar
$ sudo npm -g install grunt-cli karma-cli bower
$ npm install
$ bower install
$ grunt watch
```

Затем, открываем `file:///path/to/ancientOrthodoxWebCalendar/build/index.html` 
в вашем браузере. Для работы необходимо запустить REST-сервер
[api_calendar_drevle_com](http://github.com/vechnoe/api_calendar_drevle_com)


Лицензия
--------

Copyright &copy; 2015 Максим Чернятевич.
*ancientOrthodoxWebCalendar* распространяется на условиях лицензии GNU GPLv3:

[https://raw.githubusercontent.com/vechnoe/ancientOrthodoxWebCalendar/master/LICENSE](https://raw.githubusercontent.com/vechnoe/ancientOrthodoxWebCalendar/master/LICENSE) 


Помощь
------

Вы можете помочь проекту таким образом:

* Делать форки и присылать pull-requests
* Присылать мне ошибки
* Присылать пожелания и обоснованную критику
* Прислать мне денег, чтобы было больше времени на проект (пишите на почту,
  принимаются даже биткоины)


Контакты
--------

Сообщения об ошибках и пожелания отправляйте на почту:
[vechnoe.info@gmail.com](mailto:vechnoe.info@gmail.com)




