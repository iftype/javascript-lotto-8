import ERROR_MESSAGES from '../constants/errorMessages.js';
import LottoUtilValidator from './LottoUtilValidator.js';

class LottoValidator {
  static validate(lotto) {
    if (!LottoUtilValidator.isNumber(lotto)) {
      throw new Error(ERROR_MESSAGES.LOTTO_NOT_NUMBER);
    }
    if (!LottoUtilValidator.isQuantity(lotto)) {
      throw new Error(ERROR_MESSAGES.LOTTO_QUANTITY);
    }
    if (LottoUtilValidator.isOutRange(lotto)) {
      throw new Error(ERROR_MESSAGES.LOTTO_RANGE);
    }
    if (LottoUtilValidator.isDuplicate(lotto)) {
      throw new Error(ERROR_MESSAGES.LOTTO_DUPLICATE);
    }
  }
}

export default LottoValidator;
