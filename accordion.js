export class Accordion {
  constructor(config) {
    this._defaultConfig = {
      alwaysOpen: true,
      duration: 300,
    };
    this._config = Object.assign(this._defaultConfig, config);
  }

  accordionInit() {
    this._getElements();
    this._setEventListeners();
    this._setAnimationDuration();
  }

  _getElements() {
    this._accordion = document.querySelector(
      this._config.accordionBlockSelector
    );
    this._btnSelector = this._config.btnSelector;
    this._bodySelector = this._config.bodySelector;
    this._itemShowSelector = this._config.itemShowSelector;
    this._itemShowClass = this._itemShowSelector.slice(1);
  }

  _setEventListeners() {
    this._setClickListener();
  }

  _setAnimationDuration() {
    this._accordion.querySelectorAll(this._bodySelector).forEach((element) => {
      element.style.transition = `max-height ${this._config.duration}ms ease-out`;
    });
  }

  _setClickListener() {
    this._accordion.addEventListener("click", (e) => {
      this._target = e.target;
      this._targetBtn = this._target.closest(this._btnSelector);
      this._targetBtn ? this._accordionHandler() : null;
    });
  }

  _accordionHandler() {
    this._config.alwaysOpen === false ? this._checkOpenedItem() : null;
    this._toggleState(this._targetBtn.parentElement);
  }

  _checkOpenedItem() {
    const openendItem = this._accordion.querySelector(this._itemShowSelector);
    if (openendItem) {
      const openendItemBtn = openendItem.querySelector(this._btnSelector);
      openendItemBtn !== this._target
        ? this._toggleState(openendItemBtn.parentElement)
        : null;
    }
  }

  _toggleState(accordion) {
    accordion.classList.toggle(this._itemShowClass);
    const accordionBody = accordion.querySelector(this._bodySelector);
    if (accordionBody.style.maxHeight) {
      accordionBody.style.maxHeight = null;
    } else {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
    }
  }
}
