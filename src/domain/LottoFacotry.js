import LOTTO_SETTING from '../constants/lottoSetting.js';
import Lotto from './Lotto.js';
import LottoNumber from './LottoNumber.js';

class LottoFactory {
  #picker;
  #lottoNumberFactory;

  constructor(picker, lottoNumberFactory) {
    this.#picker = picker;
    this.#lottoNumberFactory = lottoNumberFactory;
  }

  createLotto() {
    const newArray = this.#generateNumbers();
    const numbers = newArray.map((number) => this.#lottoNumberFactory.getLottoNumber(number));
    return new Lotto(numbers);
  }

  #generateNumbers() {
    const [min, max] = Object.values(LottoNumber.getRange());
    const quan = LOTTO_SETTING.MAX_QUANTITY;
    return this.#picker(min, max, quan);
  }
}

export default LottoFactory;
