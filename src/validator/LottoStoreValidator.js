import ERROR_MESSAGES from '../constants/errorMessages.js';
import UtilValidator from './UtilValidator.js';

class LottoStoreValidator {
  static validate(purchase) {
    if (!UtilValidator.isConvertNum(purchase)) {
      throw new Error(ERROR_MESSAGES.FORMAT_NOT_NUM);
    }
    if (!UtilValidator.isInteger(purchase)) {
      throw new Error(ERROR_MESSAGES.INTEGER);
    }
    if (!UtilValidator.isPositive(purchase)) {
      throw new Error(ERROR_MESSAGES.POSITVE);
    }
    if (Number(purchase) % 1000 !== 0) {
      throw new Error(ERROR_MESSAGES.PURCHASE_UNIT);
    }
  }
}

export default LottoStoreValidator;
