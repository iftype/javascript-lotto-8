import ERROR_MESSAGES from '../../constants/errorMessages.js';
import LottoNumber from '../../domain/LottoNumber.js';

class BonusNumberValidator {
  static validate(winningNumbers, bonusNumber) {
    if (!BonusNumberValidator.#isInRange(bonusNumber)) {
      throw new Error(ERROR_MESSAGES.LOTTO_RANGE);
    }
    if (!BonusNumberValidator.#isDuplicate(winningNumbers, bonusNumber)) {
      throw new Error(ERROR_MESSAGES.LOTTO_DUPLICATE);
    }
  }

  static #isInRange(bonusNumber) {
    const [MIN_RANGE, MAX_RANGE] = Object.values(LottoNumber.getRange());
    return MIN_RANGE <= bonusNumber && bonusNumber <= MAX_RANGE;
  }

  static #isDuplicate(winningNumbers, bonusNumber) {
    return winningNumbers.includes(bonusNumber);
  }
}

export default BonusNumberValidator;
