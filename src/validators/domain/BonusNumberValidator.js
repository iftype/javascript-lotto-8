import ERROR_MESSAGES from '../../constants/errorMessages.js';
import LOTTO_SETTING from '../../constants/lottoSetting.js';

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
    const { MIN_RANGE, MAX_RANGE } = LOTTO_SETTING;
    return MIN_RANGE <= bonusNumber && bonusNumber <= MAX_RANGE;
  }

  static #isDuplicate(winningLottoNumbers, bonusLottoNumber) {
    return !winningLottoNumbers.includes(bonusLottoNumber);
  }
}

export default BonusNumberValidator;
