import ERROR_MESSAGES from '../../constants/errorMessages.js';
import LottoPrice from '../../domain/LottoPrice.js';

class PurchaseValidator {
  static validate(purchaseAmount) {
    if (!PurchaseValidator.#isModUnit(purchaseAmount)) {
      throw new Error(ERROR_MESSAGES.PURCHASE_UNIT);
    }
  }

  static #isModUnit(purchaseAmount) {
    return LottoPrice.modUnit(purchaseAmount) === 0;
  }
}

export default PurchaseValidator;
