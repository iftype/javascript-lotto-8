import ERROR_MESSAGES from '../../../src/constants/errorMessages.js';
import InputWinningNumberValidator from '../../../src/validators/input/InputWinningNumberValidator.js';
describe('InputWinningNumberValidator 클래스 테스트', () => {
  describe('당첨번호 유효성 검사 ⭕실패 테스트', () => {
    test.each([
      [undefined, ERROR_MESSAGES.NOT_ARRAY],
      ['', ERROR_MESSAGES.NOT_ARRAY],

      [[1.5], ERROR_MESSAGES.INTEGER],
    ])('❌ validate 테스트 %s throw Error %s', (numbers, errorMessage) => {
      expect(() => InputWinningNumberValidator.validate(numbers)).toThrow(errorMessage);
    }); // 실패테스트
  }); //describe
  describe('당첨번호 유효성 검사 ⭕성공테스트', () => {
    test.each([[[1, 2, 3, 4, 5, 45]]])('통과해야됨 %s', (numbers) => {
      expect(() => InputWinningNumberValidator.validate(numbers)).not.toThrow();
    }); // 성공테스트
  }); //describe
}); //describe 클래스 테스트
