import ERROR_MESSAGES from '../constants/errorMessages.js';
import LOTTO_SETTING from '../constants/lottoSetting.js';

class Lotto {
  #lottoNumbers;

  constructor(numbers) {
    this.#lottoNumbers = new Set(numbers);
    this.#validate(numbers);
  }

  #validate(numbers) {
    if (!this.#isQuantity(numbers)) {
      throw new Error(ERROR_MESSAGES.LOTTO_QUANTITY);
    }
    if (!this.#isDuplicate(numbers)) {
      throw new Error(ERROR_MESSAGES.LOTTO_DUPLICATE);
    }
  }

  #isQuantity(numbers) {
    return numbers.length === LOTTO_SETTING.MAX_QUANTITY;
  }

  #isDuplicate(numbers) {
    return this.#lottoNumbers.size === numbers.length;
  }

  hasLottoNumber(lottoNumber) {
    return this.#lottoNumbers.has(lottoNumber);
  }

  countNumbers(numbers) {
    return numbers.filter((number) => this.#lottoNumbers.has(number)).length;
  }

  getNumbers() {
    const numbers = Array.from(this.#lottoNumbers).map((lottoNumber) => lottoNumber.getNumber());
    return numbers.sort((a, b) => a - b);
  }
}
export default Lotto;
