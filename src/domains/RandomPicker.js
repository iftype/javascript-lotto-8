import { Random } from '@woowacourse/mission-utils';
import LottoNumber from './LottoNumber.js';
import Lotto from './Lotto.js';

class RandomPicker {
  pick() {
    const { MIN_RANGE, MAX_RANGE } = LottoNumber.getRange();
    const { MAX_QUANTITY } = Lotto.getQuan();
    return Random.pickUniqueNumbersInRange(MIN_RANGE, MAX_RANGE, MAX_QUANTITY);
  }
}
export default RandomPicker;
