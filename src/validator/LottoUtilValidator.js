const QUANTITY = 6;
const MIN_LANGE = 1;
const MAX_LANGE = 45;

class LottoValidator {
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

export default LottoValidator;
