import { Random } from '@woowacourse/mission-utils';
import LOTTO_SETTING from '../constants/lottoSetting.js';

function getRandomNumber() {
  return Random.pickUniqueNumbersInRange(
    LOTTO_SETTING.MIN_LANGE,
    LOTTO_SETTING.MAX_LANGE,
    LOTTO_SETTING.QUANTITY,
  );
}
export default getRandomNumber;
