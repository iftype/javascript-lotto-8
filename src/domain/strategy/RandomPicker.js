import { Random } from '@woowacourse/mission-utils';
import LottoNumber from '../LottoNumber.js';
import LOTTO_SETTING from '../../constants/lottoSetting.js';

class RandomPicker {
  pick() {
    const [min, max] = Object.values(LottoNumber.getRange());
    const quan = LOTTO_SETTING.MAX_QUANTITY;
    return Random.pickUniqueNumbersInRange(min, max, quan);
  }
}
export default RandomPicker;
