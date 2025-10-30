import { Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import LOTTO_SETTING from '../constants/lottoSetting.js';

function getRandomNumber() {
  return Random.pickUniqueNumbersInRange(
    LOTTO_SETTING.MIN_LANGE,
    LOTTO_SETTING.MAX_LANGE,
    LOTTO_SETTING.QUANTITY,
  );
}

class LottoFactory {
  static create(purchaseAmount) {
    const lotts = [];
    const quan = purchaseAmount / 1000;
    for (let i = 0; i < quan; i += 1) {
      const random = getRandomNumber();
      lotts.push(new Lotto(random));
    }
    return lotts;
  }
}

export default LottoFactory;
