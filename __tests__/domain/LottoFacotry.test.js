import Lotto from '../../src/domain/Lotto.js';
import LottoFactory from '../../src/domain/LottoFactory.js';

describe('LottoFactory', () => {
  test('create 구매하면 Lotto List반환', () => {
    const purchaseAmount = 10000;

    const lottos = LottoFactory.create(purchaseAmount);
    expect(lottos).toHaveLength(10);
    lottos.forEach((lotto) => {
      expect(lotto).toBeInstanceOf(Lotto);
    });
  });
});
