import { Random } from '@woowacourse/mission-utils';
import LOTTO_SETTING from '../constants/lottoSetting.js';

class RandomPicker {
  pick() {
    const { MIN_RANGE, MAX_RANGE, MAX_QUANTITY } = LOTTO_SETTING;
    return Random.pickUniqueNumbersInRange(MIN_RANGE, MAX_RANGE, MAX_QUANTITY);
  }
}
export default RandomPicker;
