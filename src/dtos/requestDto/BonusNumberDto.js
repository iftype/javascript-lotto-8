import InputBonusNumberValidator from '../../validators/input/InputBonusNumberValidator.js';

class BonusNumberDto {
  #bonusNumber;

  constructor(bonusNumber) {
    const convertBonusNumber = Number(bonusNumber);
    InputBonusNumberValidator.validate(convertBonusNumber);
    this.#bonusNumber = convertBonusNumber;
  }

  get bonusNumber() {
    return this.#bonusNumber;
  }
}
export default BonusNumberDto;
