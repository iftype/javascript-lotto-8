import UtilValidator from './UtilValidator.js';

const QUANTITY = 6;
const MIN_LANGE = 1;
const MAX_LANGE = 45;

class LottoUtilValidator {
  static isNumber(lotto) {
    return lotto.every((num) => UtilValidator.isNum(num));
  }

  static isQuantity(lotto) {
    return lotto.length === QUANTITY;
  }

  static isOutRange(lotto) {
    return lotto.some((num) => num < MIN_LANGE || MAX_LANGE < num);
  }

  static isDuplicate(lotto) {
    const setLotto = new Set(lotto);
    return setLotto.size !== lotto.length;
  }

  static hasLottoList(num, lotto) {
    return lotto.includes(num);
  }
}

export default LottoUtilValidator;
