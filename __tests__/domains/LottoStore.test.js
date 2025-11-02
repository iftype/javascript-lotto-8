import LottoStore from '../../src/domains/LottoStore.js';
import Lotto from '../../src/domains/Lotto.js';

const MOCK_NUMBERS = [1, 2, 3, 4, 5, 6];
const mockLottoArray = MOCK_NUMBERS.map((num) => ({ getNumber: () => num }));
const mockLotto = new Lotto(mockLottoArray);
const mockLottoFactory = { createLotto: () => mockLotto };

const store = new LottoStore(mockLottoFactory);
describe('LottoStore 테스트', () => {
  describe('buyLotto(purchaseAmount, count) ⭕성공 테스트', () => {
    // 길이 체크
    // 인스턴스체크
    // 반환값 체크
    test('제대로 반환하는지 테스트', () => {
      const count = 8;
      const lottos = store.buyLotto(count);
      expect(lottos).toHaveLength(count);
      expect(lottos[0]).toBeInstanceOf(Lotto);
      lottos.forEach((lotto) => {
        expect(lotto.getNumbers()).toEqual(MOCK_NUMBERS);
      });
    });
  }); // 생성 테스트
}); // LottoNumberFactory 테스트
