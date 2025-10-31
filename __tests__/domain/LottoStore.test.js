import LottoStore from '../../src/domain/LottoStore.js';
import LottoFactory from '../../src/domain/LottoFacotry.js';
import Lotto from '../../src/domain/Lotto.js';
function pickTestNumber(a, b, c) {
  return [1, 2, 3, 4, 5, 6];
}
const lottofactory = new LottoFactory(pickTestNumber);
const store = new LottoStore(lottofactory);
describe('LottoStore 테스트', () => {
  describe('buyLotto(purchaseAmount, count) ⭕성공 테스트', () => {
    test('제대로 반환하는지 테스트', () => {
      const { purchaseAmount, count } = { purchaseAmount: 8000, count: 8 };
      const lottos = store.buyLotto(purchaseAmount, count);
      // 길이 체크
      expect(lottos).toHaveLength(count);
      // 인스턴스체크
      expect(lottos[0]).toBeInstanceOf(Lotto);
      // 반환값 체크
      lottos.forEach((lotto) => {
        expect(lotto.getNumbers()).toEqual(pickTestNumber());
      });
    });
  }); // 생성 테스트
}); // LottoNumberFactory 테스트
