import ERROR_MESSAGES from '../constants/errorMessages.js';
import LottoNumberFactory from './LottoNumberFactory.js';

class Lotto {
  static #MAX_QUANTITY = 6;
  #lottoNumbers;

  constructor(numbers) {
    this.#lottoNumbers = new Set(this.#createLotto(numbers));
    this.#validate(numbers);
  }

  #createLotto(numbers) {
    return numbers.map((num) => LottoNumberFactory.getLottoNumber(num));
  }

  #validate(numbers) {
    if (!this.#isQuantity(numbers)) {
      throw new Error(ERROR_MESSAGES.LOTTO_QUANTITY(Lotto.#MAX_QUANTITY));
    }
    if (!this.#isDuplicate(numbers)) {
      throw new Error(ERROR_MESSAGES.LOTTO_DUPLICATE);
    }
  }

  #isQuantity(numbers) {
    return numbers.length === Lotto.#MAX_QUANTITY;
  }

  #isDuplicate(numbers) {
    return this.#lottoNumbers.size === numbers.length;
  }

  hasLottoNumber(lottoNumber) {
    return this.#lottoNumbers.has(lottoNumber);
  }

  countNumbers(numbers) {
    const intersection = new Set([...this.#lottoNumbers].filter((x) => numbers.hasLottoNumber(x)));
    return intersection.size;
  }

  static getQuan() {
    return { MAX_QUANTITY: this.#MAX_QUANTITY };
  }

  getNumbers() {
    const numbers = Array.from(this.#lottoNumbers).map((lottoNumber) => lottoNumber.getNumber());
    return numbers.sort((a, b) => a - b);
  }
}
export default Lotto;
