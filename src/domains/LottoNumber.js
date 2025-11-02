import ERROR_MESSAGES from '../constants/errorMessages.js';
import LOTTO_SETTING from '../constants/lottoSetting.js';

class LottoNumber {
  #number;

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
    const { MAX_RANGE, MIN_RANGE } = LOTTO_SETTING;
    return MIN_RANGE <= number && number <= MAX_RANGE;
  }

  getNumber() {
    return this.#number;
  }
}
export default LottoNumber;
