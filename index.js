import { Accordion } from "./accordion.js";

const firstAcc = new Accordion({
  accordionBlockSelector: "#acc1",
  btnSelector: ".accordion__btn",
  itemShowSelector: ".accordion__item_show",
  //alwaysOpen: false, //по умолчанию true, можно не добавлять в конфиг, если нужно, чтобы аккордеоны оставались открытыми
});

const secondAcc = new Accordion({
  accordionBlockSelector: "#acc2",
  btnSelector: ".accordion__btn",
  itemShowSelector: ".accordion__item_show",
  alwaysOpen: false, 
});

firstAcc.accordionInit();
secondAcc.accordionInit();
