export class Switch {
  private _isOpened = false;

  constructor(isOpened: boolean = false) {
    this._isOpened = isOpened;
  }

  get isOpened() {
    return this._isOpened;
  }

  open = () => (this._isOpened = true);
  close = () => (this._isOpened = false);
  toggle = () => (this._isOpened = !this._isOpened);
}
