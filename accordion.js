export class Accordion {
  constructor(config) {
    this._defaultConfig = {
      alwaysOpen: true,
    };
    this._config = Object.assign(this._defaultConfig, config);
  }

  accordionInit() {
    this._getElements();
    this._setEventListeners();
  }

  _getElements() {
    this._accordion = document.querySelector(
      this._config.accordionBlockSelector
    );
    this._btnSelector = this._config.btnSelector;
    this._itemShowSelector = this._config.itemShowSelector;
    this._itemShowClass = this._itemShowSelector.slice(1);
  }

  _setEventListeners() {
    this._setClickListener();
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
    this._toggleState(this._targetBtn);
  }

  _checkOpenedItem() {
    const openendItem = this._accordion.querySelector(this._itemShowSelector);
    if (openendItem) {
      const openendItemBtn = openendItem.querySelector(this._btnSelector);
      openendItemBtn !== this._target
        ? this._toggleState(openendItemBtn)
        : null;
    }
  }

  _toggleState(item) {
    item.parentElement.classList.toggle(this._itemShowClass);
  }
}
