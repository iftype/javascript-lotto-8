import LottoPrice from '../../src/domains/LottoPrice.js';

describe('LottoPrice 테스트', () => {
  describe('메서드 테스트', () => {
    const purchaseAmount = new LottoPrice(8000);
    test('exchange(purchaseAmount) 단위로 구매금액을 나눈 count를 반환', () => {
      expect(purchaseAmount.exchange()).toBe(8);
    }); //test
  }); // 생성 테스트
}); // LottoNumberFactory 테스트
