import ERROR_MESSAGES from '../constants/errorMessages.js';
import LottoNumber from './LottoNumber.js';

class LottoNumberFactory {
  #numberMap = new Map();

  constructor() {
    this.#initNumberMap();
  }

  #initNumberMap() {
    const { MIN_RANGE, MAX_RANGE } = LottoNumber.getRange();
    for (let number = MIN_RANGE; number <= MAX_RANGE; number += 1) {
      this.#numberMap.set(number, new LottoNumber(number));
    }
  }

  getLottoNumber(number) {
    if (!this.#numberMap.has(number)) {
      const { MIN_RANGE, MAX_RANGE } = LottoNumber.getRange();
      throw new Error(ERROR_MESSAGES.LOTTO_RANGE(MIN_RANGE, MAX_RANGE));
    }
    return this.#numberMap.get(number);
  }
}
// 모듈 싱글톤 적용
const LottoNumberFactoryInstance = new LottoNumberFactory();
export default LottoNumberFactoryInstance;
