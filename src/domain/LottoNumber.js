import ERROR_MESSAGES from '../constants/errorMessages.js';

class LottoNumber {
  #number;
  static #MIN_RANGE = 1;
  static #MAX_RANGE = 45;

  constructor(number) {
    this.#validate(number);
    this.#number = number;
  }

  #validate(number) {
    if (!this.#isInteger(number)) {
      throw new Error(ERROR_MESSAGES.INTEGER);
    }
    if (!this.#isInRange(number)) {
      throw new Error(ERROR_MESSAGES.LOTTO_RANGE);
    }
  }

  #isInteger(number) {
    return Number.isInteger(number);
  }

  #isInRange(number) {
    return LottoNumber.#MIN_RANGE <= number && number <= LottoNumber.#MAX_RANGE;
  }

  static getRange() {
    return { MIN_RANGE: this.#MIN_RANGE, MAX_RANGE: this.#MAX_RANGE };
  }

  getNumber() {
    return this.#number;
  }
}
export default LottoNumber;
