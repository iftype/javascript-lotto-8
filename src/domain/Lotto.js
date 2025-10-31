import ERROR_MESSAGES from '../constants/errorMessages.js';
import LOTTO_SETTING from '../constants/lottoSetting.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = this.#sort(numbers);
  }

  #validate(numbers) {
    if (!this.#isQuantity(numbers)) {
      throw new Error(ERROR_MESSAGES.LOTTO_QUANTITY);
    }
    if (!this.#isDuplicate(numbers)) {
      throw new Error(ERROR_MESSAGES.LOTTO_DUPLICATE);
    }
  }

  #sort(numbers) {
    return [...numbers].sort((a, b) => a.getNumber() - b.getNumber());
  }

  #isQuantity(numbers) {
    return numbers.length === LOTTO_SETTING.MAX_QUANTITY;
  }

  #isDuplicate(numbers) {
    const newLotto = numbers.map((number) => number.getNumber());
    const setLotto = new Set(newLotto);
    return setLotto.size === newLotto.length;
  }

  getNumbers() {
    return [...this.#numbers].map((number) => number.getNumber());
  }
}
export default Lotto;
