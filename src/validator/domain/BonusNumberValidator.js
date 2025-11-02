import ERROR_MESSAGES from '../../constants/errorMessages.js';
import LottoNumber from '../../domain/LottoNumber.js';

class BonusNumberValidator {
  static validate(winningLottoNumbers, bonusLottoNumber) {
    if (!BonusNumberValidator.#isInRange(bonusLottoNumber)) {
      throw new Error(ERROR_MESSAGES.LOTTO_RANGE);
    }
    if (!BonusNumberValidator.#isDuplicate(winningLottoNumbers, bonusLottoNumber)) {
      throw new Error(ERROR_MESSAGES.LOTTO_DUPLICATE);
    }
  }

  static #isInRange(bonusLottoNumber) {
    const bonusNumber = bonusLottoNumber.getNumber();
    const [MIN_RANGE, MAX_RANGE] = Object.values(LottoNumber.getRange());
    return MIN_RANGE <= bonusNumber && bonusNumber <= MAX_RANGE;
  }

  static #isDuplicate(winningLottoNumbers, bonusLottoNumber) {
    console.log(winningLottoNumbers, bonusLottoNumber);
    console.log(winningLottoNumbers.includes(bonusLottoNumber));
    return !winningLottoNumbers.includes(bonusLottoNumber);
  }
}

export default BonusNumberValidator;
