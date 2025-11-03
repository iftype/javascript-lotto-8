import ERROR_MESSAGES from '../../src/constants/errorMessages.js';
import LottoPrice from '../../src/domains/LottoPrice.js';

describe('LottoPrice 테스트', () => {
  describe('구매금액 유효성 검사 ⭕실패 테스트', () => {
    const UNIT = LottoPrice.getUnit();
    test.each([
      [999, ERROR_MESSAGES.PURCHASE_LESS(UNIT)],

      [1500, ERROR_MESSAGES.PURCHASE_UNIT(UNIT)],
    ])('❌ validate 테스트 %s throw Error %s', (amount, errorMessage) => {
      expect(() => new LottoPrice(amount)).toThrow(errorMessage);
    }); // 실패테스트
  }); //describe
  describe('구매금액 유효성 검사 ⭕성공테스트', () => {
    test.each([[1000], [15000]])('통과해야됨 %s', (amount) => {
      expect(() => new LottoPrice(amount)).not.toThrow();
    }); // 성공테스트
  });
  describe('메서드 테스트', () => {
    const purchaseAmount = new LottoPrice(8000);
    test('exchange(purchaseAmount) 단위로 구매금액을 나눈 count를 반환', () => {
      expect(purchaseAmount.exchange()).toBe(8);
    }); //test
  }); //
  describe('getWinningRate(totalWinningAmount)테스트', () => {
    test.each([
      [8000, 5000, '62.5'],
      [12000, 7000, '58.3'],
    ])('getWinningRate(%s, %s) 반환 값 %s', (purchaseAmount, totalWinningAmount, result) => {
      const lottoPrice = new LottoPrice(purchaseAmount);
      expect(lottoPrice.getWinningRate(totalWinningAmount)).toBe(result);
    }); // 성공 테스트
  }); // 메서드 테스트
}); // LottoNumberFactory 테스트
