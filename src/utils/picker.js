import { Random } from '@woowacourse/mission-utils';

export function randomPicker(min, max, quan) {
  return Random.pickUniqueNumbersInRange(min, max, quan);
}

export function testingPicker() {
  return [1, 2, 3, 4, 5, 6];
}
