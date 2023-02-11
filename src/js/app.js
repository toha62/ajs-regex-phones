export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUserName() {
    return /^[a-zA-Z]\d{0,3}?([a-zA-Z_-]|[a-zA-Z_-]\d{0,3})*[a-zA-Z]$/.test(this.name);
  }
}
