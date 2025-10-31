import LOTTO_SETTING from '../constants/lottoSetting.js';
import Lotto from './Lotto.js';
import LottoNumber from './LottoNumber.js';
import LottoNumberInstance from './LottoNumberFactory.js';

class LottoFactory {
  #picker;

  constructor(picker) {
    this.#picker = picker;
  }

  createLotto() {
    const newArray = this.#getNumbers();
    const numbers = newArray.map((number) => LottoNumberInstance.getLottoNumber(number));
    return new Lotto(numbers);
  }

  #getNumbers() {
    const [min, max] = Object.values(LottoNumber.getRange());
    const quan = LOTTO_SETTING.MAX_QUANTITY;
    return this.#picker(min, max, quan);
  }
}

export default LottoFactory;
