import ERROR_MESSAGES from '../../../src/constants/errorMessages.js';
import PurchaseValidator from '../../../src/validators/domain/PurchaseValidator.js';

describe('PurchaseValidator 클래스 테스트', () => {
  describe('구매금액 유효성 검사 ⭕실패 테스트', () => {
    test.each([
      [999, ERROR_MESSAGES.PURCHASE_LESS],

      [1500, ERROR_MESSAGES.PURCHASE_UNIT],
    ])('❌ validate 테스트 %s throw Error %s', (amount, errorMessage) => {
      expect(() => PurchaseValidator.validate(amount)).toThrow(errorMessage);
    }); // 실패테스트
  }); //describe
  describe('구매금액 유효성 검사 ⭕성공테스트', () => {
    test.each([[1000], [15000]])('통과해야됨 %s', (amount) => {
      expect(() => PurchaseValidator.validate(amount)).not.toThrow();
    }); // 성공테스트
  }); //describe
}); //describe 클래스 테스트
