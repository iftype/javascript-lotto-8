import ERROR_MESSAGES from '../../../src/constants/errorMessages.js';
import InputBonusNumberValidator from '../../../src/validators/input/InputBonusNumberValidator.js';

describe('InputBonusNumberValidator 클래스 테스트', () => {
  describe('구매금액 유효성 검사 ⭕실패 테스트', () => {
    test.each([
      ['', ERROR_MESSAGES.FORMAT_NOT_NUM],

      [10.5, ERROR_MESSAGES.INTEGER],
    ])('❌ validate 테스트 %s throw Error %s', (bonusNumber, errorMessage) => {
      expect(() => InputBonusNumberValidator.validate(bonusNumber)).toThrow(errorMessage);
    }); // 실패테스트
  }); //describe
  describe('보너스넘버 유효성 검사 ⭕성공테스트', () => {
    test.each([[1000], [15000]])('통과해야됨 %s', (bonusNumber) => {
      expect(() => InputBonusNumberValidator.validate(bonusNumber)).not.toThrow();
    }); // 성공테스트
  }); //describe
}); //describe 클래스 테스트
