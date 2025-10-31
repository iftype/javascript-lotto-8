import LottoFactory from '../../src/domain/LottoFacotry.js';

function pickTestNumber(a, b, c) {
  return [2, 1, 3, 4, 5, 6];
}
describe('LottoFactory 테스트', () => {
  describe('생성 테스트', () => {
    test('같은 인스턴스여야함', () => {
      const factory = new LottoFactory(pickTestNumber);
      const lotto = factory.createLotto();
      const result = [1, 2, 3, 4, 5, 6];
      expect(lotto.getNumbers()).toEqual(result);
    });
  }); // 생성 테스트
}); // LottoNumberFactory 테스트
