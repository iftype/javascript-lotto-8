import LottoFactory from '../../src/domain/LottoFacotry.js';
import FixedPicker from '../../src/domain/strategy/FixedPicker.js';

const mockLottoNumberFactory = {
  getLottoNumber: jest.fn((number) => ({ getNumber: () => number })),
};
const fixed = new FixedPicker();
describe('LottoFactory 테스트', () => {
  describe('생성 테스트', () => {
    test('', () => {
      const factory = new LottoFactory(fixed, mockLottoNumberFactory);
      const result = [1, 2, 3, 4, 5, 6];
      const lotto = factory.createLotto(result);
      expect(lotto.getNumbers()).toEqual(result);
    });
  }); // 생성 테스트
}); // LottoNumberFactory 테스트
