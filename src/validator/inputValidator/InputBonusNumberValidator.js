import ERROR_MESSAGES from '../../constants/errorMessages.js';

class InputBonusNumberValidator {
  static validate(bonusNumber) {
    if (!InputBonusNumberValidator.#isConvertNumber(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.FORMAT_NOT_NUM);
    }
    if (!InputBonusNumberValidator.#isInteger(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.INTEGER);
    }
  }

  static #isConvertNumber(bonusNumber) {
    if (bonusNumber === null || typeof bonusNumber === 'undefined') {
      return false;
    }
    if (String(bonusNumber).trim() === '') {
      return false;
    }
    if (Number.isNaN(Number(bonusNumber))) {
      return false;
    }
    return true;
  }

  static #isInteger(bonusNumber) {
    return Number.isInteger(Number(bonusNumber));
  }
}

export default InputBonusNumberValidator;
