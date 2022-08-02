import { Accordion } from "./accordion.js";

const accordion = new Accordion({
  accordionBlockSelector: ".accordion",
  btnSelector: ".accordion__btn",
  itemShowSelector: ".accordion__item_show",
  alwaysOpen: false, //по умолчанию true, можно не добавлять в конфиг, если нужно, чтобы аккордеоны оставались открытыми
});

accordion.accordionInit();
