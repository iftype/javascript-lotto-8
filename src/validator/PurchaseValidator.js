import ERROR_MESSAGES from '../constants/errorMessages.js';
import LottoPrice from '../domain/LottoPrice.js';

class PurchaseValidator {
  static validate(purchaseAmount) {
    if (!PurchaseValidator.#isConvertNumber(purchaseAmount)) {
      throw new Error(ERROR_MESSAGES.FORMAT_NOT_NUM);
    }
    if (!PurchaseValidator.#isInteger(purchaseAmount)) {
      throw new Error(ERROR_MESSAGES.INTEGER);
    }
    if (!PurchaseValidator.#isModUnit(purchaseAmount)) {
      throw new Error(ERROR_MESSAGES.PURCHASE_UNIT);
    }
  }

  static #isConvertNumber(purchaseAmount) {
    if (purchaseAmount === null || typeof purchaseAmount === 'undefined') {
      return false;
    }
    if (String(purchaseAmount).trim() === '') {
      return false;
    }
    if (Number.isNaN(Number(purchaseAmount))) {
      return false;
    }
    return true;
  }

  static #isInteger(purchaseAmount) {
    return Number.isInteger(Number(purchaseAmount));
  }

  static #isModUnit(purchaseAmount) {
    return LottoPrice.modUnit(purchaseAmount) === 0;
  }
}

export default PurchaseValidator;
