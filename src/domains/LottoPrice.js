import ERROR_MESSAGES from '../constants/errorMessages.js';

class LottoPrice {
  static #PURCHASE_UNIT = 1000;
  #purchaseAmount;

  constructor(purchaseAmount) {
    this.#validate(purchaseAmount);
    this.#purchaseAmount = purchaseAmount;
  }

  #validate(purchaseAmount) {
    if (!this.#isInteger(purchaseAmount)) {
      throw new Error(ERROR_MESSAGES.INTEGER);
    }
    if (this.#isLessUnit(purchaseAmount)) {
      throw new Error(ERROR_MESSAGES.PURCHASE_LESS(LottoPrice.#PURCHASE_UNIT));
    }
    if (!this.#isModUnit(purchaseAmount)) {
      throw new Error(ERROR_MESSAGES.PURCHASE_UNIT(LottoPrice.#PURCHASE_UNIT));
    }
  }

  #isInteger(purchaseAmount) {
    return Number.isInteger(purchaseAmount);
  }

  #isLessUnit(purchaseAmount) {
    return purchaseAmount < LottoPrice.#PURCHASE_UNIT;
  }

  #isModUnit(purchaseAmount) {
    return purchaseAmount % LottoPrice.#PURCHASE_UNIT === 0;
  }

  static getUnit() {
    return LottoPrice.#PURCHASE_UNIT;
  }

  exchange() {
    return this.#purchaseAmount / LottoPrice.#PURCHASE_UNIT;
  }

  getWinningRate(totalWinningAmount) {
    if (totalWinningAmount === 0) return 0;
    return ((totalWinningAmount / this.#purchaseAmount) * 100).toFixed(1);
  }
}
export default LottoPrice;
