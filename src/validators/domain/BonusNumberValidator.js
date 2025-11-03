import ERROR_MESSAGES from '../../constants/errorMessages.js';

class BonusNumberValidator {
  static validate(winningLottoNumbers, bonusLottoNumber) {
    if (BonusNumberValidator.#isDuplicate(winningLottoNumbers, bonusLottoNumber)) {
      throw new Error(ERROR_MESSAGES.LOTTO_DUPLICATE);
    }
  }

  static #isDuplicate(winningLottoNumbers, bonusLottoNumber) {
    return winningLottoNumbers.hasLottoNumber(bonusLottoNumber);
  }
}

export default BonusNumberValidator;
