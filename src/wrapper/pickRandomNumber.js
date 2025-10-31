import { Random } from '@woowacourse/mission-utils';

export default function pickRandomNumber(min, max, quan) {
  return Random.pickUniqueNumbersInRange(min, max, quan);
}
