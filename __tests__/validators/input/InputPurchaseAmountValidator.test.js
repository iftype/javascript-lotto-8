import ERROR_MESSAGES from '../../../src/constants/errorMessages.js';
import InputPurchaseAmountValidator from '../../../src/validators/input/InputPurchaseAmountValidator.js';

describe('InputPurchaseAmountValidator.test 클래스 테스트', () => {
  describe('구매금액 유효성 검사 ⭕실패 테스트', () => {
    test.each([
      [NaN, ERROR_MESSAGES.FORMAT_NOT_NUM],
      [undefined, ERROR_MESSAGES.FORMAT_NOT_NUM],
      [null, ERROR_MESSAGES.FORMAT_NOT_NUM],
      ['iftype', ERROR_MESSAGES.FORMAT_NOT_NUM],

      [1000.5, ERROR_MESSAGES.INTEGER],
      [0.5, ERROR_MESSAGES.INTEGER],
    ])('❌ validate 테스트 %s throw Error %s', (amount, errorMessage) => {
      expect(() => InputPurchaseAmountValidator.validate(amount)).toThrow(errorMessage);
    }); // 실패테스트
  }); //describe
  describe('구매금액 유효성 검사 ⭕성공테스트', () => {
    test.each([[1000], [15000]])('통과해야됨 %s', (amount) => {
      expect(() => InputPurchaseAmountValidator.validate(amount)).not.toThrow();
    }); // 성공테스트
  }); //describe
}); //describe 클래스 테스트
