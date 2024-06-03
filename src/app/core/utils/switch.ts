export class Switch {
  isOpened: boolean;

  constructor(isOpened: boolean = false) {
    this.isOpened = isOpened;
  }

  open() {
    this.isOpened = true;
  }

  close() {
    this.isOpened = false;
  }

  toggle() {
    this.isOpened = !this.isOpened;
  }
}
