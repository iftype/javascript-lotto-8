import LottoPrice from '../../src/domain/LottoPrice';

describe('LottoPrice 테스트', () => {
  describe('메서드 테스트', () => {
    const PURCHASE_UNIT = 1000;
    const purchaseAmount = 8000;
    test('exchange(purchaseAmount) 단위로 구매금액을 나눈 count를 반환', () => {
      const result = purchaseAmount / PURCHASE_UNIT;
      expect(LottoPrice.exchange(purchaseAmount)).toBe(result);
    }); //test

    test('modUnit(purchaseAmount) 단위로 구매금액의 나머지연산값을 반환', () => {
      const result = purchaseAmount % PURCHASE_UNIT;
      expect(LottoPrice.modUnit(purchaseAmount)).toBe(result);
    }); //test
  }); // 생성 테스트
}); // LottoNumberFactory 테스트
