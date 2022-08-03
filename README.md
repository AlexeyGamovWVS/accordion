# Универсальный аккордеон для сайта
Аккордеон – это вертикально сложенный набор заголовков. Каждый из них может быть развернут, чтобы показать содержимое, связанное с этим заголовком. Этот элемент так называется из-за того, что принцип его действия напоминает музыкальный инструмент аккордеон.

[Смотреть пример >>](https://alexeygamovwvs.github.io/accordion/)
____
## Пояснения к HTML и CSS
* `accordion` – это общая обертка для элементов, она непосредственно содержит `.accordion__item` — сам элемент с аккордеоном;
* `.accordion__item` – это один элемент, внутри которого располагается кнопка `.accordion__btn`, содержащая заголовок `accordion__header` и содержимое `.accordion__body` с некоторым текстом `.accordion__answer`;
* `.accordion__btn` – кнопка-обёртка, при нажатии на которую будет открываться `.accordion__body`;
* `.accordion__body` – содержимое-обёртка, связанная с кнопкой __btn. По умолчанию body имеет максимальную высоту 0px, далее в JS происходит управление этим параметром.

Раскрыт или нет? Состояние `.accordion__item` определяется посредством класса `accordion__item_show`. Если данный класс присутствует у элемента, то `.accordion__body` показывается. В противном случае – нет.

Переключение состояния `.accordion__item` и высоты `.accordion__body`  осуществляется посредством нажатия на "кнопку" `.accordion__btn`.

Остальные стили отвечают только за оформление аккордеона и к функционалу прямого отношения не имеют.


___
## Пояснения к JS и установка
Слушатель клика устанавливается 1 раз на весь блок с аккордеонами. Нужный кликнутый аккордеон ищется с помощью `closest('.accordion__btn')`.

__Важный момент: (bold)__ если вы в разметке используете не кнопки, а иные сущности, как в примере в данном репозитории (текст в обёртке), то кнопкой является обёртка, а текст в обёртке должен в стилях содержать `pointer-events: none;` 

### Методы класса accordion
* `accordionInit()` — публичный метод для инициализации аккордеона
* `_getElements()` — приватный метод для поиска нужных DOM-елементов или сбора селекторов.
* `_setEventListeners()` — приватный метод для добавления различных слушателей. На каждый слушатель создаётся свой отдельный приватный метод. В данной версии слушатель только один — по клику.
* `_setAnimationDuration()` — для всех body-элементов данного аккардеона устанавливает длительность анимации. По умолчанию подтягивает из дефолтного конфига 300ms, тип анимации ease-out.
* `_setClickListener()` — приватный метод установки слушателя на событие «клик» по заголовку (кнопке). Устанавливается на блок с аккордеонами, при клике находит ближайший кликнутый объект, если этот объект — нужный нам аккордион, устанавливает Handler.
* `_accordionHandler()` — приватный метод, проверяет условия из конфига: если аккордеоны не должны оставаться открытыми при клике на отличный от ранее открытого аккордеона, то выполнить проверку, по какому из аккордеонов пользователь кликнул. Если кликнули на тот же, что открыт — ничего не делать, если на другой — закрыть тот, что был открыт. Логика вынесена в отдельный приватный метод `_checkOpenedItem()`. Также данный метод запускает открытие или закрытие аккордеона, описанное в методе `_toggleState()`.
* `_toggleState(item)` — приватный метод, получающий на вход аккардеон  (элемент списка всех аккордеонов). Затем устанавливает длительность анимации согласно конфигу или дефолтному значению. Находит вложенный элемент, являющийся `body`, переключает высоту этого элемента.

### Установка аккордеона на сайт
1. Вставить в нужное место разметку аккордеона на сайт (см index.html). В данном примере для обработки в JS использовались селекторы классов, можно использовать идентификаторы (id='#57463424') в случае, если аккордеонов на странице несколько.

2. Подключить к странице CSS и JavaScript файлы. Если кнопки выполнены текстом с обёрткой — обрати внимание на пояснения к JS выше.

3. Создать экземпляр класса и инициализировать блок:

```js
const accordion = new Accordion({
  accordionBlockSelector: ".accordion",
  btnSelector: ".accordion__btn",
  itemShowSelector: ".accordion__item_show",
  bodySelector: ".accordion__body",
  //alwaysOpen: false, //по умолчанию true, можно не добавлять в конфиг, если нужно, чтобы аккордеоны оставались открытыми
  //duration: 500, — по умолчанию стоит 300, указывать не обязательно
});

accordion.accordionInit();
```

Конфиг также можно передавать отдельным объектом, а селектор аккардеона в формате идентификатора:

```js
const accordionConfig = {
  accordionBlockSelector: "#acc2",
  btnSelector: ".accordion__btn",
  ...
}

const accordion = new Accordion(accordionConfig);
accordion.accordionInit();
```

_Свойство alwaysOpen определяет необходимо ли при открытии нового контента закрывать предыдущий. Если false, то необходимо. В противном случае не нужно. Значение true – это значение по умолчанию и в этом случае его можно не указывать.(italic)_


___
## Дополнения
Некоторые методы могут быть адаптированы под использование в публичной области, например, setAnimationDuration можно завязать на получение параметра и подставлять значение параметра в шаблонную строку. 

___
Автор: Алексей Гамов, WebValley Studio 2022
