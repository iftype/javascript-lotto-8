import ERROR_MESSAGES from '../constants/errorMessages.js';
import LottoNumber from './LottoNumber.js';

class LottoNumberFactory {
  #numberMap = new Map();

  constructor() {
    this.#initNumberMap();
  }

  #initNumberMap() {
    const [min, max] = Object.values(LottoNumber.getRange());
    for (let number = min; number <= max; number += 1) {
      this.#numberMap.set(number, new LottoNumber(number));
    }
  }

  getLottoNumber(number) {
    if (!this.#numberMap.has(number)) {
      throw new Error(ERROR_MESSAGES.LOTTO_RANGE);
    }
    return this.#numberMap.get(number);
  }
}
// 모듈 싱글톤 적용
const LottoNumberFactoryInstance = new LottoNumberFactory();
export default LottoNumberFactoryInstance;
