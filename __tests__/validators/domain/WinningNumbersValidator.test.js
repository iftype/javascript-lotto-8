import ERROR_MESSAGES from '../../../src/constants/errorMessages.js';
import WinningNumbersValidator from '../../../src/validators/domain/WinningNumbersValidator.js';

describe('WinningNumbersValidator 클래스 테스트', () => {
  describe('당첨번호 유효성 검사 ⭕실패 테스트', () => {
    test.each([
      [[1, 2, 3, 4, 5], ERROR_MESSAGES.LOTTO_QUANTITY],
      [[1, 2, 3, 4, 5, 6, 7], ERROR_MESSAGES.LOTTO_QUANTITY],

      [[1, 2, 3, 4, 5, 5], ERROR_MESSAGES.LOTTO_DUPLICATE],

      [[0, 2, 3, 4, 5, 6], ERROR_MESSAGES.LOTTO_RANGE],
      [[1, 2, 3, 4, 5, 46], ERROR_MESSAGES.LOTTO_RANGE],
    ])('❌ validate 테스트 %s throw Error %s', (numbers, errorMessage) => {
      expect(() => WinningNumbersValidator.validate(numbers)).toThrow(errorMessage);
    }); // 실패테스트
  }); //describe
  describe('당첨번호 유효성 검사 ⭕성공테스트', () => {
    test.each([[[1, 2, 3, 4, 5, 45]]])('통과해야됨 %s', (numbers) => {
      expect(() => WinningNumbersValidator.validate(numbers)).not.toThrow();
    }); // 성공테스트
  }); //describe
}); //describe 클래스 테스트
