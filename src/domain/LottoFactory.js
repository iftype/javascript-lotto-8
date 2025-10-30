import Lotto from './Lotto.js';
import getRandomNumber from '../utils/getRandomNumber';
import LOTTO_SETTING from '../constants/lottoSetting.js';

class LottoFactory {
  static create(purchaseAmount) {
    const quan = purchaseAmount / LOTTO_SETTING.PRICE;
    return Array.from({ length: quan }, () => getRandomNumber()).map(
      (numbers) => new Lotto(numbers),
    );
  }
}

export default LottoFactory;
