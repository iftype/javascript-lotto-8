import ERROR_MESSAGES from '../../constants/errorMessages.js';

class InputPurchaseAmountValidator {
  static validate(purchaseAmount) {
    if (!InputPurchaseAmountValidator.#isConvertNumber(purchaseAmount)) {
      throw new Error(ERROR_MESSAGES.FORMAT_NOT_NUM);
    }
    if (!InputPurchaseAmountValidator.#isInteger(purchaseAmount)) {
      throw new Error(ERROR_MESSAGES.INTEGER);
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
}

export default InputPurchaseAmountValidator;
