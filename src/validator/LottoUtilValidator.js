import UtilValidator from './UtilValidator.js';
import LOTTO_SETTING from '../constants/lottoSetting.js';

class LottoUtilValidator {
  static isNumber(lotto) {
    return lotto.every((num) => UtilValidator.isNum(num));
  }

  static isQuantity(lotto) {
    return lotto.length === LOTTO_SETTING.QUANTITY;
  }

  static isOutRange(lotto) {
    const underCondition = (num) => num < LOTTO_SETTING.MIN_LANGE;
    const overCondition = (num) => LOTTO_SETTING.MAX_LANGE < num;
    return lotto.some((num) => underCondition(num) || overCondition(num));
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
