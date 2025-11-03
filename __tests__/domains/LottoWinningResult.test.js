import LOTTO_SETTING from '../../src/constants/lottoSetting.js';
import LottoWinningResult from '../../src/domains/LottoWinningResult.js';

class MockLotto {
  constructor(numbers) {
    this.numbers = numbers;
  }
  hasLottoNumber(number) {
    return this.numbers.includes(number);
  }
  countNumbers(numbers) {
    return numbers.filter((num) => this.numbers.includes(num)).length;
  }
}
describe('LottoWinningFactory 테스트', () => {
  describe('createWinningLotto(numbers) 테스트', () => {
    const resulFst = { FIRST: 1, SECOND: 0, THIRD: 0, FOURTH: 0, FIFTH: 0, OTHER: 0 };
    const resulSec = { FIRST: 0, SECOND: 1, THIRD: 0, FOURTH: 0, FIFTH: 0, OTHER: 0 };
    test.each([
      [
        [new MockLotto([1, 2, 3, 4, 5, 6])],
        [1, 2, 3, 4, 5, 6],
        7,
        { winningStats: resulFst, totalWinningAmount: LOTTO_SETTING.PRIZES.FIRST },
        ,
      ],
      [
        [new MockLotto([1, 2, 3, 4, 5, 7])],
        [1, 2, 3, 4, 5, 6],
        7,
        { winningStats: resulSec, totalWinningAmount: LOTTO_SETTING.PRIZES.SECOND },
        ,
      ],
    ])(
      'getWinningStats(lottos, winnintLottos, bonusLotto) 테스트 %s throw Error %s',
      (lottos, winnintLottos, bonusLotto, Object) => {
        expect(LottoWinningResult.getWinningStats(lottos, winnintLottos, bonusLotto)).toEqual(
          Object,
        );
      },
    ); // 성공 테스트
  }); // 생성 테스트
}); // 설명
