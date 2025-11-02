import ERROR_MESSAGES from '../../constants/errorMessages.js';
import LOTTO_SETTING from '../../constants/lottoSetting.js';

class PurchaseValidator {
  static validate(purchaseAmount) {
    if (PurchaseValidator.#isLessUnit(purchaseAmount)) {
      throw new Error(ERROR_MESSAGES.PURCHASE_LESS);
    }

    if (!PurchaseValidator.#isModUnit(purchaseAmount)) {
      throw new Error(ERROR_MESSAGES.PURCHASE_UNIT);
    }
  }

  static #isLessUnit(purchaseAmount) {
    return purchaseAmount < LOTTO_SETTING.PURCHASE_UNIT;
  }

  static #isModUnit(purchaseAmount) {
    return purchaseAmount % LOTTO_SETTING.PURCHASE_UNIT === 0;
  }
}

export default PurchaseValidator;
