import ERROR_MESSAGES from '../../constants/errorMessages.js';
import LOTTO_SETTING from '../../constants/lottoSetting.js';

class WinningNumbersValidator {
  static validate(winningNumbers) {
    if (!WinningNumbersValidator.#isQuantity(winningNumbers)) {
      throw new Error(ERROR_MESSAGES.LOTTO_QUANTITY);
    }
    if (!WinningNumbersValidator.#isDuplicate(winningNumbers)) {
      throw new Error(ERROR_MESSAGES.LOTTO_DUPLICATE);
    }
  }

  static #isDuplicate(winningNumbers) {
    const setNumbers = new Set(winningNumbers);
    return setNumbers.size === winningNumbers.length;
  }

  static #isQuantity(winningNumbers) {
    return winningNumbers.length === LOTTO_SETTING.MAX_QUANTITY;
  }
}

export default WinningNumbersValidator;
