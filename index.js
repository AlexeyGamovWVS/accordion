import { Accordion } from "./accordion.js";

const firstAcc = new Accordion({
  accordionBlockSelector: "#acc1",
  btnSelector: ".accordion__btn",
  itemShowSelector: ".accordion__item_show",
  bodySelector: ".accordion__body",
  //alwaysOpen: false, //по умолчанию true, можно не добавлять в конфиг, если нужно, чтобы аккордеоны оставались открытыми
  //duration: 500, по умолчанию 300ms, указывать не обязательно
});

const secondAcc = new Accordion({
  accordionBlockSelector: "#acc2",
  btnSelector: ".accordion__btn",
  itemShowSelector: ".accordion__item_show",
  bodySelector: ".accordion__body",
  alwaysOpen: false,
  duration: 1000,
});

firstAcc.accordionInit();
secondAcc.accordionInit();
