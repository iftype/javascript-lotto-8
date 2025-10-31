import ERROR_MESSAGES from '../constants/errorMessages.js';
import LottoPrice from '../domain/LottoPrice.js';

class PurchaseValidator {
  validate(purchaseAmount) {
    if (!this.#isConvertNumber(purchaseAmount)) {
      throw new Error(ERROR_MESSAGES.FORMAT_NOT_NUM);
    }
    if (!this.#isInteger(purchaseAmount)) {
      throw new Error(ERROR_MESSAGES.INTEGER);
    }
    if (!this.#isModUnit(purchaseAmount)) {
      throw new Error(ERROR_MESSAGES.PURCHASE_UNIT);
    }
  }

  #isConvertNumber(purchaseAmount) {
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

  #isInteger(purchaseAmount) {
    return Number.isInteger(Number(purchaseAmount));
  }

  #isModUnit(purchaseAmount) {
    return LottoPrice.modUnit(purchaseAmount) === 0;
  }
}

export default PurchaseValidator;
